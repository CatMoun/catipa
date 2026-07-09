# Catipa

Catipa é uma codificação fonêmica alfanumérica específica para a língua portuguesa, projetada para uso computacional, com foco em síntese de voz, conversão grafema-para-fonema (G2P) e aplicações linguísticas.

## Visão Geral

- Codificação fonêmica ASCII, inspirada em princípios do ARPAbet;
- Desenvolvida inicialmente em 2019 para síntese vocal;
- Inventários para português brasileiro (PB) e português europeu (PE);
- G2P atualmente disponível apenas para português brasileiro neutro.

## Demonstração

A versão em browser do Catipa pode ser acessada em:

**https://catmoun.github.io/catipa/**

## G2P

O módulo G2P foi desenvolvido ao final de 2025 com o objetivo de fortalecer a codificação e torná-la acessível para uso público, acadêmico e empresarial.

- Status atual: PB neutro;
- Planejado: variantes regionais do PB e suporte ao PE.

## Documentação

A documentação completa, incluindo histórico, fundamentos teóricos e descrição do sistema, está disponível diretamente no app web.

## Licença

Este projeto é distribuído sob a licença MIT.

## Contribuições

Contribuições são bem-vindas. Sugestões, correções e propostas de expansão podem ser enviadas via issues ou pull requests.

## Planejamentos Futuros

- Expansão do G2P para variedades regionais do português brasileiro;
- Integração do inventário do português europeu ao G2P.

## Versões

- v0.0.1 (31-12-2025)
  - lançamento oficial.
- v0.0.2 (31-12-2025)
  - corrigido a conversão de l em coda silábica;
  - adicionado "ân" na lista de nasalizações.
- v0.0.3 (31-12-2025)
  - correção de bugs gerais 
- v0.0.4 (01-01-2026)
  - correção de bug que excluía o fonema /lh/.
- v1.0.0 (02-01-2026)
  - novo tratamento no G2P para novas possibilidades futuras
  - correções mínimas
- v1.1.0 (04-01-2026)
  - correção radical para resolução da falta do fonema /ks/
  - lexicon atualizado
  - adição de resolver.js
- v1.1.1 (05-01-2026)
  - atualização de léxico e regras
- v1.1.2 (09-01-2026)
  - atualização de léxico e regras
- v1.2.3 (31-05-2026)
  - atualização de léxico e regras
  - classificação morfológica de verbo e substantivo
- v1.2.5 (02-06-2026)
  - atualização de léxico e regras
- v2.0.0 (28-06-2026)
  - G2P de texto incluído
  - desenvolvimento de previsão para os sons abertos /ee/ e /oo/
  - atualização de léxico e regras
  - novo visual
- v2.0.1 (29-06-2026)
  - consertado bug de texto
- v2.0.2 (30-06-2026)
  - identificação de pontuações atualizadas em G2P Texto
  - atualização de léxico
- v2.0.3 (02-07-2026)
  - atualização de inventório pb e pe
  - atualização de léxico
- v2.1.0 (02-07-2026)
  - preparação para o G2P Europeu
  - atualização de léxico e regras
- v3.0.0 (04-07-2026)
  - português europeu adicionado
  - G2P Palavra descontinuado
  - todos os arquivos foram melhorados
- v3.0.1 (08-07-2026)
  - atualização de léxico e regras
