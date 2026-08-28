document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis({
        duration: 1.3,
        smooth: true,
        smoothTouch: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});