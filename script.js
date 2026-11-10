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
