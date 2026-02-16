/* ALWAYS START AT HOME */
window.addEventListener("load", () => {
  history.replaceState(null, null, window.location.pathname);
  window.scrollTo(0, 0);
});

/* ACTIVE NAV ON SCROLL */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
