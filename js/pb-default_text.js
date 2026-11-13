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

function classifyJunction(curr, next, word, nextWord) {
  const last  = curr[curr.length - 1];
  const first = next[0];
  const fromL = !!word && /l$/.test(word);

  if (!isVowelToken(first)) {
    if (last === 's' && isVoicedConsonant(first)) return { action: 'set', token: 'z' };
    return { action: 'none' };
  }

  const nextQ = getVowelQuality(first);

  if (last === 's') return { action: 'set', token: 'z' };
  if (last === 'h') return { action: 'set', token: 'r' };

  if (last === 'W') {
    return (nextQ === 'u' && !fromL) ? { action: 'pop' } : { action: 'set', token: 'w' };
  }
  if (last === 'Y') {
    return nextQ === 'i' ? { action: 'pop' } : { action: 'set', token: 'y' };
  }

  if (fromL && /^[uU]/.test(last)) return { action: 'push', token: 'w' };

  const lastQ = getVowelQuality(last);
  const prev = curr.length > 1 ? curr[curr.length - 2] : null;
  if (prev === 'y' || prev === 'w' || prev === 'Y' || prev === 'W') {
    if (/0$/.test(last) && lastQ === nextQ) return { action: 'pop' };
    return { action: 'none' };
  }

  if (last === 'i0' && (prev === 'tch' || prev === 'dj')) return { action: 'pop' };

  let act = { action: 'none' };

  if (last === 'i0') {
    act = nextQ === 'i' ? { action: 'pop' } : { action: 'choice', options: [
      { type: 'Reduzir', action: 'set', token: 'y' },
      { type: 'Apagar',  action: 'pop' }
    ]};
  } else if (last === 'u0') {
    act = nextQ === 'u' ? { action: 'pop' } : { action: 'choice', options: [
      { type: 'Reduzir', action: 'set', token: 'w' },
      { type: 'Apagar',  action: 'pop' }
    ]};
  } else if (last === 'a0') {
    act = nextQ === 'a' ? { action: 'pop' } : { action: 'choice', options: [
      { type: 'Manter', action: 'none' },
      { type: 'Apagar', action: 'pop' }
    ]};
  }

  if (act.action === 'choice' && curr.length === 1) {
    act = act.options.find(o => o.action !== 'pop');
  }
  return act;
}

function applyJunctionAction(curr, act) {
  if (act.action === 'set')       curr[curr.length - 1] = act.token;
  else if (act.action === 'pop')  curr.pop();
  else if (act.action === 'push') curr.push(act.token);
}

function degeminate(curr, next) {
  if (!curr.length || !next.length) return;
  const last = curr[curr.length - 1];
  if (last === next[0] && !isVowelToken(last)) curr.pop();
}

function neighborIndex(wt, i, step) {
  for (let j = i + step; j >= 0 && j < wt.length; j += step) {
    if (wt[j].length) return j;
  }
  return -1;
}

function sandhiPass(wt, words, decide) {
  for (let i = wt.length - 2; i >= 0; i--) {
    const curr = wt[i];
    if (!curr.length) continue;
    const j = neighborIndex(wt, i, 1);
    if (j < 0) continue;
    const next = wt[j];

    let act = classifyJunction(curr, next, words ? words[i] : null, words ? words[j] : null);
    if (act.action === 'choice') act = decide(i, act, curr, next, j);

    if (curr.length === 1 && /^[iu]0$/.test(curr[0])) {
      const p = neighborIndex(wt, i, -1);
      const prev = p >= 0 ? wt[p] : null;
      const glides = act.action === 'set' && (act.token === 'y' || act.token === 'w');

      const loneGlide = glides && prev && prev.length === 1 && /^[iu]0$/.test(prev[0]) &&
                        getVowelQuality(prev[0]) !== getVowelQuality(curr[0]);

      const afterCodaGlide = act.action !== 'pop' && prev && /^[WY]$/.test(prev[prev.length - 1]);

      if (loneGlide || afterCodaGlide) {
        curr[0] = curr[0].replace('0', '2');
        continue;
      }
    }

    if (curr.length === 2 && /^[iu]0$/.test(curr[0]) && /^[sz]$/.test(curr[1])) {
      const p = neighborIndex(wt, i, -1);
      if (p >= 0 && /^[WY]$/.test(wt[p][wt[p].length - 1])) curr[0] = curr[0].replace('0', '2');
    }

    applyJunctionAction(curr, act);
    degeminate(curr, next);
  }
}

function collectSandhiChoices(catipaWords, words) {
  const wt = catipaWords.map(c => c.trim().split(/\s+/).filter(t => t));
  const orig = wt.map(t => t.slice());
  const found = [];

  sandhiPass(wt, words, (i, act, curr, next, j) => {
    const shown = next.length === 1 ? next : [next[0]].concat(orig[j].slice(1));
    found.unshift({
      key: words[i] + ' ' + words[j],
      options: act.options.map(opt => {
        const c = curr.slice();
        applyJunctionAction(c, opt);
        return { type: opt.type, ipa: c.concat(shown).join(' ') };
      })
    });
    return act.options[0];
  });
  return found;
}

function applySandhi(catipaWords, words, sandhiResolutions) {
  const wt = catipaWords.map(c => c.trim().split(/\s+/).filter(t => t));

  sandhiPass(wt, words, (i, act, curr, next, j) => {
    const key = words ? words[i] + ' ' + words[j] : null;
    const chosenType = key && sandhiResolutions ? sandhiResolutions[key] : null;
    return act.options.find(o => o.type === chosenType) || act.options[0];
  });

  return wt.flat().join(' ');
}

function g2pTexto(text, outputCallback) {
  if (!text || !text.trim()) return;

  const normalized = text.trim()
    .replace(/["'“”‘’]/g, ' ')
    .replace(/[^\s.,;!?:—…()]+(?:-[^\s.,;!?:—…()]+)+/g,
      m => LEXICON[m.toLowerCase().normalize("NFC")] ? m : m.replace(/-/g, ' '))
    .replace(/(^|\s)-+|-+(?=\s|$)/g, ' ');

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
