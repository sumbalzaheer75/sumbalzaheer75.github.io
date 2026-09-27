const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      active?.classList.add("active");
    }
  });
}, { threshold: 0.45 });

sections.forEach(section => navObserver.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();
