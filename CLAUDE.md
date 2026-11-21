# Contexto do projeto

Site estático da Perennia Consultoria Empresarial. Leia `README.md` antes de editar.

## Preferências aprovadas

- Preservar a hero, suas fotos e a identidade Perennia.
- Paleta: verde profundo #04210B, verde de seção #0C2B17, dourado #A67F50; fundos claros brancos e cinza neutro #F5F6F5. Evitar bege/caramelo nos fundos.
- Não espalhar mudanças de cor pelo site todo quando o pedido for de uma seção.
- Ritmo de seções alternado escuro (#0C2B17, sem quadriculado) / branco: Hero escura → Vídeo branca (curva do hero; faixa clara #F5F6F5 a partir do meio do vídeo, "Perennia" gigante dourado-claro no fim da seção, abaixo do botão, com a metade de baixo cortada pela borda da seção, link "Conheça as sócias") → 360° escura (sem card suspenso, conteúdo direto na seção) → Legacy escura → Soluções branca (cards verdes) → Serviços escura → Como funciona branca → Agendar escura → Rodapé escuro com filete dourado. Manter essa alternância ao criar ou mover seções.
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

Curvas entre seções: mesmo desenho da curva da hero (pequena, no canto), alternando os lados — hero→vídeo à esquerda, vídeo→360° à direita (espelhada; no celular essa passagem é reta para o "Perennia" ser cortado igual em todas as letras), e assim por diante se houver mais.
