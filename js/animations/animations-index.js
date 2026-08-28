gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".about-picture",
    {x: 300},
    {
        x: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".about-picture",
            start: "top 100%",
            end: "top 20%",
            scrub: true,
        },
    }
);

gsap.fromTo(
    ".about-text",
    {x: -300},
    {
        x: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".about-text",
            start: "top 100%",
            end: "top 20%",
            scrub: true,
        },
    }
);