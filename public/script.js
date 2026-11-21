const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>[...root.querySelectorAll(selector)];

// Janelas (dialog): fechar ao clicar fora, no X ou no botão de confirmação
const closeDialog=d=>{d.close();document.body.style.overflow=''};
$$('dialog').forEach(d=>{
  d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog(d)}});
  $$('.dialog-close,.dialog-done',d).forEach(b=>b.addEventListener('click',()=>closeDialog(d)));
  d.addEventListener('close',()=>document.body.style.overflow='');
});
function openDialog(d){if(!d)return;d.showModal();document.body.style.overflow='hidden'}

// WhatsApp da Perennia: preencher o número (só dígitos, com 55 + DDD), ex.: "5531999999999".
// Enquanto estiver vazio, os botões continuam abrindo o aviso (#perennia-dialog).
const WHATSAPP_NUMERO = "";
const WHATSAPP_MENSAGEM = "Olá! Vim pelo site da Perennia e gostaria de agendar uma conversa.";
const waLink = extra => "https://wa.me/" + WHATSAPP_NUMERO + "?text=" +
  encodeURIComponent(WHATSAPP_MENSAGEM + (extra ? " Tenho interesse em: " + extra + "." : ""));

// WhatsApp só na hero (site institucional): o botão da hero abre o WhatsApp quando o número for preenchido
$$('[data-perennia-book]').forEach(b => b.addEventListener('click', () => {
  if (WHATSAPP_NUMERO) {
    const servico = b.closest('.specialist-item')?.querySelector('h3')?.textContent.trim();
    window.open(waLink(servico), '_blank', 'noopener');
    return;
  }
  openDialog($('#perennia-dialog'));
}));
$$('[data-perennia-video]').forEach(b=>b.addEventListener('click',()=>openDialog($('#perennia-video-dialog'))));

// "Perennia" atrás do vídeo (celular): mesmo desenho do desktop — a seção escura (com a curva) cobre a metade de baixo.
// Aqui só ajustamos o tamanho pela largura real da tela, para a palavra caber inteira (o "a" aparece completo na descida da curva).
(() => {
  const w = document.querySelector("#cuidado .ks-vid-word"); if (!w) return;
  const panel = w.closest(".ks-vid-panel");
  const CURVA = 45; // no celular, distância do fim da seção até o topo reto da curva escura (54px de curva)
  const fit = () => {
    if (!matchMedia("(max-width: 700px)").matches) { ["font-size", "bottom"].forEach(p => w.style.removeProperty(p)); panel.style.removeProperty("padding-bottom"); return; }
    w.style.setProperty("font-size", "100px", "important");
    const fs = Math.floor(100 * document.documentElement.clientWidth * 0.94 / w.scrollWidth);
    w.style.setProperty("font-size", fs + "px", "important");
    w.style.setProperty("bottom", (CURVA - 0.36 * fs).toFixed(1) + "px", "important");
    panel.style.setProperty("padding-bottom", (CURVA + 0.6 * fs + 26).toFixed(0) + "px", "important");
  };
  let tm = 0; const agenda = () => { clearTimeout(tm); tm = setTimeout(fit, 30); };
  addEventListener("resize", agenda); addEventListener("load", agenda);
  if (document.fonts) document.fonts.ready.then(agenda);
  fit();
})();
