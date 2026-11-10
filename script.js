// Pestañas de "Sobre mí"
document.querySelectorAll("[data-tab]").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("active", t === btn);
      t.setAttribute("aria-selected", t === btn);
    });
    btn.closest("section").querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
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
      Array.from(list.children).forEach((item) => {
        item.hidden = !(show === "todos" || item.dataset.cat.split(" ").includes(show));
      });
    });
  });
});
