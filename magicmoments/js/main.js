document.addEventListener("DOMContentLoaded", () => {
    // ----------- FORMULARIO DE CONTACTO -----------
    const form = document.querySelector(".contacto-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const telefono = form.querySelector('input[type="tel"]').value;
        const mensaje = form.querySelector('textarea').value;
  
        alert(
          `¡Gracias ${nombre}! \nTu mensaje ha sido recibido.\n\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`
        );
  
        form.reset();
      });
    }
  
    // ----------- PLAN SELECCIONADO (planes.html) -----------
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaSeleccionada = urlParams.get("categoria");
    if (categoriaSeleccionada) {
      const titulo = document.querySelector("section.contenedor h1");
      if (titulo) {
        titulo.textContent = `Planes para ${categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1)}`;
      }
    }
  
    // ----------- FADE-IN SECCIONES -----------
    const secciones = document.querySelectorAll("section.contenedor");
    secciones.forEach((sec) => {
      setTimeout(() => {
        sec.classList.add("visible");
      }, 100); // retardo para efecto suave
    });
  
    // ----------- SCROLL SUAVE PARA LINKS INTERNOS -----------
    const enlaces = document.querySelectorAll('a[href^="#"]');
    enlaces.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  