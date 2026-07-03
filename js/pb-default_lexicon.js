// =====================================
// Catipa – Codificação Fonêmica para o Português
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
	"adora": "a2 d oo1 r a0",
	"adoro": "a2 d oo1 r u0",
	"agora": "a2 g oo1 r a0",
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
	"âmago": "A1 m ac2 g u0",
	"âmagos": "A1 m ac2 g u0 s",
	"amarela": "a2 m a2 r ee1 l a0",
	"amarelas": "a2 m a2 r ee1 l a0 s",
	"amarelo": "a2 m a2 r ee1 l u0",
	"amarelos": "a2 m a2 r ee1 l u0 s",
	"ame": "A1 m i0",
	"amo": "A1 m u0",
	"anexo": "a2 n ee1 k s u0",
	"anexos": "a2 n ee1 k s u0 s",
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
	"árabe": "a1 r ac2 b i0",
	"árabes": "a1 r ac2 b i0 s",
	"arroz": "a2 h o1 s",
	"as": "a0 s",
	"beco": "b e1 k u0",
	"becos": "b e1 k u0 s",
	"bicicleta": "b i2 s i2 k l ee1 t a0",
	"bilhete": "b i2 lh e1 tch i0",
	"bola": "b oo1 l a0",
	"bolas": "b oo1 l a0 s",
	"boleto": "b o2 l e1 t u0",
	"boletos": "b o2 l e1 t u0 s",
	"bota": "b oo1 t a0",
	"botas": "b oo1 t a0 s",
	"bruxa": "b r u1 x a0",
	"câmara": "k A1 m ac2 r a0",
	"câmaras": "k A1 m ac2 r a0 s",
	"câmera": "k A1 m e2 r a0",
	"câmeras": "k A1 m e2 r a0 s",
	"canela": "k a2 n ee1 l a0",
	"castelo": "k a2 s t ee1 l u0",
	"castelos": "k a2 s t ee1 l u0 s",
	"capacete": "k a2 p a2 s e1 tch i0",
	"chácara": "x a1 k ac2 r a0",
	"chácaras": "x a1 k ac2 r a0 s",
	"chinelo": "x i2 n ee1 l u0",
	"chinelos": "x i2 n ee1 l u0 s",
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
	"começa": "k o2 m ee1 s a0",
	"começo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "k o2 m e1 s u0" },
          { type: "verbo", ipa: "k o2 m ee1 s u0" }
      ]
	},
	"copo": "k oo1 p u0",
	"copos": "k oo1 p u0 s",
	"corpos": "k oo1 h p u0 s",
	"corro": "k oo1 h u0",
	"costas": "k oo1 s t a0 s",
	"coxa": "k o1 x a0",
	"coxas": "k o1 x a0 s",
	"coxinha": "k o2 x i1 nh a0",
	"da": "d a0",
	"das": "d a0 s",
	"de": "dj i0",
	"dela": "d ee1 l a0",
	"delas": "d ee1 l a0 s",
	"dele": "d e1 l i0",
	"deles": "d e1 l i0 s",
	"design": "dj i2 z a1 I0",
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
	"dos": "d u0 s",
	"doze": "d o1 z i0",
	"e": "i0",
	"ela": "ee1 l a0",
	"elas": "ee1 l a0 s",
	"ele": "e1 l i0",
	"email": "i2 m e1 y u0",
	"em": "E0 Y",
	"embora": "E2 b oo1 r a0",
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
	"espera": "e2 s p ee1 r a0",
	"esposa": "e2 s p o1 z a0",
	"esposas": "e2 s p o1 z a0 s",
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
	"estômago": "e2 s t o1 m ac2 g u0",
	"estômagos": "e2 s t o1 m ac2 g u0 s",
	"farofa": "f a2 r oo1 f a0",
	"faxina": "f a2 x i1 n a0",
	"febre": "f ee1 b r i0",
	"festa": "f ee1 s t a0",
	"festas": "f ee1 s t a0 s",
	"foco": "f oo1 k u0",
	"focos": "f oo1 k u0 s",
	"fogos": "f oo1 g u0 s",
	"fome": "f o1 m i0",
	"fone": "f o1 n i0",
	"fora": "f oo1 r a0",
	"foram": "f o1 r A0 W",
	"forma": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "f o1 h m a0" },
          { type: "verbo", ipa: "f oo1 h m a0" }
      ]
	},
	"foto": "f oo1 t u0",
	"fotos": "f oo1 t u0 s",
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
	"governo": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "g o2 v e1 h n u0" },
          { type: "verbo", ipa: "g o2 v ee1 h n u0" }
      ]
	},
	"hambúrguer": "A2 b u1 h g e2 h",
	"hoje": "o1 j i0",
	"homem": "o1 m E0 Y",
	"homens": "o1 m E0 Y s",
	"hora": "oo1 r a0",
	"horas": "oo1 r a0 s",
	"ideia": "i2 d ee1 Y a0",
	"ideias": "i2 d ee1 Y a0 s",
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
	"joga": "j oo1 g a0",
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
	"lâmpada": "l A1 p ac2 d a0",
	"lâmpadas": "l A1 p ac2 d a0 s",
	"leite": "l e1 Y tch i0",
	"leva": "l ee1 v a0",
	"lixeira": "l i2 x e1 Y r a0",
	"lixo": "l i1 x u0",
	"logo": "l oo1 g u0",
	"loguinho": "l oo2 g i1 nh u0",
	"loguinhos": "l oo2 g i1 nh u0 s",
	"loja": "l oo1 j a0",
	"lojas": "l oo1 j a0 s",
	"luxo": "l u1 x u0",
	"lusíada": "l u2 z i1 ac2 d a0",
	"lusíadas": "l u2 z i1 ac2 d a0 s",
	"maior": "m a2 y oo1 h",
	"maiores": "m a2 y oo1 r i0 s",
	"mail": "m e1 y u0",
	"marketing": "m a1 h k e2 tch I0",
	"martelo": "m a2 h t ee1 l u0",
	"máscara": "m a1 s k ac2 r a0",
	"máscaras": "m a1 s k ac2 r a0 s",
	"máximo": "m a1 s i2 m u0",
	"me": "m i0",
	"melhor": "m e2 lh oo1 h",
	"melhores": "m e2 lh oo1 r i0 s",
	"menor": "m e2 n oo1 h",
	"menores": "m e2 n oo1 r i0 s",
	"mexe": "m ee1 x i0",
	"mexer": "m e2 x e1 h",
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
	"moro": "m oo1 r u0",
	"morro": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "m o1 h u0" },
          { type: "verbo", ipa: "m oo1 h u0" }
      ]
	},
	"mortos": "m oo1 h t u0 s",
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
	"no": "n u0",
	"nobre": "n oo1 b r i0",
	"noite": "n o1 Y tch i0",
	"nome": "n o1 m i0",
	"nomes": "n o1 m i0 s",
	"nora": "n oo1 r a0",
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
	"novos": "n oo1 v u0 s",
	"o": "u0",
	"obra": "oo1 b r a0",
	"obras": "oo1 b r a0 s",
	"ok": "oo2 k e1 Y",
	"olha": "oo1 lh a0",
	"olho": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "o1 lh u0" },
          { type: "verbo", ipa: "oo1 lh u0" }
      ]
	},
	"olhos": "oo1 lh u0 s",
	"olimpíada": "o2 l I2 p i1 ac2 d a0",
	"olimpíadas": "o2 l I2 p i1 ac2 d a0 s",
	"online": "O2 l a1 Y n i0",
	"ônibus": "o1 n i2 b u0 s",
	"opa": "oo1 p a0",
	"ortodontologia": "oo2 h t o2 d O2 t o2 l o2 g i1 a0",
	"ortodoxo": "oo2 h t oo2 d oo1 k s u0",
	"os": "u0 s",
	"ossos": "oo1 s u0 s",
	"ovos": "oo1 v u0 s",
	"panela": "p a2 n ee1 l a0",
	"panelas": "p a2 n ee1 l a0 s",
	"parede": "p a2 r e1 dj i0",
	"paredes": "p a2 r e1 dj i0 s",
	"pássaro": "p a1 s ac2 r u0",
	"pássaros": "p a1 s ac2 r u0 s",
	"pedra": "p ee1 d r a0",
	"pedras": "p ee1 d r a0 s",
	"pega": "p ee1 g a0",
	"peso": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "p e1 z u0" },
          { type: "verbo", ipa: "p ee1 z u0" }
      ]
	},
	"pior": "p i2 oo1 h",
	"piores": "p i2 oo1 r i0 s",
	"pipoca": "p i2 p oo1 k a0",
	"pizza": "p i1 t s a0",
	"pizzas": "p i1 t s a0 s",
	"pobre": "p oo1 b r i0",
	"pobres": "p oo1 b r i0 s",
	"poços": "p oo1 s u0 s",
	"porcos": "p oo1 h k u0 s",
	"porque": "p o2 h k e1",
	"porquê": "p o2 h k e1",
	"por": "p u2 h",
	"porta": "p oo1 h t a0",
	"portas": "p oo1 h t a0 s",
	"posso": "p oo1 s u0",
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
	"relaxa": "h e2 l a1 x a0",
	"relaxar": "h e2 l a2 x a1 h",
	"resposta": "h e2 s p oo1 s t a0",
	"respostas": "h e2 s p oo1 s t a0 s",
	"rock": "h oo1 k i0",
	"roda": "h oo1 d a0",
	"rodas": "h oo1 d a0 s",
	"roque": "h oo1 k i0",
	"roxa": "h o1 x a0",
	"roxo": "h o1 x u0",
	"sábado": "s a1 b ac2 d u0",
	"sábados": "s a1 b ac2 d u0 s",
	"sacola": "s a2 k oo1 l a0",
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
	"sete": "s ee1 tch i0",
	"sexo": "s ee1 k s u0",
	"sexta": "s ee1 s t a0",
	"sextas": "s ee1 s t a0 s",
	"sexy": "s ee1 k s i0",
	"shopping": "x oo1 p I0",
	"show": "x o1 W",
	"sílaba": "s i1 l ac2 b a0",
	"sílabas": "s i1 l ac2 b a0 s",
	"site": "s a1 Y tch i0",
	"sites": "s a1 Y tch i0 s",
	"sogra": "s oo1 g r a0",
	"solta": "s oo1 W t a0",
	"sopa": "s oo1 p a0",
	"sopas": "s oo1 p a0 s",
	"sorvete": "s o2 h v e1 tch i0",
	"sorvetes": "s o2 h v e1 tch i0 s",
	"tâmara": "t A1 m ac2 r a0",
	"tâmaras": "t A1 m ac2 r a0 s",
	"tapete": "t a2 p e1 tch i0",
	"táxi": "t a1 k s i0",
	"te": "tch i0",
	"tela": "t ee1 l a0",
	"telas": "t ee1 l a0 s",
	"telefone": "t e2 l e2 f o1 n i0",
	"telefones": "t e2 l e2 f o1 n i0 s",
	"testa": "t ee1 s t a0",
	"texto": "t e1 s t u0",
	"textos": "t e1 s t u0 s",
	"toca": "t oo1 k a0",
	"torre": "t o1 h i0",
	"torres": "t o1 h i0 s",
	"transando": "t r A2 z A1 d u0",
	"transar": "t r A2 z a1 h",
	"transaram": "t r A2 z a1 r A0 W",
	"transou": "t r A2 z o1 W",
	"treze": "t r e1 z i0",
	"troco": {
	  default : "substantivo",
	  entries : [
	      { type: "substantivo", ipa: "t r o1 k u0" },
          { type: "verbo", ipa: "t r oo1 k u0" }
      ]
	},
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
	"volto": "v oo1 W t u0",
	"voz": "v oo1 s",
	"wifi": "w a2 Y f a1 Y",
	"xereca": "x ee2 r ee1 k a0",
	"xícara": "x i1 k ac2 r a0",
	"xícaras": "x i1 k ac2 r a0 s",
	"youtube": "y u2 tch u1 b i0",
	"zero": "z ee1 r u0",
	"zoca": "z oo1 k a0"
};

function showChoicePopup(word, entries, onChoose) {
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
