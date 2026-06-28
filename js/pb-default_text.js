// =====================================
// Catipa – G2P de Texto
// Converte texto corrido para Catipa,
// aplicando regras de sandhi entre palavras.
// Requer (carregar antes): pb-default_lexicon.js,
//                          pb-default_rules.js,
//                          resolver.js
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

// -------------------------
// Converte uma palavra isolada para Catipa.
// Aceita um mapa opcional de resoluções pré-escolhidas (modo texto).
// Sem resoluções, usa o default do léxico ("synth").
// -------------------------
function g2pWord(word, resolutions) {
  const w = word.toLowerCase().normalize("NFC").trim();
  if (!w) return "";
  if (resolutions && resolutions[w]) return resolutions[w];
  const entry = LEXICON[w];
  if (entry) {
    return resolveEntry(entry, "synth") || applyRules(word);
  }
  return applyRules(word);
}

// -------------------------
// Retorna a qualidade vocálica de um token Catipa:
// 'a' | 'e' | 'i' | 'o' | 'u' | null
// -------------------------
function getVowelQuality(token) {
  if (!token) return null;
  // aa1/aa2 e A-maiúsculo (nasal) → qualidade 'a'
  if (/^(aa|[aA])/.test(token)) return 'a';
  // ee1/ee2 e E-maiúsculo (nasal) → qualidade 'e'
  if (/^[eE]/.test(token))      return 'e';
  // i e I-maiúsculo (nasal) → qualidade 'i'
  if (/^[iI]/.test(token))      return 'i';
  // oo1/oo2 e O-maiúsculo (nasal) → qualidade 'o'
  if (/^[oO]/.test(token))      return 'o';
  // u e U-maiúsculo (nasal) → qualidade 'u'
  if (/^[uU]/.test(token))      return 'u';
  return null;
}

function isVowelToken(token) {
  return getVowelQuality(token) !== null;
}

// -------------------------
// Aplica as regras de sandhi entre palavras de um segmento
// (já separado nas fronteiras de frase pela pontuação).
//
// Regras:
//  1. s final + vogal         → z
//  2. h final + vogal         → r  (linking-r)
//  3. i0 final + vogal-i      → absorção  (i0 cai)
//  4. i0 final + outra vogal  → y  (glide palatal)
//  5. u0 final + vogal-u      → absorção  (u0 cai)
//  6. u0 final + outra vogal  → w  (glide labial)
//  7. a0 final + vogal-a      → absorção  (a0 cai)
//  8. a0 final + outra vogal  → permanece (/a/ não tem glide)
// -------------------------
function applySandhi(catipaWords) {
  // Tokeniza cada saída Catipa em arrays de tokens
  const wt = catipaWords.map(c => c.trim().split(/\s+/).filter(t => t));

  for (let i = 0; i < wt.length - 1; i++) {
    const curr = wt[i];
    const next = wt[i + 1];
    if (!curr.length || !next.length) continue;

    const last  = curr[curr.length - 1];
    const first = next[0];

    // Próxima palavra começa com consoante → sem sandhi
    if (!isVowelToken(first)) continue;

    const nextQ = getVowelQuality(first);

    // Regra 1: s + vogal → z
    if (last === 's') {
      curr[curr.length - 1] = 'z';
      continue;
    }

    // Regra 2: h + vogal → r (linking-r)
    if (last === 'h') {
      curr[curr.length - 1] = 'r';
      continue;
    }

    // Regras 3-4: i0 final
    if (last === 'i0') {
      if (nextQ === 'i') {
        curr.pop();           // absorção
      } else {
        curr[curr.length - 1] = 'y'; // glide
      }
      continue;
    }

    // Regras 5-6: u0 final
    if (last === 'u0') {
      if (nextQ === 'u') {
        curr.pop();           // absorção
      } else {
        curr[curr.length - 1] = 'w'; // glide
      }
      continue;
    }

    // Regras 7-8: a0 final
    if (last === 'a0') {
      if (nextQ === 'a') {
        curr.pop();           // absorção
      }
      // caso contrário: permanece
      continue;
    }
  }

  // Achata todos os tokens num único array e une com espaço
  return wt.flat().join(' ');
}

// -------------------------
// Converte texto corrido para Catipa.
// Pontuação (. , ; ! ? : — …) cria fronteira de frase,
// bloqueando as regras de sandhi. Fronteiras são
// representadas por " | " na saída.
//
// Palavras ambíguas no léxico (com múltiplas entradas) acionam
// o popup de escolha uma a uma, em sequência, antes de processar
// o texto. O resultado final é exibido via outputCallback(result).
// -------------------------
function g2pTexto(text, outputCallback) {
  if (!text || !text.trim()) return;

  // --- 1. Coleta palavras ambíguas únicas presentes no texto ---
  const allWords = text.trim().split(/\s+/).map(w => w.toLowerCase().normalize("NFC").trim()).filter(Boolean);
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

  const resolutions = {}; // word → ipa escolhido

  // --- 2. Função que processa o texto depois de resolver todas as ambiguidades ---
  function runG2P() {
    const parts = text.trim().split(/([.,;!?:—…\n]+)/);
    const output = [];

    for (const part of parts) {
      const seg = part.trim();
      if (!seg) continue;

      if (/^[.,;!?:—…\n]+$/.test(seg)) {
        output.push('|');
        continue;
      }

      const words  = seg.split(/\s+/).filter(w => w.length > 0);
      const catipa = words.map(w => g2pWord(w, resolutions)).filter(c => c);
      if (!catipa.length) continue;

      output.push(applySandhi(catipa));
    }

    const result = output
      .join(' ')
      .replace(/\s*\|\s*/g, ' | ')
      .replace(/^\s*\|\s*/, '')
      .replace(/\s*\|\s*$/, '')
      .trim();

    if (typeof outputCallback === "function") outputCallback(result);
  }

  // --- 3. Resolve ambiguidades em sequência via popup ---
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
