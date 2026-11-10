gsap.registerPlugin(ScrollTrigger);

// Efectos disponibles mediante data-anim
const effects = {
  "slide-down": { y: -50 },
  "slide-left": { x: -80 },
  "slide-right": { x: 80 },
  "zoom-in": { scale: 0.8 },
  "zoom-out": { scale: 1.2 },
  "blur-in": { filter: "blur(14px)", y: 20 }
};

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.utils.toArray("[data-anim]").forEach((el) => {
    const from = effects[el.dataset.anim];
    if (!from) return;
    gsap.from(el, {
      ...from,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
    });
  });
}

// Pestañas de "Sobre mí"
document.querySelectorAll("[data-tab]").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("active", t === btn);
      t.setAttribute("aria-selected", t === btn);
    });
    btn.closest("section").querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    const target = document.getElementById(btn.dataset.tab);
    target.classList.add("active");
    gsap.from(Array.from(target.children), { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" });
  });
});

// Filtros de proyectos y tecnologías
document.querySelectorAll(".filter").forEach((group) => {
  const list = document.querySelector(group.dataset.target);
  group.querySelectorAll("[data-show]").forEach((btn) => {
    btn.addEventListener("click", () => {
      group.querySelectorAll(".tab").forEach((t) => {
        t.classList.toggle("active", t === btn);
        t.setAttribute("aria-selected", t === btn);
      });
      const show = btn.dataset.show;
      const shown = [];
      Array.from(list.children).forEach((item) => {
        const ok = show === "todos" || item.dataset.cat.split(" ").includes(show);
        item.hidden = !ok;
        if (ok) { gsap.set(item, { clearProps: "all" }); shown.push(item); }
      });
      gsap.from(shown, { opacity: 0, y: 24, stagger: 0.08, duration: 0.5, ease: "power2.out" });
      ScrollTrigger.refresh();
    });
  });
});
