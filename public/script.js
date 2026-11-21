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

// Botões de conversa: todos vão para o WhatsApp, exceto o da hero (que segue abrindo o aviso)
$$('[data-perennia-book]').forEach(b => b.addEventListener('click', () => {
  const naHero = !!b.closest('.perennia-hero');
  if (WHATSAPP_NUMERO && !naHero) {
    const servico = b.closest('.specialist-item')?.querySelector('h3')?.textContent.trim();
    window.open(waLink(servico), '_blank', 'noopener');
    return;
  }
  openDialog($('#perennia-dialog'));
}));
$$('[data-perennia-video]').forEach(b=>b.addEventListener('click',()=>openDialog($('#perennia-video-dialog'))));
