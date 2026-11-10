/* Shared components & rendering for playgmod */

function svgIcon(paths) {
  return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
}

const ICONS = {
  gamepad: svgIcon('<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/>'),
  flame: svgIcon('<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'),
  star: svgIcon('<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>'),
  download: svgIcon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>'),
  menu: svgIcon('<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>'),
  x: svgIcon('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
  search: svgIcon('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>'),
  mail: svgIcon('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
  chevronRight: svgIcon('<path d="m9 18 6-6-6-6"/>'),
  arrowLeft: svgIcon('<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>'),
  hardDrive: svgIcon('<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>'),
  shieldCheck: svgIcon('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'),
  cpu: svgIcon('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>'),
  memoryStick: svgIcon('<path d="M6 19v-3"/><path d="M10 19v-3"/><path d="M14 19v-3"/><path d="M18 19v-3"/><path d="M8 11V9"/><path d="M16 11V9"/><path d="M12 11V9"/><path d="M2 15h20"/><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"/>'),
  monitor: svgIcon('<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>'),
  smartphone: svgIcon('<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>'),
  zap: svgIcon('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'),
  apple: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.81.93-2.87-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.74-.95 2.78 1.02.08 2.06-.52 2.69-1.28z"/></svg>',
  android: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.125 12 8.125s-3.5902.2866-5.1368.8247L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>'
};

function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* Fallback image generator for high resilience */
function createGameAvatar(title, category) {
  const initials = (title || 'G2')
    .split(' ')
    .slice(0, 2)
    .map(function (w) { return w[0]; })
    .join('')
    .toUpperCase();

  const hues = {
    action: ['#ff416c', '#ff4b2b'],
    adventure: ['#8a2387', '#e94057'],
    racing: ['#f12711', '#f5af19'],
    simulation: ['#11998e', '#38ef7d'],
    sports: ['#00b4db', '#0083b0'],
    horror: ['#434343', '#111111'],
    arcade: ['#f368e0', '#ff9f43'],
    social: ['#0abde3', '#10ac84'],
    tutorial: ['#5f27cd', '#341f97'],
    default: ['#6c5ce7', '#a29bfe']
  };
  const c = hues[category] || hues.default;
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="' + encodeURIComponent(c[0]) + '"/><stop offset="100%" stop-color="' + encodeURIComponent(c[1]) + '"/></linearGradient></defs><rect width="140" height="140" rx="20" fill="url(%23g)"/><text x="50%" y="54%" font-family="sans-serif" font-weight="800" font-size="44" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle">' + initials + '</text></svg>';
}

window.handleImageError = function (img, title, category) {
  img.onerror = null;
  img.src = createGameAvatar(title, category);
};

function navLinks(isHome) {
  return [
    { href: isHome ? 'index.html' : 'index.html', label: 'Home' },
    { href: isHome ? '#featured' : 'index.html#featured', label: 'Featured' },
    { href: isHome ? '#categories' : 'index.html#categories', label: 'Categories' },
    { href: isHome ? '#trending' : 'index.html#trending', label: 'Trending' }
  ];
}

function navbar(isHome) {
  const homeHref = 'index.html';
  const links = navLinks(isHome).map(function (l) {
    return '<a class="nav-link" href="' + l.href + '">' + l.label + '</a>';
  }).join('');
  const mobileLinks = navLinks(isHome).map(function (l) {
    return '<a href="' + l.href + '">' + l.label + '</a>';
  }).join('');
  return '<header class="navbar">' +
    '<div class="container">' +
      '<div class="navbar-inner">' +
        '<a class="navbar-logo" href="' + homeHref + '">' +
          '<span class="logo-icon icon-xl text-primary">' + ICONS.gamepad + '</span>' +
         '<span class="navbar-title neon-text"PLAYMOD</span>'+
        '</a>' +
        '<nav class="nav-links">' + links + '</nav>' +
        '<div class="navbar-actions">' +
          '<input type="search" class="search-input hidden" id="navSearch" placeholder="Search ' + GAMES_WITH_IMAGES.length + '+ games &amp; APKs..." autocomplete="off">' +
          '<button class="btn btn-ghost btn-icon" id="searchToggle" aria-label="Search">' + ICONS.search + '</button>' +
          '<button class="btn btn-ghost btn-icon md-hide" id="menuToggle" aria-label="Menu">' + ICONS.menu + '</button>' +
        '</div>' +
      '</div>' +
      '<nav class="mobile-nav hidden" id="mobileNav">' + mobileLinks + '</nav>' +
    '</div>' +
  '</header>';
}

/* ----------------------------------------------------------------
   Banner zones. Script host is bellnewyork.org.
     728×90   Leaderboard
     468×60   Banner
     320×50   Mobile banner
     300×250  Medium rectangle
     160×300  Skyscraper
     160×600  Wide skyscraper
   ---------------------------------------------------------------- */
const AD_SCRIPT_HOST = 'https://bellnewyork.org/22/';
const AD_KEYS = {
  '728x90':  { key: '120cff8af1e7b997b08834cc11e14d0a', height: 90,  width: 728 },
  '468x60':  { key: '5791a985e8341d50cc322024c737a68c', height: 60,  width: 468 },
  '320x50':  { key: '86efad0f0b0cb0575d641e5b3c5eea6a', height: 50,  width: 320 },
  '300x250': { key: 'b15ca5a5d1de28583ead0c85cdb02a35', height: 250, width: 300 },
  '160x300': { key: '1eebc8ca8c2f16c82040f660c3028ab5', height: 300, width: 160 },
  '160x600': { key: 'd612065c968a59ffcd4dbc21105676a4', height: 600, width: 160 }
};

const AD_LABELS = {
  '728x90':  { icon: '📢', name: 'Leaderboard',       desc: 'Banner 728 × 90' },
  '468x60':  { icon: '📌', name: 'Banner',            desc: 'Banner 468 × 60' },
  '320x50':  { icon: '📱', name: 'Mobile Banner',     desc: 'Banner 320 × 50' },
  '300x250': { icon: '📦', name: 'Medium Rectangle',  desc: 'Banner 300 × 250' },
  '160x300': { icon: '🏢', name: 'Skyscraper',        desc: 'Banner 160 × 300' },
  '160x600': { icon: '🏢', name: 'Wide Skyscraper',   desc: 'Banner 160 × 600' }
};

function adSlot(size, extraClass) {
  const cfg   = AD_KEYS[size]   || { key: null, height: 90, width: null };
  const label = AD_LABELS[size] || { icon: '📢', name: size, desc: size };

  const w = cfg.width  ? cfg.width  + 'px' : '100%';
  const h = cfg.height ? cfg.height + 'px' : '90px';
  const placeholderH = (cfg.height && cfg.height < 72 ? 72 : (cfg.height || 90)) + 'px';

  /* If a real key is set, inject the actual ad script */
  if (cfg.key) {
    return '<div class="ad-slot ' + (extraClass || '') + '" data-ad="' + size + '">' +
      '<div class="ad-box" style="width:' + w + ';height:' + h + ';max-width:100%;"></div>' +
    '</div>';
  }

  /* Visible placeholder — clearly shows placement & size */
  return '<div class="ad-slot ad-placeholder ' + (extraClass || '') + '" data-ad="' + size + '" style="display:flex;justify-content:center;align-items:center;padding:6px 0;">' +
    '<div class="ad-placeholder-box" style="' +
      'width:' + w + ';' +
      'max-width:100%;' +
      'height:' + placeholderH + ';' +
      'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;' +
      'background:linear-gradient(135deg,rgba(108,92,231,0.08),rgba(0,242,254,0.05));' +
      'border:1.5px dashed rgba(108,92,231,0.4);' +
      'border-radius:10px;' +
      'position:relative;overflow:hidden;' +
      'transition:border-color 0.2s,box-shadow 0.2s;' +
    '">' +
      /* Corner label */
      '<span style="' +
        'position:absolute;top:6px;left:8px;' +
        'font-size:0.6rem;font-weight:700;letter-spacing:0.5px;' +
        'color:rgba(108,92,231,0.6);text-transform:uppercase;' +
      '">Adsterra zone</span>' +
      /* Icon */
      '<span style="font-size:' + (cfg.height >= 200 ? '1.6' : '1.1') + 'rem;line-height:1;">' + label.icon + '</span>' +
      /* Name */
      '<span style="' +
        'font-size:' + (cfg.height >= 60 ? '0.78' : '0.65') + 'rem;' +
        'font-weight:700;color:rgba(255,255,255,0.7);font-family:Orbitron,sans-serif;letter-spacing:0.5px;text-align:center;padding:0 8px;' +
      '">' + label.name + '</span>' +
      /* Dimensions */
      (cfg.height >= 50
        ? '<span style="font-size:0.65rem;color:rgba(255,255,255,0.3);font-family:JetBrains Mono,monospace;">' + label.desc + '</span>'
        : '') +
      '<span style="font-size:0.6rem;color:rgba(0,242,254,0.55);">Paste zone key</span>' +
      /* Shimmer overlay */
      '<div style="' +
        'position:absolute;inset:0;' +
        'background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.03) 50%,transparent 100%);' +
        'pointer-events:none;' +
      '"></div>' +
    '</div>' +
  '</div>';
}

var adInjectQueue = [];
var adInjectRunning = false;

function injectAds() {
  document.querySelectorAll('[data-ad]').forEach(function (slot) {
    if (slot.getAttribute('data-loaded')) return;
    var ad = AD_KEYS[slot.getAttribute('data-ad')];
    if (!ad || !ad.key) return;
    if (window.getComputedStyle(slot).display === 'none') return;
    slot.setAttribute('data-loaded', '1');
    adInjectQueue.push(slot);
  });
  if (!adInjectRunning) runAdInject();
}

function runAdInject() {
  var slot = adInjectQueue.shift();
  if (!slot) {
    adInjectRunning = false;
    return;
  }
  adInjectRunning = true;
  var ad = AD_KEYS[slot.getAttribute('data-ad')];
  var box = slot.querySelector('.ad-box');
  if (!box || !ad) {
    runAdInject();
    return;
  }
  window.atOptions = {
    key: ad.key,
    format: 'iframe',
    height: ad.height,
    width: ad.width,
    params: {}
  };
  var script = document.createElement('script');
  script.src = AD_SCRIPT_HOST + ad.key;
  script.onload = script.onerror = function () { setTimeout(runAdInject, 40); };
  box.appendChild(script);
}

function gameCard(game) {
  const badge = game.mod
    ? '<span class="badge-trending">\u26A1 MOD APK</span>'
    : (game.trending ? '<span class="badge-trending">\u{1F525} TRENDING</span>' : '');
  return '<div class="game-card group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50">' +
    '<a class="card-link" href="game.html?id=' + esc(game.id) + '">' +
      '<img src="' + esc(game.image) + '" alt="' + esc(game.title) + '" loading="lazy" onerror="handleImageError(this, \'' + esc(game.title.replace(/'/g, "\\'")) + '\', \'' + esc(game.category) + '\')">' +
      '<div class="card-overlay"></div>' +
      '<span class="absolute top-3 left-3" style="z-index:2">' + badge + '</span>' +
      '<span class="badge-size absolute top-3 right-3" style="z-index:2">' + esc(game.size) + '</span>' +
    '</a>' +
    '<div class="card-body">' +
      '<div class="flex items-center justify-between mb-2">' +
        '<span class="card-category">' + esc(game.catLabel || game.category) + '</span>' +
        '<span class="flex items-center gap-1"><span class="icon-md star-filled">' + ICONS.star + '</span><span class="text-sm font-medium">' + game.rating + '</span></span>' +
      '</div>' +
      '<a class="cursor-pointer" href="game.html?id=' + esc(game.id) + '"><h3 class="card-title line-clamp-1">' + esc(game.title) + '</h3></a>' +
      '<p class="card-desc line-clamp-2">' + esc(game.description) + '</p>' +
      '<div class="card-footer">' +
        '<span class="card-downloads"><span class="icon-sm">' + ICONS.download + '</span>' + esc(game.downloads) + '</span>' +
        '<a class="btn btn-accent btn-sm" href="game.html?id=' + esc(game.id) + '">Download</a>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function footer(isHome) {
  const homeHref = 'index.html';
  return '<footer class="footer">' +
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div>' +
          '<a class="navbar-logo mb-4" href="' + homeHref + '">' +
            '<span class="icon-xl text-primary">' + ICONS.gamepad + '</span>' +
            '<span class="navbar-title">playgmod</span>' +
          '</a>' +
          '<p class="text-sm text-muted-foreground leading-relaxed">Your ultimate destination for verified premium MOD APKs, unlocked games, and high-speed downloads for iOS &amp; Android.</p>' +
        '</div>' +
        '<div>' +
          '<h4 class="footer-title">Quick Links</h4>' +
          '<ul class="space-y-2">' +
            '<li><a class="footer-link" href="' + homeHref + '">Home</a></li>' +
            '<li><a class="footer-link" href="' + (isHome ? '#featured' : 'index.html#featured') + '">Featured Games</a></li>' +
            '<li><a class="footer-link" href="' + (isHome ? '#categories' : 'index.html#categories') + '">Categories</a></li>' +
            '<li><a class="footer-link" href="' + (isHome ? '#trending' : 'index.html#trending') + '">Trending</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h4 class="footer-title">Categories</h4>' +
          '<ul class="space-y-2">' +
            '<li><a class="footer-link" href="index.html?cat=mod">⚡ MODs Only</a></li>' +
            '<li><a class="footer-link" href="index.html?cat=action">⚔️ Action</a></li>' +
            '<li><a class="footer-link" href="index.html?cat=adventure">🗺️ Adventure</a></li>' +
            '<li><a class="footer-link" href="index.html?cat=racing">🏎️ Racing</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h4 class="footer-title">Legal</h4>' +
          '<ul class="space-y-2">' +
            '<li><a class="footer-link" href="privacy.html">Privacy Policy</a></li>' +
            '<li><a class="footer-link" href="terms.html">Terms of Service</a></li>' +
            '<li><a class="footer-link" href="dmca.html">DMCA</a></li>' +
            '<li><a class="footer-link" href="contact.html">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<p class="footer-note">&copy; 2026 playgmod. All rights reserved. High-speed mobile gaming mirrors.</p>' +
      '</div>' +
    '</div>' +
  '</footer>';
}

function initNavbar() {
  const searchInput = document.getElementById('navSearch');
  const searchToggle = document.getElementById('searchToggle');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (searchInput && searchToggle) {
    searchToggle.addEventListener('click', function () {
      if (!searchInput.classList.contains('hidden')) {
        searchInput.classList.add('hidden');
        return;
      }
      searchInput.classList.remove('hidden');
      searchInput.focus();
    });
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim();
        if (!q) return;
        if (document.getElementById('gameGrid')) {
          applySearch(q);
        } else {
          window.location.href = 'index.html?q=' + encodeURIComponent(q);
        }
      }
    });
  }
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('hidden');
    });
  }
}

