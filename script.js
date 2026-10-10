/* All content remains usable without JS. Enhancement is pointer/motion-aware. */
(() => {
  'use strict';
  if (window.lucide) window.lucide.createIcons();
  const cards = [...document.querySelectorAll('[data-tilt]')];
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const narrowScreen = matchMedia('(max-width: 899px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let printing = false;
  function syncTilt() {
    const allowed = !printing && finePointer.matches && !narrowScreen.matches &&
      !reducedMotion.matches && navigator.maxTouchPoints === 0;
    cards.forEach(card => {
      if (card.vanillaTilt) card.vanillaTilt.destroy();
      if (allowed && window.VanillaTilt) {
        window.VanillaTilt.init(card, { max: 6, speed: 400, glare: true,
          'max-glare': Number(card.dataset.tiltMaxGlare || .1), gyroscope: false });
      }
    });
  }
  [finePointer, narrowScreen, reducedMotion].forEach(query => query.addEventListener('change', syncTilt));
  syncTilt();
  let toastTimer;
  const toast = document.getElementById('toast');
  function notify(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
  }
  document.getElementById('copy-email').addEventListener('click', async () => {
    const email = ['3603098347', 'qq.com'].join('@');
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
      else {
        const field = document.createElement('textarea');
        field.value = email; field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;left:-9999px;top:0;';
        document.body.append(field); field.select();
        const copied = document.execCommand('copy'); field.remove();
        document.getElementById('copy-email').focus();
        if (!copied) throw new Error('Copy unavailable');
      }
      notify('邮箱已复制：' + email);
    } catch { notify('无法自动复制，请复制页面中显示的邮箱'); }
  });
  const video = document.getElementById('gpu-video');
  document.getElementById('play-video').addEventListener('click', async () => {
    try { await video.play(); video.focus(); }
    catch { notify('请点击视频上的播放按钮，或单独打开视频'); }
  });
  video.addEventListener('play', () => {
    const card = video.closest('.card');
    if (card.vanillaTilt) card.vanillaTilt.destroy();
  });
  window.addEventListener('beforeprint', () => { printing = true; video.pause(); syncTilt(); });
  window.addEventListener('afterprint', () => { printing = false; syncTilt(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
})();
