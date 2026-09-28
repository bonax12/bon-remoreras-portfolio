"use strict";

/* ---------------------------------------------------------------
   Content data — edit here to add/update platforms, skills,
   services or projects. Nothing below this block needs to change
   for routine content updates.
--------------------------------------------------------------- */

const FIGMA_URL =
  "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio";

const WEB3FORMS_ACCESS_KEY = "89f00fe7-f86d-4bcd-aa74-31a2e7f5bcc8";

const PLATFORMS = [
  { name: "Figma", note: "design + handoff" },
  { name: "Shopify", note: "storefronts" },
  { name: "Wix Studio", note: "sites" },
  { name: "PageFly", note: "landing sections" },
  { name: "Oxygen Builder", note: "wordpress" },
  { name: "Python Flask", note: "app development" },
  { name: "Claude Code", note: "app development" },
];

const SKILLS = [
  { name: "UX / wireframing", label: "Expert" },
  { name: "UI design", label: "Expert" },
  { name: "Prototyping in Figma", label: "Expert" },
  { name: "Shopify + PageFly", label: "Advanced" },
  { name: "Wix Studio", label: "Advanced" },
  { name: "Python Flask", label: "Developing" },
  { name: "App development with Claude Code", label: "Developing" },
];

const SERVICES = [
  {
    num: "01",
    title: "UI / UX design",
    body: "Research, flows, wireframes and high-fidelity screens ready for build.",
    meta: "From two weeks",
  },
  {
    num: "02",
    title: "Web design",
    body: "Marketing sites and landing pages with a section system your team can extend.",
    meta: "From one week",
  },
  {
    num: "03",
    title: "App design",
    body: "Mobile-first interfaces with interaction specs and a clickable prototype.",
    meta: "From three weeks",
  },
  {
    num: "04",
    title: "No-code build",
    body: "Shopify, PageFly or Wix Studio implementation so the design ships as drawn.",
    meta: "From one week",
  },
  {
    num: "05",
    title: "App development",
    body: "Real, working web apps built with Python Flask and developed using Claude Code.",
    meta: "From two weeks",
  },
];