function applySearch(q) {
  const grid = document.getElementById('gameGrid');
  if (!grid) return;
  q = q.trim().toLowerCase();
  const list = q
    ? GAMES_WITH_IMAGES.filter(function (g) {
        return (g.title + ' ' + g.description + ' ' + g.category + ' ' + (g.developer || '')).toLowerCase().indexOf(q) !== -1;
      })
    : GAMES_WITH_IMAGES;

  const container = document.getElementById('filterButtons');
  if (container) {
    container.querySelectorAll('.filter-btn').forEach(function (b) {
      b.className = b.classList.contains('active') ? 'filter-btn active' : 'filter-btn';
    });
  }
  grid.innerHTML = list.length ? list.map(gameCard).join('') : noResults(q);
  const count = document.getElementById('searchCount');
  if (count) count.textContent = list.length + (q ? ' result' + (list.length === 1 ? '' : 's') + ' for "' + q + '"' : ' games');
  if (q) scrollToSearchResults();
}

function scrollToSearchResults() {
  if (!window.matchMedia('(max-width: 767px)').matches) return;
  var input = document.getElementById('navSearch');
  if (input) input.blur();
  var target = document.getElementById('categories');
  if (!target) return;
  setTimeout(function () {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

function noResults(q) {
  return '<div class="text-center py-12"><p class="text-lg font-semibold mb-2">No games found</p>' +
    '<p class="text-sm text-muted-foreground mb-6">No results for "' + esc(q) + '". Try another keyword or browse all titles.</p>' +
    '<a class="btn btn-primary" href="index.html#categories">Browse All Games</a></div>';
}

function newsletter() {
  return '<section class="newsletter">' +
    '<div class="newsletter-gradient animated-gradient"></div>' +
    '<div class="newsletter-veil"></div>' +
    '<div class="container newsletter-inner">' +
      '<div class="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 mb-6 border border-primary/30">' +
        '<span class="icon-md text-primary">' + ICONS.mail + '</span>' +
        '<span class="text-sm font-medium text-primary">Get Early Access</span>' +
      '</div>' +
      '<h2 class="text-3xl sm:text-4xl font-bold mb-4"><span class="neon-text">Never Miss</span> a New Release</h2>' +
      '<p class="text-muted-foreground mb-8 max-w-lg mx-auto">Subscribe to get notified about the latest MOD releases, new APK updates, and free iOS downloads delivered straight to your inbox.</p>' +
      '<div id="newsletterFormWrap">' +
        '<form id="newsletterForm" class="newsletter-form">' +
          '<div class="newsletter-input flex-1">' +
            '<span class="icon-md">' + ICONS.mail + '</span>' +
            '<input type="email" placeholder="Enter your email" required>' +
          '</div>' +
          '<button type="submit" class="btn btn-accent btn-lg pulse-glow h-12">Subscribe</button>' +
        '</form>' +
        '<p class="text-xs text-muted-foreground/50 mt-4">No spam, unsubscribe anytime. We respect your privacy.</p>' +
      '</div>' +
    '</div>' +
  '</section>';
}

function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  const wrap = document.getElementById('newsletterFormWrap');
  if (!form || !wrap) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = form.querySelector('input');
    if (!input.value) return;
    wrap.innerHTML = '<div class="newsletter-success neon-border">' +
      '<p class="text-primary font-bold text-lg" style="font-family:Orbitron,sans-serif">\u{1F389} You\'re Subscribed!</p>' +
      '<p class="text-muted-foreground text-sm mt-2">Check your inbox for notification updates and new game mirrors.</p>' +
    '</div>';
  });
}

