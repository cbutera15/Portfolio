/* ============================================================
   PROJECT PAGE — reads ?p=<index> and renders that entry from
   SITE.projects (content.js). Only uses fields that already
   exist there: index, title, blurb, tags. Nothing to add.
   ============================================================ */
(function renderProject() {
  const params = new URLSearchParams(window.location.search);
  const i = parseInt(params.get("p"), 10);
  const projects = SITE.projects || [];
  const project = projects[i];

  const main = document.getElementById("project-main");

  if (!project) {
    main.innerHTML = `
      <section class="proj-hero">
        <a class="back-link" href="index.html#work">← Work</a>
        <div class="proj-hero-head" style="border-bottom:none;">
          <h1 class="proj-title">Project not found</h1>
          <p class="section-note" style="margin-top:16px;">That project doesn't exist. Head back to the work list.</p>
        </div>
      </section>`;
    return;
  }

  document.title = `${project.title} — ${SITE.name}`;

  document.getElementById("proj-index").textContent = project.index || "";
  document.getElementById("proj-title").textContent = project.title;

  // If the project has an `embed` field (Slides, YouTube, Figma, etc.),
  // it replaces the main placeholder block entirely.
  const mediaMain = document.getElementById("proj-media-main");
  if (project.embed) {
    mediaMain.classList.remove("placeholder-media");
    mediaMain.classList.add("has-embed");
    mediaMain.innerHTML = project.embed;
  }

  const meta = document.getElementById("proj-meta");
  (project.tags || []).forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t;
    meta.appendChild(span);
  });

  // The blurb doubles as the longer description here — no separate
  // "description" field needed in content.js.
  document.getElementById("proj-description").textContent = project.blurb;

  // Optional extended write-up. In content.js, add a `details` field to
  // any project — either a single string, or an array of strings for
  // multiple paragraphs. Leave it out and this section just doesn't render.
  const moreEl = document.getElementById("proj-more");
  if (project.details) {
    const paragraphs = Array.isArray(project.details) ? project.details : [project.details];
    moreEl.innerHTML = `
      <h2 class="more-heading">More about this project</h2>
      ${paragraphs.map((p) => `<p class="more-text">${p}</p>`).join("")}
    `;
  } else {
    moreEl.remove();
  }

  // Bottom gallery blocks. If the project has a `gallery` array in
  // content.js, real images render there. Otherwise, generic
  // placeholders show instead — nothing breaks either way.
  const gallery = document.getElementById("proj-gallery");
  if (project.gallery && project.gallery.length) {
    project.gallery.forEach((g) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <div class="gallery-media">
          <img src="${g.image}" alt="${g.caption || project.title}" />
        </div>
        <span class="g-caption">${g.caption || ""}</span>
      `;
      gallery.appendChild(item);
    });
  } else {
    const galleryItems = [
      { kind: "image", label: "Image placeholder" },
      { kind: "embed", label: "Embed placeholder — video, prototype, or live demo" },
    ];
    galleryItems.forEach((g) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <div class="placeholder-media ${g.kind === "embed" ? "is-embed" : ""}">
          <span class="ph-icon">${g.kind === "embed" ? "▶" : "▢"}</span>
          <span class="ph-label">${g.label}</span>
        </div>
        <span class="g-caption">${project.title} — ${g.kind}</span>
      `;
      gallery.appendChild(item);
    });
  }

  // Prev / next pager, wraps around the projects array.
  const pager = document.getElementById("proj-pager");
  const prevIndex = (i - 1 + projects.length) % projects.length;
  const nextIndex = (i + 1) % projects.length;
  const prev = projects[prevIndex];
  const next = projects[nextIndex];

  if (projects.length > 1) {
    pager.innerHTML = `
      <a class="pager-link prev" href="project.html?p=${prevIndex}">
        <span class="pager-label">← Previous</span>
        <span class="pager-title">${prev.title}</span>
      </a>
      <a class="pager-link next" href="project.html?p=${nextIndex}">
        <span class="pager-label">Next →</span>
        <span class="pager-title">${next.title}</span>
      </a>
    `;
  }

  document.getElementById("footer-name").textContent = `${SITE.name} — ${SITE.role}`;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
})();

/* Mobile nav — same behavior as the main site */
(function mobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
})();
