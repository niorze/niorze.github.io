// ============================================================
// NIORZE — v4 (calm, pro, no jittery animations)
// ============================================================

// ---------- i18n ----------
const i18n = {
  ru: {
    'meta.status': 'Принимаю заказы',
    'hero.sub1': 'Design',
    'hero.sub2': 'studio.',
    'hero.lede': 'UI/UX для игровых проектов — чистая композиция, продуманная иерархия, 0% шума.',
    'hero.cta1': 'Начать проект',
    'hero.cta2': 'Смотреть работы',
    'about.t1': 'Дизайн,',
    'about.t2': 'который работает.',
    'about.p1': 'Делаю интерфейсы для игровых проектов: HUD, GUI, Main Menu, Alt Manager. Чистая композиция, продуманная иерархия, никаких лишних элементов.',
    'about.p2': 'Работаю по чёткому ТЗ, передаю в Figma, при необходимости переношу в код. 1–3 дня в среднем на задачу.',
    'works.t1': 'Избранные',
    'works.t2': 'работы.',
    'works.cat.hud': 'HUD',
    'works.cat.gui': 'GUI',
    'works.cat.mm': 'Main Menu',
    'works.cat.alt': 'Alt Manager',
    'works.cat.logo': 'Logotype',
    'pricing.t1': 'Прозрачный',
    'pricing.t2': 'прайс.',
    'price.mainmenu': 'Main Menu',
    'price.altmanager': 'Alt Manager',
    'price.avatar': 'Аватарка',
    'price.banner': 'Баннер',
    'price.animation': 'Анимация',
    'price.logotype': 'Логотип',
    'price.note': '* Финальная цена формируется после изучения ТЗ. Сложность напрямую влияет на итоговую сумму.',
    'bundles.t1': 'Готовые',
    'bundles.t2': 'наборы.',
    'bundles.sub': 'Собранные пакеты услуг с выгодой до 15%.',
    'rules.t1': 'Условия',
    'rules.t2': 'работы.',
    'rules.sub': 'Оформляя заказ, вы автоматически соглашаетесь с условиями ниже.',
    'contacts.t1': 'Готов',
    'contacts.t2': 'обсудить',
    'contacts.t3': 'ваш проект.',
    'contacts.channel': 'TG Channel',
    'footer.tag': 'UI/UX для игровых проектов.',
    'footer.rights': '© 2026 Niorze · @nrzdsgn. Все права защищены.',
    'work.k': 'Проект',
    'bundle.save': 'экономия',
    'bundle.bundle': 'Bundle',
  },
  en: {
    'meta.status': 'Available for new projects',
    'hero.sub1': 'Design',
    'hero.sub2': 'studio.',
    'hero.lede': 'UI/UX for gaming projects — clean composition, considered hierarchy, zero noise.',
    'hero.cta1': 'Start a project',
    'hero.cta2': 'See works',
    'about.t1': 'Design',
    'about.t2': 'that works.',
    'about.p1': 'I design interfaces for gaming projects: HUD, GUI, Main Menu, Alt Manager. Clean composition, considered hierarchy, nothing extra.',
    'about.p2': 'I work from a clear brief, deliver via Figma, port to code when needed. 1–3 days on average per task.',
    'works.t1': 'Selected',
    'works.t2': 'works.',
    'works.cat.hud': 'HUD',
    'works.cat.gui': 'GUI',
    'works.cat.mm': 'Main Menu',
    'works.cat.alt': 'Alt Manager',
    'works.cat.logo': 'Logotype',
    'pricing.t1': 'Transparent',
    'pricing.t2': 'pricing.',
    'price.mainmenu': 'Main Menu',
    'price.altmanager': 'Alt Manager',
    'price.avatar': 'Avatar',
    'price.banner': 'Banner',
    'price.animation': 'Animation',
    'price.logotype': 'Logotype',
    'price.note': '* Final price is set after reviewing the brief. Complexity directly affects the total.',
    'bundles.t1': 'Pre-made',
    'bundles.t2': 'bundles.',
    'bundles.sub': 'Pre-made packages with up to 15% off.',
    'rules.t1': 'Terms',
    'rules.t2': 'of work.',
    'rules.sub': 'By placing an order you agree to the terms below.',
    'contacts.t1': 'Ready to',
    'contacts.t2': 'discuss',
    'contacts.t3': 'your project.',
    'contacts.channel': 'TG Channel',
    'footer.tag': 'UI/UX for gaming projects.',
    'footer.rights': '© 2026 Niorze · @nrzdsgn. All rights reserved.',
    'work.k': 'Project',
    'bundle.save': 'save',
    'bundle.bundle': 'Bundle',
  }
};

function applyLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  renderBundles(lang);
  renderRules(lang);
  renderWorks(lang);
  try { localStorage.setItem('niorze.lang', lang); } catch(e) {}
}

document.getElementById('langToggle').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-lang') || 'ru';
  applyLang(cur === 'ru' ? 'en' : 'ru');
});

// ---------- MARQUEE AUTO-FILL ----------
const marqueeItems = ['HUD','GUI','Main Menu','Alt Manager','Logotype','Animation','Design → Code'];
function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const buildOne = () => marqueeItems.map(w => `<span>${w}</span><span class="sep">✦</span>`).join('');
  // 4 copies — covers wide screens, animation shifts by 50%
  track.innerHTML = buildOne() + buildOne() + buildOne() + buildOne();
}

// ---------- DATA ----------
const bundles = [
  { name: 'Basic',    items: [['HUD','Design'],['GUI','Design']], role: 'BUYER',       old: 1600, now: 1400 },
  { name: 'Basic+',   items: [['HUD','Design & Code'],['GUI','Design & Code']], role: 'BUYER+', old: 4000, now: 3400 },
  { name: 'Pro',      items: [['HUD','Design'],['GUI','Design'],['Main Menu','Design'],['Alt Manager','Design']], role: 'PRO BUYER', old: 2800, now: 2400 },
  { name: 'Pro+',     items: [['HUD','D & C'],['GUI','D & C'],['Main Menu','D & C'],['Alt Manager','D & C']], role: 'PRO BUYER+', old: 7200, now: 6000 },
  { name: 'Graphic',  items: [['Avatar',''],['Banner',''],['Animation',''],['Logotype','']], role: 'GRAPHIC BUYER', old: 1100, now: 900 },
  { name: 'Apex',     featured: true, items: [['Interface pack','Design'],['Graphics pack','Design']], role: 'APEX BUYER', old: 3900, now: 3100 },
  { name: 'Apex+',    featured: true, items: [['Interface pack','Design + Code'],['Graphics pack','Design']], role: 'APEX BUYER+', old: 8300, now: 7200 },
];

const rulesData = {
  ru: [
    ['01','Сроки','Среднее время выполнения — 1–3 дня. Точные сроки зависят от объёма и очереди. Сб и Вс — выходные, возможны исключения.'],
    ['02','Техническое задание','Работа начинается только после заполнения ТЗ по форме. Без ТЗ — старта нет.'],
    ['03','Стоимость','Финальная цена формируется после изучения ТЗ. Сложность проекта напрямую влияет на итоговую сумму.'],
    ['04','Вне ТЗ','Всё, что не указано в задании, обсуждается и оплачивается отдельно.'],
    ['05','Формат сдачи','Готовый дизайн передаётся ссылкой на проект в Figma. Логотип и аватарка — две разные услуги.'],
    ['06','Перенос в код','Код пишется на базе готового решения. Если нужных элементов нет — стоимость переноса увеличивается.'],
    ['07','Оплата и возврат','Стандарт — 100% предоплата. Возможна предоплата 50%. Возврат средств не предусмотрен.'],
    ['08','Способы оплаты','Карта / СБП / криптовалюта.'],
    ['09','Общение','Общаемся уважительно и по делу. Неадекватное поведение — отмена заказа без возврата.'],
    ['10','Правки','Правки в течение нескольких дней после сдачи — бесплатно. Крупные изменения — оплачиваются отдельно.'],
  ],
  en: [
    ['01','Timeline','Average turnaround — 1–3 days. Timing depends on scope and queue. Sat/Sun are days off, exceptions possible.'],
    ['02','Brief','Work starts only after the brief form is filled. No brief — no start.'],
    ['03','Pricing','Final price is set after reviewing the brief. Project complexity directly affects the total.'],
    ['04','Out of scope','Anything not in the brief is discussed and paid for separately.'],
    ['05','Delivery','Final design is delivered as a Figma project link. Logo and avatar are two separate services.'],
    ['06','Design to code','Code is written on top of an existing solution. Missing base elements increase the porting price.'],
    ['07','Payment & refunds','Standard — 100% prepaid. 50% prepaid possible. Refunds are not provided.'],
    ['08','Payment methods','Card / SBP / crypto.'],
    ['09','Communication','Respectful and to the point. Inadequate behaviour — order cancelled without refund.'],
    ['10','Revisions','Revisions within a few days after delivery — free. Major changes — paid separately.'],
  ]
};