const PROJECTS = [
  {
    cat: "Web Design",
    title: "SmartFlock",
    body: "SmartFlock Hero Section. A proposed template for a client’s web design portfolio",
    meta: "Concept · 2025",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=37-13686&t=NF42ZBoqlb17HcZm-1",
    images: ["assets/projects/smartflock-hero.jpg"],
  },
  {
    cat: "Web application",
    title: "MediFlow",
    body: "MediFlow Dashboard Page. A proposed template for a client’s web design portfolio",
    meta: "Concept · 2025",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=37-13689&t=NF42ZBoqlb17HcZm-1", // paste this project's link here
    images: ["assets/projects/mediflow-dashboard.jpg"],
  },
  {
    cat: "Shopify",
    title: "Tallo Naturals",
    body: "A website redesign project that modernized the Tallo Naturals shopping experience with improved visual hierarchy, cleaner layouts, and a more conversion-focused user journey.",
    meta: "E-commerce · 2026",
    link: "https://www.tallonaturals.com/", // paste this project's link here
    images: ["assets/projects/tallo-naturals-storefront.jpg"],
  },
  {
    cat: "Web application",
    title: "ROR Trader",
    body: "An all-in-one paper trading and strategy marketplace designed to help traders build confidence, improve decision-making, and learn without financial risk.",
    meta: "Concept · 2023",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=41-14434&t=NF42ZBoqlb17HcZm-1", // paste this project's link here
    images: ["assets/projects/ror-trader-dashboard.jpg"],
  },
  {
    cat: "Web application",
    title: "Wizard",
    body: "An AI-driven storybook platform where users can create, customize, and print unique stories generated from their ideas and prompts.",
    meta: "Concept · 2025",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=41-14435&t=NF42ZBoqlb17HcZm-1", // paste this project's link here
    images: ["assets/projects/wizard-flow.jpg"],
  },
  {
    cat: "Commission design",
    title: "KJT Veterinary Services",
    body: "KJT Logo is a commission logo design for a veterinary clinic. The logo elements is base on clients perspective",
    meta: "Branding · 2024",
    link: "https://www.facebook.com/p/KJT-Veterinary-Services-100092986646078/?paipv=0&eav=AfYw5GAEH69lNf7J6pjlaKV6GwikCMP71oSTjiRI23BLJY-vRmm7Vf4MMZ39G0SIywg&_rdr", // paste this project's link here
    images: ["assets/projects/kjt-veterinary-logo.jpg"],
  },
  {
    cat: "Web application",
    title: "PrepFE",
    body: "A modern dashboard redesign concept focused on enhancing usability, streamlining workflows, and creating a more intuitive user experience.",
    meta: "Concept · 2026",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=44-11869&t=NF42ZBoqlb17HcZm-1", // paste this project's link here
    images: ["assets/projects/prepfe-dashboard.jpg"],
  },
  {
    cat: "Shopify",
    title: "Beverly Hills",
    body: "Three conversion-focused product landing pages — Liquid Miracle, Men's Instant Facelift, and V-Lift — built with a consistent design system, custom sections, and optimized layouts to guide customers from problem to purchase.",
    meta: "E-commerce · 2026",
    link: "https://www.beverlyhillsglobal.com/pages/mens-instant-face-lift-landing-page", // paste this project's link here
    images: ["assets/projects/beverly-hills-landing.jpg"],
  },
  {
    cat: "Shopify",
    title: "Beverly Hills Bee Venom",
    body: "Three conversion-focused product landing pages — Liquid Miracle, Men's Instant Facelift, and V-Lift — built with a consistent design system, custom sections, and optimized layouts to guide customers from problem to purchase.",
    meta: "E-commerce · 2026",
    link: "https://www.beverlyhillsglobal.com/pages/v-lift-landing-page", // paste this project's link here
    images: ["assets/projects/beverly-hills-landing-2.jpg"],
  },
  {
    cat: "Web Design",
    title: "Bukidnon Open",
    body: "Live registration site for a real pickleball tournament — prize pool, schedule and sign-up.",
    meta: "Live site · 2026",
    link: "https://bukidnon-open.github.io/registration/", // paste this project's link here
    images: ["assets/projects/bukidnon-open-registration.jpg"],
  },
  {
    cat: "Web Design",
    title: "Tudlo",
    body: "Landing page for an online English-tutoring platform — programs, flexible learning and trial booking.",
    meta: "Live site · 2026",
    link: "https://tudlo-english.com/", // paste this project's link here
    images: ["assets/projects/tudlo-esl-landing.jpg"],
  },
  {
    cat: "Claude code development",
    title: "Speedup Booking System",
    body: "Court-booking web app for a real sports park, in active development — built with Python Flask and developed using Claude. Real-time availability, GCash/Maya/GrabPay checkout, no account required.",
    meta: "Python Flask · 2026",
    // link: FIGMA_URL, // paste this project's link here
    images: [
      "assets/projects/jaksons-court-booking.jpg",
      "assets/projects/jaksons-court-booking-2.jpg",
      "assets/projects/jaksons-court-booking-3.jpg",
    ],
  },
  {
    cat: "Claude code development",
    title: "Speedup Tournament Manager",
    body: "Tournament bracket manager for real pickleball tournaments, in active development — built with Python Flask and developed using Claude. Categories, standings and match tracking.",
    meta: "Python Flask · 2026",
    link: "https://speedup-tournamentmanager.github.io/landing-page/",
    images: [
      "assets/projects/speedup-tournament-manager.jpg",
      "assets/projects/speedup-tournament-manager-2.jpg",
      "assets/projects/speedup-tournament-manager-3.jpg",
    ],
  },
  {
    cat: "Commission design",
    title: "African Swine Fever Awareness",
    body: "This ASF Poster is a commissioned poster design for a Veterinary student conducting a seminar about ASF awareness.",
    meta: "Poster · 2022",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=39-1959&t=NF42ZBoqlb17HcZm-1", // paste this project's link here
    images: ["assets/projects/asf-poster.jpg"],
  },
  {
    cat: "Commission design",
    title: "Cheese Monster Card Game",
    body: "Card Game. This design is for a concept card game base on monopoly game.",
    meta: "Game art · 2024",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=37-13678&t=NF42ZBoqlb17HcZm-1", // paste this project's link here
    images: ["assets/projects/card-game.jpg"],
  },
  {
    cat: "Commission design",
    title: "Clickhost Welcome Email",
    body: "Clickhost welcome email. Clickhost welcome email is a commission design on Australian base company that want to have a catchy and modern welcome email.",
    meta: "Email design · 2023",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=37-13674&t=NF42ZBoqlb17HcZm-4", // paste this project's link here
    images: [
      "assets/projects/clickhost-welcome-email.jpg",
      "assets/projects/clickhost-welcome-email-2.jpg",
    ],
  },
  {
    cat: "Web Design",
    title: "Black Swan Consulting",
    body: "Black Swan Consulting Landing Page. This design is a proposed revision of the current landing page.",
    meta: "Concept · 2025",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=37-13679&t=NF42ZBoqlb17HcZm-4", // paste this project's link here
    images: ["assets/projects/black-swan-consulting.jpg"],
  },
  {
    cat: "Web Design",
    title: "LeadAlign",
    body: "Lead-Align Landing Page. A proposed template for a client’s web design portfolio",
    meta: "Concept · 2025",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=37-13683&t=NF42ZBoqlb17HcZm-4", // paste this project's link here
    images: ["assets/projects/leadalign-landing.jpg"],
  },
  {
    cat: "Web Design",
    title: "Ron Williams Funnel",
    body: "Ron Williams Funnel. Ron Williams Funnel website is a propose funnel website base on WP Funnel templates",
    meta: "Concept · 2024",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=37-13677&t=NF42ZBoqlb17HcZm-4", // paste this project's link here
    images: ["assets/projects/ron-williams-funnel.jpg"],
  },
  {
    cat: "Web Design",
    title: "Verus Nutrition",
    body: "Verus Nutrition landing page. Verus Nutrition is a product landing page that base on GoDaddy templates base on client demand.",
    meta: "Concept · 2024",
    link: "https://verusnutrition.net/", // paste this project's link here
    images: ["assets/projects/verus-nutrition-landing.jpg"],
  },
  {
    cat: "Web application",
    title: "Pond Dashboard",
    body: "Pond Dashboard. A UI/UX task design created for a client project, focused on a clean, modern layout and intuitive interaction.",
    meta: "Concept · 2025",
    link: "https://www.figma.com/design/pC7PWLeiJ2c6c2HPJKfG0R/Personal-Portfolio?node-id=39-1958&t=NF42ZBoqlb17HcZm-4", // paste this project's link here
    images: ["assets/projects/pond-dashboard.jpg"],
  },
  {
    cat: "Web Design",
    title: "JakSons Sports Park",
    body: "Marketing site for a real pickleball venue — facility info, open play schedule and court reservations.",
    meta: "Concept · 2026",
    // link: FIGMA_URL, // paste this project's link here
    images: ["assets/projects/jaksons-sports-park.jpg"],
  },
];

