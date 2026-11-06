const menuToggle = document.querySelector(".menu-toggle");
if (menuToggle) {
  const header = menuToggle.closest(".site-header");
  const setLabel = (open) => menuToggle.setAttribute("aria-label", open ? menuToggle.dataset.closeLabel : menuToggle.dataset.openLabel);
  const close = () => {
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    setLabel(false);
  };
  menuToggle.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    setLabel(open);
  });
  header.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) {
      close();
      menuToggle.focus();
    }
  });
}