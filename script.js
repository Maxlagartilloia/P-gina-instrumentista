/* ===============================
   SCROLL SUAVE PARA ANCLAS
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ===============================
   FORMULARIO → WHATSAPP
================================ */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappMessage = `
Hola, deseo información sobre servicios de instrumentación industrial.

Nombre: ${name}
Correo: ${email}
Teléfono: ${phone}

Mensaje:
${message}
    `.trim();

    const whatsappNumber = "593960902701";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
    contactForm.reset();
  });
}

/* ===============================
   HEADER COMPACTO AL SCROLL
================================ */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});

/* ===============================
   DEBUG INFO
================================ */
console.log("✅ Sitio Instrumentista cargado correctamente");
console.log("📌 WhatsApp activo");
console.log("📌 Scroll suave habilitado");
