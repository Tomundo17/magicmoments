document.addEventListener("DOMContentLoaded", () => {
  // ----------- FORMULARIO DE CONTACTO ----------- 
const form = document.querySelector(".contacto-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector('input[name="nombre"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const telefono = form.querySelector('input[name="telefono"]').value;
    const mensaje = form.querySelector('textarea[name="mensaje"]').value;

    // número de WhatsApp al que querés que llegue el mensaje
    const numeroWpp = "5491125625022";

    // texto que se enviará
    const texto = `Hola, soy ${nombre}. 
Email: ${email} 
Teléfono: ${telefono} 
Mensaje: ${mensaje}`;

    // abrir WhatsApp con el mensaje ya escrito
    const url = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    form.reset();
  });
}
  
  
// ----------- DATOS DE PLANES SEGÚN CATEGORÍA -----------
const planes = {
  kids: [
    {
      nombre: "Plan Gold Kids",
      desc: "Ideal para cumpleaños pequeños con juegos clásicos.",
      detalles: [
        "Animación básica con juegos tradicionales",
        "Menú infantil (panchos, nuggets, jugos)",
        "Decoración simple con globos"
      ]
    },
    {
      nombre: "Plan Black Kids",
      desc: "Más diversión con actividades temáticas y menú variado.",
      detalles: [
        "Animación personalizada con temáticas (piratas, princesas, superhéroes)",
        "Menú variado con opciones saludables",
        "Talleres y juegos interactivos"
      ]
    },
    {
      nombre: "Plan Platinum Kids",
      desc: "La experiencia completa para los más chicos.",
      detalles: [
        "Shows en vivo o animadores profesionales",
        "Menú premium con postres y torta incluida",
        "Decoración temática completa y sorpresas"
      ]
    }
  ],
  adultos: [
    {
      nombre: "Plan Gold Adultos",
      desc: "Una opción elegante y accesible para eventos sociales.",
      detalles: [
        "Temáticas básicas",
        "Menú estándar (entrada, plato principal, postre)",
        "Animación o acompañamiento simple"
      ]
    },
    {
      nombre: "Plan Black Adultos",
      desc: "Más personalizado con menú gourmet y coordinación.",
      detalles: [
        "Temáticas a elección",
        "Menú gourmet o finger food",
        "Animación y actividades coordinadas"
      ]
    },
    {
      nombre: "Plan Platinum Adultos",
      desc: "La experiencia premium con todos los servicios.",
      detalles: [
        "Temáticas exclusivas",
        "Menú completo con barra libre",
        "Shows, animadores y coordinación integral"
      ]
    }
  ],
  mayores: [
    {
      nombre: "Plan Gold Mayores",
      desc: "Perfecto para encuentros sociales en un ambiente tranquilo.",
      detalles: [
        "Decoración clásica y elegante",
        "Menú tradicional",
        "Acompañamiento musical suave"
      ]
    },
    {
      nombre: "Plan Black Mayores",
      desc: "Más sofisticado con música en vivo y menú variado.",
      detalles: [
        "Decoración personalizada",
        "Menú variado con bebidas incluidas",
        "Música en vivo o DJ"
      ]
    },
    {
      nombre: "Plan Platinum Mayores",
      desc: "La opción más completa para eventos memorables.",
      detalles: [
        "Decoración premium",
        "Menú gourmet completo",
        "Shows culturales y coordinación integral"
      ]
    }
  ]
};

// ----------- PLAN SELECCIONADO (planes.html) -----------
const urlParams = new URLSearchParams(window.location.search);
const categoriaSeleccionada = urlParams.get("categoria");

if (categoriaSeleccionada) {
  const titulo = document.querySelector("section.contenedor h1");
  if (titulo) {
    titulo.textContent = `Planes para ${categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1)}`;
  }

  const cards = document.querySelectorAll(".plan-card");
  if (planes[categoriaSeleccionada]) {
    planes[categoriaSeleccionada].forEach((plan, index) => {
      if (cards[index]) {
        // Cambiar título
        cards[index].querySelector("h2").textContent = plan.nombre;
        // Cambiar descripción
        cards[index].querySelector("p").textContent = plan.desc;
        // Cambiar lista de detalles
        const ul = cards[index].querySelector("ul");
        ul.innerHTML = ""; // limpiar
        plan.detalles.forEach(d => {
          const li = document.createElement("li");
          li.textContent = d;
          ul.appendChild(li);
        });
      }
    });
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
