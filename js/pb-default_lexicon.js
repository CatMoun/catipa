// =====================================
// Catipa*pb – Codificação Fonêmica-Fonética para o Português Brasileiro
// Version: Neutro
// Copyright (c) 2019–2026 Junia da Costa
// Licensed under the MIT License
// =====================================

const LEXICON = {
	"a": "a0",
	"abacaxi": "a2 b a2 k a2 x i1",
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
	"abelha": "a2 b e1 lh a0",
	"abelhas": "a2 b e1 lh a0 s",
	"aberta": "a2 b ee1 h t a0",
	"abertamente": "a2 b ee2 h t a2 m E1 tch i0",
	"abertas": "a2 b ee1 h t a0 s",
	"aberto": "a2 b ee1 h t u0",
	"abertos": "a2 b ee1 h t u0 s",
	"abordam": "a2 b oo1 h d A0 W",
	"abordem": "a2 b oo1 h d E0 Y",
	"abordo": "a2 b oo1 h d u0",
	"aborto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 b o1 h t u0" },
          { type: "verbo", ipa: "a2 b oo1 h t u0" }
      ]
	},
	"abre-alas": "a2 b r i2 a1 l a0 s",
	"acessa": "a2 s ee1 s a0",
	"acessam": "a2 s ee1 s A0 W",
	"acesso": "a2 s ee1 s u0",
	"acessos": "a2 s ee1 s u0 s",
	"acontece": "a2 k O2 t ee1 s i0",
	"acontecem": "a2 k O2 t ee1 s E0 Y",
	"acordo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 k o1 h d u0" },
          { type: "verbo", ipa: "a2 k oo1 h d u0" }
      ]
	},
	"adora": "a2 d oo1 r a0",
	"adoram": "a2 d oo1 r A0 W",
	"adoro": "a2 d oo1 r u0",
	"agora": "a2 g oo1 r a0",
	"aguenta": "a2 g w E1 t a0",
	"aguentada": "a2 g w E2 t a1 d a0",
	"aguentadas": "a2 g w E2 t a1 d a0 s",
	"aguentado": "a2 g w E2 t a1 d u0",
	"aguentados": "a2 g w E2 t a1 d u0 s",
	"aguentais": "a2 g w E2 t a1 Y s",
	"aguentam": "a2 g w E1 t A0 W",
	"aguentamos": "a2 g w E2 t A1 m u0 s",
	"aguentando": "a2 g w E2 t A1 d u0",
	"aguentar": "a2 g w E2 t a1 h",
	"aguentará": "a2 g w E2 t a2 r a1",
	"aguentaram": "a2 g w E2 t a1 r A0 W",
	"aguentarão": "a2 g w E2 t a2 r A1 W",
	"aguentarás": "a2 g w E2 t a2 r a1 s",
	"aguentardes": "a2 g w E2 t a1 h dj i0 s",
	"aguentarei": "a2 g w E2 t a2 r e1 Y",
	"aguentareis": "a2 g w E2 t a2 r e1 Y s",
	"aguentarem": "a2 g w E2 t a1 r E0 Y",
	"aguentaremos": "a2 g w E2 t a2 r ee1 m u0 s",
	"aguentares": "a2 g w E2 t a1 r i0 s",
	"aguentaria": "a2 g w E2 t a2 r i1 a0",
	"aguentariam": "a2 g w E2 t a2 r i1 A0 W",
	"aguentaríamos": "a2 g w E2 t a2 r i1 a2 m u0 s",
	"aguentarias": "a2 g w E2 t a2 r i1 a0 s",
	"aguentaríeis": "a2 g w E2 t a2 r i1 e2 Y s",
	"aguentarmos": "a2 g w E2 t a1 h m u0 s",
	"aguentas": "a2 g w E1 t a0 s",
	"aguentasse": "a2 g w E2 t a1 s i0",
	"aguentásseis": "a2 g w E2 t a1 s e2 Y s",
	"aguentassem": "a2 g w E2 t a1 s E0 Y",
	"aguentássemos": "a2 g w E2 t a1 s e2 m u0 s",
	"aguentasses": "a2 g w E2 t a1 s i0 s",
	"aguentaste": "a2 g w E2 t a1 s tch i0",
	"aguentastes": "a2 g w E2 t a1 s tch i0 s",
	"aguentava": "a2 g w E2 t a1 v a0",
	"aguentavam": "a2 g w E2 t a1 v A0 W",
	"aguentávamos": "a2 g w E2 t a1 v a2 m u0 s",
	"aguentavas": "a2 g w E2 t a1 v a0 s",
	"aguentáveis": "a2 g w E2 t a1 v e0 Y s",
	"aguente": "a2 g w E1 tch i0",
	"aguentei": "a2 g w E2 t e1 Y",
	"aguenteis": "a2 g w E2 t e1 Y s",
	"aguentem": "a2 g w E1 t E0 Y",
	"aguentemos": "a2 g w E2 t ee1 m u0 s",
	"aguentes": "a2 g w E1 tch i0 s",
	"aguento": "a2 g w E1 t u0",
	"aguentou": "a2 g w E2 t o1 W",
	"ainda": "a2 I1 d a0",
	"alegre": "a2 l ee1 g r i0",
	"almoça": "a2 W m oo1 s a0",
	"almoço": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 W m o1 s u0" },
          { type: "verbo", ipa: "a2 W m oo1 s u0" }
      ]
	},
	"almoços": "a2 W m o1 s u0 s",
	"amarela": "a2 m a2 r ee1 l a0",
	"amarelas": "a2 m a2 r ee1 l a0 s",
	"amarelo": "a2 m a2 r ee1 l u0",
	"amarelos": "a2 m a2 r ee1 l u0 s",
	"ame": "A1 m i0",
	"amo": "A1 m u0",
	"amor": "a2 m o1 h",
	"amores": "a2 m o1 r i0 s",
	"anexo": "a2 n ee1 k s u0",
	"anexos": "a2 n ee1 k s u0 s",
	"apelo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 p e1 l u0" },
          { type: "verbo", ipa: "a2 p ee1 l u0" }
      ]
	},
	"aperto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 p e1 h t u0" },
          { type: "verbo", ipa: "a2 p ee1 h t u0" }
      ]
	},
	"apoio": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "a2 p o1 y u0" },
          { type: "verbo", ipa: "a2 p oo1 y u0" }
      ]
	},
	"aposta": "a2 p oo1 s t a0",
	"apostas": "a2 p oo1 s t a0 s",
	"aquela": "a2 k ee1 l a0",
	"aquelas": "a2 k ee1 l a0 s",
	"aquele": "a2 k e1 l i0",
	"aqueles": "a2 k e1 l i0 s",
	"arroz": "a2 h o1 s",
	"as": "a0 s",
	"auxílio": "a2 W s i1 l y u0",
	"auxílios": "a2 W s i1 l y u0 s",
	"basquete": "b a2 s k ee1 tch i0",
	"bebe": "b ee1 b i0",
	"bebem": "b ee1 b E0 Y",
	"bebo": "b e1 b u0",
	"beco": "b e1 k u0",
	"becos": "b e1 k u0 s",
	"bênção": "b E1 s A0 W",
	"bênçãos": "b E1 s A0 W s",
	"bicicleta": "b i2 s i2 k l ee1 t a0",
	"bilhete": "b i2 lh e1 tch i0",
	"blog": "b l oo1 g i0",
	"blogs": "b l oo1 g i0 s",
	"boca": "b o1 k a0",
	"bocas": "b o1 k a0 s",
	"bola": "b oo1 l a0",
	"bolas": "b oo1 l a0 s",
	"boleto": "b o2 l e1 t u0",
	"boletos": "b o2 l e1 t u0 s",
	"bolsa": "b o1 W s a0",
	"bolsas": "b o1 W s a0 s",
	"bolso": "b o1 W s u0",
	"bolsos": "b o1 W s u0 s",
	"bosque": "b oo1 s k i0",
	"bosques": "b oo1 s k i0 s",
	"bota": "b oo1 t a0",
	"botas": "b oo1 t a0 s",
	"bruxa": "b r u1 x a0",
	"cabeça": "k a2 b e1 s a0",
	"cabeças": "k a2 b e1 s a0 s",
	"cabelo": "k a2 b e1 l u0",
	"cabelos": "k a2 b e1 l u0 s",
	"câmera": "k A1 m e2 r a0",
	"câmeras": "k A1 m e2 r a0 s",
	"canela": "k a2 n ee1 l a0",
	"caneta": "k a2 n e1 t a0",
	"canetas": "k a2 n e1 t a0 s",
	"castelo": "k a2 s t ee1 l u0",
	"castelos": "k a2 s t ee1 l u0 s",
	"capacete": "k a2 p a2 s e1 tch i0",
	"caroço": "k a2 r o1 s u0",
	"caroços": "k a2 r oo1 s u0 s",
	"cebola": "s e2 b o1 l a0",
	"cebolas": "s e2 b o1 l a0 s",
	"cedo": "s e1 d u0",
	"cerca": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s e1 h k a0" },
          { type: "verbo", ipa: "s ee1 h k a0" }
      ]
	},
	"certa": "s ee1 h t a0",
	"certas": "s ee1 h t a0 s",
	"certo": "s ee1 h t u0",
	"certos": "s ee1 h t u0 s",
	"cerveja": "s e2 h v e1 j a0",
	"cervejas": "s e2 h v e1 j a0 s",
	"chega": "x e1 g a0",
	"chegam": "x e1 g A0 W",
	"chego": "x e1 g u0",
	"chinelo": "x i2 n ee1 l u0",
	"chinelos": "x i2 n ee1 l u0 s",
	"chip": "x i1 p i0",
	"chips": "x i1 p i0 s",
	"com": "k O0",
	"choro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "x o1 r u0" },
          { type: "verbo", ipa: "x oo1 r u0" }
      ]
	},
	"cobra": "k oo1 b r a0",
	"cobras": "k oo1 b r a0 s",
	"coco": "k o1 k u0",
	"cocos": "k o1 k u0 s",
	"cola": "k oo1 l a0",
	"colega": "k o2 l ee1 g a0",
	"colegas": "k o2 l ee1 g a0 s",
	"colher": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k o2 lh ee1 h" },
          { type: "verbo", ipa: "k o2 lh e1 h" }
      ]
	},
	"colheres": "k o2 lh ee1 r i0 s",
	"colo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k o1 l u0" },
          { type: "verbo", ipa: "k oo1 l u0" }
      ]
	},
	"come": "k oo1 m i0",
	"comem": "k oo1 m E0 Y",
	"começa": "k o2 m ee1 s a0",
	"começo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k o2 m e1 s u0" },
          { type: "verbo", ipa: "k o2 m ee1 s u0" }
      ]
	},
	"como": "k o1 m u0",
	"complexa": "k O2 p l ee1 k s a0",
	"complexo": "k O2 p l ee1 k s u0",
	"complexos": "k O2 p l ee1 k s u0 s",
	"conexão": "k o2 n e2 k s A1 W",
	"conhece": "k o2 nh ee1 s i0",
	"conhecem": "k o2 nh ee1 s E0 Y",
	"conheço": "k o2 nh e1 s u0",
	"conserto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k O2 s e1 h t u0" },
          { type: "verbo", ipa: "k O2 s ee1 h t u0" }
      ]
	},
	"consolo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k O2 s o1 l u0" },
          { type: "verbo", ipa: "k O2 s oo1 l u0" }
      ]
	},
	"contexto": "k O2 t e1 s t u0",
	"contextos": "k O2 t e1 s t u0 s",
	"copo": "k oo1 p u0",
	"copos": "k oo1 p u0 s",
	"cor": "k o1 h",
	"cores": "k o1 r i0 s",
	"corpo": "k o1 h p u0",
	"corpos": "k oo1 h p u0 s",
	"corre": "k oo1 h i0",
	"correm": "k oo1 h E0 Y",
	"corro": "k oo1 h u0",
	"corta": "k oo1 h t a0",
	"cortam": "k oo1 h t A0 W",
	"corte": {
	  default : "cortar",
	  entries : [
	      { type: "cortar", ipa: "k oo1 h tch i0" },
          { type: "nobreza", ipa: "k o1 h tch i0" }
      ]
	},
	"corto": "k oo1 h t u0",
	"costas": "k oo1 s t a0 s",
	"cotovelo": "k o2 t o2 v e1 l u0",
	"cotovelos": "k o2 t o2 v e1 l u0 s",
	"coxa": "k o1 x a0",
	"coxas": "k o1 x a0 s",
	"coxinha": "k o2 x i1 nh a0",
	"da": "d a0",
	"das": "d a0 s",
	"de": "dj i0",
	"dedo": "d e1 d u0",
	"dedos": "d e1 d u0 s",
	"dela": "d ee1 l a0",
	"delas": "d ee1 l a0 s",
	"dele": "d e1 l i0",
	"deles": "d e1 l i0 s",
	"design": "dj i2 z a1 I0",
	"designer": "dj i2 z a1 Y n e2 h",
	"dessa": "d ee1 s a0",
	"dessas": "d ee1 s a0 s",
	"desse": "d e1 s i0",
	"desses": "d e1 s i0 s",
	"desta": "d ee1 s t a0",
	"destas": "d ee1 s t a0 s",
	"deste": "d e1 s tch i0",
	"destes": "d e1 s tch i0 s",
	"dez": "d ee1 s",
	"do": "d u0",
	"dor": "d o1 h",
	"dores": "d o1 r i0 s",
	"dorme": "d oo1 h m i0",
	"dormem": "d oo1 h m E0 Y",
	"dos": "d u0 s",
	"doutor": "d o2 W t o1 h",
	"doutora": "d o2 W t o1 r a0",
	"doutoras": "d o2 W t o1 r a0 s",
	"doutores": "d o2 W t o1 r i0 s",
	"doze": "d o1 z i0",
	"e": "i0",
	"ela": "ee1 l a0",
	"elas": "ee1 l a0 s",
	"ele": "e1 l i0",
	"email": "i2 m e1 y u0",
	"em": "E0 Y",
	"embora": "E2 b oo1 r a0",
	"emprego": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "E2 p r e1 g u0" },
          { type: "verbo", ipa: "E2 p r ee1 g u0" }
      ]
	},
	"empregos": "E2 p r e1 g u0 s",
	"encosto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "E2 k o1 s t u0" },
          { type: "verbo", ipa: "E2 k oo1 s t u0" }
      ]
	},
	"entrega": "E2 t r ee1 g a0",
	"envolto": "E2 v o1 W t u0",
	"era": "ee1 r a0",
	"eram": "ee1 r A0 W",
	"erro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "e1 h u0" },
          { type: "verbo", ipa: "ee1 h u0" }
      ]
	},
	"escola": "e2 s k oo1 l a0",
	"escolas": "e2 s k oo1 l a0 s",
	"escolha": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "e2 s k o1 lh a0" },
          { type: "verbo", ipa: "e2 s k oo1 lh a0" }
      ]
	},
	"escolhas": "e2 s k o1 lh a0 s",
	"escolhe": "e2 s k oo1 lh i0",
	"escolhem": "e2 s k oo1 lh E0 Y",
	"escolho": "e2 s k oo1 lh u0",
	"escova": "e2 s k o1 v a0",
	"escovas": "e2 s k o1 v a0 s",
	"esfera": "e2 s f ee1 r a0",
	"esferas": "e2 s f ee1 r a0 s",
	"esforço": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "e2 s f o1 h s u0" },
          { type: "verbo", ipa: "e2 s f oo1 h s u0" }
      ]
	},
	"esforços": "e2 s f oo1 h s u0 s",
	"espera": "e2 s p ee1 r a0",
	"esporte": "e2 s p oo1 h tch i0",
	"esportes": "e2 s p oo1 h tch i0 s",
	"esposa": "e2 s p o1 z a0",
	"esposas": "e2 s p o1 z a0 s",
	"esquece": "e2 s k ee1 s i0",
	"esquecem": "e2 s k ee1 s E0 Y",
	"esqueço": "e2 s k e1 s u0",
	"esquerda": "e2 s k e1 h d a0",
	"esquerdo": "e2 s k e1 h d u0",
	"essa": "ee1 s a0",
	"essas": "ee1 s a0 s",
	"esse": "e1 s i0",
	"esses": "e1 s i0 s",
	"esta": "ee1 s t a0",
	"estas": "ee1 s t a0 s",
	"este": "e1 s tch i0",
	"estes": "e1 s tch i0 s",
	"exagero": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "e2 z a2 j e1 r u0" },
          { type: "verbo", ipa: "e2 z a2 j ee1 r u0" }
      ]
	},
	"exame": "e2 z A1 m i0",
	"exames": "e2 z A1 m i0 s",
	"exata": "e2 z a1 t a0",
	"exatas": "e2 z a1 t a0 s",
	"exato": "e2 z a1 t u0",
	"exatos": "e2 z a1 t u0 s",
	"exemplo": "e2 z E1 p l u0",
	"exemplos": "e2 z E1 p l u0 s",
	"exercício": "e2 z e2 h s i1 s y u0",
	"exercícios": "e2 z e2 h s i1 s y u0 s",
	"exército": "e2 z ee1 h s i2 t u0",
	"exércitos": "e2 z ee1 h s i2 t u0 s",
	"exige": "e2 z i1 j i0",
	"exigem": "e2 z i1 j E0 Y",
	"existe": "e2 z i1 s tch i0",
	"existem": "e2 z i1 s t E0 Y",
	"existir": "e2 z i2 s tch i1 h",
	"facebook": "f e2 Y s i2 b u1 k i0",
	"farofa": "f a2 r oo1 f a0",
	"faxina": "f a2 x i1 n a0",
	"febre": "f ee1 b r i0",
	"fecha": "f ee1 x a0",
	"fecham": "f ee1 x A0 W",
	"fecho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f e1 x u0" },
          { type: "verbo", ipa: "f ee1 x u0" }
      ]
	},
	"fera": "f ee1 r a0",
	"feras": "f ee1 r a0 s",
	"ferro": "f ee1 h u0",
	"ferros": "f ee1 h u0 s",
	"festa": "f ee1 s t a0",
	"festas": "f ee1 s t a0 s",
	"fixa": "f i1 k s a0",
	"fixas": "f i1 k s a0 s",
	"fixo": "f i1 k s u0",
	"fixos": "f i1 k s u0 s",
	"flor": "f l o1 h",
	"flores": "f l o1 r i0 s",
	"foco": "f oo1 k u0",
	"focos": "f oo1 k u0 s",
	"fogo": "f o1 g u0",
	"fogos": "f oo1 g u0 s",
	"fome": "f o1 m i0",
	"fone": "f o1 n i0",
	"fora": "f oo1 r a0",
	"foram": "f o1 r A0 W",
	"força": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f o1 h s a0" },
          { type: "verbo", ipa: "f oo1 h s a0" }
      ]
	},
	"forças": "f o1 h s a0 s",
	"forma": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f o1 h m a0" },
          { type: "verbo", ipa: "f oo1 h m a0" }
      ]
	},
	"forro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f o1 h u0" },
          { type: "verbo", ipa: "f oo1 h u0" }
      ]
	},
	"forte": "f oo1 h tch i0",
	"fortes": "f oo1 h tch i0 s",
	"foto": "f oo1 t u0",
	"fotos": "f oo1 t u0 s",
	"futebol": "f u2 tch i2 b oo1 W",
	"garota": "g a2 r o1 t a0",
	"garotas": "g a2 r o1 t a0 s",
	"garoto": "g a2 r o1 t u0",
	"garotos": "g a2 r o1 t u0 s",
	"gay": "g e1 Y",
	"gays": "g e1 Y s",
	"gelo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "j e1 l u0" },
          { type: "verbo", ipa: "j ee1 l u0" }
      ]
	},
	"globo": "g l o1 b u0",
	"globos": "g l o1 b u0 s",
	"gorda": "g o1 h d a0",
	"gordas": "g o1 h d a0 s",
	"gordo": "g o1 h d u0",
	"gordos": "g o1 h d u0 s",
	"gosta": "g oo1 s t a0",
	"gostam": "g oo1 s t A0 W",
	"gostas": "g oo1 s t a0 s",
	"gosto": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "g o1 s t u0" },
          { type: "verbo", ipa: "g oo1 s t u0" }
      ]
	},
	"gostosa": "g oo2 s t oo1 z a0",
	"gostosas": "g oo2 s t oo1 z a0 s",
	"gota": "g o1 t a0",
	"gotas": "g o1 t a0 s",
	"governo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "g o2 v e1 h n u0" },
          { type: "verbo", ipa: "g o2 v ee1 h n u0" }
      ]
	},
	"guerra": "g ee1 h a0",
	"guerras": "g ee1 h a0 s",
	"hambúrguer": "A2 b u1 h g e2 h",
	"hambúrgueres": "A2 b u1 h g e2 r i0 s",
	"hobby": "h oo1 b i0",
	"hoje": "o1 j i0",
	"homem": "o1 m E0 Y",
	"homens": "o1 m E0 Y s",
	"hora": "oo1 r a0",
	"horas": "oo1 r a0 s",
	"horta": "oo1 h t a0",
	"hortas": "oo1 h t a0 s",
	"ideia": "i2 d ee1 Y a0",
	"ideias": "i2 d ee1 Y a0 s",
	"idiota": "i2 dj i2 oo1 t a0",
	"idiotas": "i2 dj i2 oo1 t a0 s",
	"igreja": "i2 g r e1 j a0",
	"igrejas": "i2 g r e1 j a0 s",
	"importa": "I2 p oo1 h t a0",
	"importam": "I2 p oo1 h t A0 W",
	"imposto": "I2 p o1 s t u0",
	"impostos": "I2 p oo1 s t u0 s",
	"index": "I2 d ee1 k s",
	"indexa": "I2 d ee1 k s a0",
	"indexam": "I2 d ee1 k s A0 W",
	"indexar": "I2 d e2 k s a1 h",
	"indexaram": "I2 d e2 k s a1 r A0 W",
	"indexarão": "I2 d e2 k s a2 r A1 W",
	"indexou": "I2 d e2 k s o1 W",
	"internet": "I2 t e2 h n ee1 tch i0",
	"janela": "j a2 n ee1 l a0",
	"janelas": "j a2 n ee1 l a0 s",
	"jeans": "dj I1 s",
	"joelho": "j o2 e1 lh u0",
	"joelhos": "j o2 e1 lh u0 s",
	"joga": "j oo1 g a0",
	"jogam": "j oo1 g A0 W",
	"jogo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "j o1 g u0" },
          { type: "verbo", ipa: "j oo1 g u0" }
      ]
	},
	"jogos": "j oo1 g u0 s",
	"joia": "j oo1 Y a0",
	"joias": "j oo1 Y a0 s",
	"juiz": "j u2 i1 s",
	"laser": "l e1 Y z e2 h",
	"leite": "l e1 Y tch i0",
	"leva": "l ee1 v a0",
	"levam": "l ee1 v A0 W",
	"levo": "l ee1 v u0",
	"link": "l I1 k i0",
	"links": "l I1 k i0 s",
	"lixeira": "l i2 x e1 Y r a0",
	"lixo": "l i1 x u0",
	"lobo": "l o1 b u0",
	"lobos": "l o1 b u0 s",
	"logo": "l oo1 g u0",
	"loguinho": "l oo2 g i1 nh u0",
	"loguinhos": "l oo2 g i1 nh u0 s",
	"loja": "l oo1 j a0",
	"lojas": "l oo1 j a0 s",
	"luxo": "l u1 x u0",
	"maior": "m a2 y oo1 h",
	"maiores": "m a2 y oo1 r i0 s",
	"mail": "m e1 y u0",
	"marketing": "m a1 h k e2 tch I0",
	"martelo": "m a2 h t ee1 l u0",
	"mas": "m a0 s",
	"máximo": "m a1 s i2 m u0",
	"me": "m i0",
	"medo": "m e1 d u0",
	"medos": "m e1 d u0 s",
	"melhor": "m e2 lh oo1 h",
	"melhores": "m e2 lh oo1 r i0 s",
	"menor": "m e2 n oo1 h",
	"menores": "m e2 n oo1 r i0 s",
	"merece": "m e2 r ee1 s i0",
	"merecem": "m e2 r ee1 s E0 Y",
	"mereço": "m e2 r e1 s u0",
	"mesa": "m e1 z a0",
	"mesas": "m e1 z a0 s",
	"mexe": "m ee1 x i0",
	"mexer": "m e2 x e1 h",
	"miolo": "m i2 o1 l u0",
	"miolos": "m i2 oo1 l u0 s",
	"moça": "m o1 s a0",
	"moças": "m o1 s a0 s",
	"moço": "m o1 s u0",
	"moços": "m o1 s u0 s",
	"moda": "m oo1 d a0",
	"modas": "m oo1 d a0 s",
	"modelo": "m o2 d ee1 l u0",
	"moeda": "m o2 ee1 d a0",
	"moedas": "m o2 ee1 d a0 s",
	"molho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 lh u0" },
          { type: "verbo", ipa: "m oo1 lh u0" }
      ]
	},
	"mora": "m oo1 r a0",
	"moram": "m oo1 r A0 W",
	"moro": "m oo1 r u0",
	"morre": "m oo1 h i0",
	"morrem": "m oo1 h E0 Y",
	"morro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 h u0" },
          { type: "verbo", ipa: "m oo1 h u0" }
      ]
	},
	"morta": "m oo1 h t a0",
	"mortas": "m oo1 h t a0 s",
	"morte": "m oo1 h tch i0",
	"mortes": "m oo1 h tch i0 s",
	"morto": "m o1 h t u0",
	"mortos": "m oo1 h t u0 s",
	"mostra": "m oo1 s t r a0",
	"mostram": "m oo1 s t r A0 W",
	"mostro": "m oo1 s t r u0",
	"moto": "m oo1 t u0",
	"motos": "m oo1 t u0 s",
	"mouse": "m a1 W z i0",
	"muita": "m U1 Y t a0",
	"muitas": "m U1 Y t a0 s",
	"muito": "m U1 Y t u0",
	"muitos": "m U1 Y t u0 s",
	"mulher": "m u2 lh ee1 h",
	"mulheres": "m u2 lh ee1 r i0 s",
	"na": "n a0",
	"nas": "n a0 s",
	"namora": "n a2 m oo1 r a0",
	"namoro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "n a2 m o1 r u0" },
          { type: "verbo", ipa: "n a2 m oo1 r u0" }
      ]
	},
	"nela": "n ee1 l a0",
	"nelas": "n ee1 l a0 s",
	"nele": "n e1 l i0",
	"neles": "n e1 l i0 s",
	"nem": "n E0 Y",
	"nessa": "n ee1 s a0",
	"nessas": "n ee1 s a0 s",
	"nesse": "n e1 s i0",
	"nesses": "n e1 s i0 s",
	"nesta": "n ee1 s t a0",
	"nestas": "n ee1 s t a0 s",
	"neste": "n e1 s tch i0",
	"nestes": "n e1 s tch i0 s",
	"neta": "n ee1 t a0",
	"netas": "n ee1 t a0 s",
	"neto": "n ee1 t u0",
	"netos": "n ee1 t u0 s",
	"no": "n u0",
	"nobre": "n oo1 b r i0",
	"noite": "n o1 Y tch i0",
	"nome": "n o1 m i0",
	"nomes": "n o1 m i0 s",
	"nora": "n oo1 r a0",
	"norte": "n oo1 h tch i0",
	"nos": "n u0 s",
	"nossa": "n oo1 s a0",
	"nossas": "n oo1 s a0 s",
	"nosso": "n oo1 s u0",
	"nossos": "n oo1 s u0 s",
	"nota": "n oo1 t a0",
	"notas": "n oo1 t a0 s",
	"notebook": "n oo1 tch i2 b u2 k i0",
	"nova": "n oo1 v a0",
	"novas": "n oo1 v a0 s",
	"nove": "n oo1 v i0",
	"novela": "n o2 v ee1 l a0",
	"novelas": "n o2 v ee1 l a0 s",
	"novo": "n o1 v u0",
	"novos": "n oo1 v u0 s",
	"num": "n U0",
	"numa": "n u2 m a0",
	"numas": "n u2 m a0 s",
	"o": "u0",
	"obra": "oo1 b r a0",
	"obras": "oo1 b r a0 s",
	"ok": "oo2 k e1 Y",
	"olha": "oo1 lh a0",
	"olham": "oo1 lh A0 W",
	"olho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "o1 lh u0" },
          { type: "verbo", ipa: "oo1 lh u0" }
      ]
	},
	"olhos": "oo1 lh u0 s",
	"online": "O2 l a1 Y n i0",
	"ônibus": "o1 n i2 b u0 s",
	"opa": "oo1 p a0",
	"orelha": "o2 r e1 lh a0",
	"orelhas": "o2 r e1 lh a0 s",
	"órfão": "oo1 h f A0 W",
	"órfãos": "oo1 h f A0 W s",
	"órgão": "oo1 h g A0 W",
	"órgãos": "oo1 h g A0 W s",
	"ortodontologia": "oo2 h t o2 d O2 t o2 l o2 g i1 a0",
	"ortodoxo": "oo2 h t oo2 d oo1 k s u0",
	"os": "u0 s",
	"osso": "o1 s u0",
	"ossos": "oo1 s u0 s",
	"ovelha": "o2 v e1 lh a0",
	"ovelhas": "o2 v e1 lh a0 s",
	"ovo": "o1 v u0",
	"ovos": "oo1 v u0 s",
	"panela": "p a2 n ee1 l a0",
	"panelas": "p a2 n ee1 l a0 s",
	"paralela": "p a2 r a2 l ee1 l a0",
	"paralelas": "p a2 r a2 l ee1 l a0 s",
	"paralelo": "p a2 r a2 l ee1 l u0",
	"paralelos": "p a2 r a2 l ee1 l u0 s",
	"parece": "p a2 r ee1 s i0",
	"parecem": "p a2 r ee1 s E0 Y",
	"pareço": "p a2 r e1 s u0",
	"parede": "p a2 r e1 dj i0",
	"paredes": "p a2 r e1 dj i0 s",
	"peça": "p ee1 s a0",
	"peças": "p ee1 s a0 s",
	"pedra": "p ee1 d r a0",
	"pedras": "p ee1 d r a0 s",
	"pega": "p ee1 g a0",
	"pera": "p e1 r a0",
	"peras": "p e1 r a0 s",
	"perto": "p ee1 h t u0",
	"pescoço": "p e2 s k o1 s u0",
	"pescoços": "p e2 s k oo1 s u0 s",
	"peso": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "p e1 z u0" },
          { type: "verbo", ipa: "p ee1 z u0" }
      ]
	},
	"pessoa": "p e2 s o1 a0",
	"pessoas": "p e2 s o1 a0 s",
	"pior": "p i2 oo1 h",
	"piores": "p i2 oo1 r i0 s",
	"pipoca": "p i2 p oo1 k a0",
	"pizza": "p i1 t s a0",
	"pizzas": "p i1 t s a0 s",
	"pobre": "p oo1 b r i0",
	"pobres": "p oo1 b r i0 s",
	"poço": "p o1 s u0",
	"poços": "p oo1 s u0 s",
	"pode": "p oo1 dj i0",
	"pôde": "p o1 dj i0",
	"podem": "p oo1 d E0 Y",
	"porca": "p oo1 h k a0",
	"porcas": "p oo1 h k a0 s",
	"porco": "p o1 h k u0",
	"porcos": "p oo1 h k u0 s",
	"porque": "p o2 h k e1",
	"porquê": "p o2 h k e1",
	"por": "p u2 h",
	"porta": "p oo1 h t a0",
	"portas": "p oo1 h t a0 s",
	"porto": "p o1 h t u0",
	"portos": "p oo1 h t u0 s",
	"posso": "p oo1 s u0",
	"posto": "p o1 s t u0",
	"postos": "p oo1 s t u0 s",
	"povos": "p oo1 v u0 s",
	"pra": "p r a0",
	"pras": "p r a0 s",
	"preço": "p r e1 s u0",
	"preços": "p r e1 s u0 s",
	"presta": "p r ee1 s t a0",
	"preto": "p r e1 t u0",
	"pretos": "p r e1 t u0 s",
	"primavera": "p r i2 m a2 v ee1 r a0",
	"pro": "p r u0",
	"professor": "p r o2 f e2 s o1 h",
	"professora": "p r o2 f e2 s o1 r a0",
	"professoras": "p r o2 f e2 s o1 r a0 s",
	"professores": "p r o2 f e2 s o1 r i0 s",
	"pros": "p r u0 s",
	"proposta": "p r o2 p oo1 s t a0",
	"propostas": "p r o2 p oo1 s t a0 s",
	"prova": "p r oo1 v a0",
	"provas": "p r oo1 v a0 s",
	"próxima": "p r oo1 s i2 m a0",
	"próximo": "p r oo1 s i2 m u0",
	"puxa": "p u1 x a0",
	"puxar": "p u2 x a1 h",
	"puxe": "p u1 x i0",
	"puxou": "p u2 x o1 W",
	"que": "k i0",
	"quebra": "k ee1 b r a0",
	"quer": "k ee1 h",
	"quero": "k ee1 r u0",
	"raiz": "h a2 i1 s",
	"rede": "h e1 dj i0",
	"redes": "h e1 dj i0 s",
	"reflexo": "h e2 f l ee1 k s u0",
	"reflexos": "h e2 f l ee1 k s u0 s",
	"reforço": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "h e2 f o1 h s u0" },
          { type: "verbo", ipa: "h e2 f oo1 h s u0" }
      ]
	},
	"relaxa": "h e2 l a1 x a0",
	"relaxar": "h e2 l a2 x a1 h",
	"resposta": "h e2 s p oo1 s t a0",
	"respostas": "h e2 s p oo1 s t a0 s",
	"resta": "h ee1 s t a0",
	"rock": "h oo1 k i0",
	"roda": "h oo1 d a0",
	"rodas": "h oo1 d a0 s",
	"rolo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "h o1 l u0" },
          { type: "verbo", ipa: "h oo1 l u0" }
      ]
	},
	"roque": "h oo1 k i0",
	"rosto": "h o1 s t u0",
	"rostos": "h o1 s t u0 s",
	"roxa": "h o1 x a0",
	"roxo": "h o1 x u0",
	"sacola": "s a2 k oo1 l a0",
	"sanduíche": "s A2 d u2 i1 x i0",
	"sanduíches": "s A2 d u2 i1 x i0 s",
	"se": "s i0",
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
	"seis": "s e1 Y s",
	"selo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s e1 l u0" },
          { type: "verbo", ipa: "s ee1 l u0" }
      ]
	},
	"sem": "s E0 Y",
	"senhor": "s e2 nh o1 h",
	"senhora": "s e2 nh oo1 r a0",
	"senhoras": "s e2 nh oo1 r a0 s",
	"senhores": "s e2 nh o1 r i0 s",
	"sete": "s ee1 tch i0",
	"sexo": "s ee1 k s u0",
	"sexta": "s ee1 s t a0",
	"sextas": "s ee1 s t a0 s",
	"sexy": "s ee1 k s i0",
	"shopping": "x oo1 p I0",
	"show": "x o1 W",
	"shows": "x o1 W s",
	"sintaxe": "s I2 t a1 s i0",
	"site": "s a1 Y tch i0",
	"sites": "s a1 Y tch i0 s",
	"soco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s o1 k u0" },
          { type: "verbo", ipa: "s oo1 k u0" }
      ]
	},
	"sogra": "s oo1 g r a0",
	"sogras": "s oo1 g r a0 s",
	"sogro": "s o1 g r u0",
	"sogros": "s oo1 g r u0 s",
	"solta": "s oo1 W t a0",
	"sopa": "s oo1 p a0",
	"sopas": "s oo1 p a0 s",
	"sopro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s o1 p r u0" },
          { type: "verbo", ipa: "s oo1 p r u0" }
      ]
	},
	"sorte": "s oo1 h tch i0",
	"sorvete": "s o2 h v e1 tch i0",
	"sorvetes": "s o2 h v e1 tch i0 s",
	"sótão": "s oo1 t A0 W",
	"sótãos": "s oo1 t A0 W s",
	"suporte": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "s u2 p o1 h tch i0" },
          { type: "verbo", ipa: "s u2 p oo1 h tch i0" }
      ]
	},
	"sushi": "s u1 x i0",
	"tapete": "t a2 p e1 tch i0",
	"táxi": "t a1 k s i0",
	"táxis": "t a1 k s i0 s",
	"te": "tch i0",
	"tela": "t ee1 l a0",
	"telas": "t ee1 l a0 s",
	"telefone": "t e2 l e2 f o1 n i0",
	"telefones": "t e2 l e2 f o1 n i0 s",
	"terra": "t ee1 h a0",
	"terras": "t ee1 h a0 s",
	"testa": "t ee1 s t a0",
	"texto": "t e1 s t u0",
	"textos": "t e1 s t u0 s",
	"tijolo": "tch i2 j o1 l u0",
	"tijolos": "tch i2 j oo1 l u0 s",
	"toca": "t oo1 k a0",
	"toco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t o1 k u0" },
          { type: "verbo", ipa: "t oo1 k u0" }
      ]
	},
	"torre": "t o1 h i0",
	"torres": "t o1 h i0 s",
	"torta": "t oo1 h t a0",
	"tortas": "t oo1 h t a0 s",
	"tóxico": "t oo1 k s i2 k u0",
	"tóxicos": "t oo1 k s i2 k u0 s",
	"transando": "t r A2 z A1 d u0",
	"transar": "t r A2 z a1 h",
	"transaram": "t r A2 z a1 r A0 W",
	"transou": "t r A2 z o1 W",
	"transporte": "t r A2 s p oo1 h tch i0",
	"treze": "t r e1 z i0",
	"troco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t r o1 k u0" },
          { type: "verbo", ipa: "t r oo1 k u0" }
      ]
	},
	"trouxe": "t r o1 W s i0",
	"trouxeram": "t r o2 W s e1 r A0 W",
	"um": "U0",
	"uma": "u2 m a0",
	"umas": "u2 m a0 s",
	"uns": "U0 s",
	"vela": "v ee1 l a0",
	"velas": "v ee1 l a0 s",
	"velha": "v ee1 lh a0",
	"velhas": "v ee1 lh a0 s",
	"velho": "v ee1 lh u0",
	"velhos": "v ee1 lh u0 s",
	"verde": "v e1 h dj i0",
	"verdes": "v e1 h dj i0 s",
	"vezes": "v e1 z i0 s",
	"vídeo": "v i1 dj y u0",
	"vídeos": "v i1 dj y u0 s",
	"vôlei": "v o1 l e0 Y",
	"volta": "v oo1 W t a0",
	"voltam": "v oo1 W t A0 W",
	"volto": "v oo1 W t u0",
	"voz": "v oo1 s",
	"whatsapp": "w a2 tch i2 z a1 p i0",
	"wifi": "w a2 Y f a1 Y",
	"xampu": "x A2 p u1",
	"xereca": "x ee2 r ee1 k a0",
	"youtube": "y u2 t u1 b i0",
	"zelo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "z e1 l u0" },
          { type: "verbo", ipa: "z ee1 l u0" }
      ]
	},
	"zero": "z ee1 r u0",
	"zoca": "z oo1 k a0"
};

function showChoicePopup(word, entries, onChoose, titleText) {
  const box = document.getElementById("choiceBox");
  const title = document.getElementById("choiceWord");
  const btn1 = document.getElementById("choice1");
  const btn2 = document.getElementById("choice2");
  const output = document.getElementById("output");
  const input = document.getElementById("input");

  const opt1 = entries[0];
  const opt2 = entries[1];

  title.innerText = titleText || `Escolha a pronúncia de "${word}":`;

  btn1.innerText = opt1.type;
  btn2.innerText = opt2.type;

  function chooseOption(opt) {
    box.style.display = "none";
    document.removeEventListener("keydown", keyHandler);
    if (typeof onChoose === "function") {
      onChoose(opt);
    } else {
      output.innerText = opt.ipa;
      input.focus();
    }
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