/* ================================================================
   Offer locker (same feed API as the G2VIP index) & download pipeline
   ================================================================ */

var LOCKER_API = 'https://apptrck.net/api/v2';
var LOCKER_USER_ID = '296794';
var LOCKER_API_KEY = '49710|nwRmqU8CrW4DhvCtnI1rfIlhjEcuIPG0Y2DBdEoQbe03a087';
function safeOfferUrl(url) {
  try {
    var parsed = new URL(url, window.location.href);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return parsed.href;
  } catch (e) {}
  return '';
}

function loadLockerFeed(onSuccess, onError) {
  fetch('/.netlify/functions/offers')
    .then(res => res.json())
    .then(data => {
      if (data && data.offers) onSuccess(data.offers);
      else onError();
    })
    .catch(() => onError());
}

  var timer = setTimeout(function () { finish(onError); }, 12000);
  window[cbName] = function (data) { finish(onSuccess, data); };
  script.onerror = function () { finish(onError); };
  script.src = url.replace('callback=?', 'callback=' + cbName);
  document.body.appendChild(script);
}

function closeOfferLocker() {
  var locker = document.getElementById('offerLocker');
  if (locker) locker.remove();
  document.documentElement.classList.remove('locker-open');
  document.body.classList.remove('locker-open');
}

