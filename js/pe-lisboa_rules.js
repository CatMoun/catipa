// =====================================
// Catipa*pe – Codificação Fonêmica-Fonética para o Português Europeu
// Version: Portugal (Lisboa)
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

function detectMorphClassPE(word) {
  const w = word.toLowerCase().normalize("NFC");

  // --- SUFIXOS NOMINAIS ---
  if (/ção$|são$|xão$/.test(w))              return "noun";
  if (/dade$|idade$/.test(w))                return "noun";
  if (/eza$|ura$|ice$/.test(w))              return "noun";
  if (/ismo$|ista$/.test(w))                 return "noun";
  if (/agem$|igem$|ugem$/.test(w))           return "noun";
  if (/mento$|amento$|imento$/.test(w))      return "noun";
  if (/eiro$|eira$/.test(w))                 return "noun";
  if (/ência$|ância$/.test(w))               return "noun";
  if (/ário$|ária$/.test(w))                 return "noun";
  if (/ório$|ória$/.test(w))                 return "noun";
  if (/dor$|tor$|sor$/.test(w))              return "noun";

  // --- FORMAS VERBAIS ---
  if (/ou$/.test(w))                         return "verb-open";
  if (/[ae]ndo$|indo$/.test(w))              return "verb-open";
  if (/aram$|eram$|iram$/.test(w))           return "verb-open";
  if (/arão$|erão$|irão$/.test(w))           return "verb-open";
  if (/aste$|este$|iste$/.test(w))           return "verb-open";
  if (/asse$|esse$|isse$/.test(w))           return "verb-open";
  if (/aria$|eria$|iria$/.test(w))           return "verb-open";
  if (/arei$|erei$|irei$/.test(w))           return "verb-open";
  if (/arás$|erás$|irás$/.test(w))           return "verb-open";
  if (/ará$|erá$|irá$/.test(w))              return "verb-open";
  if (/imos$/.test(w))                       return "verb-open";
  if (/amos$/.test(w) && !/gramas?$|programas?$/.test(w)) return "verb-open";
  if (/em$/.test(w)   && !/agem$|igem$/.test(w))          return "verb-open";
  if (/am$/.test(w))                         return "verb-open";
  if (/eu$/.test(w) && w !== "eu")           return "verb-open";

  const NOUN_E = /nte$|bre$|dre$|fre$|tre$|gre$|vre$|ce$|xe$|que$|ge$/;
  if (/[^aeiou]e$/.test(w) && !NOUN_E.test(w)) return "verb-open";

  return null;
}