const FILTER_CATEGORIES = [
  "All",
  "Shopify",
  "Web Design",
  "Web application",
  "Claude code development",
  "Commission design",
];

/* ---------------------------------------------------------------
   Small render helpers
--------------------------------------------------------------- */

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function el(selector) {
  return document.querySelector(selector);
}

/* ---------------------------------------------------------------
   Theme
--------------------------------------------------------------- */

function initTheme() {
  let dark = true; // default theme for first-time visitors
  try {
    const stored = localStorage.getItem("pm-theme");
    if (stored) dark = stored === "dark";
  } catch (e) {
    /* localStorage unavailable (private mode, etc.) */
  }
  applyTheme(dark);

  el("#theme-toggle").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme !== "dark");
  });
}

function applyTheme(dark) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  el("#theme-toggle").textContent = dark ? "Light" : "Dark";
  try {
    localStorage.setItem("pm-theme", dark ? "dark" : "light");
  } catch (e) {
    /* ignore */
  }
}

/* ---------------------------------------------------------------
   Static content lists
--------------------------------------------------------------- */

function renderPlatforms() {
  el("#platform-list").innerHTML = PLATFORMS.map(
    (p) => `
      <div class="platform-row">
        <span class="platform-name">${escapeHtml(p.name)}</span>
        <span class="meta-mono">${escapeHtml(p.note)}</span>
      </div>`,
  ).join("");
}

function renderSkills() {
  el("#skill-list").innerHTML = SKILLS.map(
    (s) => `
      <div class="skill-row">
        <span class="skill-name">${escapeHtml(s.name)}</span>
        <span class="meta-mono">${escapeHtml(s.label)}</span>
      </div>`,
  ).join("");
}

function renderServices() {
  el("#service-list").innerHTML = SERVICES.map(
    (s) => `
      <div class="service-row">
        <div class="service-heading">
          <span class="service-num">${escapeHtml(s.num)}</span>
          <h3 class="service-title">${escapeHtml(s.title)}</h3>
        </div>
        <div>
          <p class="service-body">${escapeHtml(s.body)}</p>
          <p class="meta-mono service-meta">${escapeHtml(s.meta)}</p>
        </div>
      </div>`,
  ).join("");
}

/* ---------------------------------------------------------------
   Projects: filtering + carousel
--------------------------------------------------------------- */

let activeFilter = "All";
const carouselIndex = new Map();

