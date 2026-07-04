// =====================================
// Catipa*pe – Codificação Fonêmica-Fonética para o Português Europeu
// Version: Portugal (Lisboa)
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

const LEXICON_PE = {
	"a": "ac2",
	"à": "a2",
	"às": "a2 x",
	"acordo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ac2 k o1 r d u0" },
          { type: "verbo", ipa: "ac2 k oo1 r d u0" }
      ]
	},
	"agora": "ac2 g oo1 r ac2",
	"água": "a1 g w ac2",
	"águas": "a1 g w ac2 x",
	"almoço": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 L m o1 s u0" },
          { type: "verbo", ipa: "a2 L m oo1 s u0" }
      ]
	},
	"almoços": "a2 L m o1 s u2 x",
	"amarela": "ac2 m ac2 r ee1 l ac2",
	"amarelas": "ac2 m ac2 r ee1 l ac2 x",
	"amarelo": "ac2 m ac2 r ee1 l u0",
	"amarelos": "ac2 m ac2 r ee1 l u2 x",
	"ao": "a2 W",
	"aos": "a2 W x",
	"apoio": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ac2 p o1 y u0" },
          { type: "verbo", ipa: "ac2 p oo1 y u0" }
      ]
	},
	"aquela": "ac2 k ee1 l ac2",
	"aquelas": "ac2 k ee1 l ac2 x",
	"aquele": "ac2 k e1 l ec0",
	"aqueles": "ac2 k e1 l ec0 x",
	"aquilo": "ac2 k i1 l u0",
	"arroz": "ac2 H o1 x",
	"as": "ac2 x",
	"bela": "b ee1 l ac2",
	"belas": "b ee1 l ac2 x",
	"belo": "b ee1 l u0",
	"belos": "b ee1 l u2 x",
	"bola": "b oo1 l ac2",
	"bolas": "b oo1 l ac2 x",
	"bota": "b oo1 t ac2",
	"botas": "b oo1 t ac2 x",
	"castelo": "k ac2 x t ee1 l u0",
	"castelos": "k ac2 x t ee1 l u2 x",
	"catorze": "k ac2 t o1 r z ec0",
	"certa": "s ee1 r t ac2",
	"certas": "s ee1 r t ac2 x",
	"certo": "s ee1 r t u0",
	"certos": "s ee1 r t u2 x",
	"chinelo": "x i2 n ee1 l u0",
	"chinelos": "x i2 n ee1 l u2 x",
	"choro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "x o1 r u0" },
          { type: "verbo", ipa: "x oo1 r u0" }
      ]
	},
	"colher": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k u2 lh ee1 r" },
          { type: "verbo", ipa: "k u2 lh e1 r" }
      ]
	},
	"colheres": "k u2 lh ee1 r ec0 x",
	"com": "k O2",
	"começo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k u2 m e1 s u0" },
          { type: "verbo", ipa: "k u2 m ee1 s u0" }
      ]
	},
	"como": "k o1 m u0",
	"copo": "k oo1 p u0",
	"copos": "k oo1 p u2 x",
	"corpo": "k o1 r p u0",
	"corpos": "k oo1 r p u2 x",
	"da": "d ac2",
	"das": "d ac2 x",
	"de": "d ec0",
	"dez": "d ee1 x",
	"do": "d u2",
	"dos": "d u2 x",
	"doze": "d o1 z ec0",
	"e": "i2",
	"é": "ee1",
	"és": "ee1 x",
	"ela": "ee1 l ac2",
	"elas": "ee1 l ac2 x",
	"ele": "e1 l ec0",
	"eles": "e1 l ec0 x",
	"em": "A2 Y",
	"email": "i2 m e1 Y L",
	"era": "ee1 r ac2",
	"eram": "ee1 r A2 W",
	"erro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "e1 H u0" },
          { type: "verbo", ipa: "ee1 H u0" }
      ]
	},
	"escola": "ec0 x k oo1 l ac2",
	"escolas": "ec0 x k oo1 l ac2 x",
	"esposa": "ec0 x p o1 z ac2",
	"esposas": "ec0 x p o1 z ac2 x",
	"essa": "ee1 s ac2",
	"essas": "ee1 s ac2 x",
	"esse": "e1 s ec0",
	"esses": "e1 s ec0 x",
	"esta": "ee1 x t ac2",
	"estas": "ee1 x t ac2 x",
	"este": "e1 x t ec0",
	"estes": "e1 x t ec0 x",
	"esteve": "ec0 x t e1 v ec0",
	"eu": "e1 W",
	"ferro": "f ee1 H u0",
	"festa": "f ee1 x t ac2",
	"festas": "f ee1 x t ac2 x",
	"fogo": "f o1 g u0",
	"fogos": "f oo1 g u2 x",
	"fora": "f oo1 r ac2",
	"forma": "f oo1 r m ac2",
	"formas": "f oo1 r m ac2 x",
	"forte": "f oo1 r t ec0",
	"fortes": "f oo1 r t ec0 x",
	"gosto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "g o1 x t u0" },
          { type: "verbo", ipa: "g oo1 x t u0" }
      ]
	},
	"governo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "g u2 v e1 r n u0" },
          { type: "verbo", ipa: "g u2 v ee1 r n u0" }
      ]
	},
	"guerra": "g ee1 H ac2",
	"guerras": "g ee1 H ac2 x",
	"homem": "oo1 m A2 Y",
	"homens": "oo1 m A2 Y x",
	"hora": "oo1 r ac2",
	"horas": "oo1 r ac2 x",
	"internet": "I2 t ec0 r n ee1 t ec0",
	"inverno": "I2 v ee1 r n u0",
	"isso": "i1 s u0",
	"isto": "i1 x t u0",
	"janela": "j ac2 n ee1 l ac2",
	"janelas": "j ac2 n ee1 l ac2 x",
	"jogo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "j o1 g u0" },
          { type: "verbo", ipa: "j oo1 g u0" }
      ]
	},
	"jogos": "j oo1 g u2 x",
	"leva": "l ee1 v ac2",
	"levas": "l ee1 v ac2 x",
	"levam": "l ee1 v A2 W",
	"lhe": "lh ec0",
	"lhes": "lh ec0 x",
	"língua": "l I1 g w ac2",
	"línguas": "l I1 g w ac2 x",
	"loja": "l oo1 j ac2",
	"lojas": "l oo1 j ac2 x",
	"maior": "m ac2 y oo1 r",
	"maiores": "m ac2 y oo1 r ec0 x",
	"mais": "m a1 Y x",
	"mas": "m ac2 x",
	"máximo": "m a1 s i2 m u0",
	"me": "m ec0",
	"melhor": "m ec0 lh oo1 r",
	"melhores": "m ec0 lh oo1 r ec0 x",
	"menor": "m ec0 n oo1 r",
	"menores": "m ec0 n oo1 r ec0 x",
	"metro": "m ee1 t r u0",
	"metros": "m ee1 t r u2 x",
	"moda": "m oo1 d ac2",
	"modas": "m oo1 d ac2 x",
	"modelo": "m u2 d ee1 l u0",
	"modelos": "m u2 d ee1 l u2 x",
	"molho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 lh u0" },
          { type: "verbo", ipa: "m oo1 lh u0" }
      ]
	},
	"morro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 H u0" },
          { type: "verbo", ipa: "m oo1 H u0" }
      ]
	},
	"morta": "m oo1 r t ac2",
	"morte": "m oo1 r t ec0",
	"morto": "m o1 r t u0",
	"mortos": "m oo1 r t u2 x",
	"muita": "m U1 Y t ac2",
	"muitas": "m U1 Y t ac2 x",
	"muito": "m U1 Y t u0",
	"muitos": "m U1 Y t u2 x",
	"mulher": "m u2 lh ee1 r",
	"mulheres": "m u2 lh ee1 r ec0 x",
	"na": "n ac2",
	"nas": "n ac2 x",
	"neta": "n ee1 t ac2",
	"neto": "n ee1 t u0",
	"netos": "n ee1 t u2 x",
	"no": "n u2",
	"norte": "n oo1 r t ec0",
	"nos": "n u2 x",
	"nós": "n oo1 x",
	"nossa": "n oo1 s ac2",
	"nossas": "n oo1 s ac2 x",
	"nosso": "n oo1 s u0",
	"nossos": "n oo1 s u2 x",
	"nota": "n oo1 t ac2",
	"notas": "n oo1 t ac2 x",
	"nova": "n oo1 v ac2",
	"novas": "n oo1 v ac2 x",
	"novela": "n u2 v ee1 l ac2",
	"novelas": "n u2 v ee1 l ac2 x",
	"num": "n U2",
	"numa": "n u2 m ac2",
	"o": "u2",
	"obra": "oo1 b r ac2",
	"obras": "oo1 b r ac2 x",
	"olho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "o1 lh u0" },
          { type: "verbo", ipa: "oo1 lh u0" }
      ]
	},
	"olhos": "oo1 lh u2 x",
	"ordem": "oo1 r d A2 Y",
	"ordens": "oo1 r d A2 Y x",
	"os": "u2 x",
	"ou": "o2",
	"ovo": "o1 v u0",
	"ovos": "oo1 v u2 x",
	"panela": "p ac2 n ee1 l ac2",
	"panelas": "p ac2 n ee1 l ac2 x",
	"para": "p ac2 r ac2",
	"pedra": "p ee1 d r ac2",
	"pedras": "p ee1 d r ac2 x",
	"pela": "p ec0 l ac2",
	"pelas": "p ec0 l ac2 x",
	"pelo": "p ec0 l u0",
	"pelos": "p ec0 l u2 x",
	"perto": "p ee1 r t u0",
	"peso": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "p e1 z u0" },
          { type: "verbo", ipa: "p ee1 z u0" }
      ]
	},
	"pior": "p i2 oo1 r",
	"piores": "p i2 oo1 r ec0 x",
	"pizza": "p i1 t s ac2",
	"pizzas": "p i1 t s ac2 x",
	"pobre": "p oo1 b r ec0",
	"pobres": "p oo1 b r ec0 x",
	"pode": "p oo1 d ec0",
	"podem": "p oo1 d A2 Y",
	"por": "p u2 r",
	"porque": "p u1 r k ec0",
	"porquê": "p u2 r k e1",
	"porta": "p oo1 r t ac2",
	"portas": "p oo1 r t ac2 x",
	"porto": "p o1 r t u0",
	"posso": "p oo1 s u0",
	"povo": "p o1 v u0",
	"povos": "p oo1 v u2 x",
	"pra": "p r ac2",
	"pregar": {
	  default : "fixar prego",
	  entries : [
	      { type: "fixar prego", ipa: "p r ec0 g a1 r" },
          { type: "fazer sermão", ipa: "p r ee2 g a1 r" }
      ]
	},
	"prova": "p r oo1 v ac2",
	"provas": "p r oo1 v ac2 x",
	"próxima": "p r oo1 s i2 m ac2",
	"próximo": "p r oo1 s i2 m u0",
	"que": "k ec0",
	"quer": "k ee1 r",
	"querem": "k ee1 r A2 Y",
	"queres": "k ee1 r ec0 x",
	"quero": "k ee1 r u0",
	"real": "H e2 a1 L",
	"reais": "H e2 a1 Y x",
	"roda": "H oo1 d ac2",
	"rodas": "H oo1 d ac2 x",
	"roxa": "H o1 x ac2",
	"roxo": "H o1 x u0",
	"se": "s ec0",
	"seca": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s e1 k ac2" },
          { type: "verbo", ipa: "s ee1 k ac2" }
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
	      { type: "sensação", ipa: "s e1 d ec0" },
          { type: "local", ipa: "s ee1 d ec0" }
      ]
	},
	"sem": "s A2 Y",
	"senhora": "s ec0 nh oo1 r ac2",
	"senhoras": "s ec0 nh oo1 r ac2 x",
	"sexta": "s ac1 Y x t ac2",
	"sextas": "s ac1 Y x t ac2 x",
	"site": "s a1 Y t ec0",
	"sites": "s a1 Y t ec0 x",
	"sopa": "s oo1 p ac2",
	"sopas": "s oo1 p ac2 x",
	"sorte": "s oo1 r t ec0",
	"táxi": "t a1 k s i2",
	"táxis": "t a1 k s i2 x",
	"te": "t ec0",
	"teatro": "t e2 a1 t r u0",
	"teatros": "t e2 a1 t r u2 x",
	"tela": "t ee1 l ac2",
	"telas": "t ee1 l ac2 x",
	"terça": "t ee1 r s ac2",
	"testa": "t ee1 x t ac2",
	"testas": "t ee1 x t ac2 x",
	"terra": "t ee1 H ac2",
	"terras": "t ee1 H ac2 x",
	"teve": "t e1 v ec0",
	"texto": "t ac1 Y x t u0",
	"textos": "t ac1 Y x t u2 x",
	"treze": "t r e1 z ec0",
	"troco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t r o1 k u0" },
          { type: "verbo", ipa: "t r oo1 k u0" }
      ]
	},
	"um": "U2",
	"uma": "u2 m ac2",
	"umas": "u2 m ac2 x",
	"uns": "U2 x",
	"vela": "v ee1 l ac2",
	"velas": "v ee1 l ac2 x",
	"velha": "v ee1 lh ac2",
	"velhas": "v ee1 lh ac2 x",
	"velho": "v ee1 lh u0",
	"velhos": "v ee1 lh u2 x",
	"verde": "v e1 r d ec0",
	"verdes": "v e1 r d ec0 x",
	"você": "v u2 s e1",
	"vocês": "v u2 s e1 x",
	"vos": "v u2 x",
	"vós": "v oo1 x",
	"vossa": "v oo1 s ac2",
	"vossas": "v oo1 s ac2 x",
	"vosso": "v oo1 s u0",
	"vossos": "v oo1 s u2 x",
	"zebra": "z ee1 b r ac2",
	"zebras": "z ee1 b r ac2 x",
	"zero": "z ee1 r u0",
	"zeros": "z ee1 r u2 x"
};
