/* =========================================================
   SANTIAGO FERNANDEZ — Portfolio
   Comportamiento compartido: nav, menú móvil, scroll-reveal
   y cursor personalizado tipo anillo.
========================================================= */

/* ---------- PRELOADER: contador de 0 a 100 ---------- */
(function preloader(){
  const el = document.getElementById('preloader');
  const countEl = document.getElementById('preloaderCount');
  if(!el || !countEl) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion){ el.classList.add('is-done'); return; }

  const duration = 1500;
  const start = performance.now();
  function tick(t){
    const progress = Math.min(100, Math.round(((t - start) / duration) * 100));
    countEl.textContent = String(progress).padStart(2, '0');
    if(progress < 100){
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => el.classList.add('is-done'), 200);
    }
  }
  requestAnimationFrame(tick);
})();

/* ---------- LINKS DEL HEADER: revuelo de caracteres al hover ---------- */
(function scrambleHover(){
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const links = document.querySelectorAll('.nav-links a');
  if(!links.length || isTouch || reduceMotion) return;

  const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomChar = () => POOL[Math.floor(Math.random() * POOL.length)];

  links.forEach(link => {
    const original = link.textContent;
    let raf = null;

    link.addEventListener('mouseenter', () => {
      if(raf) cancelAnimationFrame(raf);
      const duration = 380;
      const start = performance.now();
      function step(t){
        const progress = Math.min(1, (t - start) / duration);
        const revealCount = Math.floor(progress * original.length);
        let out = '';
        for(let i = 0; i < original.length; i++){
          out += (original[i] === ' ' || i < revealCount) ? original[i] : randomChar();
        }
        link.textContent = out;
        if(progress < 1) raf = requestAnimationFrame(step);
        else { link.textContent = original; raf = null; }
      }
      raf = requestAnimationFrame(step);
    });
  });
})();

/* ---------- VIDEO DE FONDO: si falla, mostramos la nebulosa de respaldo ---------- */
(function bgVideoFallback(){
  const video = document.getElementById('bgVideo');
  const fallback = document.getElementById('nebulaCanvas');
  if(!video || !fallback) return;
  video.addEventListener('error', () => { fallback.style.display = 'block'; }, true);
  // Si por alguna razón el navegador nunca llega a reproducirlo, mostramos la nebulosa igual.
  setTimeout(() => {
    if(video.readyState === 0) fallback.style.display = 'block';
  }, 4000);
})();

/* ---------- NEBULOSA DE FONDO (blobs pequeños a la deriva) ---------- */
(function nebula(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('nebulaCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');

  // Resolución interna reducida: el blur en CSS + el upscale del canvas
  // suavizan los bordes y ahorran GPU.
  const SCALE = 0.18;
  function resize(){
    canvas.width = Math.max(1, Math.round(window.innerWidth * SCALE));
    canvas.height = Math.max(1, Math.round(window.innerHeight * SCALE));
  }
  resize();
  window.addEventListener('resize', resize);

  const PALETTE = [
    'rgba(255,140,120,ALPHA)',
    'rgba(255,90,70,ALPHA)',
    'rgba(210,208,204,ALPHA)',
    'rgba(255,255,255,ALPHA)'
  ];

  const COUNT = 7;
  // Velocidades en unidades/segundo (no por milisegundo de timestamp absoluto),
  // así el movimiento es siempre lento y estable sin importar cuánto tiempo
  // lleve la página abierta.
  const blobs = Array.from({ length: COUNT }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: 0.14 + Math.random() * 0.16,
    baseAlpha: 0.10 + Math.random() * 0.08,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    vx: (Math.random() - 0.5) * 0.006,
    vy: (Math.random() - 0.5) * 0.006
  }));

  function step(dt){
    blobs.forEach(b => {
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      // Rebote suave en los bordes: nunca hay un salto de posición,
      // solo se invierte la dirección al llegar al límite.
      if(b.x < -0.1 || b.x > 1.1) b.vx *= -1;
      if(b.y < -0.1 || b.y > 1.1) b.vy *= -1;
      b.x = Math.min(1.1, Math.max(-0.1, b.x));
      b.y = Math.min(1.1, Math.max(-0.1, b.y));
    });
  }

  function drawFrame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    blobs.forEach(b => {
      const cx = b.x * canvas.width;
      const cy = b.y * canvas.height;
      const radius = b.r * Math.max(canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, b.color.replace('ALPHA', b.baseAlpha));
      gradient.addColorStop(1, b.color.replace('ALPHA', 0));
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  if(reduceMotion){
    drawFrame();
  } else {
    let lastT = performance.now();
    requestAnimationFrame(function loop(t){
      const dt = Math.min((t - lastT) / 1000, 0.1);
      lastT = t;
      step(dt);
      drawFrame();
      requestAnimationFrame(loop);
    });
  }
})();

