// Lightbox para imágenes con data-lightbox
const images = document.querySelectorAll("img[data-lightbox]");

if (images) {
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  const lightboxCloseButton = document.createElement("button");
  lightboxCloseButton.classList.add("lightbox__close");
  lightboxCloseButton.innerHTML = "X";

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
      lightbox.appendChild(lightboxCloseButton);
      document.body.classList.add("overflow-hidden");
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  });

  lightboxCloseButton.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  });
}

// Ajustar altura del iframe del footer
window.addEventListener("message", function (event) {
  if (event.data.type === "footerHeight") {
    const iframe = document.getElementById("footerFrame");
    if (iframe) {
      iframe.style.height = event.data.height + "px";
    }
  }
});

// Efecto Parallax en elementos con clase .columna
// Este código ajusta dinámicamente la posición del fondo al hacer scroll, creando un efecto visual de movimiento

window.addEventListener('scroll', () => {
  // Selecciona todos los elementos con clase .columna
  document.querySelectorAll('.columna').forEach(col => {
    const speed = 0.15; // Factor de velocidad del efecto parallax (más bajo = más sutil)

    // Calcula el desplazamiento vertical basado en el scroll actual
    let offset = window.scrollY * speed;

    // Limita el desplazamiento para evitar que el fondo se mueva demasiado
    offset = Math.max(-100, Math.min(offset, 100));

    // Aplica el desplazamiento como posición de fondo
    col.style.backgroundPosition = `center ${offset}px`;
  });
});








