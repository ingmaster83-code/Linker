# Linker (WooaHouse) 프로젝트 지침

## 프로젝트 개요
- **사이트명:** WooaHouse (Linker)
- **실제 URL:** https://wooahouse.com  ← CNAME이 wooahouse.com
- **GitHub:** https://github.com/ingmaster83-code/Linker
- **배포:** GitHub Pages (main 브랜치 → root)
- **테마 컬러:** `#4F46E5` (인디고)

## 서비스 목적
AI·개발·디자인·생산성·클라우드·미디어·뉴스·게임·학습 등
자주 쓰는 유용한 사이트 링크를 카테고리별로 큐레이션 + 각 사이트 상세 소개 페이지 제공.

---

## 파일 구조
```
Linker/
├── index.html              ← 메인 (KO 링크 목록 + WooaHouse Originals)
├── en/
│   └── index.html          ← 메인 EN 버전
├── tools/                  ← KO 상세 페이지 (59개)
│   ├── chatgpt.html
│   ├── gemini.html
│   ├── ... (59개)
│   └── leetcode.html
├── en/
│   └── tools/              ← EN 상세 페이지 (59개)
│       ├── chatgpt.html
│       └── ... (59개)
├── search.html             ← WooaHouse 도구 통합 검색 (tools.json fetch)
├── en/search.html
├── about.html / en/about.html
├── privacy.html / en/privacy.html
├── 404.html
├── sitemap.xml             ← sitemap index (sitemapindex)
├── sitemap-linker.xml      ← Linker 전용 sitemap (122 URLs)
├── robots.txt
├── manifest.json
├── CNAME                   ← wooahouse.com
├── css/style.css
├── icons/icon.svg
└── js/
    ├── wooa-sites-bar.js
    ├── wooa-sidebar.js
    ├── wooa-sidebar-en.js
    ├── wooa-footer.js
    ├── wooa-footer-en.js
    ├── wooahouse-originals-tool.js
    ├── wooahouse-originals-tool-en.js
    └── pwa-install.js
```

---

## tool 페이지 현황 (59개 × KO+EN = 118개)

### 🤖 AI (8개)
| 파일 | 서비스 | 외부 URL |
|------|--------|---------|
| chatgpt.html | ChatGPT | https://chat.openai.com/ |
| gemini.html | Gemini | https://gemini.google.com/ |
| claude.html | Claude | https://claude.ai/ |
| perplexity.html | Perplexity | https://www.perplexity.ai/ |
| midjourney.html | Midjourney | https://www.midjourney.com/ |
| sora.html | Sora | https://sora.com/ |
| gamma.html | Gamma | https://gamma.app/ |
| notion-ai.html | Notion AI | https://www.notion.com/ko/product/ai |

### 💻 개발 (8개)
github, stackoverflow, mdn, codepen, regex101, caniuse, npm, vercel

### 🎨 디자인 (8개)
figma, canva, unsplash, flaticon, google-fonts, coolors, svgrepo, pexels

### ⚡ 생산성 (8개)
notion, trello, slack, todoist, google-sheets, google-docs, zapier, google-calendar

### ☁️ 클라우드 (4개)
google-drive, onedrive, dropbox, mega

### 🎬 미디어 (6개)
youtube, twitch, spotify, netflix, wavve, tving

### 📰 뉴스 (5개)
naver-news, daum-news, hacker-news, the-verge, techcrunch

### 🎮 게임 (6개)
steam, epic-games, riot-games, blizzard, nexon, smilegate

### 📚 학습 (6개)
inflearn, udemy, coursera, khan-academy, programmers, leetcode

---

## tool 페이지 구조 패턴

### KO (`tools/{name}.html`)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- canonical: https://wooahouse.com/tools/{name}.html -->
  <!-- hreflang: ko + en + x-default -->
  <!-- ld+json: SoftwareApplication 또는 EducationalOrganization -->
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<header>
  <!-- logo → ../index.html -->
  <!-- lang-switcher: 현재 파일 / ../en/tools/{name}.html -->
</header>
<script src="../js/wooa-sites-bar.js"></script>

