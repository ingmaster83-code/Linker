(function () {
  // 데스크탑이면 실행 안 함
  if (window.innerWidth >= 768) return;

  // 24시간 이내 닫은 적 있으면 실행 안 함
  var STORAGE_KEY = 'coupang_bar_closed';
  try {
    var closed = localStorage.getItem(STORAGE_KEY);
    if (closed && Date.now() - parseInt(closed) < 24 * 60 * 60 * 1000) return;
  } catch (e) {}

  // ── 스타일 ──────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent =
    '#coupang-bottom-bar{' +
      'position:fixed;bottom:0;left:0;right:0;z-index:9999;' +
      'background:#fff;border-top:1px solid #e5e7eb;' +
      'display:flex;align-items:center;justify-content:center;' +
      'padding:6px 12px;box-shadow:0 -2px 8px rgba(0,0,0,.10);' +
      'transform:translateY(100%);transition:transform .35s ease;' +
    '}' +
    '#coupang-bottom-bar.visible{transform:translateY(0);}' +
    '#coupang-bar-close{' +
      'position:absolute;right:10px;top:50%;transform:translateY(-50%);' +
      'background:none;border:none;font-size:18px;line-height:1;' +
      'color:#9ca3af;cursor:pointer;padding:4px 6px;' +
    '}' +
    '#coupang-bar-close:hover{color:#374151;}' +
    '#coupang-bar-inner{' +
      'width:320px;height:50px;overflow:hidden;flex-shrink:0;' +
    '}';
  document.head.appendChild(style);

  // ── DOM ─────────────────────────────────────────────────────
  var bar = document.createElement('div');
  bar.id = 'coupang-bottom-bar';

  var inner = document.createElement('div');
  inner.id = 'coupang-bar-inner';

  var closeBtn = document.createElement('button');
  closeBtn.id = 'coupang-bar-close';
  closeBtn.innerHTML = '✕';
  closeBtn.setAttribute('aria-label', '닫기');

  bar.appendChild(inner);
  bar.appendChild(closeBtn);
  document.body.appendChild(bar);

  // ── 닫기 ────────────────────────────────────────────────────
  closeBtn.addEventListener('click', function () {
    bar.style.transform = 'translateY(100%)';
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch (e) {}
    setTimeout(function () { bar.remove(); }, 400);
  });

  // ── 쿠팡 배너 렌더링 ────────────────────────────────────────
  function renderCoupang() {
    new PartnersCoupang.G({
      id: 974224,
      trackingCode: 'AF5600192',
      width: '320',
      height: '50',
      container: inner
    });
  }

  function showBar() {
    if (typeof PartnersCoupang !== 'undefined') {
      renderCoupang();
    } else {
      var gs = document.createElement('script');
      gs.src = 'https://ads-partners.coupang.com/g.js';
      gs.async = true;
      gs.onload = renderCoupang;
      document.head.appendChild(gs);
    }
    // 슬라이드업
    setTimeout(function () { bar.classList.add('visible'); }, 50);
  }

  // 2.5초 딜레이 후 등장
  setTimeout(showBar, 2500);
})();
