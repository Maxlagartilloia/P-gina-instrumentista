/* =========================
   MOBILE MENU
========================= */
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mainNav = document.getElementById("main-nav");

if (mobileMenuToggle && mainNav) {
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuToggle.classList.remove("active");
      mainNav.classList.remove("active");
    });
  });
}

/* =========================
   HEADER SCROLL EFFECT
========================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 80) {
    header.style.background = "rgba(10, 10, 10, 0.98)";
    header.style.padding = "0.5rem 0";
  } else {
    header.style.background = "rgba(10, 10, 10, 0.95)";
    header.style.padding = "1rem 0";
  }
});

/* =========================
   CONTACT FORM → WHATSAPP
========================= */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const company = document.getElementById("company")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const whatsappMessage = `
*NUEVO CONTACTO DESDE JMAC*

*Nombre:* ${name}
*Email:* ${email}
*Teléfono:* ${phone}
*Empresa:* ${company}

*Mensaje:*
${message}
    `.trim();

    const whatsappURL = `https://wa.me/593960902701?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();
  });
}

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* =========================
   INTERSECTION OBSERVER
   (ANIMACIONES SUAVES)
========================= */
const observerOptions = {
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

const animatedElements = document.querySelectorAll(
  ".service-card, .stat-card, .standard-card"
);

animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

/* =========================
   DEBUG LOG
========================= */
console.log("JMAC static website loaded successfully");
