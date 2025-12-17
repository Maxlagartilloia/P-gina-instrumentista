/* ================= MENU MOVIL ================= */
const menuToggle = document.getElementById("mobile-menu-toggle");
const nav = document.getElementById("main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

/* ================= HEADER SCROLL ================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "rgba(0,0,0,0.98)";
  } else {
    header.style.background = "rgba(0,0,0,0.95)";
  }
});

/* ================= FORM → WHATSAPP ================= */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const text = `
*Nueva consulta desde la web JMAC*

*Nombre:* ${name}
*Email:* ${email}
*Teléfono:* ${phone}

*Mensaje:*
${message}
    `.trim();

    const url = `https://wa.me/593960902706?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    contactForm.reset();
  });
}

/* ================= SCROLL SUAVE ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================= ANIMACIONES ================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".service-card, .clients-grid img, .grid-two img, .contact-form-container"
).forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(25px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});

/* ================= DEBUG ================= */
console.log("JMAC site loaded correctly");
