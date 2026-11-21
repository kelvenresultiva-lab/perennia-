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

// "Perennia" atrás do vídeo: no celular, ajusta o tamanho para ocupar a largura toda sem estourar a tela
(() => {
  const w = document.querySelector('#cuidado .ks-vid-word'); if (!w) return;
  const fit = () => {
    if (!matchMedia('(max-width: 700px)').matches) { w.style.removeProperty('--vw-fit'); return; }
    w.style.setProperty('font-size', '100px', 'important');
    const width = w.scrollWidth, alvo = document.documentElement.clientWidth * 0.95;
    const fs = Math.floor(100 * alvo / width);
    w.style.setProperty('font-size', fs + 'px', 'important');
    w.style.setProperty('bottom', 'calc(' + fs + 'px * -.36 + 45px)', 'important');
    w.parentElement.style.setProperty('padding-bottom', 'calc(' + fs + 'px * .6 + 71px)', 'important');
  };
  const reset = () => { if (!matchMedia('(max-width: 700px)').matches) { w.style.removeProperty('font-size'); w.style.removeProperty('bottom'); w.parentElement.style.removeProperty('padding-bottom'); } else fit(); };
  addEventListener('resize', reset); addEventListener('load', fit);
  if (document.fonts) document.fonts.ready.then(fit);
  fit();
})();
