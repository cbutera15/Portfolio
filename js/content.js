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
    { cmd: "status", out: "Open for work and collaboration. Website under construction!" },
  ],

  about:
    "I specialize in front-end web/application design and code, which means the pixels and the logic get made by " +
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
      embed: '<iframe src=\"https://docs.google.com/presentation/d/e/2PACX-1vTpfACeFX8IrDjWa3YOALFS8X9MWmHgaon0yLPhYv-bOF5tPOK6VfnEE_2txlTn88wBTIXtYG9GRiHJ/pubembed?start=true&loop=true&delayms=5000\" width=\"960\" height=\"569\"></iframe>',
      gallery: [
        { image: "assets/images/proj1/telegram-agent.png", caption: "<strong>n8n telegram agent</strong> - connects RAG agent to telegram to allow user to make gmail actions conversationally." },
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
      details: [
          "COOK! is a mobile application that allows users to create and save recipes. Our team of four created an app with a focus on usability and a clean, modern design. We sought to create an application that would be actually useful to everyday life for this project. ",
          "The application is coded in Swift and is designed to be used on iOS devices. It features an AI recipe creation tool, food item barcode scanner, and a saved recipe database for users to access their favorites.",
      ],
      embed: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRGFQSkLJeqsFe7aa6e1oC1GwASla1pdbmuwgvmosc7HvRmrXylbERV283iIxgIK2kD_rfTuFPOEk-5/pubembed?start=true&loop=true&delayms=5000" width="960" height="569"></iframe>',
    },
    {
      index: "04",
      title: "UVM-Ticketing-System",
      blurb: "A web application meant to replace the ticketing system of the UVM Tech Team using AI Automation with n8n " +
          "to streamline support workflows.",
      tags: ["n8n", "Web", "2025"],
      href: "#",
      details: [
          "The UVM-Ticketing-System is a web application that replaces the existing ticketing system of the UVM Tech Team. It uses AI Automation with n8n to streamline support workflows and improve efficiency.",
          "The application is built on a modern web stack and features a user-friendly interface that makes it easy for users to submit and track tickets. A RAG chatbot is integrated into the system to provide users with instant and relevant support and answers to common questions.",
      ],
      embed: '<iframe src="https://uvm-ticket-system.vercel.app" title="Live site preview" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
      gallery: [
        { image: "assets/images/proj4/RAG-bot-workflow.png", caption: "<strong>RAG Bot workflow</strong> - n8n backend for the RAG chatbot and its Pinecone connection." },
        { image: "assets/images/proj4/n8n-scraper.png", caption: "<strong>n8n webscraper</strong> - A web scraper built with n8n to gather data from the UVM Knowledge Base for use with a RAG chatbot." },
      ],
    },
    {
      index: "05",
      title: "The Simmering Bone Website",
      blurb: "A full website overhaul for The Simmering Bone, a small broth company in Burlington, Vermont.",
      tags: ["HTML/CSS", "GSAP", "2025"],
      href: "#",
      details: [
          "This website project was a full overhaul of the existing website for The Simmering Bone, a small broth company in Burlington, Vermont. The goal of my teammate Ben Quackenbush and I was to create a modern, responsive website that would better showcase the company's products and brand. He focused on the market functionality of the site while I focused on the design and animations.",
          "The website is built using HTML/CSS and GSAP for animations. The site features a clean, modern design that is easy to navigate and visually appealing.    <strong>Note: while the website is embedded above, some functionality, especially animation spacing and videos and are limited due to the iframe and GitHub pages hosting environment.</strong>",
          "",
      ],
      embed: '<iframe src="https://cbutera15.github.io/TSB-Website/html" title="Live site preview" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
    },
  ],

  // ---- VIDEO WORK -------------------------------------------------
  // Intentionally lighter-weight: fewer fields, smaller section.
  videos: [
    {
      title: "Banff Trip",
      blurb: "Trip montage from a recent ski trip.",
      year: "Winter 2025",
      src: "assets/videos/banff-trip.mov",
    },
    {
      title: "Summer Edit",
      blurb: "A visual representation of my summer. All shot on iPhone.",
      year: "Summer 2025",
      src: "assets/videos/summer-edit.mp4",
    },
    {
      title: "Steamboat Trip",
      blurb: "Video montage covering my time in Steamboat Springs.",
      year: "Spring 2025",
      src: "assets/videos/steamboat-trip.mov",
    },
  ],
};