/* ---------- NAV: link activo + menú móvil ---------- */
(function nav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('is-active');
  });

  const toggle = document.getElementById('navToggle');
  const overlay = document.getElementById('navOverlay');
  if(!toggle || !overlay) return;
  toggle.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      overlay.classList.remove('is-open');
      toggle.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
})();

/* ---------- SCROLL REVEAL ---------- */
(function reveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  if(!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => observer.observe(el));
})();

/* ---------- CURSOR PERSONALIZADO (anillo con inercia) ---------- */
(function cursorRing(){
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(isTouch || reduceMotion) return;

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);
  document.body.classList.add('has-custom-cursor');

  const trail = document.createElement('canvas');
  trail.id = 'cursorTrail';
  document.body.appendChild(trail);
  const tctx = trail.getContext('2d');
  function sizeTrail(){
    trail.width = window.innerWidth;
    trail.height = window.innerHeight;
  }
  sizeTrail();
  window.addEventListener('resize', sizeTrail);

  // Sprite pre-renderizado: un punto suave, reutilizado para todas las
  // partículas en vez de crear un gradiente nuevo en cada frame.
  const SPRITE_SIZE = 24;
  const sprite = document.createElement('canvas');
  sprite.width = sprite.height = SPRITE_SIZE;
  const sctx = sprite.getContext('2d');
  const g = sctx.createRadialGradient(
    SPRITE_SIZE / 2, SPRITE_SIZE / 2, 0,
    SPRITE_SIZE / 2, SPRITE_SIZE / 2, SPRITE_SIZE / 2
  );
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  sctx.fillStyle = g;
  sctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);

  const PARTICLE_COLORS = ['255,150,130', '235,232,228', '200,198,194'];
  const PARTICLE_COUNT = 20;
  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    angle: (i / PARTICLE_COUNT) * Math.PI * 2,
    radius: 10 + Math.random() * 16,
    speed: (0.008 + Math.random() * 0.012) * (Math.random() < 0.5 ? -1 : 1),
    size: 3 + Math.random() * 4,
    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
    alpha: 0
  }));

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let ringX = mouseX, ringY = mouseY;
  let prevX = mouseX, prevY = mouseY;
  let speed = 0;
  let visible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    if(!visible){
      ringX = mouseX; ringY = mouseY;
      prevX = mouseX; prevY = mouseY;
      visible = true;
      ring.classList.add('is-visible');
    }
  }, { passive: true });
  window.addEventListener('mouseleave', () => { ring.classList.remove('is-visible'); });
  window.addEventListener('mousedown', () => ring.classList.add('is-pressed'));
  window.addEventListener('mouseup', () => ring.classList.remove('is-pressed'));

  const hoverTargets = 'a, button, .frame, .nav-toggle, input, textarea, [role="button"]';
  document.addEventListener('mouseover', (e) => {
    if(e.target.closest(hoverTargets)) ring.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if(e.target.closest(hoverTargets)) ring.classList.remove('is-hover');
  });

  function tick(){
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

    // Velocidad suavizada del cursor real: define cuánto se muestran las partículas.
    const dx = mouseX - prevX, dy = mouseY - prevY;
    prevX = mouseX; prevY = mouseY;
    const instantSpeed = Math.min(Math.hypot(dx, dy), 40);
    speed += (instantSpeed - speed) * 0.2;
    const targetAlpha = Math.min(speed / 6, 1);

    tctx.clearRect(0, 0, trail.width, trail.height);
    particles.forEach(p => {
      p.angle += p.speed;
      p.alpha += (targetAlpha - p.alpha) * 0.08;
      if(p.alpha < 0.01) return;
      const x = ringX + Math.cos(p.angle) * p.radius;
      const y = ringY + Math.sin(p.angle) * p.radius;
      tctx.globalAlpha = p.alpha * 0.55;
      tctx.drawImage(sprite, x - p.size / 2, y - p.size / 2, p.size, p.size);
    });
    tctx.globalAlpha = 1;

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
