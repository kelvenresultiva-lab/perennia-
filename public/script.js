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

// Serviços especializados: um card por vez, trocando conforme a rolagem
(() => {
  const sec = $('#servicos.ks-svc-scroll'); if (!sec) return;
  const track = $('.ks-svc-track', sec), head = $('.ks-svc-head', sec), stage = $('.ks-svc-stage', sec);
  const cards = $$('.ks-svc-card', sec), dots = $$('.ks-svc-dot', sec), n = cards.length;
  const cur = $('.ks-svc-cur', sec), bar = $('.ks-svc-bar i', sec);
  const STEP = 0.62; // quanto de tela cada card ocupa na rolagem
  const isMobile = () => matchMedia('(max-width: 900px)').matches;
  const stickyTop = () => isMobile() ? (parseFloat(getComputedStyle(stage).top) || 0) : 0;
  let active = -1, geo = null;
  sec.classList.add('js-svc');
  const show = i => {
    if (i === active) return; active = i;
    cards.forEach((c, k) => { c.classList.toggle('is-active', k === i); c.classList.toggle('is-past', k < i); c.inert = k !== i; });
    dots.forEach((d, k) => d.classList.toggle('is-active', k === i));
    cur.textContent = String(i + 1).padStart(2, '0');
    bar.style.transform = 'scaleX(' + ((i + 1) / n) + ')';
  };
  const progress = () => {
    const r = track.getBoundingClientRect();
    return Math.min(1, Math.max(0, (stickyTop() - r.top - geo.headH) / geo.run));
  };
  const update = () => { if (geo) show(Math.min(n - 1, Math.floor(progress() * n))); };
  const layout = () => {
    const vh = innerHeight, mob = isMobile();
    const headH = mob ? head.offsetHeight + 120 : 0;
    const stageH = mob ? stage.offsetHeight : vh;
    const run = Math.round(n * STEP * vh);
    track.style.height = (headH + stageH + run) + 'px';
    geo = { headH, run };
    update();
  };
  dots.forEach(d => d.addEventListener('click', () => {
    const p = (+d.dataset.go + 0.5) / n;
    const top = track.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top + geo.headH + p * geo.run - stickyTop(), behavior: 'smooth' });
  }));
  addEventListener('scroll', update, { passive: true });
  let raf = 0, visible = false;
  const loop = () => { update(); raf = visible ? requestAnimationFrame(loop) : 0; };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf) loop(); }).observe(sec);
  addEventListener('resize', layout);
  addEventListener('load', layout);
  layout();
})();
