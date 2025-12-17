/* =========================
   MENÚ MÓVIL
========================= */
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mainNav = document.getElementById("main-nav");

if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
    });
  });
}

/* =========================
   EFECTO HEADER AL SCROLL
========================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
  } else {
    header.style.boxShadow = "none";
  }
});

/* =========================
   FORMULARIO → WHATSAPP
========================= */
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const text = `
*Nuevo contacto desde JMAC*

👤 Nombre: ${name}
📧 Email: ${email}
📱 Teléfono: ${phone}

📝 Mensaje:
${message}
    `;

    const whatsappURL = `https://wa.me/593960902706?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
    form.reset();
  });
}

/* =========================
   ANIMACIONES SUAVES
========================= */
const animatedElements = document.querySelectorAll(
  ".service-card, .stat-number, .grid-two img, .clients-grid img, .contact-form-container"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15
});

animatedElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});

/