function openOfferLocker(options) {
  var title = options.title || 'Game';
  var platform = options.platform || 'Mobile';
  var image = options.image || '';

  closeOfferLocker();

  var locker = document.createElement('div');
  locker.className = 'offer-locker active';
  locker.id = 'offerLocker';
  locker.innerHTML =
    '<div class="offer-locker-inner">' +
      '<div class="locker-header">' +
        (image
          ? '<img class="locker-game-icon" src="' + esc(image) + '" alt="' + esc(title) + '">'
          : '<div class="locker-game-icon locker-game-fallback">' + ICONS.gamepad + '</div>') +
        '<div class="locker-logo">G2<span>APK</span></div>' +
        '<div class="locker-title">Unlock <em>' + esc(title) + '</em></div>' +
        '<div class="locker-sub">Complete any offer below to start your ' + esc(platform) + ' download</div>' +
        '<div class="locker-progress">' +
          '<span>Offer required once</span>' +
          '<div class="locker-progress-bar"><div class="locker-progress-fill" id="lockerProgressFill"></div></div>' +
          '<span id="lockerProgressLabel">0 / 1</span>' +
        '</div>' +
      '</div>' +
      '<div id="lockerOffersContainer">' +
        '<div class="locker-loading"><div class="spinner"></div><div>Loading offers...</div></div>' +
      '</div>' +
      '<div class="locker-ad">' +
        adSlot('468x60', 'ad-sm') +
        adSlot('320x50', 'ad-mobile-sm') +
      '</div>' +
      '<div class="locker-footer">' +
        '<div class="locker-security">' + ICONS.shieldCheck + ' 256-bit encrypted · Your data is safe</div>' +
        '<button type="button" class="locker-close" id="lockerCloseBtn">No thanks, I\'ll wait</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(locker);
  document.documentElement.classList.add('locker-open');
  document.body.classList.add('locker-open');

  locker.addEventListener('click', function (e) {
    if (e.target === locker) closeOfferLocker();
  });
  locker.querySelector('#lockerCloseBtn').addEventListener('click', closeOfferLocker);
  injectAds();

  var feedUrl = LOCKER_API +
    '?user_id=' + encodeURIComponent(LOCKER_USER_ID) +
    '&api_key=' + encodeURIComponent(LOCKER_API_KEY) +
    '&s1=' + encodeURIComponent(title) +
    '&s2=' + encodeURIComponent(platform) +
    '&callback=?';

  loadLockerFeed(feedUrl, function (offers) {
    var container = document.getElementById('lockerOffersContainer');
    if (!container) return;
    if (!offers || !offers.length) {
      container.innerHTML = '<div class="locker-error">No offers available right now. Please try again.</div>';
      return;
    }

    var list = offers.slice(0, 4);
    var html = '<div class="locker-offers">';
    html += '<div class="locker-offers-label">Complete any one offer to unlock</div>';
    list.forEach(function (offer) {
      var href = safeOfferUrl(offer.url);
      if (!href) return;
      html += '<a class="locker-offer" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">';
      html += '<div class="locker-offer-icon">' + ICONS.download + '</div>';
      html += '<div class="locker-offer-info">';
      html += '<div class="locker-offer-name">' + esc(offer.anchor || 'Complete offer') + '</div>';
      html += '<div class="locker-offer-conversion">' + esc(offer.conversion || 'Complete and unlock') + '</div>';
      html += '</div>';
      html += '<div class="locker-offer-arrow">' + ICONS.chevronRight + '</div>';
      html += '</a>';
    });
    html += '</div>';
    container.innerHTML = html;

    container.querySelectorAll('.locker-offer').forEach(function (link) {
      link.addEventListener('click', function () {
        try {
          localStorage.setItem('completed_offer_' + title, 'true');
          localStorage.setItem('locker_game_' + title, 'completed');
        } catch (e) {}
      });
    });

    setTimeout(function () {
      var fill = document.getElementById('lockerProgressFill');
      var label = document.getElementById('lockerProgressLabel');
      if (fill) fill.style.width = '100%';
      if (label) label.textContent = '1 / 1';
    }, 400);
  }, function () {
    var container = document.getElementById('lockerOffersContainer');
    if (container) {
      container.innerHTML = '<div class="locker-error">Could not load offers. Please refresh and try again.</div>';
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeOfferLocker();
});

function startDownloadPipeline(options) {
  const title = options.title || 'Game Package';
  const platform = options.platform || 'Mobile';
  const size = options.size || '1.2 GB';
  const image = options.image || '';

  const existing = document.querySelector('.dl-pipeline-overlay');
  if (existing) existing.remove();

  const isIOS = platform.toLowerCase().indexOf('ios') !== -1 || platform.toLowerCase().indexOf('apple') !== -1;
  const platformColor = isIOS ? '#a29bfe' : '#10b981';

  const overlay = document.createElement('div');
  overlay.className = 'dl-pipeline-overlay';
  overlay.innerHTML =
    '<div class="dl-pipeline-modal simple-dl-modal">' +
      '<button class="dl-pipeline-close" id="dlCloseBtn" aria-label="Close">&times;</button>' +
      '<div class="dl-pipeline-header" style="justify-content:center; text-align:center; flex-direction:column; gap:10px; padding-right:0;">' +
        '<div class="dl-pipeline-thumb" style="width:64px; height:64px; margin:0 auto;">' +
          (image
            ? '<img src="' + esc(image) + '" alt="' + esc(title) + '" onerror="handleImageError(this, \'' + esc(title.replace(/'/g, "\\'")) + '\', \'action\')">'
            : '<span style="font-size:2rem">\u{1F3AE}</span>') +
        '</div>' +
        '<div>' +
          '<h3 class="dl-pipeline-title" style="font-size:1.25rem; margin-bottom:6px;">' + esc(title) + '</h3>' +
          '<div class="dl-pipeline-tags" style="justify-content:center;">' +
            '<span class="dl-badge-platform" style="border-color:' + platformColor + '; color:' + platformColor + ';">' +
              (isIOS ? ICONS.apple : ICONS.android) + ' ' + esc(platform) +
            '</span>' +
            '<span class="dl-badge-size">' + esc(size) + '</span>' +
            '<span class="dl-badge-safe">\u{1F6E1}\uFE0F VirusTotal Clean</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="dl-simple-body" style="text-align:center; margin-top:16px;">' +
        '<div class="dl-simple-pct" id="dlPercentText" style="font-size:2.8rem; font-weight:900; font-family:\'Orbitron\', sans-serif; color:#00f2fe; text-shadow:0 0 20px rgba(0,242,254,0.6); line-height:1;">1%</div>' +
        '<div class="dl-progress-bar-wrap" style="height:12px; margin:18px 0 12px; background:rgba(255,255,255,0.08); border-radius:9999px;">' +
          '<div class="dl-progress-bar-fill" id="dlProgressFill" style="width:1%;"></div>' +
        '</div>' +
        '<p class="dl-simple-note" id="dlStatusNote" style="font-size:0.85rem; color:#8c96ab;">Downloading package... Please wait</p>' +
      '</div>' +

      '<div id="dlActionWrap" style="display:none; margin-top:16px;">' +
        '<button type="button" class="btn btn-accent btn-lg w-full pulse-glow" id="manualLockerBtn">' +
          '\u{1F513} Click Here to Unlock &amp; Download' +
        '</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);

  const closeBtn = overlay.querySelector('#dlCloseBtn');
  closeBtn.addEventListener('click', function () { overlay.remove(); });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) overlay.remove();
  });

  const manualBtn = overlay.querySelector('#manualLockerBtn');
  manualBtn.addEventListener('click', function () {
    overlay.remove();
    openOfferLocker({ title: title, platform: platform, image: image });
  });

  const fill = overlay.querySelector('#dlProgressFill');
  const percentText = overlay.querySelector('#dlPercentText');
  const statusNote = overlay.querySelector('#dlStatusNote');
  const actionWrap = overlay.querySelector('#dlActionWrap');

  let currentPercent = 1;
  const intervalMs = 28; // ~2.8s smooth count from 1% to 100%

  const timer = setInterval(function () {
    currentPercent += 1;
    if (currentPercent > 100) currentPercent = 100;

    fill.style.width = currentPercent + '%';
    percentText.textContent = currentPercent + '%';

    if (currentPercent >= 100) {
      clearInterval(timer);
      percentText.style.color = '#10b981';
      percentText.style.textShadow = '0 0 20px rgba(16, 185, 129, 0.7)';
      statusNote.innerHTML = '<span style="color:#10b981; font-weight:700;">\u2714 100% Download Ready! Opening locker...</span>';
      actionWrap.style.display = 'block';

      setTimeout(function () {
        overlay.remove();
        openOfferLocker({ title: title, platform: platform, image: image });
      }, 350);
    }
  }, intervalMs);
}

function initDownloadButtons() {
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.js-start-download') || e.target.closest('.js-locker');
    if (!btn) return;
    e.preventDefault();

    const title = btn.getAttribute('data-title') || (document.querySelector('.detail-title') ? document.querySelector('.detail-title').textContent : 'Game Package');
    const platform = btn.getAttribute('data-platform') || 'Android / iOS';
    const size = btn.getAttribute('data-size') || (document.querySelector('.detail-meta') ? '1.2 GB' : '1.2 GB');
    const image = btn.getAttribute('data-image') || (document.querySelector('.detail-cover') ? document.querySelector('.detail-cover').src : '');

    startDownloadPipeline({
      title: title,
      platform: platform,
      size: size,
      image: image
    });
  });
}

