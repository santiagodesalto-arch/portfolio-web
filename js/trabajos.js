/* =========================================================
   PROYECTOS — Editá este array para cargar tus trabajos.
   embedUrl: pegá la URL de embed de Vimeo o YouTube.
     Vimeo:   https://player.vimeo.com/video/TU_ID
     YouTube: https://www.youtube.com/embed/TU_ID
   tcIn / tcOut: timecodes decorativos (podés dejarlos o
     cambiarlos por la duración real del video).
   category: para los filtros de arriba a la izquierda —
     "batallapost" | "freelance" | "personal". Un proyecto sin
     category no aparece en ningún filtro salvo "ALL WORKS".
========================================================= */
const PROJECTS = [
  {
    title: "Seguridad Vial",
    client: "Provincia de Santa Fe",
    role: "3D · Edición · Diseño Sonoro · Motion",
    year: 2025,
    category: "batallapost",
    description: [
      "Campaña de seguridad vial para la Provincia de Santa Fe. Mi participación en este proyecto estuvo relacionada con el 3D y la edición: realicé las simulaciones de las prendas de los personajes y resolví algunos planos y encuadres de cámara.",
      "Por otro lado, estuve encargado del montaje de la pieza, el diseño sonoro y la animación de los supers.",
      "Trabajo realizado en Batallapost."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:00:27:00",
    embedUrl: "https://player.vimeo.com/video/1020751215",
    stills: [] // rutas a imágenes fijas del proyecto, ej: "assets/proyectos/still1.jpg"
  },
  {
    title: "Telcel",
    client: "Telcel",
    role: "Edición",
    year: 2025,
    category: "batallapost",
    description: [
      "Pieza para Telcel. Mi trabajo estuvo enfocado exclusivamente en la edición: armé el montaje completo de la pieza de punta a punta.",
      "Trabajo realizado en Batallapost."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:00:42:08",
    embedUrl: "https://player.vimeo.com/video/1215321377?h=9751badd4e",
    stills: []
  },
  {
    title: "Dutide",
    client: "Laboratorio Elea",
    role: "3D Tracking · Compositing · IA Generativa · Edición",
    year: 2025,
    category: "batallapost",
    description: [
      "Campaña para el Laboratorio Elea. Participé en parte del tracking 3D y en algo de compositing e IA generativa, además de encargarme de la totalidad del montaje.",
      "Trabajo realizado en Batallapost."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:02:10:00",
    embedUrl: "https://player.vimeo.com/video/1215321717?h=9ac2110289",
    stills: []
  },
  {
    title: "Tomás Schneider",
    client: "Schneider",
    role: "Edición",
    year: 2025,
    category: "batallapost",
    description: [
      "Serie de piezas digitales para Schneider. Mi trabajo estuvo del lado de la edición: armé el montaje de cada una de las piezas de la tanda, pensadas para redes y plataformas digitales.",
      "Producción a cargo de Fight Films.",
      "Trabajo realizado en Batallapost."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:00:30:00",
    embedUrl: "https://player.vimeo.com/video/1215323688?h=06b9095df0",
    videos: [
      "https://player.vimeo.com/video/1215323689?h=e60db6502f",
      "https://player.vimeo.com/video/1215323690?h=a3889ceb58",
      "https://player.vimeo.com/video/1215323691?h=1088012298"
    ],
    stills: []
  },
  {
    title: "Ge Appliance - BIC 7",
    client: "MABE",
    role: "3D · Animación · Render · Edición",
    year: 2026,
    category: "batallapost",
    description: [
      "Serie de piezas para GE Appliance, dentro de la campaña BIC 7, desarrolladas íntegramente en 3D. Participé desde la creatividad y el planteamiento de los storyboards, hasta en parte de la animación, las simulaciones y los renders.",
      "También estuve a cargo de la totalidad del montaje de la campaña.",
      "Trabajo realizado en Batallapost."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:01:11:00",
    embedUrl: "https://player.vimeo.com/video/1232428565",
    stills: []
  },
  {
    title: "Mabe - BIC 7",
    client: "MABE",
    role: "3D · Animación · Render · Edición",
    year: 2026,
    category: "batallapost",
    description: [
      "Piezas para Mabe dentro de la misma campaña BIC 7, también resueltas íntegramente en 3D: sumé a la creatividad y los storyboards, en parte de la animación, las simulaciones y los renders.",
      "También estuve a cargo de la totalidad del montaje de la campaña.",
      "Trabajo realizado en Batallapost."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:01:12:00",
    embedUrl: "https://player.vimeo.com/video/1233117848",
    stills: []
  },
  {
    title: "Mabe Continental",
    client: "MABE",
    role: "Edición · IA Generativa · Compositing",
    year: 2026,
    category: "batallapost",
    description: [
      "Campaña para la renovación de marca de Mabe, desarrollada junto a un equipo multidisciplinario. Dentro del proyecto estuve a cargo de la edición.",
      "Además, trabajé junto al equipo en las generaciones con inteligencia artificial y resolví parte del compositing necesario para mantener la consistencia de los productos a lo largo de las piezas.",
      "Trabajo realizado en Batallapost."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:01:12:00",
    embedUrl: "https://player.vimeo.com/video/1231722708",
    stills: []
  },
  {
    // Proyecto de prueba para el embed de Behance — título/rol/descripción
    // son un borrador a partir de lo que dice la página de Behance
    // (herramientas: C4D, Redshift, AE — publicado oct. 2025). Editalo
    // a gusto, la mecánica del embed no depende de este texto.
    title: "Last Goodbye",
    client: "Proyecto personal",
    role: "Dirección · 3D · Animación · Render",
    year: 2025,
    category: "personal",
    description: [
      "Cortometraje CGI personal, resuelto íntegramente en 3D: dirección, animación, simulación y render.",
      "Herramientas: Cinema 4D, Redshift y After Effects."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:01:08:00",
    // type:"behance" hace que el detalle muestre el case study scrolleable
    // (behanceModules) en vez del reproductor de video normal.
    type: "behance",
    // Portada real del proyecto: es el mismo og:image que usa la propia
    // página de Behance para representarlo (confirmado desde el <meta
    // property="og:image"> de la página), no una imagen inventada.
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a4ca92236729397.68f170cdb0616.jpg",
    behanceUrl: "https://www.behance.net/gallery/236729397/CGI-SHORT-FILM-Last-Goodbye",
    behanceModules: [
      { type: "video", src: "https://www-ccv.adobe.io/v1/player/ccv/CsysYhMeNbb/embed?api_key=behance1&bgcolor=%23191919" },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/a4ca92236729397.68f170cdb0616.jpg" },
      { type: "image", src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/d3b51b236729397.68f170cdb0048.jpg" }
    ],
    stills: []
  },
  {
    // Rol y descripción: borrador, editalos con lo que corresponda.
    title: "After Movie — Fecha N°1 CSSF",
    client: "Personal",
    role: "Cámara · Edición",
    year: 2026,
    category: "personal",
    description: [
      "After movie de la Fecha N°1 de CSSF: registro de la jornada y edición de la pieza final."
    ],
    tcIn: "00:00:00:00",
    tcOut: "00:00:52:00",
    embedUrl: "https://player.vimeo.com/video/1234714341",
    stills: []
  }
];

const wrap = document.getElementById('sliderWrap');
const stage = document.getElementById('sliderStage');
const meta = document.getElementById('sliderMeta');
const counter = document.getElementById('sliderCounter');
const hudClient = document.getElementById('hudClient');
const hudRole = document.getElementById('hudRole');
const hudYear = document.getElementById('hudYear');
const rulerTrack = document.getElementById('hudRuler');
const prevPreview = document.getElementById('prevPreview');
const nextPreview = document.getElementById('nextPreview');
let current = 0;
let order = PROJECTS.map((_, i) => i);
let sliding = false;

// Si el proyecto no trae "thumbnail" propio, la buscamos automáticamente
// en Vimeo a partir del embedUrl (funciona para videos públicos/no listados).
function getVimeoThumbnail(embedUrl){
  const match = embedUrl.match(/player\.vimeo\.com\/video\/(\d+)/);
  if(!match) return Promise.resolve(null);
  const id = match[1];
  // Los videos privados/no listados llevan un hash de seguridad (?h=...)
  // en el embedUrl. Sin ese hash, Vimeo no deja consultar sus datos.
  const hashMatch = embedUrl.match(/[?&]h=([a-zA-Z0-9]+)/);
  const vimeoUrl = hashMatch ? `https://vimeo.com/${id}/${hashMatch[1]}` : `https://vimeo.com/${id}`;
  const oembedUrl = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}&width=1200`;
  return fetch(oembedUrl)
    .then(res => res.ok ? res.json() : null)
    .then(data => data ? data.thumbnail_url : null)
    .catch(() => null);
}

const cards = PROJECTS.map((p) => {
  const card = document.createElement('div');
  card.className = 'slide-card';
  card.innerHTML = `
    <span class="slide-tc mono">${p.tcIn}</span>
    <div class="play"></div>
    <span class="slide-tc-out mono">${p.tcOut}</span>
  `;
  card.addEventListener('click', () => openDetail(PROJECTS[order[current]]));
  stage.appendChild(card);

  if(p.thumbnail){
    card.style.backgroundImage = `url("${p.thumbnail}")`;
  } else if(p.embedUrl){
    getVimeoThumbnail(p.embedUrl).then(url => {
      if(url){
        card.style.backgroundImage = `url("${url}")`;
        refreshSidePreviews();
      }
    });
  }
  return card;
});

// Regla vertical: una marca por proyecto VISIBLE (según el filtro activo).
// Se reconstruye cada vez que cambia el filtro, porque la cantidad de
// marcas tiene que coincidir con la cantidad de trabajos filtrados, no
// con el total de PROJECTS.
const TICK_SPACING = 15 + 1; // gap + alto de la marca, definido en CSS
let ticks = [];
function buildTicks(){
  rulerTrack.innerHTML = '';
  ticks = order.map(() => {
    const tick = document.createElement('div');
    tick.className = 'tick';
    rulerTrack.appendChild(tick);
    return tick;
  });
}
buildTicks();

// Previews de los proyectos anterior/siguiente a los costados,
// reutilizando la miniatura que ya se cargó en su tarjeta.
function refreshSidePreviews(){
  const prevIndex = (current - 1 + order.length) % order.length;
  const nextIndex = (current + 1) % order.length;
  prevPreview.style.backgroundImage = cards[order[prevIndex]].style.backgroundImage;
  nextPreview.style.backgroundImage = cards[order[nextIndex]].style.backgroundImage;
}

function render(){
  const pad = (n) => String(n).padStart(2, '0');

  // Filtro sin resultados (todavía): estado vacío en vez de romper el HUD.
  if(order.length === 0){
    cards.forEach(card => card.classList.remove('is-active'));
    meta.innerHTML = '';
    stage.classList.add('is-empty');
    wrap.classList.add('is-empty');
    hudClient.textContent = '';
    hudRole.textContent = '';
    hudYear.textContent = '';
    counter.innerHTML = `<span class="current">00</span><span class="total">/ 00</span>`;
    rulerTrack.style.transform = 'translateY(0)';
    prevPreview.style.backgroundImage = '';
    nextPreview.style.backgroundImage = '';
    return;
  }
  stage.classList.remove('is-empty');
  wrap.classList.remove('is-empty');

  const projectIndex = order[current];
  cards.forEach((card, i) => card.classList.toggle('is-active', i === projectIndex));
  const p = PROJECTS[projectIndex];
  meta.innerHTML = `<h2 class="slide-title">${p.title}</h2>`;
  hudClient.textContent = p.client;
  hudRole.textContent = p.role;
  hudYear.textContent = p.year;
  counter.innerHTML = `<span class="current">${pad(current + 1)}</span><span class="total">/ ${pad(order.length)}</span>`;

  ticks.forEach((tick, i) => tick.classList.toggle('is-active', i === current));
  const centerOffset = 220 / 2 - TICK_SPACING / 2;
  rulerTrack.style.transform = `translateY(${centerOffset - current * TICK_SPACING}px)`;

  refreshSidePreviews();
}
render();

// ---------- Filtros: ALL WORKS / BATALLAPOST / FREELANCE / PERSONAL ----------
const hudFilters = document.getElementById('hudFilters');
const emptyMsg = document.createElement('div');
emptyMsg.className = 'hud-empty mono';
document.querySelector('.slider-stage-wrap').appendChild(emptyMsg);

const FILTER_LABELS = {
  all: 'trabajos',
  batallapost: 'trabajos en BATALLAPOST',
  freelance: 'trabajos FREELANCE',
  personal: 'trabajos PERSONALES'
};

function applyFilter(filter){
  order = PROJECTS
    .map((_, i) => i)
    .filter(i => filter === 'all' || PROJECTS[i].category === filter);
  current = 0;
  buildTicks();
  emptyMsg.textContent = order.length === 0
    ? `Todavía no hay ${FILTER_LABELS[filter] || 'trabajos'} cargados acá.`
    : '';
  render();
}

hudFilters.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('is-active')) return;
    hudFilters.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    applyFilter(btn.dataset.filter);
  });
});

// Anima la tarjeta saliente hacia un costado (achicándose) mientras la
// entrante llega desde el lado opuesto y crece hasta el centro.
function animateSlide(newIndex, direction){
  const outgoingCard = cards[order[current]];
  const incomingCard = cards[order[newIndex]];

  if(outgoingCard === incomingCard){ current = newIndex; render(); return; }

  sliding = true;
  // Animaciones declarativas (@keyframes): cada tarjeta corre su propio
  // timeline de una sola vez, sin estados intermedios manuales — así no
  // hay riesgo de que se vea "en dos lugares a la vez".
  const outClass = direction === 1 ? 'slide-out-left' : 'slide-out-right';
  const inClass = direction === 1 ? 'slide-in-right' : 'slide-in-left';

  incomingCard.classList.add('is-active', inClass);
  outgoingCard.classList.add(outClass);

  current = newIndex;

  // OJO: render() (texto, contador, y sobre todo los previews laterales)
  // se dispara ACÁ, en el mismo instante en que arranca el slide — no al
  // terminar. Antes se esperaba a que la animación terminara para llamar
  // render(), y durante esos ~600ms el preview lateral seguía mostrando
  // el proyecto que en ese momento ya estaba entrando al centro: se veía
  // el mismo proyecto grande (entrando) y chico (preview) a la vez. Ahora
  // el preview salta al siguiente/anterior correcto desde el arranque.
  render();

  // 620ms: un poco más que los 0.6s del keyframe, para asegurarnos de
  // que la animación ya terminó (llegó a su "to" exacto) antes de sacar
  // la clase — así no se corta a mitad de camino.
  setTimeout(() => {
    outgoingCard.classList.remove('is-active', outClass);
    incomingCard.classList.remove(inClass);
    // Limpiamos cualquier transform inline que haya quedado pegado del
    // tilt-on-hover de una visita anterior a estas cards — si no, al
    // volver a activarse podrían arrancar con una inclinación vieja en
    // vez del reposo prolijo que define el CSS.
    outgoingCard.style.transform = '';
    incomingCard.style.transform = '';
    sliding = false;
  }, 620);
}

function goTo(i){
  const newIndex = (i + order.length) % order.length;
  if(sliding || newIndex === current) return;
  const direction = i > current ? 1 : -1;
  animateSlide(newIndex, direction);
}

prevPreview.addEventListener('click', () => goTo(current - 1));
nextPreview.addEventListener('click', () => goTo(current + 1));

/* ---------- Navegación con la rueda del mouse ---------- */
let wheelLocked = false;
wrap.addEventListener('wheel', (e) => {
  e.preventDefault();
  if(wheelLocked || Math.abs(e.deltaY) < 8) return;
  wheelLocked = true;
  goTo(current + (e.deltaY > 0 ? 1 : -1));
  setTimeout(() => { wheelLocked = false; }, 640);
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(current - 1);
  if(e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
});

/* ---------- Deslizar con el dedo en touch ---------- */
let dragStartX = null;
stage.addEventListener('pointerdown', (e) => { dragStartX = e.clientX; });
stage.addEventListener('pointerup', (e) => {
  if(dragStartX === null) return;
  const diff = e.clientX - dragStartX;
  if(Math.abs(diff) > 50) goTo(current + (diff < 0 ? 1 : -1));
  dragStartX = null;
});

/* ---------- Miniatura 3D reactiva al cursor ---------- */
const isTouch = window.matchMedia('(pointer: coarse)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!isTouch && !reduceMotion){
  stage.addEventListener('mousemove', (e) => {
    if(sliding) return;
    const activeCard = cards[order[current]];
    const rect = stage.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    // Tilt suave y SIN agrandar (antes escalaba a 1.03): el stage recorta
    // con overflow:hidden, así que un tilt fuerte + un scale-up hacían que
    // la esquina se saliera del cuadro y quedara cortada en línea recta.
    // Con ±4° y sin crecer, la card nunca necesita salirse del cuadro.
    activeCard.style.transform = `perspective(1200px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) scale(0.97)`;
  });
  stage.addEventListener('mouseleave', () => {
    if(sliding) return;
    const activeCard = cards[order[current]];
    // Vacío: que vuelva a lo que define el CSS (.slide-card.is-active),
    // que ahora es plano — una sola fuente de verdad para el reposo.
    activeCard.style.transform = '';
  });
}

const projectDetail = document.getElementById('projectDetail');
const modalIframe = document.getElementById('modalIframe');
const modalVideoFile = document.getElementById('modalVideoFile');
const modalStill = document.getElementById('modalStill');
const modalTitle = document.getElementById('modalTitle');
const modalClient = document.getElementById('modalClient');
const modalYear = document.getElementById('modalYear');
const detailNumber = document.getElementById('detailNumber');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const detailDots = document.getElementById('detailDots');
const behanceScroll = document.getElementById('behanceScroll');
const behanceModulesEl = document.getElementById('behanceModules');
const behanceLink = document.getElementById('behanceLink');

// Arma el case study de Behance apilando sus módulos reales (video +
// imágenes, mismo orden que en la página original) dentro del panel con
// scroll propio — así se recorre igual que el proyecto real en Behance.
function buildBehanceScroll(p){
  behanceLink.href = p.behanceUrl || '#';
  behanceModulesEl.innerHTML = '';
  (p.behanceModules || []).forEach(mod => {
    if(mod.type === 'video'){
      const wrap = document.createElement('div');
      wrap.className = 'behance-media-video';
      wrap.innerHTML = `<iframe src="${mod.src}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
      behanceModulesEl.appendChild(wrap);
    } else if(mod.type === 'image'){
      const img = document.createElement('img');
      img.src = mod.src;
      img.loading = 'lazy';
      img.alt = p.title;
      behanceModulesEl.appendChild(img);
    }
  });
  behanceScroll.scrollTop = 0;
}

function isDirectVideoFile(url){
  return /\.(mp4|webm|ogg)$/i.test(url);
}

// La galería del detalle: primero el video principal (embedUrl), después
// cualquier video extra que hayas puesto en "videos" (para proyectos con
// varias piezas, como un set de piezas digitales), y por último los
// stills (imágenes fijas) del campo "stills".
function buildMediaList(p){
  const media = [];
  if(p.embedUrl) media.push({ type: isDirectVideoFile(p.embedUrl) ? 'videofile' : 'iframe', src: p.embedUrl });
  (p.videos || []).forEach(src => media.push({ type: isDirectVideoFile(src) ? 'videofile' : 'iframe', src }));
  (p.stills || []).forEach(src => media.push({ type: 'image', src }));
  return media;
}

let currentMedia = [];
let currentMediaIndex = 0;

function showMedia(index){
  currentMediaIndex = index;
  const item = currentMedia[index];
  modalIframe.style.display = 'none'; modalIframe.src = '';
  modalVideoFile.style.display = 'none'; modalVideoFile.pause(); modalVideoFile.src = '';
  modalStill.style.display = 'none'; modalStill.src = '';

  if(item.type === 'iframe'){
    modalIframe.style.display = 'block';
    modalIframe.src = item.src;
  } else if(item.type === 'videofile'){
    modalVideoFile.style.display = 'block';
    modalVideoFile.src = item.src;
    modalVideoFile.play().catch(() => {});
  } else if(item.type === 'image'){
    modalStill.style.display = 'block';
    modalStill.src = item.src;
  }
  [...detailDots.children].forEach((dot, i) => dot.classList.toggle('is-active', i === index));
}

const modalVideoBox = document.querySelector('.modal-video');
const isBehanceProject = (p) => p.type === 'behance';

function openDetail(p){
  if(!p.embedUrl && !isBehanceProject(p)){
    alert('Todavía no cargaste el link del video para "' + p.title + '". Editá el array PROJECTS en js/trabajos.js y pegá la URL de embed de Vimeo o YouTube.');
    return;
  }
  modalTitle.textContent = p.title;
  modalClient.textContent = p.client;
  modalYear.textContent = p.year;
  detailNumber.textContent = 'N°' + String(current + 1).padStart(2, '0');
  modalDescription.innerHTML = p.description.map(paragraph => `<p>${paragraph}</p>`).join('');
  modalTags.innerHTML = p.role.split('·').map(tag => `<span>${tag.trim()}</span>`).join('');

  if(isBehanceProject(p)){
    // Case study de Behance: panel con scroll propio en vez del
    // reproductor paginado normal.
    modalVideoBox.style.display = 'none';
    detailDots.style.display = 'none';
    currentMedia = [];
    buildBehanceScroll(p);
    behanceScroll.classList.add('is-active');
  } else {
    behanceScroll.classList.remove('is-active');
    modalVideoBox.style.display = '';
    detailDots.style.display = '';
    currentMedia = buildMediaList(p);
    detailDots.innerHTML = currentMedia.map(() => '<span></span>').join('');
    [...detailDots.children].forEach((dot, i) => dot.addEventListener('click', () => showMedia(i)));
    showMedia(0);
  }

  projectDetail.classList.add('open');
}
function closeDetail(){
  projectDetail.classList.remove('open');
  modalIframe.src = '';
  modalVideoFile.pause();
  modalVideoFile.src = '';
  modalStill.src = '';
  behanceModulesEl.innerHTML = '';
}
document.getElementById('detailClose').addEventListener('click', closeDetail);

// Si el proyecto tiene más de un contenido (varios videos y/o stills),
// la rueda del mouse dentro del detalle pasa de uno a otro.
let mediaWheelLocked = false;
projectDetail.addEventListener('wheel', (e) => {
  if(currentMedia.length < 2) return;
  e.preventDefault();
  if(mediaWheelLocked || Math.abs(e.deltaY) < 8) return;
  mediaWheelLocked = true;
  const next = (currentMediaIndex + (e.deltaY > 0 ? 1 : -1) + currentMedia.length) % currentMedia.length;
  showMedia(next);
  setTimeout(() => { mediaWheelLocked = false; }, 650);
}, { passive: false });
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeDetail();
});
