// =====================================
// Catipa*pe – Codificação Fonêmica-Fonética para o Português Europeu
// Version: Portugal (Lisboa)
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

const LEXICON_PE = {
	"a": "ac2",
	"à": "a2",
	"aeroportos": "ac2 ee2 r u2 p oo1 r t u2 x",
	"alfinete": "a2 L f i2 n e1 t ec0",
	"algema": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 L j e1 m ac2" },
	      { type: "verbo", ipa: "a2 L j ee1 m ac2" }
      ]
	},
	"anedota": "ac2 n ec0 d oo1 t ac2",
	"anedotas": "ac2 n ec0 d oo1 t ac2 x",
	"aproximar": "ac2 p r oo2 s i2 m a1 r",
	"argola": "ac2 r g oo1 l ac2",
	"argolas": "ac2 r g oo1 l ac2 x",
	"às": "a2 x",
	"aberta": "ac2 b ee1 r t ac2",
	"abertas": "ac2 b ee1 r t ac2 x",
	"aberto": "ac2 b ee1 r t u0",
	"abertos": "ac2 b ee1 r t u2 x",
	"aborto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ac2 b o1 r t u0" },
          { type: "verbo", ipa: "ac2 b oo1 r t u0" }
      ]
	},
	"acontece": "ac2 k O2 t ee1 s ec0",
	"acontecem": "ac2 k O2 t ee1 s A2 Y",
	"acordo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ac2 k o1 r d u0" },
          { type: "verbo", ipa: "ac2 k oo1 r d u0" }
      ]
	},
	"adora": "ac2 d oo1 r ac2",
	"adoram": "ac2 d oo1 r A2 W",
	"adoro": "ac2 d oo1 r u0",
	"agora": "ac2 g oo1 r ac2",
	"água": "a1 g w ac2",
	"águas": "a1 g w ac2 x",
	"aguenta": "ac2 g w E1 t ac2",
	"aguentada": "ac2 g w E2 t a1 d ac2",
	"aguentadas": "ac2 g w E2 t a1 d ac2 x",
	"aguentado": "ac2 g w E2 t a1 d u0",
	"aguentados": "ac2 g w E2 t a1 d u2 x",
	"aguentais": "ac2 g w E2 t a1 Y x",
	"aguentam": "ac2 g w E1 t A2 W",
	"aguentamos": "ac2 g w E2 t ac1 m u2 x",
	"aguentando": "ac2 g w E2 t A1 d u0",
	"aguentar": "ac2 g w E2 t a1 r",
	"aguentará": "ac2 g w E2 t ac2 r a1",
	"aguentaram": "ac2 g w E2 t a1 r A2 W",
	"aguentarão": "ac2 g w E2 t ac2 r A1 W",
	"aguentarás": "ac2 g w E2 t ac2 r a1 x",
	"aguentardes": "ac2 g w E2 t a1 r d ec0 x",
	"aguentarei": "ac2 g w E2 t ac2 r ac1 Y",
	"aguentareis": "ac2 g w E2 t ac2 r ac1 Y x",
	"aguentarem": "ac2 g w E2 t a1 r A2 Y",
	"aguentaremos": "ac2 g w E2 t ac2 r e1 m u2 x",
	"aguentares": "ac2 g w E2 t a1 r ec0 x",
	"aguentaria": "ac2 g w E2 t ac2 r i1 ac2",
	"aguentariam": "ac2 g w E2 t ac2 r i1 A2 W",
	"aguentaríamos": "ac2 g w E2 t ac2 r i1 ac2 m u2 x",
	"aguentarias": "ac2 g w E2 t ac2 r i1 ac2 x",
	"aguentaríeis": "ac2 g w E2 t ac2 r i1 ac2 Y x",
	"aguentarmos": "ac2 g w E2 t a1 r m u2 x",
	"aguentas": "ac2 g w E1 t ac2 x",
	"aguentasse": "ac2 g w E2 t a1 s ec0",
	"aguentásseis": "ac2 g w E2 t a1 s ac2 Y x",
	"aguentassem": "ac2 g w E2 t a1 s A2 Y",
	"aguentássemos": "ac2 g w E2 t a1 s ec0 m u2 x",
	"aguentasses": "ac2 g w E2 t a1 s ec0 x",
	"aguentaste": "ac2 g w E2 t a1 x t ec0",
	"aguentastes": "ac2 g w E2 t a1 x t ec0 x",
	"aguentava": "ac2 g w E2 t a1 v ac2",
	"aguentavam": "ac2 g w E2 t a1 v A2 W",
	"aguentávamos": "ac2 g w E2 t a1 v ac2 m u2 x",
	"aguentavas": "ac2 g w E2 t a1 v ac2 x",
	"aguentáveis": "ac2 g w E2 t a1 v ac2 Y x",
	"aguente": "ac2 g w E1 t ec0",
	"aguentei": "ac2 g w E2 t ac1 Y",
	"aguenteis": "ac2 g w E2 t ac1 Y x",
	"aguentem": "ac2 g w E1 t A2 Y",
	"aguentemos": "ac2 g w E2 t e1 m u2 x",
	"aguentes": "ac2 g w E1 t ec0 x",
	"aguento": "ac2 g w E1 t u0",
	"aguentou": "ac2 g w E2 t o1",
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
	"amor": "ac2 m o1 r",
	"amores": "ac2 m o1 r ec0 x",
	"ao": "a2 W",
	"aos": "a2 W x",
	"apelo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ac2 p e1 l u0" },
          { type: "verbo", ipa: "ac2 p ee1 l u0" }
      ]
	},
	"aperto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ac2 p e1 r t u0" },
          { type: "verbo", ipa: "ac2 p ee1 r t u0" }
      ]
	},
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
	"assembleia": "ac2 s E2 b l ac1 y ac2",
	"assembleias": "ac2 s E2 b l ac1 y ac2 x",
	"atleta": "ac2 t l ee1 t ac2",
	"atletas": "ac2 t l ee1 t ac2 x",
	"autocarro": "a2 W t oo2 k a1 H u0",
	"autocarros": "a2 W t oo2 k a1 H u2 x",
	"auxiliar": "a2 W s i2 l i2 a1 r",
	"auxílio": "a2 W s i1 l y u0",
	"auxílios": "a2 W s i1 l y u2 x",
	"axila": "ac2 k s i1 l ac2",
	"axilas": "ac2 k s i1 l ac2 x",
	"banquete": "b A2 k e1 t ec0",
	"bebe": "b ee1 b ec0",
	"bebem": "b ee1 b A2 Y",
	"bebo": "b e1 b u0",
	"bela": "b ee1 l ac2",
	"belas": "b ee1 l ac2 x",
	"belo": "b ee1 l u0",
	"belos": "b ee1 l u2 x",
	"bilíngue": "b i2 l I1 g w ec0",
	"bilíngues": "b i2 l I1 g w ec0 x",
	"bloco": "b l oo1 k u0",
	"blocos": "b l oo1 k u2 x",
	"boca": "b o1 k ac2",
	"bocas": "b o1 k ac2 x",
	"boia": "b oo1 y ac2",
	"boias": "b oo1 y ac2 x",
	"bola": "b oo1 l ac2",
	"bolas": "b oo1 l ac2 x",
	"bolinha": "b oo2 l i1 nh ac2",
	"bolinhas": "b oo2 l i1 nh ac2 x",
	"bolsa": "b o1 L s ac2",
	"bolsas": "b o1 L s ac2 x",
	"bolso": "b o1 L s u0",
	"bolsos": "b o1 L s u2 x",
	"borda": "b oo1 r d ac2",
	"bordas": "b oo1 r d ac2 x",
	"bosque": "b oo1 x k ec0",
	"bosques": "b oo1 x k ec0 x",
	"bota": "b oo1 t ac2",
	"botas": "b oo1 t ac2 x",
	"boxe": "b oo1 k s ec0",
	"cabeça": "k ac2 b e1 s ac2",
	"cabeças": "k ac2 b e1 s ac2 x",
	"cabelo": "k ac2 b e1 l u0",
	"cabelos": "k ac2 b e1 l u2 x",
	"cadela": "k ac2 d ee1 l ac2",
	"cadelas": "k ac2 d ee1 l ac2 x",
	"cafezinho": "k ac2 f ee2 z i1 nh u0",
	"cafezinhos": "k ac2 f ee2 z i1 nh u2 x",
	"camisola": "k ac2 m i2 z oo1 l ac2",
	"camisolas": "k ac2 m i2 z oo1 l ac2 x",
	"caneta": "k ac2 n e1 t ac2",
	"canetas": "k ac2 n e1 t ac2 x",
	"capela": "k ac2 p ee1 l ac2",
	"capelas": "k ac2 p ee1 l ac2 x",
	"caroço": "k ac2 r o1 s u0",
	"caroços": "k ac2 r oo1 s u2 x",
	"castelo": "k ac2 x t ee1 l u0",
	"castelos": "k ac2 x t ee1 l u2 x",
	"catorze": "k ac2 t o1 r z ec0",
	"cautela": "k ac2 W t ee1 l ac2",
	"cautelas": "k ac2 W t ee1 l ac2 x",
	"cebola": "s ec0 b o1 l ac2",
	"cebolas": "s ec0 b o1 l ac2 x",
	"cedo": "s e1 d u0",
	"cego": "s ee1 g u0",
	"cegos": "s ee1 g u2 x",
	"cerca": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s e1 r k ac2" },
          { type: "verbo", ipa: "s ee1 r k ac2" }
      ]
	},
	"certa": "s ee1 r t ac2",
	"certamente": "s ee2 r t ac2 m E1 t ec0",
	"certas": "s ee1 r t ac2 x",
	"certo": "s ee1 r t u0",
	"certos": "s ee1 r t u2 x",
	"chega": "x e1 g ac2",
	"chegam": "x e1 g A2 W",
	"chego": "x e1 g u0",
	"chinelo": "x i2 n ee1 l u0",
	"chinelos": "x i2 n ee1 l u2 x",
	"choque": "x oo1 k ec0",
	"choques": "x oo1 k ec0 x",
	"choro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "x o1 r u0" },
          { type: "verbo", ipa: "x oo1 r u0" }
      ]
	},
	"cinquenta": "s I2 k w E1 t ac2",
	"cobre": "k oo1 b r ec0",
	"coco": "k o1 k u0",
	"cocos": "k o1 k u2 x",
	"colher": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k u2 lh ee1 r" },
          { type: "verbo", ipa: "k u2 lh e1 r" }
      ]
	},
	"colheres": "k u2 lh ee1 r ec0 x",
	"colmeia": "k u2 L m ac1 y ac2",
	"colmeias": "k u2 L m ac1 y ac2 x",
	"colo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k o1 l u0" },
          { type: "verbo", ipa: "k oo1 l u0" }
      ]
	},
	"com": "k O2",
	"comboio": "k O2 b o1 y u0",
	"comboios": "k O2 b o1 y u2 x",
	"come": "k oo1 m ec0",
	"comem": "k oo1 m A2 Y",
	"começo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k u2 m e1 s u0" },
          { type: "verbo", ipa: "k u2 m ee1 s u0" }
      ]
	},
	"como": "k o1 m u0",
	"completa": "k O2 p l ee1 t ac2",
	"completas": "k O2 p l ee1 t ac2 x",
	"complexa": "k O2 p l ee1 k s ac2",
	"complexo": "k O2 p l ee1 k s u0",
	"complexos": "k O2 p l ee1 k s u2 x",
	"concreta": "k O2 k r ee1 t ac2",
	"concretas": "k O2 k r ee1 t ac2 x",
	"conforto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k O2 f o1 r t u0" },
	      { type: "verbo", ipa: "k O2 f oo1 r t u0" }
      ]
	},
	"conhece": "k u2 nh ee1 s ec0",
	"conhecem": "k u2 nh ee1 s A2 Y",
	"conheço": "k u2 nh e1 s u0",
	"consequência": "k O2 s ec0 k w E1 s y ac2",
	"consequências": "k O2 s ec0 k w E1 s y ac2 x",
	"conserto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k O2 s e1 r t u0" },
          { type: "verbo", ipa: "k O2 s ee1 r t u0" }
      ]
	},
	"consolo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k O2 s o1 l u0" },
          { type: "verbo", ipa: "k O2 s oo1 l u0" }
      ]
	},
	"contexto": "k O2 t ac1 Y x t u0",
	"contextos": "k O2 t ac1 Y x t u2 x",
	"copa": "k oo1 p ac2",
	"copas": "k oo1 p ac2 x",
	"copo": "k oo1 p u0",
	"copos": "k oo1 p u2 x",
	"cor": "k o1 r",
	"corda": "k oo1 r d ac2",
	"cordas": "k oo1 r d ac2 x",
	"cores": "k o1 r ec0 x",
	"corpo": "k o1 r p u0",
	"corpos": "k oo1 r p u2 x",
	"corre": "k oo1 H ec0",
	"correm": "k oo1 H A2 Y",
	"correta": "k u2 H ee1 t ac2",
	"corretas": "k u2 H ee1 t ac2 x",
	"corro": "k oo1 H u0",
	"corta": "k oo1 r t ac2",
	"cortam": "k oo1 r t A2 W",
	"corte": {
	  default : "cortar",
	  entries : [
	      { type: "cortar", ipa: "k oo1 r t ec0" },
          { type: "nobreza", ipa: "k o1 r t ec0" }
      ]
	},
	"corto": "k oo1 r t u0",
	"costa": "k oo1 x t ac2",
	"costela": "k u2 x t ee1 l ac2",
	"costelas": "k u2 x t ee1 l ac2 x",
	"cota": "k oo1 t ac2",
	"cotas": "k oo1 t ac2 x",
	"cotovelo": "k u2 t u2 v e1 l u0",
	"cotovelos": "k u2 t u2 v e1 l u2 x",
	"cova": "k oo1 v ac2",
	"covas": "k oo1 v ac2 x",
	"credo": "k r ee1 d u0",
	"credos": "k r ee1 d u2 x",
	"creem": "k r e1 A2 Y",
	"da": "d ac2",
	"das": "d ac2 x",
	"de": "d ec0",
	"dedo": "d e1 d u0",
	"dedos": "d e1 d u2 x",
	"deem": "d e1 A2 Y",
	"dela": "d ee1 l ac2",
	"delas": "d ee1 l ac2 x",
	"dele": "d e1 l ec0",
	"deles": "d e1 l ec0 x",
	"delinquente": "d ec0 l I2 k w E1 t ec0",
	"delinquentes": "d ec0 l I2 k w E1 t ec0 x",
	"derrota": "d ec0 H oo1 t ac2",
	"derrotas": "d ec0 H oo1 t ac2 x",
	"desespero": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "d ec0 z ec0 x p e1 r u0" },
	      { type: "verbo", ipa: "d ec0 z ec0 x p ee1 r u0" }
      ]
	},
	"dessa": "d ee1 s ac2",
	"dessas": "d ee1 s ac2 x",
	"desse": "d e1 s ec0",
	"desses": "d e1 s ec0 x",
	"desta": "d ee1 x t ac2",
	"destas": "d ee1 x t ac2 x",
	"deste": "d e1 x t ec0",
	"destes": "d e1 x t ec0 x",
	"dez": "d ee1 x",
	"diarreia": "d i2 ac2 H ac1 y ac2",
	"dieta": "d i2 ee1 t ac2",
	"dietas": "d i2 ee1 t ac2 x",
	"direta": "d i2 r ee1 t ac2",
	"diretas": "d i2 r ee1 t ac2 x",
	"discreta": "d i2 x k r ee1 t ac2",
	"discretas": "d i2 x k r ee1 t ac2 x",
	"do": "d u2",
	"dor": "d o1 r",
	"dores": "d o1 r ec0 x",
	"dorme": "d oo1 r m ec0",
	"dormem": "d oo1 r m A2 Y",
	"dos": "d u2 x",
	"doutor": "d o2 t o1 r",
	"doutora": "d o2 t o1 r ac2",
	"doutoras": "d o2 t o1 r ac2 x",
	"doutores": "d o2 t o1 r ec0 x",
	"doze": "d o1 z ec0",
	"duelo": "d u2 ee1 l u0",
	"duelos": "d u2 ee1 l u2 x",
	"e": "i2",
	"é": "ee1",
	"eloquente": "i2 l u2 k w E1 t ec0",
	"eloquentes": "i2 l u2 k w E1 t ec0 x",
	"encosta": "E2 k oo1 x t ac2",
	"encostas": "E2 k oo1 x t ac2 x",
	"endereço": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "E2 d ec0 r e1 s u0" },
	      { type: "verbo", ipa: "E2 d ec0 r ee1 s u0" }
      ]
	},
	"enterro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "E2 t e1 H u0" },
	      { type: "verbo", ipa: "E2 t ee1 H u0" }
      ]
	},
	"és": "ee1 x",
	"ela": "ee1 l ac2",
	"elas": "ee1 l ac2 x",
	"ele": "e1 l ec0",
	"eles": "e1 l ec0 x",
	"em": "A2 Y",
	"email": "i2 m e1 Y L",
	"emprego": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "E2 p r e1 g u0" },
          { type: "verbo", ipa: "E2 p r ee1 g u0" }
      ]
	},
	"empregos": "E2 p r e1 g u2 x",
	"encosto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "E2 k o1 x t u0" },
          { type: "verbo", ipa: "E2 k oo1 x t u0" }
      ]
	},
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
	"escolha": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ec0 x k o1 lh ac2" },
          { type: "verbo", ipa: "ec0 x k oo1 lh ac2" }
      ]
	},
	"escolhas": "ec0 x k o1 lh ac2 x",
	"escolhe": "ec0 x k oo1 lh ec0",
	"escolhem": "ec0 x k oo1 lh A2 Y",
	"escolho": "ec0 x k oo1 lh u0",
	"escova": "ec0 x k o1 v ac2",
	"escovas": "ec0 x k o1 v ac2 x",
	"esfera": "ec0 x f ee1 r ac2",
	"esferas": "ec0 x f ee1 r ac2 x",
	"esforço": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ec0 x f o1 r s u0" },
          { type: "verbo", ipa: "ec0 x f oo1 r s u0" }
      ]
	},
	"esforços": "ec0 x f oo1 r s u2 x",
	"espelho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ec0 x p ac1 lh u0" },
	      { type: "verbo", ipa: "ec0 x p ee1 lh u0" }
      ]
	},
	"espeto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "ec0 x p e1 t u0" },
	      { type: "verbo", ipa: "ec0 x p ee1 t u0" }
      ]
	},
	"esposa": "ec0 x p o1 z ac2",
	"esposas": "ec0 x p o1 z ac2 x",
	"esquece": "ec0 x k ee1 s ec0",
	"esquecem": "ec0 x k ee1 s A2 Y",
	"esqueço": "ec0 x k e1 s u0",
	"essa": "ee1 s ac2",
	"essas": "ee1 s ac2 x",
	"esse": "e1 s ec0",
	"esses": "e1 s ec0 x",
	"esta": "ee1 x t ac2",
	"estas": "ee1 x t ac2 x",
	"este": "e1 x t ec0",
	"estes": "e1 x t ec0 x",
	"esteve": "ec0 x t e1 v ec0",
	"estoico": "ec0 x t oo1 Y k u0",
	"estoicos": "ec0 x t oo1 Y k u2 x",
	"estoque": "ec0 x t oo1 k ec0",
	"estoques": "ec0 x t oo1 k ec0 x",
	"estreia": "ec0 x t r ac1 y ac2",
	"estreias": "ec0 x t r ac1 y ac2 x",
	"eu": "e1 W",
	"europeia": "e2 W r u2 p ac1 y ac2",
	"europeias": "e2 W r u2 p ac1 y ac2 x",
	"exagero": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "i2 z ac2 j e1 r u0" },
          { type: "verbo", ipa: "i2 z ac2 j ee1 r u0" }
      ]
	},
	"exame": "i2 z ac1 m ec0",
	"exames": "i2 z ac1 m ec0 x",
	"exata": "i2 z a1 t ac2",
	"exatas": "i2 z a1 t ac2 x",
	"exato": "i2 z a1 t u0",
	"exatos": "i2 z a1 t u2 x",
	"exemplo": "i2 z E1 p l u0",
	"exemplos": "i2 z E1 p l u2 x",
	"exercício": "i2 z ec0 r s i1 s y u0",
	"exercícios": "i2 z ec0 r s i1 s y u2 x",
	"exército": "i2 z ee1 r s i2 t u0",
	"exércitos": "i2 z ee1 r s i2 t u2 x",
	"exige": "i2 z i1 j ec0",
	"exigem": "i2 z i1 j A2 Y",
	"existe": "i2 z i1 x t ec0",
	"existem": "i2 z i1 x t A2 Y",
	"existir": "i2 z i2 x t i1 r",
	"farelo": "f ac2 r ee1 l u0",
	"farelos": "f ac2 r ee1 l u2 x",
	"favela": "f ac2 v ee1 l ac2",
	"favelas": "f ac2 v ee1 l ac2 x",
	"fera": "f ee1 r ac2",
	"feras": "f ee1 r ac2 x",
	"ferro": "f ee1 H u0",
	"festa": "f ee1 x t ac2",
	"festas": "f ee1 x t ac2 x",
	"festinha": "f ee2 x t i1 nh ac2",
	"festinhas": "f ee2 x t i1 nh ac2 x",
	"fixa": "f i1 k s ac2",
	"fixas": "f i1 k s ac2 x",
	"fixe": "f i1 x ec0",
	"fixo": "f i1 k s u0",
	"fixos": "f i1 k s u2 x",
	"flor": "f l o1 r",
	"flores": "f l o1 r ec0 x",
	"fogo": "f o1 g u0",
	"fogos": "f oo1 g u2 x",
	"fora": "f oo1 r ac2",
	"força": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f o1 r s ac2" },
          { type: "verbo", ipa: "f oo1 r s ac2" }
      ]
	},
	"forças": "f o1 r s ac2 x",
	"forma": "f oo1 r m ac2",
	"formas": "f oo1 r m ac2 x",
	"fornos": "f oo1 r n u2 x",
	"forro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f o1 H u0" },
          { type: "verbo", ipa: "f oo1 H u0" }
      ]
	},
	"forte": "f oo1 r t ec0",
	"fortes": "f oo1 r t ec0 x",
	"frequência": "f r ec0 k w E1 s y ac2",
	"frequências": "f r ec0 k w E1 s y ac2 x",
	"frequente": "f r ec0 k w E1 t ec0",
	"frequentes": "f r ec0 k w E1 t ec0 x",
	"frota": "f r oo1 t ac2",
	"frotas": "f r oo1 t ac2 x",
	"futebol": "f u2 t ec0 b oo1 L",
	"gabinete": "g ac2 b i2 n e1 t ec0",
	"gaiola": "g ac2 y oo1 l ac2",
	"gaiolas": "g ac2 y oo1 l ac2 x",
	"geleia": "j ec0 l ac1 y ac2",
	"geleias": "j ec0 l ac1 y ac2 x",
	"gelo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "j e1 l u0" },
          { type: "verbo", ipa: "j ee1 l u0" }
      ]
	},
	"gesto": "j ee1 x t u0",
	"gestos": "j ee1 x t u2 x",
	"globo": "g l o1 b u0",
	"globos": "g l o1 b u2 x",
	"gola": "g oo1 l ac2",
	"golas": "g oo1 l ac2 x",
	"gorda": "g o1 r d ac2",
	"gordas": "g o1 r d ac2 x",
	"gordo": "g o1 r d u0",
	"gordos": "g o1 r d u2 x",
	"gosta": "g oo1 x t ac2",
	"gostam": "g oo1 x t A2 W",
	"gostas": "g oo1 x t ac2 x",
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
	"gota": "g o1 t ac2",
	"gotas": "g o1 t ac2 x",
	"grossa": "g r oo1 s ac2",
	"grossas": "g r oo1 s ac2 x",
	"grossos": "g r oo1 s u2 x",
	"guerra": "g ee1 H ac2",
	"guerras": "g ee1 H ac2 x",
	"heroico": "i2 r oo1 Y k u0",
	"heroicos": "i2 r oo1 Y k u2 x",
	"homem": "oo1 m A2 Y",
	"homens": "oo1 m A2 Y x",
	"hora": "oo1 r ac2",
	"horas": "oo1 r ac2 x",
	"horta": "oo1 r t ac2",
	"hortas": "oo1 r t ac2 x",
	"hotel": "oo2 t ee1 L",
	"hotéis": "oo2 t ee1 Y x",
	"idiota": "i2 d i2 oo1 t ac2",
	"idiotas": "i2 d i2 oo1 t ac2 x",
	"importa": "I2 p oo1 r t ac2",
	"importam": "I2 p oo1 r t A2 W",
	"imposto": "I2 p o1 x t u0",
	"impostos": "I2 p oo1 x t u2 x",
	"internet": "I2 t ec0 r n ee1 t ec0",
	"intoxicar": "I2 t oo2 k s i2 k a1 r",
	"inverno": "I2 v ee1 r n u0",
	"isso": "i1 s u0",
	"isto": "i1 x t u0",
	"janela": "j ac2 n ee1 l ac2",
	"janelas": "j ac2 n ee1 l ac2 x",
	"jiboia": "j i2 b oo1 y ac2",
	"jiboias": "j i2 b oo1 y ac2 x",
	"joga": "j oo1 g ac2",
	"jogam": "j oo1 g A2 W",
	"jogo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "j o1 g u0" },
          { type: "verbo", ipa: "j oo1 g u0" }
      ]
	},
	"jogos": "j oo1 g u2 x",
	"leem": "l e1 A2 Y",
	"lembrete": "l E2 b r e1 t ec0",
	"leva": "l ee1 v ac2",
	"levas": "l ee1 v ac2 x",
	"levam": "l ee1 v A2 W",
	"léxico": "l ee1 k s i2 k u0",
	"léxicos": "l ee1 k s i2 k u2 x",
	"lhe": "lh ec0",
	"lhes": "lh ec0 x",
	"língua": "l I1 g w ac2",
	"línguas": "l I1 g w ac2 x",
	"linguiça": "l I2 g w i1 s ac2",
	"linguiças": "l I2 g w i1 s ac2 x",
	"linguista": "l I2 g w i1 x t ac2",
	"linguistas": "l I2 g w i1 x t ac2 x",
	"linguística": "l I2 g w i1 x t i2 k ac2",
	"lobo": "l o1 b u0",
	"lobos": "l o1 b u2 x",
	"loja": "l oo1 j ac2",
	"lojas": "l oo1 j ac2 x",
	"maior": "m ac2 y oo1 r",
	"maiores": "m ac2 y oo1 r ec0 x",
	"mais": "m a1 Y x",
	"mas": "m ac2 x",
	"máxima": "m a1 s i2 m ac2",
	"máximas": "m a1 s i2 m ac2 x",
	"máximo": "m a1 s i2 m u0",
	"me": "m ec0",
	"medo": "m e1 d u0",
	"medos": "m e1 d u2 x",
	"melhor": "m ec0 lh oo1 r",
	"melhores": "m ec0 lh oo1 r ec0 x",
	"menor": "m ec0 n oo1 r",
	"menores": "m ec0 n oo1 r ec0 x",
	"merece": "m ec0 r ee1 s ec0",
	"merecem": "m ec0 r ee1 s A2 Y",
	"mereço": "m ec0 r e1 s u0",
	"mesa": "m e1 z ac2",
	"mesas": "m e1 z ac2 x",
	"meta": "m ee1 t ac2",
	"metas": "m ee1 t ac2 x",
	"metro": "m ee1 t r u0",
	"metros": "m ee1 t r u2 x",
	"miolo": "m i2 o1 l u0",
	"miolos": "m i2 oo1 l u2 x",
	"moda": "m oo1 d ac2",
	"modas": "m oo1 d ac2 x",
	"modelo": "m u2 d ee1 l u0",
	"modelos": "m u2 d ee1 l u2 x",
	"mola": "m oo1 l ac2",
	"molas": "m oo1 l ac2 x",
	"molho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 lh u0" },
          { type: "verbo", ipa: "m oo1 lh u0" }
      ]
	},
	"mora": "m oo1 r ac2",
	"moram": "m oo1 r A2 W",
	"moro": "m oo1 r u0",
	"morre": "m oo1 H ec0",
	"morrem": "m oo1 H A2 Y",
	"morro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 H u0" },
          { type: "verbo", ipa: "m oo1 H u0" }
      ]
	},
	"morta": "m oo1 r t ac2",
	"mortas": "m oo1 r t ac2 x",
	"morte": "m oo1 r t ec0",
	"mortes": "m oo1 r t ec0 x",
	"morto": "m o1 r t u0",
	"mortos": "m oo1 r t u2 x",
	"mostra": "m oo1 x t r ac2",
	"mostram": "m oo1 x t r A2 W",
	"mostro": "m oo1 x t r u0",
	"muita": "m U1 Y t ac2",
	"muitas": "m U1 Y t ac2 x",
	"muito": "m U1 Y t u0",
	"muitos": "m U1 Y t u2 x",
	"mulher": "m u2 lh ee1 r",
	"mulheres": "m u2 lh ee1 r ec0 x",
	"na": "n ac2",
	"nas": "n ac2 x",
	"nela": "n ee1 l ac2",
	"nelas": "n ee1 l ac2 x",
	"nele": "n e1 l ec0",
	"neles": "n e1 l ec0 x",
	"nem": "n A2 Y",
	"nessa": "n ee1 s ac2",
	"nessas": "n ee1 s ac2 x",
	"nesse": "n e1 s ec0",
	"nesses": "n e1 s ec0 x",
	"nesta": "n ee1 x t ac2",
	"nestas": "n ee1 x t ac2 x",
	"neste": "n e1 x t ec0",
	"nestes": "n e1 x t ec0 x",
	"neta": "n ee1 t ac2",
	"netas": "n ee1 t ac2 x",
	"neto": "n ee1 t u0",
	"netos": "n ee1 t u2 x",
	"nexo": "n ee1 k s u0",
	"nexos": "n ee1 k s u2 x",
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
	"novamente": "n oo2 v ac2 m E1 t ec0",
	"novas": "n oo1 v ac2 x",
	"nove": "n oo1 v ec0",
	"novela": "n u2 v ee1 l ac2",
	"novelas": "n u2 v ee1 l ac2 x",
	"novo": "n o1 v u0",
	"novos": "n oo1 v u2 x",
	"num": "n U2",
	"numa": "n u2 m ac2",
	"o": "u2",
	"obra": "oo1 b r ac2",
	"obras": "oo1 b r ac2 x",
	"olha": "oo1 lh ac2",
	"olham": "oo1 lh A2 W",
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
	"osso": "o1 s u0",
	"ossos": "oo1 s u2 x",
	"ou": "o2",
	"ovo": "o1 v u0",
	"ovos": "oo1 v u2 x",
	"oxigénio": "oo2 k s i2 j ee1 n y u0",
	"oxítona": "oo2 k s i1 t u2 n ac2",
	"oxítonas": "oo2 k s i1 t u2 n ac2 x",
	"panela": "p ac2 n ee1 l ac2",
	"panelas": "p ac2 n ee1 l ac2 x",
	"para": {
	  default : "preposição",
	  entries : [
	      { type: "preposição", ipa: "p ac2 r ac2" },
	      { type: "verbo", ipa: "p a1 r ac2" }
      ]
	},
	"paradoxo": "p ac2 r ac2 d oo1 k s u0",
	"paradoxos": "p ac2 r ac2 d oo1 k s u2 x",
	"paranoia": "p ac2 r ac2 n oo1 y ac2",
	"paranoias": "p ac2 r ac2 n oo1 y ac2 x",
	"parcela": "p ac2 r s ee1 l ac2",
	"parcelas": "p ac2 r s ee1 l ac2 x",
	"parece": "p ac2 r ee1 s ec0",
	"parecem": "p ac2 r ee1 s A2 Y",
	"pareço": "p ac2 r e1 s u0",
	"paroxítona": "p ac2 r oo2 k s i1 t u2 n ac2",
	"paroxítonas": "p ac2 r oo2 k s i1 t u2 n ac2 x",
	"passarela": "p ac2 s ac2 r ee1 l ac2",
	"passarelas": "p ac2 s ac2 r ee1 l ac2 x",
	"patriota": "p ac2 t r i2 oo1 t ac2",
	"patriotas": "p ac2 t r i2 oo1 t ac2 x",
	"peça": "p ee1 s ac2",
	"peças": "p ee1 s ac2 x",
	"pedra": "p ee1 d r ac2",
	"pedras": "p ee1 d r ac2 x",
	"pela": {
	  default : "preposição",
	  entries : [
	      { type: "preposição", ipa: "p ec0 l ac2" },
	      { type: "verbo", ipa: "p ee1 l ac2" }
      ]
	},
	"pelas": "p ec0 l ac2 x",
	"pelo": {
	  default : "preposição",
	  entries : [
	      { type: "preposição", ipa: "p ec0 l u0" },
	      { type: "substantivo", ipa: "p e1 l u0" }
      ]
	},
	"pelos": "p ec0 l u2 x",
	"pera": "p e1 r ac2",
	"peras": "p e1 r ac2 x",
	"perto": "p ee1 r t u0",
	"pescoço": "p ec0 x k o1 s u0",
	"pescoços": "p ec0 x k oo1 s u2 x",
	"peso": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "p e1 z u0" },
          { type: "verbo", ipa: "p ee1 z u0" }
      ]
	},
	"pessoa": "p ec0 s o1 ac2",
	"pessoas": "p ec0 s o1 ac2 x",
	"pezinho": "p ee2 z i1 nh u0",
	"pezinhos": "p ee2 z i1 nh u2 x",
	"pinguim": "p I2 g w I1",
	"pior": "p i2 oo1 r",
	"piores": "p i2 oo1 r ec0 x",
	"pistola": "p i2 x t oo1 l ac2",
	"pistolas": "p i2 x t oo1 l ac2 x",
	"pizza": "p i1 t s ac2",
	"pizzas": "p i1 t s ac2 x",
	"plateia": "p l ac2 t ac1 y ac2",
	"plateias": "p l ac2 t ac1 y ac2 x",
	"pobre": "p oo1 b r ec0",
	"pobres": "p oo1 b r ec0 x",
	"poço": "p o1 s u0",
	"poços": "p oo1 s u2 x",
	"pode": "p oo1 d ec0",
	"pôde": "p o1 d ec0",
	"podem": "p oo1 d A2 Y",
	"poeta": "p u2 ee1 t ac2",
	"poetas": "p u2 ee1 t ac2 x",
	"polo": "p oo1 l u0",
	"polos": "p oo1 l u2 x",
	"por": "p u2 r",
	"porca": "p oo1 r k ac2",
	"porcas": "p oo1 r k ac2 x",
	"porco": "p o1 r k u0",
	"porcos": "p oo1 r k u2 x",
	"porque": "p u1 r k ec0",
	"porquê": "p u2 r k e1",
	"porta": "p oo1 r t ac2",
	"portas": "p oo1 r t ac2 x",
	"porto": "p o1 r t u0",
	"portos": "p oo1 r t u2 x",
	"posso": "p oo1 s u0",
	"posta": "p oo1 x t ac2",
	"postas": "p oo1 x t ac2 x",
	"posto": "p o1 x t u0",
	"postos": "p oo1 x t u2 x",
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
	"prego": "p r ee1 g u0",
	"pregos": "p r ee1 g u2 x",
	"professor": "p r u2 f ec0 s o1 r",
	"professora": "p r u2 f ec0 s o1 r ac2",
	"professoras": "p r u2 f ec0 s o1 r ac2 x",
	"professores": "p r u2 f ec0 s o1 r ec0 x",
	"profeta": "p r u2 f ee1 t ac2",
	"profetas": "p r u2 f ee1 t ac2 x",
	"proparoxítona": "p r oo2 p ac2 r oo2 k s i1 t u2 n ac2",
	"proparoxítonas": "p r oo2 p ac2 r oo2 k s i1 t u2 n ac2 x",
	"prova": "p r oo1 v ac2",
	"provas": "p r oo1 v ac2 x",
	"próxima": "p r oo1 s i2 m ac2",
	"proximidade": "p r oo2 s i2 m i2 d a1 d ec0",
	"próximo": "p r oo1 s i2 m u0",
	"que": "k ec0",
	"queda": "k ee1 d ac2",
	"quedas": "k ee1 d ac2 x",
	"quer": "k ee1 r",
	"querem": "k ee1 r A2 Y",
	"queres": "k ee1 r ec0 x",
	"quero": "k ee1 r u0",
	"quieta": "k i2 ee1 t ac2",
	"quietas": "k i2 ee1 t ac2 x",
	"real": "H e2 a1 L",
	"reais": "H e2 a1 Y x",
	"redor": "H ec0 d oo1 r",
	"reflexo": "H ec0 f l ee1 k s u0",
	"reflexos": "H ec0 f l ee1 k s u2 x",
	"reforço": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "H ec0 f o1 r s u0" },
          { type: "verbo", ipa: "H ec0 f oo1 r s u0" }
      ]
	},
	"reforços": "H ec0 f oo1 r s u2 x",
	"regra": "H ee1 g r ac2",
	"regras": "H ee1 g r ac2 x",
	"resta": "H ee1 x t ac2",
	"resto": "H ee1 x t u0",
	"restos": "H ee1 x t u2 x",
	"reta": "H ee1 t ac2",
	"retas": "H ee1 t ac2 x",
	"retorno": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "H ec0 t o1 r n u0" },
	      { type: "verbo", ipa: "H ec0 t oo1 r n u0" }
      ]
	},
	"roda": "H oo1 d ac2",
	"rodas": "H oo1 d ac2 x",
	"rolo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "H o1 l u0" },
          { type: "verbo", ipa: "H oo1 l u0" }
      ]
	},
	"rosto": "H o1 x t u0",
	"rostos": "H o1 x t u2 x",
	"rota": "H oo1 t ac2",
	"rotas": "H oo1 t ac2 x",
	"roxa": "H o1 x ac2",
	"roxo": "H o1 x u0",
	"sabonete": "s ac2 b u2 n e1 t ec0",
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
	"secreta": "s ec0 k r ee1 t ac2",
	"secretas": "s ec0 k r ee1 t ac2 x",
	"sede": {
	  default : "sensação",
	  entries : [
	      { type: "sensação", ipa: "s e1 d ec0" },
          { type: "local", ipa: "s ee1 d ec0" }
      ]
	},
	"seis": "s ac1 Y x",
	"selo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s e1 l u0" },
          { type: "verbo", ipa: "s ee1 l u0" }
      ]
	},
	"sem": "s A2 Y",
	"senhor": "s ec0 nh o1 r",
	"senhora": "s ec0 nh oo1 r ac2",
	"senhoras": "s ec0 nh oo1 r ac2 x",
	"senhores": "s ec0 nh o1 r ec0 x",
	"sequência": "s ec0 k w E1 s y ac2",
	"sequências": "s ec0 k w E1 s y ac2 x",
	"sequestro": "s ec0 k w ee1 x t r u0",
	"sequestros": "s ec0 k w ee1 x t r u2 x",
	"seta": "s ee1 t ac2",
	"setas": "s ee1 t ac2 x",
	"sete": "s ee1 t ec0",
	"sexta": "s ac1 Y x t ac2",
	"sextas": "s ac1 Y x t ac2 x",
	"sintaxe": "s I2 t a1 s ec0",
	"site": "s a1 Y t ec0",
	"sites": "s a1 Y t ec0 x",
	"sobre": {
	  default : "preposição",
	  entries : [
	      { type: "preposição", ipa: "s o1 b r ec0" },
	      { type: "verbo", ipa: "s oo1 b r ec0" }
      ]
	},
	"soco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s o1 k u0" },
          { type: "verbo", ipa: "s oo1 k u0" }
      ]
	},
	"socorros": "s u2 k oo1 H u2 x",
	"sogra": "s oo1 g r ac2",
	"sogras": "s oo1 g r ac2 x",
	"sogro": "s o1 g r u0",
	"sogros": "s oo1 g r u2 x",
	"sola": "s oo1 l ac2",
	"solas": "s oo1 l ac2 x",
	"solo": "s oo1 l u0",
	"solos": "s oo1 l u2 x",
	"somente": "s oo2 m E1 t ec0",
	"sopa": "s oo1 p ac2",
	"sopas": "s oo1 p ac2 x",
	"sopro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s o1 p r u0" },
          { type: "verbo", ipa: "s oo1 p r u0" }
      ]
	},
	"sorte": "s oo1 r t ec0",
	"sossego": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s u2 s e1 g u0" },
	      { type: "verbo", ipa: "s u2 s ee1 g u0" }
      ]
	},
	"sozinha": "s oo2 z i1 nh ac2",
	"sozinhas": "s oo2 z i1 nh ac2 x",
	"sozinho": "s oo2 z i1 nh u0",
	"sozinhos": "s oo2 z i1 nh u2 x",
	"suor": "s u2 oo1 r",
	"suporte": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s u2 p o1 r t ec0" },
          { type: "verbo", ipa: "s u2 p oo1 r t ec0" }
      ]
	},
	"tabela": "t ac2 b ee1 l ac2",
	"tabelas": "t ac2 b ee1 l ac2 x",
	"táxi": "t a1 k s i2",
	"táxis": "t a1 k s i2 x",
	"taxista": "t ac2 k s i1 x t ac2",
	"taxistas": "t ac2 k s i1 x t ac2 x",
	"te": "t ec0",
	"teatro": "t e2 a1 t r u0",
	"teatros": "t e2 a1 t r u2 x",
	"tela": "t ee1 l ac2",
	"telas": "t ee1 l ac2 x",
	"telemóvel": "t ec0 l ec0 m oo1 v ec0 L",
	"telemóveis": "t ec0 l ec0 m oo1 v ac2 Y x",
	"tempero": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t E2 p e1 r u0" },
	      { type: "verbo", ipa: "t E2 p ee1 r u0" }
      ]
	},
	"terça": "t ee1 r s ac2",
	"testa": "t ee1 x t ac2",
	"testas": "t ee1 x t ac2 x",
	"terra": "t ee1 H ac2",
	"terras": "t ee1 H ac2 x",
	"teve": "t e1 v ec0",
	"texto": "t ac1 Y x t u0",
	"textos": "t ac1 Y x t u2 x",
	"tigela": "t i2 j ee1 l ac2",
	"tigelas": "t i2 j ee1 l ac2 x",
	"tijolo": "t i2 j o1 l u0",
	"tijolos": "t i2 j oo1 l u2 x",
	"toco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t o1 k u0" },
          { type: "verbo", ipa: "t oo1 k u0" }
      ]
	},
	"toque": "t oo1 k ec0",
	"toques": "t oo1 k ec0 x",
	"torta": "t oo1 r t ac2",
	"tortas": "t oo1 r t ac2 x",
	"tortos": "t oo1 r t u2 x",
	"tóxico": "t oo1 k s i2 k u0",
	"tóxicos": "t oo1 k s i2 k u2 x",
	"tranquila": "t r A2 k w i1 l ac2",
	"tranquilas": "t r A2 k w i1 l ac2 x",
	"tranquilidade": "t r A2 k w i2 l i2 d a1 d ec0",
	"tranquilo": "t r A2 k w i1 l u0",
	"tranquilos": "t r A2 k w i1 l u2 x",
	"transporte": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t r A2 x p o1 r t ec0" },
          { type: "verbo", ipa: "t r A2 x p oo1 r t ec0" }
      ]
	},
	"transtorno": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t r A2 x t o1 r n u0" },
	      { type: "verbo", ipa: "t r A2 x t oo1 r n u0" }
      ]
	},
	"treze": "t r e1 z ec0",
	"troco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t r o1 k u0" },
          { type: "verbo", ipa: "t r oo1 k u0" }
      ]
	},
	"trouxe": "t r o1 s ec0",
	"trouxeram": "t r o2 s e1 r A2 W",
	"um": "U2",
	"uma": "u2 m ac2",
	"umas": "u2 m ac2 x",
	"uns": "U2 x",
	"veem": "v e1 A2 Y",
	"vela": "v ee1 l ac2",
	"velas": "v ee1 l ac2 x",
	"velha": "v ee1 lh ac2",
	"velhas": "v ee1 lh ac2 x",
	"velho": "v ee1 lh u0",
	"velhos": "v ee1 lh u2 x",
	"verde": "v e1 r d ec0",
	"verdes": "v e1 r d ec0 x",
	"viola": "v i2 oo1 l ac2",
	"violas": "v i2 oo1 l ac2 x",
	"você": "v u2 s e1",
	"vocês": "v u2 s e1 x",
	"volta": "v oo1 L t ac2",
	"voltam": "v oo1 L t A2 W",
	"volto": "v oo1 L t u0",
	"vos": "v u2 x",
	"vós": "v oo1 x",
	"vossa": "v oo1 s ac2",
	"vossas": "v oo1 s ac2 x",
	"vosso": "v oo1 s u0",
	"vossos": "v oo1 s u2 x",
	"wifi": "w a2 Y f a1 Y",
	"zebra": "z ee1 b r ac2",
	"zebras": "z ee1 b r ac2 x",
	"zelo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "z e1 l u0" },
          { type: "verbo", ipa: "z ee1 l u0" }
      ]
	},
	"zero": "z ee1 r u0",
	"zeros": "z ee1 r u2 x"
};
