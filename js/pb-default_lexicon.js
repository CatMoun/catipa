// =====================================
// Catipa – Codificação Fonêmica para o Português
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

const LEXICON = {
	"abaixo-assinado": "a2 b a1 Y x u0 a2 s i2 n a1 d u0",
	"abaixo-assinados": "a2 b a1 Y x u0 a2 s i2 n a1 d u0 s",
	"abaixou": "a2 b a2 Y x o1 W",
	"abaxial": "a2 b a2 k s i2 a1 W",
	"abca": "a2 b e2 s e2 a1",
	"abcde": "a2 b e2 s e2 d e2 ee1",
	"abcesso": "a2 b s ee1 s u0",
	"abcessos": "a2 b s ee1 s u0 s",
	"abcs": "a2 b e2 s e1 s",
	"abdominais": "a2 b d o2 m i2 n a1 Y s",
	"abertamente": "a2 b ee2 h t a2 m E1 tch i0",
	"abordam": "a2 b oo1 h d A0 W",
	"abordem": "a2 b oo1 h d E0 Y",
	"abordo": "a2 b oo1 h d u0",
	"abre-alas": "a2 b r i2 a1 l a0 s",
	"acessa": "a2 s ee1 s a0",
	"acessam": "a2 s ee1 s A0 W",
	"acesso": "a2 s ee1 s u0",
	"acessos": "a2 s ee1 s u0 s",
	///1500
	"acordo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 k o1 h d u0" },
          { type: "verbo", ipa: "a2 k oo1 h d u0" }
      ]
	},
	"beco": "b e1 k u0",
	"becos": "b e1 k u0 s",
	"design": "dj i2 z a1 I0",
	"e": "i0",
	"de": "dj i0",
	"ele": "e1 l i0",
	"eram": "ee1 r A0 W",
	"que": "k i0",
	"se": "s i0",
	"ela": "ee1 l a0",
	"elas": "ee1 l a0 s",
	"gosta": "g oo1 s t a0",
	"gostam": "g oo1 s t A0 W",
	"gostas": "g oo1 s t a0 s",
	"gostosa": "g oo2 s t oo1 z a0",
	"gostosas": "g oo2 s t oo1 z a0 s",
	"envolto": "E2 v o1 W t u0",
	"forma": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f o1 h m a0" },
          { type: "verbo", ipa: "f oo1 h m a0" }
      ]
	},
	"gosto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "g o1 s t u0" },
          { type: "verbo", ipa: "g oo1 s t u0" }
      ]
	},
	"index": "I2 d ee1 k s",
	"indexa": "I2 d ee1 k s a0",
	"indexam": "I2 d ee1 k s A0 W",
	"indexar": "I2 d e2 k s a1 h",
	"indexaram": "I2 d e2 k s a1 r A0 W",
	"indexarão": "I2 d e2 k s a2 r A1 W",
	"indexou": "I2 d e2 k s o1 W",
	"jogo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "j o1 g u0" },
          { type: "verbo", ipa: "j oo1 g u0" }
      ]
	},
	"jogos": "j oo1 g u0 s",
	"foco": "f oo1 k u0",
	"focos": "f oo1 k u0 s",
	"logo": "l oo1 g u0",
	"loguinho": "l oo2 g i1 nh u0",
	"loguinhos": "l oo2 g i1 nh u0 s",
	"marketing": "m a1 h k e2 tch I0",
	"me": "m i0",
	"molho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 lh u0" },
          { type: "verbo", ipa: "m oo1 lh u0" }
      ]
	},
	"olho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "o1 lh u0" },
          { type: "verbo", ipa: "oo1 lh u0" }
      ]
	},
	"ortodontologia": "oo2 h t o2 d O2 t o2 l o2 g i1 a0",
	"ortodoxo": "oo2 h t oo2 d oo1 k s u0",
	"próximo": "p r oo1 s i2 m u0",
	"seca": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s e1 k a0" },
          { type: "verbo", ipa: "s ee1 k a0" }
      ]
	},
	"seco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s e1 k u0" },
          { type: "verbo", ipa: "s ee1 k u0" }
      ]
	},
	"sede": {
	  default : "sensação",
	  entries : [
	      { type: "sensação", ipa: "s e1 dj i0" },
          { type: "local", ipa: "s ee1 dj i0" }
      ]
	},
	"sexo": "s ee1 k s u0",
	"sexy": "s ee1 k s i0",
	"show": "x o1 W",
	"transar": "t r A2 z a1 h",
	"transando": "t r A2 z A2 d u0",
	"transou": "t r A2 z o1 W",
	"transaram": "t r A2 z a1 r A0 W",
	"verde": "v e1 h dj i0",
	"verdes": "v e1 h dj i0 s",
	"velha": "v ee1 lh a0",
	"velhas": "v ee1 lh a0 s",
	"velho": "v ee1 lh u0",
	"velhos": "v ee1 lh u0 s",
	"volto": "v oo1 W t u0"
};

function showChoicePopup(word, entries) {
  const box = document.getElementById("choiceBox");
  const title = document.getElementById("choiceWord");
  const btn1 = document.getElementById("choice1");
  const btn2 = document.getElementById("choice2");
  const output = document.getElementById("output");
  const input = document.getElementById("input");

  const opt1 = entries[0];
  const opt2 = entries[1];

  title.innerText = `Escolha a pronúncia de "${word}":`;

  btn1.innerText = opt1.type;
  btn2.innerText = opt2.type;

  function chooseOption(opt) {
    output.innerText = opt.ipa;
    box.style.display = "none";
    input.focus();
    document.removeEventListener("keydown", keyHandler);
  }

  btn1.onclick = () => chooseOption(opt1);
  btn2.onclick = () => chooseOption(opt2);

  function keyHandler(e) {
    if (e.key === "ArrowLeft") {
      chooseOption(opt1);
    }
    if (e.key === "ArrowRight") {
      chooseOption(opt2);
    }
  }

  document.addEventListener("keydown", keyHandler);

  box.style.display = "block";
}