function visibleProjects() {
  return activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.cat === activeFilter);
}

function renderFilters() {
  el("#filter-list").innerHTML = FILTER_CATEGORIES.map(
    (cat) => `
      <button
        type="button"
        class="filter-btn${cat === activeFilter ? " is-active" : ""}"
        data-cat="${escapeHtml(cat)}"
      >${escapeHtml(cat)}</button>`,
  ).join("");

  el("#filter-list")
    .querySelectorAll(".filter-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.cat;
        renderFilters();
        renderProjects();
      });
    });
}

function projectCardHTML(project) {
  const idx = carouselIndex.get(project.title) || 0;
  const hasMultiple = project.images.length > 1;

  const dots = project.images
    .map(
      (_, i) => `
        <button
          type="button"
          class="dot${i === idx ? " is-active" : ""}"
          data-title="${escapeHtml(project.title)}"
          data-img="${i}"
          aria-label="Show image ${i + 1}"
        ></button>`,
    )
    .join("");

  // No link (missing, commented out, null, or "") disables the click-through
  // for this card — it renders as plain, non-clickable content instead.
  const link = project.link || null;
  const tag = link ? "a" : "div";
  const linkAttrs = link
    ? ` href="${escapeHtml(link)}" target="_blank" rel="noopener"`
    : "";

  return `
    <article class="project-card">
      <${tag} class="project-media"${linkAttrs}>
        <div class="media-frame">
          <img
            src="${escapeHtml(project.images[idx])}"
            alt="${escapeHtml(project.title)} screenshot"
          />
        </div>
      </${tag}>
      ${
        hasMultiple
          ? `<div class="carousel-controls">
              <button type="button" class="carousel-arrow" data-title="${escapeHtml(project.title)}" data-dir="-1" aria-label="Previous image">‹</button>
              <div class="carousel-dots">${dots}</div>
              <button type="button" class="carousel-arrow" data-title="${escapeHtml(project.title)}" data-dir="1" aria-label="Next image">›</button>
            </div>`
          : ""
      }
      <${tag} class="project-link"${linkAttrs}>
        <div class="project-header">
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <span class="meta-mono project-meta">${escapeHtml(project.meta)}</span>
        </div>
        <p class="project-body">${escapeHtml(project.body)}</p>
      </${tag}>
    </article>`;
}

function renderProjects() {
  const shown = visibleProjects();
  el("#projects-count").textContent = `${shown.length} / ${PROJECTS.length}`;

  const grid = el("#projects-grid");
  grid.innerHTML = shown.map(projectCardHTML).join("");

  grid.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      carouselIndex.set(dot.dataset.title, Number(dot.dataset.img));
      renderProjects();
    });
  });

  grid.querySelectorAll(".carousel-arrow").forEach((btn) => {
    btn.addEventListener("click", () => {
      const project = PROJECTS.find((p) => p.title === btn.dataset.title);
      const count = project.images.length;
      const current = carouselIndex.get(project.title) || 0;
      const next = (current + Number(btn.dataset.dir) + count) % count;
      carouselIndex.set(project.title, next);
      renderProjects();
    });
  });
}

/** Hover-zoom: move the transform-origin to follow the cursor. */
function initProjectZoom() {
  el("#projects-grid").addEventListener("mousemove", (e) => {
    const img = e.target.closest(".media-frame img");
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    img.style.transformOrigin = `${x}% ${y}%`;
  });
}

/* ---------------------------------------------------------------
   Contact form
--------------------------------------------------------------- */

function initContactForm() {
  const form = el("#contact-form");
  const submitBtn = el("#form-submit");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = Object.fromEntries(new FormData(form).entries());
    if (payload.botcheck) return;

    payload.access_key = WEB3FORMS_ACCESS_KEY;
    payload.subject = "New enquiry from your portfolio site";
    payload.from_name = "Portfolio contact form";
    payload.replyto = payload.email || "";

    submitBtn.textContent = "Sending…";
    submitBtn.disabled = true;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        submitBtn.textContent = "Sent";
        form.reset();
      } else {
        submitBtn.textContent = "Try again";
        submitBtn.disabled = false;
      }
    } catch (err) {
      submitBtn.textContent = "Try again";
      submitBtn.disabled = false;
    }
  });
}

/* ---------------------------------------------------------------
   Boot
--------------------------------------------------------------- */

function init() {
  initTheme();
  renderPlatforms();
  renderSkills();
  renderServices();
  renderFilters();
  renderProjects();
  initProjectZoom();
  initContactForm();
}

document.addEventListener("DOMContentLoaded", init);
