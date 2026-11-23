/* Páginas internas: menu do celular */
(() => {
  const head = document.querySelector('.in-head'); if (!head) return;
  const btn = head.querySelector('.in-burger');
  const close = () => { head.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Abrir menu'); };
  btn.addEventListener('click', () => {
    const open = head.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  head.querySelectorAll('.in-nav a').forEach(a => a.addEventListener('click', close));
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
