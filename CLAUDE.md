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
- 360°: número gigante é marca-d'água (opacidade .14) contida no cartão (overflow clip), no canto inferior direito; o círculo central mostra o P da logo + PERENNIA + "Visão completa do seu negócio" (sem repetir "360").
