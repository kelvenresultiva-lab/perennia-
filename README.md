# Perennia — site para Claude Code

Esta é a versão atual do site que foi editado na conversa. Inclui HTML, CSS, JavaScript, imagens e fontes locais. Não depende de serviços externos para exibir o layout.

## Abrir no Claude Code

1. Extraia o ZIP.
2. Abra um terminal na pasta `perennia-site`.
3. Execute `claude` e peça a alteração desejada.
4. Para visualizar, execute `npm run dev` e acesse http://localhost:3000.

Requisito para a prévia: Node.js 18 ou superior. Não há dependências para instalar nem etapa de build.

## Arquivos

- `public/index.html`: estrutura e conteúdo.
- `public/script.js`: interações, janelas e galeria.
- `public/*.css`: estilos gerais e estilos por seção; respeitar a ordem de carregamento.
- `public/assets/`: imagens e fontes usadas na versão atual.
- `server.mjs`: servidor local de prévia.
- `CLAUDE.md`: contexto e orientações para continuar o trabalho.

## Estado atual

Seções já adaptadas: hero da Perennia, capa de vídeo, Perennia 360°, Método LEGACY, Soluções e Serviços Especializados. A seção de perguntas e respostas foi removida.

O conteúdo médico de referência foi removido: o consultório/galeria virou a seção "Como funciona" (quatro movimentos do Método Legacy), a chamada final e o rodapé foram refeitos para a Perennia, e o meta description foi atualizado. O rodapé ainda não tem telefone, e-mail, endereço nem redes sociais: entram quando os dados oficiais forem informados.

Acabamento editorial (referência Fysi Lab / Karine Sackt) em `public/perennia-karine.css`, carregado por último. O estado anterior está em `backup-antes-estilo-karine/`.

O vídeo de apresentação ainda não foi conectado: a capa abre um aviso. O botão de conversa também aguarda o link oficial da Perennia.

## Publicar fora da prévia

A pasta `public/` contém o site estático completo e pode ser usada em hospedagem estática. Nenhum identificador, credencial ou configuração privada da hospedagem desta conversa foi incluído.

## Páginas por assunto

Cada seção da home tem um link "Saiba mais" (classe `.ks-more`) para a página do assunto: `sobre.html`, `perennia-360.html`, `metodo-legacy.html`, `solucoes.html`, `servicos.html` e `como-funciona.html`. Hoje são páginas provisórias ("em construção", `noindex`, estilo em `pagina-interna.css`) com botão de agendar e volta para a seção; o conteúdo completo de cada uma ainda será escrito.
