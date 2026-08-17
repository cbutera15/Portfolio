/* ============================================================
   RENDER CONTENT FROM content.js
   ============================================================ */
(function render() {
  document.title = `${SITE.name} — ${SITE.role}`;

  const heroLoc = document.getElementById("hero-location");
  if (heroLoc) heroLoc.textContent = SITE.location;

  // Projects
  const list = document.getElementById("project-list");
  SITE.projects.forEach((p) => {
    const row = document.createElement("a");
    row.href = p.href;
    row.className = "project-row reveal";
    row.innerHTML = `
      <span class="row-index">${p.index}</span>
      <span class="project-title">${p.title}</span>
      <span class="project-blurb">${p.blurb}</span>
      <span class="row-right">
        <span class="row-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</span>
        <span class="row-arrow">↗</span>
      </span>
    `;
    list.appendChild(row);
  });

  // Videos
  const vlist = document.getElementById("video-list");
  SITE.videos.forEach((v) => {
    const card = document.createElement("a");
    card.href = v.href;
    card.className = "video-card reveal";
    card.innerHTML = `
      <span class="v-year">${v.year}</span>
      <div class="v-title">${v.title}</div>
      <div class="v-blurb">${v.blurb}</div>
    `;
    vlist.appendChild(card);
  });

  // About
  document.getElementById("about-text").textContent = SITE.about;

  // Contact
  const emailEl = document.getElementById("contact-email");
  emailEl.textContent = SITE.email;
  emailEl.href = `mailto:${SITE.email}`;

  const socials = document.getElementById("socials");
  SITE.socials.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.url;
    a.textContent = s.label;
    a.target = "_blank";
    a.rel = "noopener";
    socials.appendChild(a);
  });

  document.getElementById("footer-name").textContent = `${SITE.name} — ${SITE.role}`;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
})();

/* ============================================================
   TERMINAL TYPING EFFECT (hero signature element)
   ============================================================ */
(function typeTerminal() {
  const body = document.getElementById("terminal-body");
  if (!body) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const lines = SITE.terminalLines;

  if (reduceMotion) {
    body.innerHTML = lines
      .map(
        (l) =>
          `<div class="row"><span class="prompt">$</span> <span class="cmd">${l.cmd}</span><span class="out">${l.out}</span></div>`
      )
      .join("");
    return;
  }

  let li = 0;

  function typeLine() {
    if (li >= lines.length) return;
    const { cmd, out } = lines[li];
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `<span class="prompt">$</span> <span class="cmd"></span><span class="cursor"></span>`;
    body.appendChild(row);
    const cmdEl = row.querySelector(".cmd");
    const cursor = row.querySelector(".cursor");

    let ci = 0;
    const typeChar = setInterval(() => {
      cmdEl.textContent += cmd[ci];
      ci++;
      if (ci >= cmd.length) {
        clearInterval(typeChar);
        setTimeout(() => {
          cursor.remove();
          const outEl = document.createElement("span");
          outEl.className = "out";
          outEl.textContent = out;
          row.appendChild(outEl);
          li++;
          setTimeout(typeLine, 500);
        }, 280);
      }
    }, 38);
  }

  typeLine();
})();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function scrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

/* ============================================================
   MOBILE NAV
   ============================================================ */
(function mobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();
