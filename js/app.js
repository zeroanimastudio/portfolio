const contentEl = document.getElementById("content");
const navLinks = document.querySelectorAll("#main-nav a, #home-button");

const X_POINTS = "89.90,259.60 150,199.50 210.10,259.60 259.60,210.10 199.50,150 259.60,89.90 210.10,40.40 150,100.50 89.90,40.40 40.40,89.90 100.50,150 40.40,210.10";

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function makeDraggable(handleEl, containerEl) {
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  function clampAndPosition(x, y) {
    const containerRect = containerEl.getBoundingClientRect();
    const maxX = containerRect.width - handleEl.offsetWidth;
    const maxY = containerRect.height - handleEl.offsetHeight;
    handleEl.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
    handleEl.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
  }

  handleEl.addEventListener("pointerdown", (e) => {
    const containerRect = containerEl.getBoundingClientRect();
    const handleRect = handleEl.getBoundingClientRect();
    // Freeze the CSS-centered starting position into explicit px so dragging
    // takes over cleanly from there.
    handleEl.style.transform = "none";
    handleEl.style.left = `${handleRect.left - containerRect.left}px`;
    handleEl.style.top = `${handleRect.top - containerRect.top}px`;

    dragging = true;
    offsetX = e.clientX - handleRect.left;
    offsetY = e.clientY - handleRect.top;
    try { handleEl.setPointerCapture(e.pointerId); } catch (err) {}
  });

  handleEl.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const containerRect = containerEl.getBoundingClientRect();
    clampAndPosition(e.clientX - containerRect.left - offsetX, e.clientY - containerRect.top - offsetY);
  });

  handleEl.addEventListener("pointerup", () => { dragging = false; });
  handleEl.addEventListener("pointercancel", () => { dragging = false; });
}

function breadcrumbs(trail) {
  // trail: [{label, hash}] — last item has no hash (current page)
  const parts = trail.map((t, i) => {
    if (i === trail.length - 1) return `<span class="current">${escapeHtml(t.label)}</span>`;
    return `<a href="${t.hash}">${escapeHtml(t.label)}</a><span class="sep">/</span>`;
  });
  return `<div class="breadcrumbs">${parts.join("")}</div>`;
}

function renderHome() {
  contentEl.innerHTML = `
    <div class="home-view" id="home-view">
      <div class="x-mark-drag" id="x-mark-drag">
        <svg class="x-mark" viewBox="0 0 300 300"><polygon points="${X_POINTS}" /></svg>
      </div>
      <div class="home-list">
        <h2>Who I am when not at work.</h2>
        <ol>${HOME_LIST.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
      </div>
    </div>
  `;

  makeDraggable(document.getElementById("x-mark-drag"), document.getElementById("home-view"));
}

function renderPortfolioList() {
  const cards = CASE_STUDIES.map((cs, i) => `
    <a class="case-card" href="#/portfolio/${cs.slug}">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <span class="meta">
        <h3>${escapeHtml(cs.title)}</h3>
        <p>${escapeHtml(cs.blurb)} — ${escapeHtml(cs.year)}</p>
      </span>
      <span class="arrow">&rarr;</span>
    </a>
  `).join("");

  contentEl.innerHTML = `
    ${breadcrumbs([{ label: "Home", hash: "#/" }, { label: "Portfolio" }])}
    <div class="case-list">${cards}</div>
  `;
}

function imgWithFallback(src, label) {
  const url = encodeURI(src);
  return `<img src="${url}" alt="${escapeHtml(label)}"
    onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'cs-shot-placeholder',textContent:'${escapeHtml(label).replace(/'/g, "\\'")}\\n(' + decodeURI('${url}').split('/').pop() + ')'}))" />`;
}

function renderCaseStudy(slug) {
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) {
    contentEl.innerHTML = `
      ${breadcrumbs([{ label: "Home", hash: "#/" }, { label: "Portfolio", hash: "#/portfolio" }, { label: "Not found" }])}
      <p>That case study doesn't exist yet.</p>
    `;
    return;
  }

  const imageDir = cs.imageDir || cs.slug;
  const gallery = cs.gallery.map((section) => `
    <h4 class="cs-gallery-heading">${escapeHtml(section.heading)}</h4>
    ${section.images.map((img) => `
      <div class="cs-shot">${imgWithFallback(`assets/images/case-studies/${imageDir}/${img}`, section.heading)}</div>
    `).join("")}
  `).join("");

  contentEl.innerHTML = `
    ${breadcrumbs([{ label: "Home", hash: "#/" }, { label: "Portfolio", hash: "#/portfolio" }, { label: cs.title }])}
    <h2 class="cs-title">${escapeHtml(cs.title)}</h2>

    <div class="cs-section">
      <h3>The Challenge</h3>
      <p>${escapeHtml(cs.challenge)}</p>
    </div>
    <div class="cs-section">
      <h3>The Product</h3>
      <p>${escapeHtml(cs.product)}</p>
    </div>
    <div class="cs-section">
      <h3>My Role</h3>
      <p>${escapeHtml(cs.role)}</p>
      <p><strong>Responsibilities:</strong></p>
      <ul>${cs.responsibilities.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
    </div>

    ${gallery}

    <div class="cs-section">
      <h3>Takeaways</h3>
      ${cs.takeaways.split(/\n\s*\n/).map((p) => `<p>${escapeHtml(p.trim())}</p>`).join("")}
    </div>

    <div class="cs-disclaimer">
      ${cs.disclaimer ? `<p>${escapeHtml(cs.disclaimer)}</p>` : ""}
      <p>${escapeHtml(cs.rights)}</p>
    </div>

    <button type="button" class="cs-scroll-top" data-scroll-top aria-label="Back to top">&uarr;</button>
  `;
}

