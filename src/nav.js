export default function() {
    const ham = document.querySelector(".hamburger");
    const lscont = document.querySelector(".nav-lscont");
    const header = document.querySelector("header");
    ham.addEventListener("click", () => {
        lscont.classList.toggle('menu-mobile-open');
        lscont.style.top = header.getBoundingClientRect().height + "px";
    });
    document.addEventListener("click", (e) => {
        if(!lscont.contains(e.target) && e.target != ham && !ham.contains(e.target)) {
            lscont.classList.remove('menu-mobile-open');
        };
    });
    window.addEventListener("resize", () => {
        lscont.classList.remove('menu-mobile-open');
    });
};