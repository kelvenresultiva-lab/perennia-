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

// Botões de contato (hero da inicial e páginas internas): abrem o WhatsApp quando o número for preenchido.
// data-interesse="..." informa na mensagem a solução de interesse.
$$('[data-perennia-book]').forEach(b => b.addEventListener('click', () => {
  if (WHATSAPP_NUMERO) {
    const servico = b.dataset.interesse || b.closest('.specialist-item')?.querySelector('h3')?.textContent.trim();
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
    if (!matchMedia("(max-width: 700px)").matches) { ["font-size", "bottom", "letter-spacing"].forEach(p => w.style.removeProperty(p)); panel.style.removeProperty("padding-bottom"); return; }
    w.style.setProperty("font-size", "100px", "important"); w.style.setProperty("letter-spacing", "-.1em", "important");
    const fs = Math.floor(100 * document.documentElement.clientWidth * 1.22 / w.scrollWidth);
    w.style.setProperty("font-size", fs + "px", "important");
    w.style.setProperty("bottom", (CURVA - 0.42 * fs).toFixed(1) + "px", "important");
    panel.style.setProperty("padding-bottom", (CURVA + 0.54 * fs + 26).toFixed(0) + "px", "important");
  };
  let tm = 0; const agenda = () => { clearTimeout(tm); tm = setTimeout(fit, 30); };
  addEventListener("resize", agenda); addEventListener("load", agenda);
  if (document.fonts) document.fonts.ready.then(agenda);
  fit();
})();

/* Serviços: arrastar o carrossel com o mouse (no toque o navegador já desliza sozinho) */
(function(){
  const el=document.querySelector('#servicos .ks-svc-cards');if(!el)return;
  let down=false,moved=false,x0=0,s0=0;
  el.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||el.scrollWidth<=el.clientWidth+2)return;down=true;moved=false;x0=e.clientX;s0=el.scrollLeft;});
  window.addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-x0;if(!moved&&Math.abs(dx)>5){moved=true;el.classList.add('is-dragging');}if(moved){el.scrollLeft=s0-dx;e.preventDefault();}});
  window.addEventListener('pointerup',()=>{if(!down)return;down=false;if(moved){el.classList.remove('is-dragging');
    const cards=[...el.children],pl=parseFloat(getComputedStyle(el).scrollPaddingLeft)||0;let best=0,bd=1e9;
    cards.forEach(c=>{const d=Math.abs(c.offsetLeft-pl-el.scrollLeft);if(d<bd){bd=d;best=c.offsetLeft-pl;}});el.scrollTo({left:best,behavior:'smooth'});}});
  el.addEventListener('click',e=>{if(moved){e.preventDefault();e.stopPropagation();moved=false;}},true);
})();

/* serviços: card coberto pelo próximo vai encolhendo e apagando */
(function(){
  var list=document.querySelector('#servicos .ks-svc-cards');if(!list)return;
  var all=[].slice.call(list.children),mq=window.matchMedia("(max-width: 900px)"),cards;if(all.length<3)return;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches,tick=false;
  function upd(){tick=false;cards=all;all.forEach(function(x){if(cards.indexOf(x)<0){x.style.opacity="";x.style.transform=""}});
    for(var i=0;i<cards.length-1;i++){
      var a=cards[i].getBoundingClientRect(),b=cards[i+1].getBoundingClientRect();
      var p=Math.min(1,Math.max(0,(a.bottom-b.top)/a.height));
      cards[i].style.opacity=String(1-p*.9);
      cards[i].style.transform=reduce?'':'scale('+(1-p*.06)+')';
    }}
  function req(){if(!tick){tick=true;requestAnimationFrame(upd)}}
  window.addEventListener('scroll',req,{passive:true});window.addEventListener('resize',req);upd();
})();