function renderResume() {
  const downloadButton = RESUME.fileReady
    ? `<a class="resume-download" href="${encodeURI(RESUME.fileHref)}" download>Download PDF</a>`
    : "";
  const pendingNote = RESUME.fileReady
    ? ""
    : `<p class="resume-pending">Downloadable resume coming soon — drop the file into assets/resume/resume.pdf and flip RESUME.fileReady in js/data.js.</p>`;

  const h = RESUME.header;
  const experience = RESUME.experience.map((job) => `
    <div class="resume-job">
      <div class="resume-job-head">
        <h4>${escapeHtml(job.company)} <span class="resume-role">— ${escapeHtml(job.role)}</span></h4>
        <span class="resume-dates">${escapeHtml(job.dates)}</span>
      </div>
      <ul>${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
    </div>
  `).join("");

  const education = RESUME.education.map((e) => `
    <div class="resume-job">
      <div class="resume-job-head">
        <h4>${escapeHtml(e.school)} <span class="resume-role">— ${escapeHtml(e.degree)}</span></h4>
        <span class="resume-dates">${escapeHtml(e.dates)}</span>
      </div>
      <p>${escapeHtml(e.detail)}</p>
    </div>
  `).join("");

  const certifications = RESUME.certifications.map((c) => `
    <li>${escapeHtml(c.name)} — <em>${escapeHtml(c.issuer)}</em>, ${escapeHtml(c.date)}</li>
  `).join("");

  const links = RESUME.links.map((l) => `
    <li><a href="${l.href}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a></li>
  `).join("");

  contentEl.innerHTML = `
    ${breadcrumbs([{ label: "Home", hash: "#/" }, { label: "Resume" }])}
    <div class="resume-header">
      <h2 class="cs-title">${escapeHtml(h.name)}</h2>
      ${downloadButton}
    </div>
    <p class="resume-subtitle">${escapeHtml(h.title)}</p>
    <p class="resume-contact-line">${escapeHtml(h.location)} &middot; ${escapeHtml(h.phone)} &middot; <a href="mailto:${h.email}">${escapeHtml(h.email)}</a></p>
    ${pendingNote}

    <div class="resume-body">
      <h3>Skills</h3>
      <p>${RESUME.skills.map(escapeHtml).join(", ")}.</p>

      <h3>Experience</h3>
      ${experience}

      <h3>Education</h3>
      ${education}

      <h3>Certifications</h3>
      <ul>${certifications}</ul>

      <h3>Links</h3>
      <ul>${links}</ul>
    </div>
  `;
}

function renderContact() {
  contentEl.innerHTML = `
    ${breadcrumbs([{ label: "Home", hash: "#/" }, { label: "Contact" }])}
    <h2 class="cs-title">Contact</h2>
    <div class="contact-view">
      <a class="contact-link" href="mailto:${CONTACT.email}">${escapeHtml(CONTACT.email)}</a>
      <a class="contact-link" href="${CONTACT.linkedin}" target="_blank" rel="noopener">LinkedIn &rarr;</a>
    </div>
  `;
}

function setActiveNav(route) {
  navLinks.forEach((a) => a.classList.toggle("active", a.dataset.route === route));
}

function router() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);

  const isCaseStudy = parts[0] === "portfolio" && parts[1];
  const isResume = parts[0] === "resume";
  document.body.dataset.view = (isCaseStudy || isResume) ? "reading" : "default";

  if (parts.length === 0) {
    setActiveNav("home");
    renderHome();
  } else if (parts[0] === "portfolio" && parts[1]) {
    setActiveNav("portfolio");
    renderCaseStudy(parts[1]);
  } else if (parts[0] === "portfolio") {
    setActiveNav("portfolio");
    renderPortfolioList();
  } else if (parts[0] === "resume") {
    setActiveNav("resume");
    renderResume();
  } else if (parts[0] === "contact") {
    setActiveNav("contact");
    renderContact();
  } else {
    setActiveNav("home");
    renderHome();
  }

  contentEl.scrollTop = 0;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", router);
router();

const frameEl = document.getElementById("frame");
const sidebarToggle = document.getElementById("sidebar-toggle");

