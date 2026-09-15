/* =========================================================
   TÍTULO MAGNÉTICO — las letras del hero reaccionan al cursor:
     1) Mientras el cursor pasa cerca, cada letra "cae" y rota
        levemente (proximidad continua).
     2) Si te quedás pasando el cursor un rato largo, se dispara
        una secuencia: las letras se dispersan, se revuelven
        mostrando caracteres al azar, y vuelven a acomodarse en
        cascada hasta formar el texto original otra vez.
   Implementación propia: separa el texto en spans por letra y
   anima con requestAnimationFrame + una máquina de estados simple.
========================================================= */
(function magneticTitle(){
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const title = document.getElementById('magneticTitle');
  if(!title || isTouch || reduceMotion) return;

  // Separar en líneas (por <br>) y luego en letras.
  // Cada línea es display:block por CSS, así que no hace falta
  // agregar un <br> extra entre ellas (eso duplicaba el interlineado).
  const NBSP = String.fromCharCode(160);
  const lines = title.innerHTML.split(/<br\s*\/?>/i);
  title.innerHTML = '';
  lines.forEach(line => {
    const lineEl = document.createElement('span');
    lineEl.className = 'magnetic-line';
    [...line].forEach(ch => {
      const charEl = document.createElement('span');
      charEl.className = 'char';
      charEl.textContent = (ch === ' ') ? NBSP : ch;
      lineEl.appendChild(charEl);
    });
    title.appendChild(lineEl);
  });

  const chars = [...title.querySelectorAll('.char')].map(el => ({
    el, original: el.textContent, cx: 0, cy: 0, curX: 0, curY: 0, curRot: 0
  }));

  const RADIUS = 70;
  const FALL = 12;
  const CHARS_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomChar = () => CHARS_POOL[Math.floor(Math.random() * CHARS_POOL.length)];
  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  function measure(){
    chars.forEach(c => {
      const r = c.el.getBoundingClientRect();
      c.cx = r.left + r.width / 2;
      c.cy = r.top + r.height / 2;
    });
  }
  measure();
  window.addEventListener('resize', measure);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  let mouseX = -9999, mouseY = -9999;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
  }, { passive: true });
  window.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });

  function isNearTitle(){
    const r = title.getBoundingClientRect();
    return mouseX > r.left - RADIUS && mouseX < r.right + RADIUS &&
           mouseY > r.top - RADIUS && mouseY < r.bottom + RADIUS;
  }

  let hoverAccum = 0;
  let lastFrame = performance.now();
  let sequenceRunning = false;
  let sequenceCooldown = false;

  async function runSequence(){
    sequenceRunning = true;
    sequenceCooldown = true;
    hoverAccum = 0;

    // 1) Dispersión: las letras caen y rotan al azar.
    chars.forEach(c => {
      c.el.style.transition = 'transform 0.5s cubic-bezier(.6,0,.8,1)';
      const fx = (Math.random() - 0.5) * 50;
      const fy = 50 + Math.random() * 90;
      const rot = (Math.random() - 0.5) * 60;
      c.el.style.transform = `translate(${fx}px, ${fy}px) rotate(${rot}deg)`;
    });
    await wait(500);

    // 2) Revuelo: caracteres al azar en cada posición.
    const scrambleUntil = performance.now() + 650;
    await new Promise(resolve => {
      (function frame(){
        chars.forEach(c => { if(Math.random() < 0.6) c.el.textContent = randomChar(); });
        if(performance.now() < scrambleUntil) requestAnimationFrame(frame);
        else resolve();
      })();
    });

    // 3) Resolución en cascada: cada letra vuelve a su lugar y a su
    // carácter original, con un pequeño desfasaje por índice.
    await Promise.all(chars.map((c, i) => new Promise(resolve => {
      setTimeout(() => {
        c.el.textContent = c.original;
        c.el.style.transition = 'transform 0.6s cubic-bezier(.16,1,.3,1)';
        c.el.style.transform = 'translate(0px,0px) rotate(0deg)';
        setTimeout(resolve, 600);
      }, i * 22);
    })));

    chars.forEach(c => { c.el.style.transition = ''; c.curX = 0; c.curY = 0; c.curRot = 0; });
    sequenceRunning = false;
    setTimeout(() => { sequenceCooldown = false; }, 3000);
  }

  function tick(){
    const now = performance.now();
    const dt = Math.min((now - lastFrame) / 1000, 0.1);
    lastFrame = now;

    if(!sequenceRunning){
      if(!sequenceCooldown && isNearTitle()){
        hoverAccum += dt;
        if(hoverAccum > 2.6) runSequence();
      } else if(!isNearTitle()){
        hoverAccum = Math.max(0, hoverAccum - dt * 2);
      }

      chars.forEach(c => {
        const dx = c.cx - mouseX, dy = c.cy - mouseY;
        const dist = Math.hypot(dx, dy);
        let targetY = 0, targetX = 0, targetRot = 0;
        if(dist < RADIUS){
          const proximity = 1 - dist / RADIUS;
          targetY = proximity * proximity * FALL;
          targetX = dx * 0.06 * proximity;
          targetRot = (dx < 0 ? -1 : 1) * proximity * 6;
        }
        c.curX += (targetX - c.curX) * 0.12;
        c.curY += (targetY - c.curY) * 0.12;
        c.curRot += (targetRot - c.curRot) * 0.12;
        c.el.style.transform = `translate(${c.curX}px, ${c.curY}px) rotate(${c.curRot}deg)`;
      });
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
