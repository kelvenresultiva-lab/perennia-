# Contexto do projeto

Site estático da Perennia Consultoria Empresarial. Leia `README.md` antes de editar.

## Preferências aprovadas

- Preservar a hero, suas fotos e a identidade Perennia.
- Paleta: verde profundo #04210B, verde de seção #0C2B17, dourado #A67F50; fundos claros brancos e cinza neutro #F5F6F5. Evitar bege/caramelo nos fundos.
- Não espalhar mudanças de cor pelo site todo quando o pedido for de uma seção.
- Ritmo de seções alternado escuro (#0C2B17, sem quadriculado) / branco: Hero escura → Vídeo branca (curva do hero; faixa clara #F5F6F5 a partir do meio do vídeo, "Perennia" gigante dourado-claro no fim da seção, abaixo do botão, com a metade de baixo cortada pela borda da seção, link "Conheça as sócias") → 360° escura com foto de escritório desfocada, card marfim com diagrama limpo (círculo 360° com aro dourado + linha fina pelos 6 ícones, nomes das áreas em etiquetas marfim; "360°" gigante atrás em marrom→dourado; sem quadriculado nem anéis) → Legacy branca (cards verdes) → Soluções branca (cards verdes) → Serviços escura → Como funciona branca → Agendar escura → Rodapé escuro com filete dourado. Manter essa alternância ao criar ou mover seções.
- LEGACY usa quatro cards verdes, títulos dourados, descrição e tópicos; sem ícones flutuantes no canto superior direito.
- Manter transições curvas compactas entre blocos quando já existentes.
- Não inventar contatos, números de experiência, depoimentos ou dados das responsáveis.

## Conteúdo Perennia

Método LEGACY: inteligência contábil, tributária e societária aplicada à gestão empresarial. Pilares: Visão Empresarial; Estratégia; Gestão e Resultados; Proteção e Legado.

Soluções: Perennia 360°, Perennia Compliance, Perennia Gestão, Perennia Conselho e Perennia Expert (consultoria técnica mensal).

Serviços Especializados: Imposto de Renda PF/PJ, Conselho Consultivo, Treinamentos, Implantação de ERP, Recuperação de Créditos, Defesas Administrativas, Auditoria e Revisão, Valuation & M&A.

## Implementação

Editar os arquivos em `public/`. Projeto sem framework e sem dependências. Iniciar com `npm run dev`. Preservar os seletores usados no JavaScript ou atualizar as referências ao remover seções. Testar as interações afetadas. Os CSS específicos e de refinamento carregam depois dos estilos gerais.

Cada seção tem um link "Saiba mais" (.ks-more) para sua página: sobre, perennia-360, metodo-legacy, solucoes, servicos, como-funciona (.html), hoje provisórias e com noindex — não inventar conteúdo para elas. O conteúdo médico de referência já foi removido. Pendentes: número do WhatsApp (preencher WHATSAPP_NUMERO em public/script.js; só o botão da hero abre o WhatsApp), vídeo de apresentação e contatos/redes no rodapé. Acabamento editorial em `public/perennia-karine.css` (classes `.ks-*`): tipografia da marca Rethink Sans em títulos e texto (assets/rethink-sans*.woff2), destaque em dourado sem itálico, etiquetas em pílula, botões com ícone em círculo, selo circular com "P".

REGRA: site institucional — o contato de WhatsApp só pode aparecer na hero. Nenhuma outra seção, rodapé ou botão flutuante leva ao WhatsApp; os CTAs das seções levam às páginas institucionais (sobre, perennia-360, metodo-legacy, solucoes, servicos, como-funciona). O objetivo é mostrar o trabalho da empresa.

Curvas entre seções: mesmo desenho da curva da hero (pequena, no canto), alternando os lados — hero→vídeo à esquerda, vídeo→360° à direita, 360°→Método Legacy à esquerda, Soluções→Serviços à direita, Serviços→Como funciona à esquerda, Como funciona→Agendar à direita, Agendar→Rodapé com calombo central (o rodapé #06170D sobe no meio) e seta de voltar ao topo dentro dele (toda troca de seção tem curva) (espelhada; no celular também tem a curva, igual ao desktop — o JS ajusta o "Perennia" à largura da tela e o "a" aparece inteiro na descida da curva), e assim por diante se houver mais.

PALETA ÚNICA (21/11): verde profundo #0F2E1F nas seções escuras (rodapé #0A2418), marfim #F8F5EE nas claras (faixa do vídeo #EFEAE0), ouro fosco #B8955F (botões em degradê discreto #DCC496→#B8955F), destaques em ouro sólido: #D8BE8E no escuro e #8C6B3C no claro. Sem manchas de brilho nos fundos e sem degradê dourado brilhante nos textos. Variáveis em :root no fim do perennia-karine.css (--pv, --pm, --po...).

Como funciona (21/11): no desktop (>1000px) é um caminho em "U" dourado→marrom (contraste) com setas marfim: selo igual ao da hero (verde, texto claro em volta, aro interno fino) com o símbolo P da logo recortado da imagem à esquerda, 1 e 2 na linha de cima (texto acima), curva à direita, 3 e 4 na linha de baixo (texto abaixo), cauda sumindo à esquerda, setinhas marrons no caminho. Tablet/celular (≤1000px): caminho em serpentina com curvas (svg .ks-road-svg-m, viewBox 360×920, 4 linhas alternando o lado da curva), selo no começo, etapas no centro com o texto logo abaixo. Tipografia e cabeçalho (selo, título, CTA) no padrão Karine.
Como funciona (22/11): etapas em círculos verdes com ícones dourados (documento+lupa, alvo+seta, camadas, gráfico subindo), letras maiores, fundo BRANCO #FFFFFF (pedido 22/11; antes areia #ECE6D8) no padrão Karine (ela usa fundo liso num tom claro da marca, texto todo num só tom escuro da marca, título ~50px e texto 20px). Sem foto e sem degradê — o usuário recusou os dois.

- Selo do fechamento (#agendar) usa o P da logo (igual ao selo do Como funciona), centralizado. Rodapé todo centralizado.
- 360°: número gigante é marca-d'água (opacidade .07) contida no cartão (overflow clip), no canto inferior direito; o círculo central mostra o P da logo + PERENNIA + "Visão completa do seu negócio" (sem repetir "360").
- 360°: seta circular dourada (svg .ks-360-arrow) contorna o núcleo e gira devagar (40s; parada com prefers-reduced-motion).
- 360° no celular: card com margem lateral de 10px (seção sem padding lateral), textos/botão centralizados, áreas em 2 colunas com ícone em cima e nome centralizado em 2 linhas.
- 360° no celular: as 6 áreas viram mini-cards marfim (borda dourada, ícone em cima alinhado, nome centralizado), grade 2x3 com gap 10px; sem espaço reservado pro 360 gigante (fica atrás dos cards).
- 360° no celular = formato Karine (substitui os mini-cards): fundo marfim chapado, sem diagrama/núcleo/360 gigante; áreas viram lista numerada 01–06 com linhas finas douradas; selo pequeno do P girando (.ks-360-seal, só no celular) acima do botão. Desktop mantém o diagrama.
  - Ajuste: no celular o círculo (núcleo verde + seta girando) voltou, entre o texto e a lista; o selo pequeno .ks-360-seal fica escondido.
  - ATUAL (substitui lista/mini-cards): no celular o 360° é igual ao desktop — órbita de 300px (270px ≤380px) com o círculo+seta no centro e as 6 áreas em volta (ícone na linha + etiqueta pílula), posições fixas por .area-N; botão antes do diagrama.
- 360° (desktop e celular): dentro do círculo central só o P da logo (sem textos); a seta .ks-360-arrow fica dentro de .diagnostico-orbit e corre na linha da órbita, entre os tópicos (borda da órbita transparente), girando 40s.
- 360°: etiquetas das áreas SEM caixa (o usuário não gostou da pílula) — só texto verde-escuro peso 500 (15px desktop/13px celular) com halo text-shadow na cor do card para a seta não cruzar as letras.
- 360°: o centro do círculo agora mostra "360°" em dourado claro (no lugar do P da logo); precisa de -webkit-text-fill-color:transparent!important porque uma regra antiga pinta de marrom.
- 360° (ATUAL): ícones centrados exatamente sobre a seta (translate -50%,-50%; desktop em % do mapa, celular em px); textos DENTRO da órbita ao lado do ícone — direita alinhados à direita, esquerda à esquerda, Contábil abaixo do ícone de cima, Legal acima do de baixo. Nunca cruzando a linha (o usuário reclamou de texto em cima da linha e de texto embaixo do ícone). Núcleo 100px no celular.
- Serviços especializados (#servicos): CARDS COM FOTO (.ks-svc-cards) — título em cima em 2 colunas; 4 colunas ≥1101px, 2 até 1100, carrossel scroll-snap no celular. Fotos do Unsplash (licença livre) em assets/svc/01..08, 900x600 webp, com tratamento de cor da paleta (grayscale+sepia no filtro + camada verde mix-blend color) — o usuário exige que fotos combinem com a paleta.
  - ATUAL: os 8 cards ficam em UMA linha só, carrossel de arrastar em todas as telas (scroll-snap; no desktop arrasta com o mouse via script.js; card 260–300px no desktop, 82% no celular; a ponta do próximo card aparece). Nada de 2 linhas.
  - ATUAL (formato da referência do usuário): foto cobre o card inteiro (escurecida embaixo), por cima um ícone num quadradinho verde com traço dourado (.ks-svc-ico, um por serviço), título branco e descrição; número/etiqueta/seta escondidos e o card inteiro é o link. Card 340–430px no desktop (~3 visíveis), 84% no celular, altura mín. 420/400px.
  - Fotos dos serviços AGORA com cor natural (o usuário pediu para tirar a tonalidade verde); só um escurecimento neutro embaixo para o texto.
- Nossas Soluções (#solucoes): fundo BRANCO (antes marfim). Legacy (marfim) → Soluções (branco) ganhou a curva padrão (mask no topo de #solucoes + #tratamentos border-bottom marfim). Títulos h3 dos cards de solução estavam transparentes (bug da paleta) — fixados em #F3EFE6.
- Serviços (ATUAL, substitui carrossel/fotos): formato "passo a passo" do modelo enviado — coluna esquerda sticky (etiqueta, título, linha, texto, botão; foto das sócias vai em <figure class="ks-svc-socias"> no fim do header, com fade embaixo — AGUARDANDO a foto do usuário) e pilha vertical de 8 cards à direita: aba com encaixe do ícone em quadradinho marfim, seta em pílula no topo, título + linha + descrição, número grande dourado cortado embaixo. Fotos do Unsplash ficam escondidas (assets/svc ainda no repo).
  - Foto no canto: assets/socia-joana-blazer.jpg (Joana, sócia, blazer preto) grande (500px) abaixo do botão, esfumada em cima/direita/embaixo (mask intersect com !important); coluna esquerda NÃO é sticky (rola junto, como no modelo). Escondida no celular. Outras fotos recebidas: socia-joana-branco.jpg e socia-2-amarelo.jpg (a outra sócia, nome ainda não informado).
  - ATUAL: as DUAS sócias no canto (.ks-svc-duo): Joana (blazer, aproximada 200%) + outra sócia (amarelo), rosto na mesma altura/tamanho, cada uma com máscara radial e fundo escurecido; a 2ª tem fundo cinza claro, por isso brightness .64 + vinheta verde.
  - Card de serviço = peça única (só :after com contorno fino), recorte do ícone feito por box-shadow do .ks-svc-ico (anel 8px na cor do fundo #0E2B1D + 1px dourado). Título peso 300, número peso 200. No celular a grade precisa de minmax(0,1fr) senão o card estoura a largura.

- Cards de serviço (#servicos): recorte real no canto superior esquerdo feito com máscara `--ks-notch` (7 camadas, sobrepostas 1px para não deixar emenda). `:before` desenha o contorno e `:after` o miolo (inset 1px). O ícone creme fica dentro do recorte, fora do card. Medidas: `--W/--H` 74/66 no desktop e 66/60 no celular.
- Cards de serviço empilhando: do card 3 em diante são `position:sticky` (top `max(24px, 50vh - 150px)`). O próximo sobe por cima e o card coberto encolhe e apaga via JS no fim do `script.js` (opacidade até .1, para não aparecer pelo recorte do canto).
- No desktop (>900px), o título e as fotos das sócias (`.ks-svc-head`) ficam `sticky` (top `max(24px, 50vh - 420px)!important`; precisa do `!important` porque uma regra antiga força `top:auto`) e acompanham os cards empilhando.
- No celular (≤900px) o empilhamento começa no 1º card; no desktop, no 3º. O JS escolhe isso com `matchMedia("(max-width: 900px)")` a cada rolagem.
- As fotos das sócias (`.ks-svc-duo`) agora são fundo da coluna do título. São `position:absolute` atrás do texto, dessaturadas e com opacidade .5.
  - Desktop: coladas na borda da tela (`left: calc(540px - 50vw + 10px)`), `scale(1.5)`, e o bloco tem `min-height: 100vh - 48px`.
  - Celular: aparecem e ficam centralizadas abaixo do botão; o bloco tem `min-height: 720px`.
- O empilhamento dos cards de serviço agora começa no 1º card também no desktop (antes começava no 3º).
- Desktop: as fotos-fundo começam logo abaixo do botão (absolute com `top/bottom:auto`, posição estática), com `margin-top:-70px`, `scale(1.12)` e origem no topo. Assim o título e o texto nunca ficam sobre os rostos (o usuário reclamou do texto "muito em cima do fundo").
- 360° (22/11): card mais largo para os lados — max-width 1440px (antes 1180) acima de 740px; no celular nada muda.
- Método Legacy (22/11, padrão Karine): cards viraram etapas numeradas 01–04 (.ks-lg-num, número grande fino dourado), ícone pequeno no canto superior direito, filete dourado fino no topo (antes na borda esquerda), tópicos 15px mais claros; setinha dourada em círculo marfim no vão 01→02 e 03→04 (só >740px); "LEGACY" gigante dourado-claro (.ks-lg-giant, opacidade .13) no fundo, cortado pela borda de baixo. Linhas de mesma altura só no desktop.
- Método Legacy (ATUAL, 22/11, substitui os 4 cards numerados): formato do modelo enviado pelo usuário (.ks-lg2). Esquerda: etiqueta, título, lista dos 4 pilares com seta em círculo verde (.ks-lg2-list), citação com filete dourado à esquerda (texto da intro) e botão. Direita: mosaico (.ks-lg2-bento) com foto da Joana (socia-joana-branco.jpg), card branco "04 pilares integrados" e card verde largo "LEGACY" + logo. Os 12 subtópicos dos cards antigos saíram. "LEGACY" gigante de fundo mantido. ≤1000px empilha.
- Serviços no celular (≤900px, 22/11): as fotos das sócias usam uma cópia (.ks-svc-bgm, entre o header e .ks-svc-cards) que é sticky no topo da tela (top:0, z-index 0) e fica de fundo enquanto os cards sobem e empilham por cima até o fim da seção. A .ks-svc-duo do header fica escondida no celular; no desktop nada muda.
- Soluções → Serviços (22/11, modelo do usuário; substitui a curva no canto direito): topo de #servicos com cantos arredondados (--r 26px/18px) e calombo central do branco descendo (--bw 160px/124px, --E 40px/20px), feito por camadas de máscara sobrepostas 2–4px para não deixar emenda. Ícone de rolagem (mouse com seta animada, dourado #8C6B3C) é um link .ks-scroll-cue no fim de #solucoes, levando a #servicos. #servicos ganhou background-origin:border-box (corrige faixa mais escura na borda da curva).
- Fechamento #agendar (ATUAL, 22/11, modelo do usuário; substitui o card verde centralizado): card MARFIM no meio entre as duas cores — #agendar tem fundo #06170D (tom do rodapé) e o ::before do card desenha a faixa verde #0F2E1F até a metade do card, com cantos arredondados embaixo (card com isolation:auto e overflow visível para isso funcionar). Aba no topo (.ks-closing-tab) com o selo do P (.ks-seal) por cima. Texto à esquerda (escuro/ouro #8C6B3C), foto das sócias à direita (.ks-closing-photo, recorte do perennia-hero-desktop.webp, object-position 78%; 86% no celular). "Perennia" gigante do card escondido. ≤900px empilha, foto embaixo.
  - AJUSTE (22/11): o usuário quis o design ANTERIOR dentro do card. Card voltou a ser verde (degradê #163D2B→#0F2E1F), centralizado, com o "Perennia" gigante embaixo; a foto das sócias saiu do HTML. Mantidos: posição entre as cores (faixa verde até a metade do card) e a aba verde no topo com o selo do P por cima.
  - AJUSTE 2 (22/11): sem faixa verde atrás do card — o ::before agora é BRANCO (#FFF, continua o Como funciona) com cantos arredondados embaixo; o card verde fica metade sobre o branco e metade sobre o rodapé #06170D. #agendar sobe mais (margin-top -cv-120px desktop / -cv-80px celular) para não sobrar vão branco, sem cobrir o botão "Entenda como funciona".
  - AJUSTE 3 (22/11, modelo do endocrinologista enviado): dentro do card, ondas de linhas finas douradas nos cantos (assets/ks-wave-1.svg em cima à direita, ks-wave-2.svg embaixo à esquerda, geradas por interpolação de duas curvas; .ks-closing-deco recorta no card), selo com halo redondo na cor do card (a aba .ks-closing-tab ficou escondida), cartão de vidro .ks-closing-glass flutuando no canto inferior esquerdo, botão dourado metálico mais largo (texto verde-escuro). "Perennia" gigante escondido. CTA continua o do método (sem WhatsApp).
  - AJUSTE 4 (22/11): cartão de vidro REMOVIDO (o usuário não quis). Ondas com máscara radial (bordas esfumadas, sem o corte reto embaixo), contorno fino dourado no card (inset 1px) e brilho dourado suave atrás do texto.
- Rodapé compacto (22/11): o usuário achou os textos do rodapé muito distantes. #agendar padding-bottom 24px (16px celular), rodapé padding 36/28px (24/28 celular), colunas em max-width 980px com gap 40px. Como fechamento e rodapé têm a mesma cor (#06170D), #agendar ficou SEM máscara (a curva/calombo de baixo saiu; a seta de voltar ao topo continua) e sobrepõe o rodapé 3px a mais para não deixar emenda; a faixa branca do card começa no topo do #agendar (top -2cv-20px desktop / -2cv-100px celular).
- Fechamento no celular (≤700px, 22/11): CTA do card menor (48px de altura, 11.5px, largura automática e centralizado, ícone 30px). "Perennia" (.ks-closing-word) voltou SÓ no celular: 24vw, opacidade .13, colado na borda de baixo, com metade das letras dentro do card e a outra metade cortada (translate -50%,38% + clip-path inset(0 0 38% 0)). No desktop continua escondido.
- Selo do fechamento (22/11): o P da logo estava ~2px à esquerda; #agendar .ks-seal .ks-closing-p{left:0} deixa o centro do símbolo (bbox x4–57, y5–75 no perennia-logo.webp) exatamente no centro do selo (medido no desktop e no celular).

- 22/11: logo do rodapé montada em 2 recortes (.ks-flogo-p / .ks-flogo-t) para o P ficar centralizado sobre PERENNIA.

- 22/11: Serviços — fotos das sócias mais visíveis no fundo (opacidade ~.95, menos escurecidas, bordas da 2ª foto esfumadas); no celular .ks-svc-bgm .85.
- 22/11: Serviços — fotos no estilo do passo a passo do exemplo (Behance, advogado trabalhista): grandes, na coluna esquerda, em P&B tingido de verde (multiply); no celular .ks-svc-bgm com o mesmo tom.
- 22/11: Serviços no desktop sem empilhar/grudar (cards em lista, coluna esquerda sem sticky) e foto das sócias grande (scale 1.9) saindo pela borda esquerda, como no modelo; celular mantém o empilhamento.
- 22/11: Serviços — sócias mais visíveis: verde leve (pele aparece), rostos inteiros (sem corte na borda), foto começa logo abaixo do botão (top:auto + margin-top -50px) em qualquer largura.
- 22/11: Método Legacy com o mesmo fundo da 360° (verde #0F2E1F + office-main.webp desfocado no ::before; usar seletor #tratamentos.legacy-section, que vence o creme antigo). Textos invertidos para claro; texturas das duas seções somem perto da divisa para não marcar a curva.

## Páginas internas (22/11)
- 5 páginas: index.html (inicial), sobre.html, perennia-360.html, solucoes.html (Método LEGACY + 360° + Gestão + Compliance + Advisor + Expert, com âncoras #metodo-legacy #perennia-360 #gestao #compliance #advisor #expert #expert-ou-advisor), servicos-especializados.html (âncoras por serviço: #imposto-de-renda #conselho-consultivo #treinamentos #implantacao-erp #recuperacao-de-creditos #defesas-administrativas #auditoria-e-revisao-contabil #valuation-e-ma).
- Estilo das internas: interna.css (não carregam o CSS da inicial); menu do celular: interna.js. Cabeçalho, rodapé e janela de aviso estão repetidos nas 4 páginas — ao mudar um, mudar nos 4.
- Cabeçalho na cor #0C1E1C = cor do fundo do logo (mesclagem não funciona ali); logo do rodapé e do selo usam "screen" + contraste.
- Contato: botões com data-perennia-book + data-interesse="Solução". script.js usa o data-interesse na mensagem do WhatsApp. Enquanto WHATSAPP_NUMERO estiver vazio, abre o aviso (#perennia-dialog).
- metodo-legacy.html, como-funciona.html e servicos.html viraram redirecionamentos (noindex) para os novos destinos.
- Inicial: só links ajustados (cartões de Soluções clicáveis via .solution-card-link; Legacy/Como funciona/fechamento → solucoes.html#metodo-legacy; serviços → servicos-especializados.html#...).
- PENDENTE (ocultos com hidden em sobre.html, sem texto inventado): #historia (história aprovada + vídeo institucional) e #responsaveis (nome, função, formação, experiência e especialidades das duas sócias). Falta também: número de WhatsApp/contatos oficiais.
- 22/11: inicial > Serviços: só 5 cards (1 a 5); os 3 restantes saíram e entrou o cartão .ks-svc-more "Ver todos os serviços" → servicos-especializados.html.

- 22/11: Serviços — foto das sócias no formato do modelo "passo a passo" (grande, sem recorte oval, tom verde, dissolvida para a direita e para baixo); cards da direita intactos; mobile inalterado.
- 23/11: Serviços — foto das sócias maior (scale 2.25) com degradê escuro mais longo em cima e embaixo; só desktop.
- 23/11: Serviços — sombra escura (.ks-svc:before) atrás do texto/botão ligando com a foto (desktop); no mobile a foto (.ks-svc-bgm) agora se dissolve no fundo em cima, embaixo e nas laterais.
- 23/11: Serviços — mais preto no lado esquerdo do desktop (.ks-svc:after, degradê da borda da tela até perto do texto); texto/botão com z-index acima.
- 23/11: Serviços — mais preto embaixo da foto no desktop (.ks-svc-head:after, degradê vertical a partir de 760px).
- 23/11: Serviços mobile — foto das sócias como imagem de fundo: .ks-svc-bgm com 100vw, sobe até o botão, máscara nas 4 bordas, vinheta escura; head com z-index acima; fotos ampliadas para os rostos ficarem do mesmo tamanho.
- 23/11: Serviços mobile — fundo da seção inteira #050E09 (quase preto), igual nas abas do topo, atrás do texto e no recorte do rodapé; foto das sócias com opacidade .85 e vinheta no mesmo preto. (A camada .ks-svc-head:before foi descartada: deixava as abas do topo num verde diferente.)
- 23/11: Serviços desktop — mais preto só na parte de baixo da seção: camada de degradê no próprio background de #servicos (transparente até 40%, #050E09 no fim), com background-origin border-box para cobrir também a curva do rodapé; topo no verde original.
- 23/11: Serviços desktop — menos preto sobre os rostos: faixa da esquerda (.ks-svc:after) mais fraca (.7→transparente) e mais estreita (+60px).
- 23/11: Vídeo + 360 num bloco só — "Perennia" gigante do vídeo oculto (.ks-vid-word-clip), .ks-vid-panel padding-bottom 120px; #sintomas com fundo #EFEAE0 (bege da faixa do vídeo), sem aba no topo (máscara só com a curva de baixo para a Legacy), sem foto/:before, card sem caixa, padding-top 40px.
- 23/11: 360 — card com cor própria sobre o bege do bloco (branco quente #FFFDF8→#F3EADA, borda dourada .35, sombra suave).
- 23/11: 360 → Legacy — fim do 360 no formato do modelo: máscara do #sintomas = faixa reta (--E) + cantos fora do arredondado + calombo central (inverso do topo de Serviços); seta .ks-cue-legacy dentro do #sintomas (href #tratamentos) no calombo.
- 23/11: fundo abaixo do vídeo (.ks-vid-panel e #sintomas) passou de bege para branco.
- 23/11: seção do vídeo (#cuidado) também com fundo branco.
- 23/11: card do 360° escurecido (bege areia #F2EADB→#DFCFB0, borda e sombra mais fortes) para contrastar com o fundo branco.
- 23/11: selo do hero usa o P da logo (assets/perennia-logo.webp recortado via .ks-road-p .ks-hero-p, --h 40px; mobile 30px) no lugar da letra P em texto.
- 23/11: card do 360° branco (borda dourada e sombra suave) sobre o fundo branco.
- 23/11: seção do vídeo com fotos das sócias esmaecidas nas laterais (.ks-vid-sides: socia-joana-branco à esquerda, socia-2-amarelo à direita, opacity .5, máscara para o branco); só desktop ≥1101px.
- 23/11: card do 360° com largura máxima 1080px, centralizado.
- 23/11: removida a seção verde do Método Legacy (#tratamentos, 4 pilares) da home por repetir "Como funciona". Seta do 360° agora vai para #solucoes; link "Método Legacy" do rodapé vai para #como-funciona. CSS de #tratamentos ficou no arquivo (sem efeito).
- 23/11: "Como funciona" ganhou parágrafo explicando o Método Legacy (.ks-steps-lead), escrito só com frases que já existiam no site.
- 23/11: ordem da home mudou: vídeo → 360 → Serviços especializados → Nossas Soluções → Como funciona → Agendar. Setas: 360→#servicos, Soluções→#como-funciona.
- 23/11: texto do Método Legacy (.ks-steps-lead) encurtado para uma frase.
- 23/11: seção #como-funciona: etiqueta "MÉTODO LEGACY" e título "Quatro movimentos para construir o legado da sua empresa."
- 23/11: espaço entre Soluções e Método Legacy reduzido (~430px → ~185px): sem border-bottom/top brancos, seta no meio. Título do método sem quebra forçada no mobile.
- 23/11: Serviços (desktop): máscara da foto das sócias estendida (preto até 76%, some só no fim) e sombra de baixo (.ks-svc-head:after) mais baixa e leve, para mostrar mais do corpo delas.
- 23/11: Serviços na home mostra só os cards 01–04; card 05 (Recuperação de Créditos) saiu e entrou no texto do "Ver todos" ("Mais 4 frentes: ...").
- 23/11: Nossas Soluções em 3 cards em cima + 2 centralizados embaixo (grid 6 col), visual do print de referência: card verde escuro, borda dourada fina, traço dourado no topo, ícone de linha (.sl-ico), título em maiúsculas, label dourada abaixo. Tablet 2 col (360 inteiro), mobile 1 col.
- 23/11: cards de Soluções todos com a mesma altura (grid-auto-rows 1fr) e "Conhecer solução" no rodapé de cada um (no 360 é o link; nos outros, span .sl-more, o card inteiro já é clicável).
- 23/11: card do 360° no mobile com margem lateral 16px, borda dourada mais forte, sombra e leve tom creme, para ficar claro que é um card.
- 23/11: botões (.ks-btn, .perennia-cta, .cta) com dourado metálico mais vivo (--btn-gold, brilho no hover), borda e relevo; texto verde profundo #0B3A22 em negrito; ícone do botão em círculo verde com seta dourada.