function setSidebarCollapsed(collapsed) {
  frameEl.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.querySelector(".sidebar-toggle-icon").textContent = collapsed ? "+" : "−";
  sidebarToggle.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Minimize sidebar");
  try { localStorage.setItem("sidebarCollapsed", collapsed ? "1" : "0"); } catch (e) {}
}

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!frameEl.classList.contains("sidebar-collapsed"));
});

let startCollapsed = false;
try { startCollapsed = localStorage.getItem("sidebarCollapsed") === "1"; } catch (e) {}
setSidebarCollapsed(startCollapsed);

const bioToggle = document.getElementById("bio-toggle");
const bioBox = document.getElementById("bio-box");

function setBioOpen(open) {
  bioBox.classList.toggle("is-open", open);
  bioToggle.querySelector(".bio-toggle-icon").textContent = open ? "−" : "+";
  bioToggle.setAttribute("aria-expanded", open ? "true" : "false");
}

bioToggle.addEventListener("click", () => {
  setBioOpen(!bioBox.classList.contains("is-open"));
});

const lightboxEl = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

const LIGHTBOX_ZOOM_SCALE = 0.55; // zoomed size, as a fraction of the image's native resolution

function setLightboxZoomed(zoomed) {
  lightboxEl.classList.toggle("is-zoomed", zoomed);
  lightboxImg.classList.toggle("is-zoomed", zoomed);
  if (zoomed) {
    lightboxImg.style.width = `${lightboxImg.naturalWidth * LIGHTBOX_ZOOM_SCALE}px`;
    lightboxImg.style.height = `${lightboxImg.naturalHeight * LIGHTBOX_ZOOM_SCALE}px`;
  } else {
    lightboxImg.style.width = "";
    lightboxImg.style.height = "";
  }
  lightboxEl.scrollTop = 0;
  lightboxEl.scrollLeft = 0;
}

function refreshLightboxZoomability() {
  const canZoom = lightboxImg.naturalWidth > lightboxImg.clientWidth + 1
    || lightboxImg.naturalHeight > lightboxImg.clientHeight + 1;
  lightboxEl.classList.toggle("can-zoom", canZoom);
}

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightboxEl.classList.add("is-open");
  lightboxEl.setAttribute("aria-hidden", "false");
  setLightboxZoomed(false);
  lightboxEl.classList.remove("can-zoom");

  if (lightboxImg.complete) refreshLightboxZoomability();
  else lightboxImg.addEventListener("load", refreshLightboxZoomability, { once: true });
}

function closeLightbox() {
  lightboxEl.classList.remove("is-open");
  lightboxEl.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  setLightboxZoomed(false);
}

contentEl.addEventListener("click", (e) => {
  const img = e.target.closest(".cs-shot img");
  if (img) openLightbox(img.currentSrc || img.src, img.alt);

  if (e.target.closest("[data-scroll-top]")) {
    contentEl.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Dragging (while zoomed) pans the image via scrollLeft/scrollTop; a plain
// tap/click (no meaningful movement) toggles zoom instead.
const imgDrag = { active: false, moved: false, startX: 0, startY: 0, startScrollLeft: 0, startScrollTop: 0 };
const DRAG_THRESHOLD = 4;

lightboxImg.addEventListener("pointerdown", (e) => {
  imgDrag.active = true;
  imgDrag.moved = false;
  imgDrag.startX = e.clientX;
  imgDrag.startY = e.clientY;
  imgDrag.startScrollLeft = lightboxEl.scrollLeft;
  imgDrag.startScrollTop = lightboxEl.scrollTop;
  try { lightboxImg.setPointerCapture(e.pointerId); } catch (err) {}
});

lightboxImg.addEventListener("pointermove", (e) => {
  if (!imgDrag.active) return;
  const dx = e.clientX - imgDrag.startX;
  const dy = e.clientY - imgDrag.startY;
  if (!imgDrag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
    imgDrag.moved = true;
    lightboxImg.classList.add("is-dragging");
  }
  if (lightboxEl.classList.contains("is-zoomed")) {
    lightboxEl.scrollLeft = imgDrag.startScrollLeft - dx;
    lightboxEl.scrollTop = imgDrag.startScrollTop - dy;
  }
});

function endImgDrag() {
  if (!imgDrag.active) return;
  imgDrag.active = false;
  lightboxImg.classList.remove("is-dragging");
  if (!imgDrag.moved && lightboxEl.classList.contains("can-zoom")) {
    setLightboxZoomed(!lightboxEl.classList.contains("is-zoomed"));
  }
}

lightboxImg.addEventListener("pointerup", endImgDrag);
lightboxImg.addEventListener("pointercancel", endImgDrag);

lightboxEl.addEventListener("click", (e) => {
  if (e.target === lightboxEl) closeLightbox();
});

lightboxClose.addEventListener("click", closeLightbox);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightboxEl.classList.contains("is-open")) closeLightbox();
});
