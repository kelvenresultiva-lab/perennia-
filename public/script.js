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

// "Perennia" atrás do vídeo (celular): letras esticadas na altura e ocupando a largura.
// Ficam dentro de uma faixa (.ks-vid-word-clip) cujo fundo coincide com o topo reto da seção escura,
// então todas as letras (inclusive o "a", onde a curva desce) são cortadas na mesma linha.
(() => {
  const w = document.querySelector("#cuidado .ks-vid-word"); if (!w) return;
  const clip = w.parentElement, panel = clip.parentElement;
  const props = ["font-size", "bottom", "top", "transform", "transform-origin", "transition", "clip-path"];
  const ESTICA = 1.45, CORTE = 0.6; // CORTE: fração da altura das minúsculas que fica visível
  const fit = () => {
    if (!matchMedia("(max-width: 700px)").matches) {
      props.forEach(p => w.style.removeProperty(p)); clip.style.removeProperty("height"); panel.style.removeProperty("padding-bottom"); return;
    }
    const linha = 0; // no celular a seção escura começa reta, exatamente no fim desta seção
    w.style.setProperty("font-size", "100px", "important");
    const fs = Math.floor(100 * document.documentElement.clientWidth * 0.94 / w.scrollWidth);
    const yc = 0.28 + 0.52 * CORTE;
    const visivel = (yc - 0.06) * fs * ESTICA;
    w.style.setProperty("font-size", fs + "px", "important");
    w.style.setProperty("top", "auto", "important");
    w.style.setProperty("bottom", (-(1 - yc) * fs * ESTICA).toFixed(1) + "px", "important");
    w.style.setProperty("transform", "translateX(-50%) scaleY(" + ESTICA + ")", "important");
    w.style.setProperty("transform-origin", "50% 100%", "important");
    w.style.setProperty("transition", "none", "important");
    w.style.setProperty("clip-path", "none", "important");
    clip.style.setProperty("bottom", linha.toFixed(1) + "px", "important");
    clip.style.setProperty("height", visivel.toFixed(0) + "px", "important");
    panel.style.setProperty("padding-bottom", (linha + visivel + 30).toFixed(0) + "px", "important");
  };
  let tm = 0; const agenda = () => { clearTimeout(tm); tm = setTimeout(fit, 30); };
  addEventListener("resize", agenda); addEventListener("load", agenda);
  if (document.fonts) document.fonts.ready.then(agenda);
  fit();
})();