function applyRulesPE(word) {
  const morphClass = detectMorphClassPE(word);
  let w = word;

  // =========================
  // ORTOGRÁFICAS
  // =========================

  w = w.replace(/-/g, "");
  w = w.replace(/(?<=[aâáãeêéiíoôóuúYW])s(?=[aâáãeêéiíoôóuú])/g, "z");
  w = w.replace(/x\s*$/, "ks");
  w = w.replace(/az\s*$/, "ás");
  w = w.replace(/ez\s*$/, "ês");
  w = w.replace(/iz\s*$/, "ís");
  w = w.replace(/oz\s*$/, "ós");
  w = w.replace(/uz\s*$/, "ús");
  w = w.replace(/z\s*$/, "s");
  w = w.replace(/qu(?=[aâáãoôó])/g, "kw");
  w = w.replace(/qu(?=[eêéií])/g, "k");
  w = w.replace(/gu(?=[aâáãoôó])/g, "gw");
  w = w.replace(/g(?=[eêéií])/g, "j");
  w = w.replace(/gu(?=[eêéií])/g, "g");
  w = w.replace(/ss/g, "s");
  w = w.replace(/^ex(?=[aâáãeêéiíoôóuú])/, "iz");
  w = w.replace(/^ex(?=[bcçdfghjklmnpqrstvxz])/, "@2 Yx");
  w = w.replace(/sc(?=[eêéií])/g, "xs");
  w = w.replace(/xc(?=[eêéií])/g, "xs");
  w = w.replace(/(?<!^)(?<![iu])x(?=[aâáãeêéiíoôóuú])/g, "z");
  w = w.replace(/ç/g, "s");
  w = w.replace(/c(?=[aâáãoôóuú])/g, "k");
  w = w.replace(/c(?=[eêéií])/g, "s");
  w = w.replace(/c(?![aâáãeêéiíoôóuúh])/g, "k");
  w = w.replace(/^ch|(?<!t)ch/g, "x");

  // =========================
  // DITONGOS
  // =========================

  w = w.replace(/ou/g, "ø");
  w = w.replace(/(?<=[aâáãeêéiíoôóuúø])i(?=[aâáãeêéiíoôóuú])/g, "y");
  w = w.replace(/(?<=[aâáãeêéiíoôóuúø])u(?=[aâáãeêéiíoôóuú])/g, "w");
  if (!/([aâáeêéoôóuú])\s*ir$/.test(w)) {
    w = w.replace(/([aâáeêéoôó])\s*i/g, "$1Y");
  }
  w = w.replace(/u\s*i(?![aâáãeêéiíoôóuú])/g, "uY");
  w = w.replace(/([aâáeêéiíoôó])\s*u/g, "$1W");
  w = w.replace(/e(?=Y)/g, "@");

  if (/l\s*$/.test(w) && !/[áéêíóôúâãõ]/.test(w)) {
    w = w.replace(/al\s*$/, "áL");
    w = w.replace(/el\s*$/, "éL");
    w = w.replace(/il\s*$/, "íL");
    w = w.replace(/ol\s*$/, "óL");
    w = w.replace(/ul\s*$/, "úL");
  }
  w = w.replace(/l(?!h)(?![aâáãeêéiíoôóuúøwyY@])/g, "L");

  // =========================
  // PROTEÇÃO
  // =========================

  w = w.replace(/nh/g, "§N1§");
  w = w.replace(/lh/g, "§L§");
  w = w.replace(/tch/g, "§T1§");
  w = w.replace(/pr/g, "§P§");
  w = w.replace(/br/g, "§B§");
  w = w.replace(/tr/g, "§T2§");
  w = w.replace(/kr/g, "§C§");
  w = w.replace(/dr/g, "§D§");
  w = w.replace(/gr/g, "§G§");
  w = w.replace(/fr/g, "§F§");
  w = w.replace(/vr/g, "§V§");
  w = w.replace(/n(?=[aâáãeêéiíoôóuúø@])/g, "§N2§");
  w = w.replace(/m(?=[aâáãeêéiíoôóuúø@])/g, "§M§");

  // =========================
  // RÓTICAS
  // =========================

  w = w.replace(/h/g, "");
  w = w.replace(/rr/g, "H");
  w = w.replace(/^r/, "H");
  w = w.replace(/(?<=[nLszxj])r/g, "H");

  // =========================
  // NASALIZAÇÃO
  // =========================

  w = w.replace(/ã\s*o/g, "A1 W");
  w = w.replace(/ã\s*e/g, "A1 Y");
  w = w.replace(/ã\s*$/g, "A1 ");
  w = w.replace(/ã/g, "A2 ");
  w = w.replace(/õ\s*e/g, "O1 Y");
  w = w.replace(/õ/g, "O2 ");

  w = w.replace(/ém\s*$/, "A1 Y");
  w = w.replace(/êm\s*$/, "A1 Y");
  w = w.replace(/éns\s*$/, "A1 Ys");
  w = w.replace(/em\s*$/, "A2 Y");
  w = w.replace(/ens\s*$/, "A2 Ys");

  w = w.replace(/am\s*$/g, "A2 W");
  w = w.replace(/an(?![aeiouø@])/g, "A2 ");
  w = w.replace(/ân(?![aeiouø@])/g, "A1 ");
  w = w.replace(/am(?![aeiouø@])/g, "A2 ");
  w = w.replace(/âm(?![aeiouø@])/g, "A1 ");
  w = w.replace(/en(?![aeiouø@])/g, "E2 ");
  w = w.replace(/ên(?![aeiouø@])/g, "E1 ");
  w = w.replace(/em(?![aeiouø@])/g, "E2 ");
  w = w.replace(/in(?![aeiouø@])/g, "I2 ");
  w = w.replace(/ín(?![aeiouø@])/g, "I1 ");
  w = w.replace(/im(?![aeiouø@])/g, "I2 ");
  w = w.replace(/ím(?![aeiouø@])/g, "I1 ");
  w = w.replace(/on(?![aeiouø@])/g, "O2 ");
  w = w.replace(/ôn(?![aeiouø@])/g, "O1 ");
  w = w.replace(/om(?![aeiouø@])/g, "O2 ");
  w = w.replace(/un(?![aeiouø@])/g, "U2 ");
  w = w.replace(/ún(?![aeiouø@])/g, "U1 ");
  w = w.replace(/um(?![aeiouø@])/g, "U2 ");
  w = w.replace(/úm(?![aeiouø@])/g, "U1 ");

  // =========================
  // ACENTO GRÁFICO
  // =========================

  const hasGraphicAccent = /[áéêíóôúâ]/.test(w);

  if (hasGraphicAccent) {
    w = w.replace(/([AEIOU])1/g, "$12");
  }

  w = w.replace(/é/g, "&1 ");
  w = w.replace(/ê/g, "e1 ");
  w = w.replace(/ó/g, "#1 ");
  w = w.replace(/ô/g, "o1 ");
  w = w.replace(/á/g, "a1 ");
  w = w.replace(/â/g, "@1 ");
  w = w.replace(/í/g, "i1 ");
  w = w.replace(/ú/g, "u1 ");

  // =========================
  // QUEBRA DE PROTEÇÃO
  // =========================

  w = w.replace(/§N1§/g, "nh");
  w = w.replace(/§L§/g, "lh");
  w = w.replace(/§T1§/g, "tch");
  w = w.replace(/§P§/g, "pr");
  w = w.replace(/§C§/g, "kr");
  w = w.replace(/§B§/g, "br");
  w = w.replace(/§T2§/g, "tr");
  w = w.replace(/§D§/g, "dr");
  w = w.replace(/§G§/g, "gr");
  w = w.replace(/§F§/g, "fr");
  w = w.replace(/§V§/g, "vr");
  w = w.replace(/§N2§/g, "n");
  w = w.replace(/§M§/g, "m");

  // =========================
  // VOGAIS
  // =========================

  w = w.replace(/a(?![0-9])/g, "a2 ");
  w = w.replace(/e(?![0-9])/g, "e2 ");
  w = w.replace(/i(?![0-9])/g, "i2 ");
  w = w.replace(/o(?![0-9])/g, "o2 ");
  w = w.replace(/u(?![0-9])/g, "u2 ");
  w = w.replace(/ø(?![0-9])/g, "ø2 ");
  w = w.replace(/@(?![0-9])/g, "@2 ");

  // =========================
  // TONICIDADE
  // =========================

  if (!hasGraphicAccent) {
    w = w.replace(/([iIuU])2\s*$/, "$11 ");
    w = w.replace(/([iIuU])2\s*s$/, "$11 s");
    w = w.replace(/([aeiouø])2\s*r\s*$/, "$11 r");
    w = w.replace(/ø2\s*$/, "ø1 ");
    w = w.replace(/([aeiouø@])2(\s*[WY])\s*$/, "$11$2");
    w = w.replace(/([aeiouø@])2(\s*[WY])\s*s\s*$/, "$11$2s");
  }

  if (!w.includes("1")) {
    if ((w.match(/[aeiouAEIOUø@]2/g) || []).length === 1) {
      w = w.replace(/([aeiouAEIOUø@])2/, "$11");
    }

    if (!w.includes("1")) {
      w = w.replace(/([aeiouAEIOUø@])2(?=[^aeiouAEIOUø@]*[aeiouAEIOUø@][02][^aeiouAEIOUø@12]*$)/, "$11");
    }
  }

  // =========================
  // REDUÇÕES
  // =========================

  // hiato pós-tônico final
  w = w.replace(/i2 ([aou])2(\s*s)?\s*$/, "y $12$2");
  w = w.replace(/e2 ([aou])2(\s*s)?\s*$/, "y $12$2");

  // finais
  w = w.replace(/o2\s*$/, "u0 ");
  w = w.replace(/o2\s*s\s*$/, "u2 s");
  w = w.replace(/e2\s*$/, "%0 ");
  w = w.replace(/e2\s*s\s*$/, "%0 s");
  w = w.replace(/a2\s*$/, "@2 ");
  w = w.replace(/a2\s*s\s*$/, "@2 s");
  w = w.replace(/u2\s*$/, "u0 ");

  // gerais
  w = w.replace(/o2/g, "u2");
  w = w.replace(/e2/g, "%0");
  w = w.replace(/a2(?!\s*L)/g, "@2");

  // =========================
  // SEGMENTAÇÃO CONSONANTAL
  // =========================

  w = w.replace(/b/g, "b ");
  w = w.replace(/d/g, "d ");
  w = w.replace(/f/g, "f ");
  w = w.replace(/g/g, "g ");
  w = w.replace(/H/g, "H ");
  w = w.replace(/j/g, "j ");
  w = w.replace(/k/g, "k ");
  w = w.replace(/lh/g, "lh ");
  w = w.replace(/nh/g, "nh ");
  w = w.replace(/l(?![h])/g, "l ");
  w = w.replace(/L/g, "L ");
  w = w.replace(/m/g, "m ");
  w = w.replace(/n(?![h])/g, "n ");
  w = w.replace(/p/g, "p ");
  w = w.replace(/r/g, "r ");
  w = w.replace(/s/g, "s ");
  w = w.replace(/t(?![c])/g, "t ");
  w = w.replace(/v/g, "v ");
  w = w.replace(/w/g, "w ");
  w = w.replace(/W/g, "W ");
  w = w.replace(/x/g, "x ");
  w = w.replace(/y/g, "y ");
  w = w.replace(/Y/g, "Y ");
  w = w.replace(/z/g, "z ");
  w = w.replace(/\s+/g, " ");

  // =========================
  // RETOQUES
  // =========================

  w = w.replace(/e1 (lh|nh|j|x) (?=[aeiou@%øAEIOU])/g, "@1 $1 ");
  if (!hasGraphicAccent) {
    w = w.replace(/a1 ([mn]) (?=[aeiou@%øAEIOU])/g, "@1 $1 ");
  }
  if (!hasGraphicAccent && morphClass === "verb-open") {
    w = w.replace(/\bo1\b(?!\s*[WY])/g, "#1");
    w = w.replace(/\be1\b(?!\s*[WY])/g, "&1");
  }

  w = w.replace(/(?<!o)o1 z @2(\s*s)?\s*$/, "#1 z @2$1");

  // =========================
  // SIBILANTES DE CODA
  // =========================

  w = w.replace(/s (?=[ptkfsx])/g, "x ");
  w = w.replace(/s (?=[bdgvzjmnlLrHwy])/g, "j ");
  w = w.replace(/s\s*$/, "x");

  // =========================
  // SÍMBOLOS PLENOS
  // =========================

  w = w.replace(/@/g, "ac");
  w = w.replace(/%/g, "ec");
  w = w.replace(/&/g, "ee");
  w = w.replace(/#/g, "oo");
  w = w.replace(/ø/g, "o");

  w = w.replace(/\s+/g, " ").trim();

  return w;
}
