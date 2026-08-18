/* ============================================================
   CONTENT.JS — edit everything here. The rest of the site reads
   from this file, so you never need to touch HTML to update copy.
   ============================================================ */

const SITE = {
  name: "Colin Butera",
  role: "Design & Code",
  location: "Denver, CO",
  email: "ccmjbutera@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/cbutera15" },
    { label: "Instagram", url: "https://instagram.com/cbutera.15" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/colin-butera/" },
  ],

  // Rotating lines for the terminal hero. Keep them short.
  terminalLines: [
    { cmd: "whoami", out: "Colin Butera — Coder, UX/UI Designer, Videographer" },
    { cmd: "skills --list", out: "Front-end Design · Backend Code · Video Production · Music Curation" },
    { cmd: "status", out: "Open for work and collaboration." },
  ],

  about:
    "I specialize in front-end web and application design and code, which means the pixels and the logic get made by " +
      "the same hands. With experience in languages like HTML/CSS and Swift, I've built a number of projects throughout my " +
      "educational years. Proficiency in programs like Figma and Claude help to speed up my workflow and prioritize " +
      "efficiency without losing my personal touch. In my free time, you'll find me in the mountains.",

  // ---- MAIN WORK -------------------------------------------------
  // This is the primary, high-weight section.
  projects: [
    {
      index: "01",
      title: "AI Automation Study",
      blurb: "A case study exploring the ways that AI workflows can automate tasks that would normally be time consuming, " +
          "tedious, or challenging.",
      tags: ["AI Automation", "n8n", "2025"],
      href: "#",
      details: [
        "This project was a semester long independent study conducted with 4 teammates including myself. We examined how AI integration can automate tasks and increase efficiency.",
        "Following an extensive online course, we learned about n8n, RAG chatbots, and tokenization among other concepts. The study culminated in a final project using all of the concepts we had learned. Demo link: <a href='https://uvm-ticket-system.vercel.app' target=\"_blank\" rel=\"noopener noreferrer\">https://uvm-ticket-system.vercel.app</a>",
      ],
      embed: '<iframe src=\"https://docs.google.com/presentation/d/e/2PACX-1vTpfACeFX8IrDjWa3YOALFS8X9MWmHgaon0yLPhYv-bOF5tPOK6VfnEE_2txlTn88wBTIXtYG9GRiHJ/pubembed?start=true&loop=true&delayms=5000\" frameborder=\"0\" width=\"960\" height=\"569\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>',
      gallery: [
        { image: "assets/images/proj1/n8n-scraper.png", caption: "<strong>n8n web scraper</strong> - gathers and categorizes UVM Knowledge Base articles for use with a RAG chatbot." },
        { image: "assets/images/proj1/n8n-plaid.png", caption: "<strong>n8n plaid integration</strong> - gathers and categorizes user transactions automatically." },
      ],
    },
    {
      index: "02",
      title: "YMCA Mobile Application",
      blurb: "A usability-centered redesign of the Greater Burlington YMCA mobile and web applications, built using Figma.",
      tags: ["Figma", "UI/UX Design", "2026"],
      href: "#",
      details: [
        "My teammate Hanalei Henderson and I spent the semester redesigning the GBYMCA mobile and web applications. Our focus was on usability and user experience. The goal was to improve on the existing application which users noted to be confusing to use and has many unnecessary features.",
        "We built the application around our direct user testing and general usability design principles. Our finalized prototype includes only necessary features with an emphasis on usability and ease of access. The live web prototype is embedded above.",
      ],
      embed: '<iframe src="https://salsa-slaw-57157061.figma.site" title="Live site preview" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
      gallery: [
        { image: "assets/images/proj2/design-alternatives.png", caption: "<strong>Mobile application design alternatives</strong> - wireframe designs we explored during the research phase before reaching the final project." },
        { image: "assets/images/proj2/design-explanation.png", caption: "<strong>Design explanation</strong> - A look inside the thought process that informed our final design" },
      ],
    },
    {
      index: "03",
      title: "COOK! Mobile Application",
      blurb: "A ground up iOS application allowing users to create and save recipes intelligently coded in Swift.",
      tags: ["Swift", "iOS", "2025"],
      href: "#",
    },
    {
      index: "04",
      title: "UVM-Ticketing-System",
      blurb: "A web application meant to replace the ticketing system of the UVM Tech Team using AI Automation with n8n" +
          "to streamline support workflows.",
      tags: ["n8n", "Web", "2025"],
      href: "#",
    },
    {
      index: "05",
      title: "The Simmering Bone Website",
      blurb: "A full website overhaul for The Simmering Bone, a small broth company in Burlington, Vermont.",
      tags: ["HTML/CSS", "GSAP", "2025"],
      href: "#",
    },
  ],

  // ---- VIDEO WORK -------------------------------------------------
  // Intentionally lighter-weight: fewer fields, smaller section.
  videos: [
    {
      title: "Banff Trip",
      blurb: "Trip montage from a recent ski trip.",
      year: "Winter 2025",
      href: "#",
    },
    {
      title: "Summer Edit",
      blurb: "A visual representation of my summer. All shot on iPhone.",
      year: "Summer 2025",
      href: "#",
    },
    {
      title: "Steamboat Trip",
      blurb: "Video montage covering my time in Steamboat Springs.",
      year: "Spring 2025",
      href: "#",
    },
  ],
};