<div class="tool-hero">  <!-- 카테고리별 그라디언트 색상 -->
  <span class="cat-badge">카테고리</span>
  <h1>아이콘 서비스명</h1>
  <a href="외부URL" class="btn-visit">바로가기</a>
</div>

<div class="page-with-sidebar">
<div class="tool-content">
  breadcrumb → ../index.html#카테고리ID
  info-grid (카테고리·운영사·무료여부·플랫폼)
  서비스 소개 / 주요 기능 / 요금제
  <div class="wooa-orig-anchor"></div>
  tips-panel (3개)
  faq-section (3개)
</div>
<aside class="tool-sidebar"></aside>
</div>
<footer class="footer"></footer>

<script src="../js/wooahouse-originals-tool.js"></script>
<script src="../js/wooa-sidebar.js"></script>
<script src="../js/wooa-footer.js"></script>
<script src="../js/pwa-install.js"></script>
</body>
```

### EN (`en/tools/{name}.html`)
- CSS/JS 경로: `../../` prefix
- logo → `../../en/index.html`
- lang-switcher: `../../tools/{name}.html` / 현재 파일
- canonical: `https://wooahouse.com/en/tools/{name}.html`
- 스크립트: `wooahouse-originals-tool-en.js`, `wooa-sidebar-en.js`, `wooa-footer-en.js`

---

## 카테고리별 디자인 컬러

| 카테고리 | 그라디언트 | 액센트 색 |
|---------|-----------|---------|
| AI | `#065f46 → #10a37f → #34d399` | `#10a37f` |
| 개발 | `#0c4a6e → #0891b2 → #38bdf8` | `#0891b2` |
| 디자인 | `#831843 → #db2777 → #f472b6` | `#db2777` |
| 생산성 | `#451a03 → #d97706 → #fcd34d` | `#d97706` |
| 클라우드 | `#1e3a5f → #0284c7 → #38bdf8` | `#0284c7` |
| 미디어 | `#7f1d1d → #dc2626 → #f87171` | `#dc2626` |
| 뉴스 | `#064e3b → #059669 → #34d399` | `#059669` |
| 게임 | `#2e1065 → #7c3aed → #a78bfa` | `#7c3aed` |
| 학습 | `#1c1917 → #d97706 → #fcd34d` | `#d97706` |

---

## index.html 카드 연동 규칙

### 연동된 카드 (상세 페이지 있음)
```html
<a href="tools/{name}.html" class="link-card">
  ...
  <span class="link-hint">자세히 보기 →</span>   <!-- KO -->
  <span class="link-hint">Learn more →</span>    <!-- EN -->
</a>
```

### 미연동 카드 (외부 직접 링크)
```html
<a href="https://..." class="link-card" target="_blank" rel="noopener noreferrer">
  ...
  <span class="link-hint">바로가기 →</span>   <!-- KO -->
  <span class="link-hint">Go →</span>         <!-- EN -->
</a>
```

---

## 새 tool 페이지 추가 체크리스트

- [ ] `tools/{name}.html` 생성 (KO)
- [ ] `en/tools/{name}.html` 생성 (EN)
- [ ] `index.html` 카드 href 연동 (`바로가기 →` → `자세히 보기 →`)
- [ ] `en/index.html` 카드 href 연동 (`Go →` → `Learn more →`)
- [ ] `sitemap-linker.xml`에 KO + EN URL 추가 (`lastmod` 오늘 날짜)

---

## 작업 규칙
- 링크 추가 시 공식 사이트 URL만 사용
- canonical은 항상 `https://wooahouse.com/tools/{name}.html` 형식
- 새 카테고리 추가 시 index.html에 `id="카테고리ID"` 섹션 추가 + 헤더 nav 링크 추가
- SEO 키워드: 유용한 사이트 모음, 링크 모음, 북마크 모음, 유용한 웹사이트 추천

---

## 현재 미작업 개선 항목
- [ ] 소셜미디어 카테고리 추가 (X·Instagram·LinkedIn·TikTok 등)
- [ ] 금융·쇼핑 카테고리 추가 (토스·카카오페이·쿠팡·네이버쇼핑 등)
- [ ] tool 페이지 og:image 추가
- [ ] index.html ld+json ItemList에 새 tool URL 반영