function renderPlatformButtons(game) {
  return '<div class="dl-platform-group">' +
    '<button type="button" class="btn-platform btn-ios js-start-download" data-platform="iOS" data-title="' + esc(game.title) + '" data-size="' + esc(game.size) + '" data-image="' + esc(game.image) + '">' +
      '<span class="platform-icon-wrap">' + ICONS.apple + '</span>' +
      '<div class="platform-text-wrap">' +
        '<span class="platform-sub">Download for</span>' +
        '<span class="platform-title">Apple iOS</span>' +
      '</div>' +
      '<span class="platform-pill">.IPA</span>' +
    '</button>' +
    '<button type="button" class="btn-platform btn-android js-start-download" data-platform="Android" data-title="' + esc(game.title) + '" data-size="' + esc(game.size) + '" data-image="' + esc(game.image) + '">' +
      '<span class="platform-icon-wrap">' + ICONS.android + '</span>' +
      '<div class="platform-text-wrap">' +
        '<span class="platform-sub">Download for</span>' +
        '<span class="platform-title">Android APK</span>' +
      '</div>' +
      '<span class="platform-pill">.APK</span>' +
    '</button>' +
  '</div>';
}

/* ================================================================
   Home Page
   ================================================================ */

function renderHome() {
  const root = document.getElementById('root');
  const trending = GAMES_WITH_IMAGES.filter(function (g) { return g.trending; }).slice(0, 10);
  const trendingRows = trending.map(function (g, idx) {
    return '<div class="trending-row group">' +
      '<span class="rank">' + (idx + 1) + '</span>' +
      '<img class="trending-img" src="' + esc(g.image) + '" alt="' + esc(g.title) + '" loading="lazy" onerror="handleImageError(this, \'' + esc(g.title.replace(/'/g, "\\'")) + '\', \'' + esc(g.category) + '\')">' +
      '<div class="flex-1 min-w-0">' +
        '<a href="game.html?id=' + esc(g.id) + '"><h3 class="trending-title truncate">' + esc(g.title) + '</h3></a>' +
        '<div class="trending-meta">' +
          '<span class="cat">' + esc(g.catLabel || g.category) + '</span>' +
          '<span class="flex items-center gap-1"><span class="icon-sm star-filled">' + ICONS.star + '</span>' + g.rating + '</span>' +
          '<span class="flex items-center gap-1 text-muted-foreground"><span class="icon-sm">' + ICONS.download + '</span>' + esc(g.downloads) + '</span>' +
        '</div>' +
      '</div>' +
      '<a class="btn btn-accent btn-sm shrink-0" href="game.html?id=' + esc(g.id) + '">Download</a>' +
    '</div>';
  }).join('');

  const featuredCards = GAMES_WITH_IMAGES.slice(0, 8).map(gameCard).join('');

  root.innerHTML =
    navbar(true) +

    '<section class="hero scanlines">' +
      '<div class="hero-bg"><img src="' + esc(IMAGES.hero) + '" alt="Gaming hero banner"></div>' +
      '<div class="hero-content">' +
        '<div class="hero-inner">' +
          '<div class="flex items-center gap-2 mb-4">' +
            '<span class="badge badge-primary"><span class="icon-sm">' + ICONS.flame + '</span>Updated Daily 2026</span>' +
            '<span class="badge badge-accent"><span class="icon-sm star-filled">' + ICONS.star + '</span>' + GAMES_WITH_IMAGES.length + '+ Verified Releases</span>' +
          '</div>' +
          '<h1 class="hero-title">' +
            '<span class="neon-text">Download</span> <span>the Best</span><br>' +
            '<span class="neon-text-cyan">MOD APKs &amp; Games</span> <span>Free</span>' +
          '</h1>' +
          '<p class="hero-desc">Discover ' + GAMES_WITH_IMAGES.length + '+ high-speed mobile games, unlocked MOD menus, and verified direct mirror links for iOS and Android.</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn-accent btn-lg pulse-glow" href="#categories"><span class="icon-md">' + ICONS.download + '</span>Browse Games</a>' +
            '<a class="btn btn-outline btn-lg" href="#categories">View Categories</a>' +
          '</div>' +
          '<div class="hero-stats">' +
            '<div><p class="hero-stat-value hero-stat-value-primary">' + GAMES_WITH_IMAGES.length + '+</p><p class="hero-stat-label">Games &amp; MODs</p></div>' +
            '<div><p class="hero-stat-value hero-stat-value-secondary">100%</p><p class="hero-stat-label">Clean &amp; Safe</p></div>' +
            '<div><p class="hero-stat-value hero-stat-value-accent">4.8</p><p class="hero-stat-label">Avg Rating</p></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    /* ── BANNER 2: Below hero (Leaderboard / Mobile) ── */
    '<div class="py-4 flex justify-center" style="background:rgba(108,92,231,0.04); border-top:1px solid rgba(108,92,231,0.12); border-bottom:1px solid rgba(108,92,231,0.12);">' +
      adSlot('728x90', 'ad-desktop') +
      adSlot('320x50', 'ad-mobile') +
    '</div>' +

    '<section id="categories" class="py-16">' +
      '<div class="container">' +
        '<div class="text-center mb-10">' +
          '<h2 class="text-2xl sm:text-3xl font-bold">Browse by <span class="neon-text-cyan">Category</span></h2>' +
          '<p class="text-muted-foreground text-sm mt-2">Filter all ' + GAMES_WITH_IMAGES.length + ' games and find your next adventure</p>' +
        '</div>' +
        '<div class="flex flex-wrap justify-center gap-2 mb-10" id="filterButtons"></div>' +

        /* ── BANNER 4: Above game grid (Leaderboard / Mobile) ── */
        '<div class="mb-8 flex justify-center">' +
          adSlot('728x90', 'ad-desktop') +
          adSlot('320x50', 'ad-mobile') +
        '</div>' +

        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gameGrid"></div>' +

        /* ── BANNER 5: Below game grid ── */
        '<div class="mt-8 flex justify-center">' +
          adSlot('728x90', 'ad-desktop') +
          adSlot('320x50', 'ad-mobile') +
        '</div>' +
      '</div>' +
    '</section>' +

    /* ── Banner between the game list and Featured ── */
    '<div class="py-4 flex justify-center">' +
      adSlot('468x60', 'ad-sm') +
      adSlot('320x50', 'ad-mobile-sm') +
    '</div>' +

    '<section id="featured" class="py-16">' +
      '<div class="container">' +
        '<div class="flex items-center justify-between mb-8">' +
          '<div>' +
            '<h2 class="text-2xl sm:text-3xl font-bold"><span class="neon-text">Featured</span> Releases</h2>' +
            '<p class="text-muted-foreground text-sm mt-2">Hand-picked top titles and requested mods</p>' +
          '</div>' +
          '<a class="btn btn-text-primary" href="#categories">View All ' + GAMES_WITH_IMAGES.length + ' <span class="icon-md ml-1">' + ICONS.chevronRight + '</span></a>' +
        '</div>' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">' + featuredCards + '</div>' +
      '</div>' +
    '</section>' +

    '<section id="trending" class="py-16 bg-card/30">' +
      '<div class="container">' +
        '<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">' +
          '<div class="lg:col-span-2">' +
            '<div class="flex items-center gap-2 mb-8">' +
              '<span class="icon-lg text-accent">' + ICONS.flame + '</span>' +
              '<h2 class="text-2xl font-bold"><span class="neon-text-orange">Top</span> Downloads</h2>' +
            '</div>' +
            '<div class="space-y-4">' + trendingRows + '</div>' +

            /* ── BANNER 6: Below trending list (Half Banner / Mobile) ── */
            '<div class="mt-8 flex justify-center">' +
              adSlot('468x60', 'ad-sm') +
              adSlot('320x50', 'ad-mobile-sm') +
            '</div>' +
          '</div>' +

          /* ── Sidebar: 300×250, 160×300, 160×600 ── */
          '<div class="space-y-6">' +
            adSlot('300x250') +
            adSlot('160x300') +
            adSlot('160x600') +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    newsletter() +

    /* ── BANNER 9: Pre-footer (Leaderboard / Mobile) ── */
    '<div class="py-5 flex justify-center border-t border-border/30" style="background:rgba(108,92,231,0.03);">' +
      adSlot('728x90', 'ad-desktop') +
      adSlot('320x50', 'ad-mobile') +
    '</div>' +

    footer(true);

  initNavbar();
  initFilters();
  initNewsletter();
  injectAds();
}

function initFilters() {
  const container = document.getElementById('filterButtons');
  const grid = document.getElementById('gameGrid');
  if (!container || !grid) return;
  const activeClass = 'filter-btn active';
  const inactiveClass = 'filter-btn';
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  const urlQ = params.get('q');

  let currentCat = CATEGORIES.some(function (c) { return c.id === urlCat; }) ? urlCat : 'all';
  let scrollSearchOnLoad = !!urlQ;

  function render() {
    let list = currentCat === 'all'
      ? GAMES_WITH_IMAGES
      : (currentCat === 'mod'
          ? GAMES_WITH_IMAGES.filter(function (g) { return g.mod; })
          : GAMES_WITH_IMAGES.filter(function (g) { return g.category === currentCat; }));

    if (urlQ) {
      const q = urlQ.trim().toLowerCase();
      list = list.filter(function (g) {
        return (g.title + ' ' + g.description + ' ' + g.category + ' ' + (g.developer || '')).toLowerCase().indexOf(q) !== -1;
      });
    }

    grid.innerHTML = list.length ? list.map(gameCard).join('') : noResults(urlQ || currentCat);
    container.querySelectorAll('.filter-btn').forEach(function (b) {
      b.className = b.dataset.cat === currentCat ? activeClass : inactiveClass;
    });

    const count = document.getElementById('searchCount');
    if (count) count.textContent = list.length + ' games';

    if (urlQ) {
      const searchInput = document.getElementById('navSearch');
      if (searchInput) {
        searchInput.classList.remove('hidden');
        searchInput.value = urlQ;
      }
      if (scrollSearchOnLoad) {
        scrollSearchOnLoad = false;
        scrollToSearchResults();
      }
    }
  }

  CATEGORIES.forEach(function (c) {
    const btn = document.createElement('button');
    btn.className = c.id === currentCat ? activeClass : inactiveClass;
    btn.dataset.cat = c.id;
    btn.innerHTML = '<span class="mr-1">' + c.icon + '</span>' + c.name;
    btn.addEventListener('click', function () {
      currentCat = c.id;
      render();
    });
    container.appendChild(btn);
  });
  render();
}

/* ================================================================
   Game Detail Page
   ================================================================ */

function renderDetail() {
  const root = document.getElementById('root');
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');

  const game = GAMES_WITH_IMAGES.find(function (g) {
    return g.id === idParam ||
      String(g.numericId) === idParam ||
      (g.title && g.title.toLowerCase() === (idParam || '').toLowerCase());
  }) || GAMES_WITH_IMAGES[0];

  if (!game) {
    root.innerHTML = '<div class="not-found"><div class="not-found-inner">' +
      '<h1>Game Not Found</h1>' +
      '<a href="index.html">Back to Home</a>' +
    '</div></div>';
    return;
  }

  document.title = game.title + ' — Download for iOS & Android (playgmod)';

  let related = GAMES_WITH_IMAGES.filter(function (g) {
    return g.category === game.category && g.id !== game.id;
  }).slice(0, 4);

  if (related.length < 4) {
    const extras = GAMES_WITH_IMAGES.filter(function (g) {
      return g.id !== game.id && related.indexOf(g) === -1;
    }).slice(0, 4 - related.length);
    related = related.concat(extras);
  }
  const relatedCards = related.map(gameCard).join('');

  const reqRows = [
    { icon: ICONS.smartphone, label: 'OS', value: game.systemRequirements.os },
    { icon: ICONS.cpu, label: 'Processor', value: game.systemRequirements.processor },
    { icon: ICONS.memoryStick, label: 'Memory', value: game.systemRequirements.memory },
    { icon: ICONS.monitor, label: 'Graphics', value: game.systemRequirements.graphics },
    { icon: ICONS.hardDrive, label: 'Storage', value: game.systemRequirements.storage }
  ].map(function (r) {
    return '<div class="req-row">' +
      '<span class="icon-md text-primary mt-0.5 shrink-0">' + r.icon + '</span>' +
      '<div><span class="req-label">' + r.label + '</span><p class="req-value">' + esc(r.value) + '</p></div>' +
    '</div>';
  }).join('');

  const featureItems = game.features.map(function (f) {
    return '<li><span class="feature-dot"></span>' + esc(f) + '</li>';
  }).join('');

  root.innerHTML =
    navbar(false) +

    /* ── BANNER 1: Below navbar, above banner image (Leaderboard / Mobile) ── */
    '<div class="py-3 flex justify-center" style="background:rgba(0,0,0,0.3); border-bottom:1px solid rgba(108,92,231,0.15);">' +
      adSlot('728x90', 'ad-desktop') +
      adSlot('320x50', 'ad-mobile') +
    '</div>' +

    '<div class="detail-banner">' +
      '<img src="' + esc(game.image) + '" alt="' + esc(game.title) + '" onerror="handleImageError(this, \'' + esc(game.title.replace(/'/g, "\\'")) + '\', \'' + esc(game.category) + '\')">' +
    '</div>' +
    '<div class="detail-body">' +
      '<div class="container">' +
        '<a class="back-link" href="index.html"><span class="icon-md">' + ICONS.arrowLeft + '</span>Back to Games</a>' +
        '<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">' +
          '<div class="lg:col-span-2">' +
            '<div class="detail-card">' +
              '<div class="detail-card-inner">' +
                '<img class="detail-cover" src="' + esc(game.image) + '" alt="' + esc(game.title) + '" onerror="handleImageError(this, \'' + esc(game.title.replace(/'/g, "\\'")) + '\', \'' + esc(game.category) + '\')">' +
                '<div class="flex-1">' +
                  '<div class="flex items-center gap-2 mb-2">' +
                    '<span class="detail-category">' + esc(game.catLabel || game.category) + '</span>' +
                    (game.mod ? '<span class="badge-trending text-xs">\u26A1 MOD UNLOCKED</span>' : '') +
                  '</div>' +
                  '<h1 class="detail-title">' + esc(game.title) + '</h1>' +
                  '<div class="detail-meta">' +
                    '<div class="flex items-center gap-1"><span class="icon-md star-filled">' + ICONS.star + '</span><span class="font-bold">' + game.rating + '</span><span class="text-xs text-muted-foreground">/5.0</span></div>' +
                    '<div class="detail-meta-item"><span class="icon-md">' + ICONS.download + '</span>' + esc(game.downloads) + ' downloads</div>' +
                    '<div class="detail-meta-item"><span class="icon-md">' + ICONS.hardDrive + '</span>' + esc(game.size) + '</div>' +
                  '</div>' +
                  renderPlatformButtons(game) +
                  '<div class="verified">' +
                    '<span class="icon-md text-green-400">' + ICONS.shieldCheck + '</span>' +
                    '<span class="text-xs text-muted-foreground">VirusTotal verified safe \u2014 No malware \u2022 Anti-ban enabled</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            /* ── BANNER 2: Below download buttons (Half Banner / Mobile) ── */
            '<div class="my-6 flex justify-center">' +
              adSlot('468x60', 'ad-sm') +
              adSlot('320x50', 'ad-mobile-sm') +
            '</div>' +

            '<div class="about-box">' +
              '<h2 class="section-title">About This Game</h2>' +
              '<p class="text-muted-foreground leading-relaxed mb-6">' + esc(game.description) + '</p>' +
              '<h3 class="sub-title">Key Features &amp; Mod Perks</h3>' +
              '<ul class="feature-list space-y-2">' + featureItems + '</ul>' +
            '</div>' +

            /* ── BANNER 3: Between About & System Requirements (Leaderboard / Mobile) ── */
            '<div class="my-6 flex justify-center">' +
              adSlot('728x90', 'ad-desktop') +
              adSlot('320x50', 'ad-mobile') +
            '</div>' +

            '<div class="req-box">' +
              '<h2 class="section-title">System Requirements</h2>' +
              '<div class="space-y-3">' + reqRows + '</div>' +
            '</div>' +

            /* ── BANNER 4: Between Requirements & CTA (Half Banner / Mobile) ── */
            '<div class="my-6 flex justify-center">' +
              adSlot('468x60', 'ad-sm') +
              adSlot('320x50', 'ad-mobile-sm') +
            '</div>' +

            '<div class="cta-box">' +
              '<h3 class="text-lg font-bold mb-2">Ready to Play?</h3>' +
              '<p class="text-sm text-muted-foreground mb-4">Choose your platform below to start the free high-speed download</p>' +
              renderPlatformButtons(game) +
              '<div class="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">' +
                '<span class="flex items-center gap-1"><span class="icon-sm">' + ICONS.zap + '</span>Fast CDN Mirror</span>' +
                '<span class="flex items-center gap-1"><span class="icon-sm text-green-400">' + ICONS.shieldCheck + '</span>100% Virus-Free</span>' +
              '</div>' +
            '</div>' +
          '</div>' +

          /* Right sidebar */
          '<div class="space-y-6">' +
            /* ── BANNER 5: Sidebar top (Medium Rectangle) ── */
            adSlot('300x250') +
            '<div class="rounded-xl bg-card border border-border/50 p-4">' +
              '<h3 class="text-sm font-bold uppercase tracking-wider mb-3" style="font-family:Orbitron,sans-serif">Quick Info</h3>' +
              '<div class="space-y-3 text-sm">' +
                '<div class="flex justify-between"><span class="text-muted-foreground">Genre</span><span class="font-medium capitalize">' + esc(game.catLabel || game.category) + '</span></div>' +
                '<div class="flex justify-between"><span class="text-muted-foreground">Version</span><span class="font-medium">' + esc(game.version) + '</span></div>' +
                '<div class="flex justify-between"><span class="text-muted-foreground">Developer</span><span class="font-medium">' + esc(game.developer) + '</span></div>' +
                '<div class="flex justify-between"><span class="text-muted-foreground">File Size</span><span class="font-medium">' + esc(game.size) + '</span></div>' +
                '<div class="flex justify-between"><span class="text-muted-foreground">Rating</span><span class="font-medium">' + game.rating + '/5.0</span></div>' +
                '<div class="flex justify-between"><span class="text-muted-foreground">Downloads</span><span class="font-medium">' + esc(game.downloads) + '</span></div>' +
                '<div class="flex justify-between"><span class="text-muted-foreground">Platforms</span><span class="font-medium">iOS (.IPA) / Android (.APK)</span></div>' +
              '</div>' +
            '</div>' +
            /* ── Sidebar mid: 300×250 and 160×300 ── */
            adSlot('300x250') +
            adSlot('160x300') +
            /* ── Sidebar tall: 160×600 wide skyscraper ── */
            adSlot('160x600') +
          '</div>' +
        '</div>' +

        /* ── BANNER 8: Above Related Games (Leaderboard / Mobile) ── */
        '<div class="pt-8 pb-4 flex justify-center border-t border-border/20">' +
          adSlot('728x90', 'ad-desktop') +
          adSlot('320x50', 'ad-mobile') +
        '</div>' +

        '<section id="related" class="pb-16">' +
          '<h2 class="text-xl font-bold mb-6">More <span class="neon-text-cyan">Games</span> You\'ll Love</h2>' +
          '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">' + relatedCards + '</div>' +

          /* ── BANNER 9: Below Related Games (Leaderboard / Mobile) ── */
          '<div class="mt-8 flex justify-center">' +
            adSlot('728x90', 'ad-desktop') +
            adSlot('320x50', 'ad-mobile') +
          '</div>' +
        '</section>' +
      '</div>' +
    '</div>' +
    footer(false);

  initNavbar();
  injectAds();
}

/* ================================================================
   Legal Pages
   ================================================================ */

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: 2026',
    sections: [
      ['1. Information We Collect', [
        'playgmod respects your privacy. We may collect basic usage data such as pages visited, device type, and browser information to improve site performance.',
        'We do not require user accounts to browse or download games. Any email address provided via the newsletter is used exclusively for release alerts.',
        'Third-party advertising partners may use cookies to serve relevant advertisements.'
      ]],
      ['2. How We Use Your Information', [
        'To operate, maintain, and secure the website.',
        'To optimize speed and delivery across regional CDN mirrors.',
        'To comply with legal obligations.'
      ]],
      ['3. Cookies', [
        'Cookies are used to remember user preferences. You can disable cookies in your browser settings at any time.'
      ]],
      ['4. Third-Party Services & Lockers', [
        'Our site links to external verification sponsors and content lockers. These third-party services operate under their own independent privacy policies.'
      ]],
      ['5. Contact Us', [
        'For questions regarding privacy, please contact us through our <a class="footer-link" href="contact.html">Contact page</a>.'
      ]]
    ]
  },
  terms: {
    title: 'Terms of Service',
    updated: 'Last updated: 2026',
    sections: [
      ['1. Acceptance of Terms', [
        'By accessing or using playgmod, you agree to be bound by these Terms of Service. If you disagree, please do not use the website.'
      ]],
      ['2. Description of Service', [
        'playgmod provides information and mirror links for mobile applications and games. We do not host copyrighted software directly on our servers; downloads are facilitated via third-party mirrors.',
        'All game titles, trademarks, and artwork belong to their respective owners.'
      ]],
      ['3. Disclaimer of Warranties', [
        'The site and all content are provided "as is" without warranty of any kind. You access third-party download mirrors at your own discretion.'
      ]]
    ]
  },
  dmca: {
    title: 'DMCA Policy',
    updated: 'Last updated: 2026',
    sections: [
      ['1. Copyright Compliance', [
        'playgmod respects intellectual property rights and adheres to the Digital Millennium Copyright Act (DMCA). We respond promptly to valid notices of alleged copyright infringement.'
      ]],
      ['2. Filing a Notice', [
        'To submit a DMCA notice, send identification of the copyrighted work and the specific link location on playgmod via our <a class="footer-link" href="contact.html">Contact page</a>.'
      ]]
    ]
  },
  contact: {
    title: 'Contact Us',
    updated: 'We respond within 24\u201348 hours.',
    sections: [
      ['Get in Touch', [
        'Have a question, report a broken mirror, or need assistance? Fill out the form below and our team will get back to you.'
      ]]
    ]
  }
};

function legalSections(sections) {
  return sections.map(function (sec) {
    return '<div class="legal-section">' +
      '<h2 class="legal-h2">' + sec[0] + '</h2>' +
      sec[1].map(function (p) {
        return '<p class="legal-p">' + p + '</p>';
      }).join('') +
    '</div>';
  }).join('');
}

function renderLegal() {
  const root = document.getElementById('root');
  const page = document.body.dataset.page;
  const content = LEGAL_CONTENT[page];
  if (!content) {
    root.innerHTML = '<div class="not-found"><div class="not-found-inner">' +
      '<h1>Page Not Found</h1>' +
      '<a href="index.html">Back to Home</a>' +
    '</div></div>';
    return;
  }
  const isContact = page === 'contact';
  const contactForm = isContact
    ? '<form id="contactForm" class="contact-form">' +
        '<div class="contact-field">' +
          '<label for="cfName">Your Name</label>' +
          '<input type="text" id="cfName" placeholder="Enter your name" required>' +
        '</div>' +
        '<div class="contact-field">' +
          '<label for="cfEmail">Your Email</label>' +
          '<input type="email" id="cfEmail" placeholder="Enter your email" required>' +
        '</div>' +
        '<div class="contact-field">' +
          '<label for="cfSubject">Subject</label>' +
          '<select id="cfSubject">' +
            '<option value="General">General Inquiry</option>' +
            '<option value="Broken Link">Broken Link / Download Issue</option>' +
            '<option value="DMCA">DMCA Takedown</option>' +
            '<option value="Advertise">Advertising</option>' +
          '</select>' +
        '</div>' +
        '<div class="contact-field">' +
          '<label for="cfMsg">Message</label>' +
          '<textarea id="cfMsg" rows="5" placeholder="Write your message..." required></textarea>' +
        '</div>' +
        '<button type="submit" class="btn btn-accent btn-lg pulse-glow">Send Message</button>' +
      '</form>'
    : '';

  root.innerHTML =
    navbar(false) +
    '<section class="legal-page py-16">' +
      '<div class="container">' +
        '<div class="legal-card">' +
          '<h1 class="legal-title neon-text">' + content.title + '</h1>' +
          '<p class="legal-updated">' + content.updated + '</p>' +
          legalSections(content.sections) +
          contactForm +
        '</div>' +
      '</div>' +
    '</section>' +
    footer(false);

  initNavbar();
  if (isContact) initContactForm();
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.innerHTML = '<div class="newsletter-success neon-border">' +
      '<p class="text-primary font-bold text-lg" style="font-family:Orbitron,sans-serif">\u2713 Message Sent!</p>' +
      '<p class="text-muted-foreground text-sm mt-2">Thanks for reaching out. We will respond within 24\u201348 hours.</p>' +
    '</div>';
  });
}

/* ================================================================
   Application Boot
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initDownloadButtons();
  if (document.body.dataset.page === 'home') renderHome();
  if (document.body.dataset.page === 'detail') renderDetail();
  if (LEGAL_CONTENT[document.body.dataset.page]) renderLegal();
});