const workCats = [
  { title: 'Niorze HUD', cat: 'works.cat.hud' },
  { title: 'Niorze GUI', cat: 'works.cat.gui' },
  { title: 'Niorze Menu', cat: 'works.cat.mm' },
  { title: 'Niorze Alt', cat: 'works.cat.alt' },
  { title: 'Niorze Logo', cat: 'works.cat.logo' },
];

// ---------- RENDER ----------
function renderBundles(lang) {
  const el = document.getElementById('bundlesGrid'); if (!el) return;
  const d = i18n[lang];
  el.innerHTML = bundles.map((b, i) => {
    const save = Math.round((1 - b.now / b.old) * 100);
    return `
    <article class="bundle-card${b.featured ? ' bundle-featured' : ''}">
      <div class="bundle-head">
        <div>
          <div class="bundle-kind">${d['bundle.bundle']} · ${String(i+1).padStart(2,'0')}</div>
          <h3 class="bundle-name">${b.name}</h3>
        </div>
        ${b.featured ? `<span class="bundle-badge">${b.name === 'Apex+' ? 'Top' : 'Hot'}</span>` : ''}
      </div>
      <ul class="bundle-list">
        ${b.items.map(([l, t]) => `<li><span>${l}</span>${t ? `<code>${t}</code>` : ''}</li>`).join('')}
      </ul>
      <div class="bundle-role">role · ${b.role.toLowerCase()}</div>
      <div class="bundle-foot">
        <div class="bundle-price">
          <span class="old">${b.old}₽</span>
          <span class="new">${b.now}₽</span>
        </div>
        <span class="bundle-save">${d['bundle.save']} ${save}%</span>
      </div>
    </article>`;
  }).join('');
  bindCardCursor('.bundle-card');
}

function renderRules(lang) {
  const el = document.getElementById('rulesGrid'); if (!el) return;
  el.innerHTML = rulesData[lang].map(([n, t, b]) => `
    <article class="rule-card">
      <div class="rule-num">${n}</div>
      <div>
        <h3 class="rule-title">${t}</h3>
        <p class="rule-body">${b}</p>
      </div>
    </article>
  `).join('');
}

function renderWorks(lang) {
  const el = document.getElementById('worksGrid'); if (!el) return;
  const d = i18n[lang];
  const k = d['work.k'];
  el.innerHTML = workCats.map((w, i) => `
    <div class="work-card" data-idx="${i+1}">
      <div class="work-top">
        <span class="k">${String(i+1).padStart(2,'0')} / ${k}</span>
        <span class="cat">${d[w.cat] || ''}</span>
      </div>
      <div class="work-bottom">
        <h3 class="work-title">${w.title}</h3>
        <span class="work-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </div>
    </div>
  `).join('');
  const cnt = document.getElementById('worksCount');
  if (cnt) cnt.textContent = String(workCats.length).padStart(2,'0');
  el.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(card.querySelector('.work-title').textContent));
  });
  bindCardCursor('.work-card');
}

// ---------- CARD CURSOR GLOW (subtle, no transform) ----------
function bindCardCursor(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });
}

// ---------- LIGHTBOX ----------
const lb = document.getElementById('lightbox');
const lbContent = document.getElementById('lightboxContent');
function openLightbox(text) {
  lbContent.textContent = text;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ---------- REVEAL ON SCROLL ----------
function wireReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  const t = document.querySelector('.hero-title');
  if (t) requestAnimationFrame(() => t.classList.add('in'));

  document.querySelectorAll('.section .h2, .section .prose, .footnote')
    .forEach(el => {
      el.classList.add('fade-up');
      io.observe(el);
    });
}

// ---------- LUCIDE ----------
function renderIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
}

// ---------- INIT ----------
(function init() {
  let lang = 'ru';
  try { lang = localStorage.getItem('niorze.lang') || 'ru'; } catch(e) {}
  initMarquee();
  applyLang(lang);
  wireReveal();
  // lucide is deferred; wait for it
  if (window.lucide) renderIcons();
  else window.addEventListener('load', renderIcons);
})();
