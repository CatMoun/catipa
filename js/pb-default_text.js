// =====================================
// Catipa*pb – Codificação Fonêmica-Fonética para o Português Brasileiro
// Version: Neutro
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

function g2pWord(word, resolutions) {
  const w = word.toLowerCase().normalize("NFC").trim();
  if (!w) return "";
  if (resolutions && resolutions[w]) return resolutions[w];
  const entry = LEXICON[w];
  if (entry) {
    return resolveEntry(entry, "synth") || applyRules(w);
  }
  return applyRules(w);
}

function getVowelQuality(token) {
  if (!token) return null;
  if (/^(aa|[aA])/.test(token)) return 'a';
  if (/^[eE]/.test(token))      return 'e';
  if (/^[iI]/.test(token))      return 'i';
  if (/^[oO]/.test(token))      return 'o';
  if (/^[uU]/.test(token))      return 'u';
  return null;
}

function isVowelToken(token) {
  return getVowelQuality(token) !== null;
}

function isVoicedConsonant(token) {
  return /^(b|d|dj|g|v|z|j|m|n|l|lh|nh|r|y|w)$/.test(token);
}

function classifyJunction(curr, next) {
  const last  = curr[curr.length - 1];
  const first = next[0];

  if (!isVowelToken(first)) {
    if (last === 's' && isVoicedConsonant(first)) return { action: 'set', token: 'z' };
    return { action: 'none' };
  }

  const nextQ = getVowelQuality(first);

  if (last === 's') return { action: 'set', token: 'z' };
  if (last === 'h') return { action: 'set', token: 'r' };

  if (last === 'W') {
    return nextQ === 'u' ? { action: 'pop' } : { action: 'set', token: 'w' };
  }
  if (last === 'Y') {
    return nextQ === 'i' ? { action: 'pop' } : { action: 'set', token: 'y' };
  }

  const prev = curr.length > 1 ? curr[curr.length - 2] : null;
  if (prev === 'y' || prev === 'w' || prev === 'Y' || prev === 'W') return { action: 'none' };

  if (last === 'i0') {
    if (nextQ === 'i') return { action: 'pop' };
    return { action: 'choice', options: [
      { type: 'Reduzir', action: 'set', token: 'y' },
      { type: 'Apagar',  action: 'pop' }
    ]};
  }

  if (last === 'u0') {
    if (nextQ === 'u') return { action: 'pop' };
    return { action: 'choice', options: [
      { type: 'Reduzir', action: 'set', token: 'w' },
      { type: 'Apagar',  action: 'pop' }
    ]};
  }

  if (last === 'a0') {
    if (nextQ === 'a') return { action: 'pop' };
    return { action: 'choice', options: [
      { type: 'Manter', action: 'none' },
      { type: 'Apagar', action: 'pop' }
    ]};
  }

  return { action: 'none' };
}

function applyJunctionAction(curr, act) {
  if (act.action === 'set')      curr[curr.length - 1] = act.token;
  else if (act.action === 'pop') curr.pop();
}

function collectSandhiChoices(catipaWords, words) {
  const wt = catipaWords.map(c => c.trim().split(/\s+/).filter(t => t));
  const found = [];

  for (let i = 0; i < wt.length - 1; i++) {
    const curr = wt[i];
    const next = wt[i + 1];
    if (!curr.length || !next.length) continue;

    const act = classifyJunction(curr, next);
    if (act.action !== 'choice') continue;

    const key = words[i] + ' ' + words[i + 1];
    found.push({
      key,
      options: act.options.map(opt => {
        const c = curr.slice();
        applyJunctionAction(c, opt);
        return { type: opt.type, ipa: c.concat(next).join(' ') };
      })
    });
  }
  return found;
}

function applySandhi(catipaWords, words, sandhiResolutions) {
  const wt = catipaWords.map(c => c.trim().split(/\s+/).filter(t => t));

  for (let i = 0; i < wt.length - 1; i++) {
    const curr = wt[i];
    const next = wt[i + 1];
    if (!curr.length || !next.length) continue;

    let act = classifyJunction(curr, next);

    if (act.action === 'choice') {
      const key = words ? words[i] + ' ' + words[i + 1] : null;
      const chosenType = key && sandhiResolutions ? sandhiResolutions[key] : null;
      act = act.options.find(o => o.type === chosenType) || act.options[0];
    }

    applyJunctionAction(curr, act);
  }

  return wt.flat().join(' ');
}

function g2pTexto(text, outputCallback) {
  if (!text || !text.trim()) return;

  const normalized = text.trim().replace(/[-"'“”‘’]/g, ' ');

  const allWords = normalized.split(/\s+/).map(w => w.toLowerCase().normalize("NFC").trim()).filter(Boolean);
  const seen = new Set();
  const queue = [];

  for (const w of allWords) {
    if (seen.has(w)) continue;
    seen.add(w);
    const entry = LEXICON[w];
    if (entry && typeof entry !== "string") {
      queue.push({ word: w, entry });
    }
  }

  const resolutions = {};

  function runG2P() {
    const parts = normalized.split(/([.,;!?:—…\n()]+)/);
    const segs = [];

    for (const part of parts) {
      const seg = part.trim();
      if (!seg) continue;

      if (/^[.,;!?:—…\n()]+$/.test(seg)) {
        segs.push('|');
        continue;
      }

      const ws    = seg.split(/\s+/).filter(w => w.length > 0);
      const pairs = ws
        .map(w => ({ w: w.toLowerCase().normalize("NFC"), c: g2pWord(w, resolutions) }))
        .filter(p => p.c);
      if (!pairs.length) continue;

      segs.push({ words: pairs.map(p => p.w), catipa: pairs.map(p => p.c) });
    }

    const sandhiResolutions = {};
    const squeue = [];
    const seenPairs = new Set();

    for (const s of segs) {
      if (s === '|') continue;
      for (const ch of collectSandhiChoices(s.catipa, s.words)) {
        if (seenPairs.has(ch.key)) continue;
        seenPairs.add(ch.key);
        squeue.push(ch);
      }
    }

    function finish() {
      const output = segs.map(s =>
        s === '|' ? '|' : applySandhi(s.catipa, s.words, sandhiResolutions)
      );

      const result = output
        .join(' ')
        .replace(/\s*\|\s*/g, ' | ')
        .replace(/^\s*\|\s*/, '')
        .replace(/\s*\|\s*$/, '')
        .trim();

      if (typeof outputCallback === "function") outputCallback(result);
    }

    function nextSandhiChoice() {
      if (!squeue.length) {
        finish();
        return;
      }
      const ch = squeue.shift();
      if (typeof showChoicePopup !== "function") {
        sandhiResolutions[ch.key] = ch.options[0].type;
        nextSandhiChoice();
        return;
      }
      showChoicePopup(ch.key, ch.options, (chosen) => {
        sandhiResolutions[ch.key] = chosen.type;
        nextSandhiChoice();
      }, `Como juntar "${ch.key}"?`);
    }

    nextSandhiChoice();
  }

  function resolveNext() {
    if (!queue.length) {
      runG2P();
      return;
    }
    const { word, entry } = queue.shift();
    showChoicePopup(word, entry.entries, (chosen) => {
      resolutions[word] = chosen.ipa;
      resolveNext();
    });
  }

  resolveNext();
}
