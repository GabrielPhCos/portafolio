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

//parallax
window.addEventListener('scroll', () => {
  document.querySelectorAll('.columna').forEach(col => {
    const speed = 0.15; // velocidad reducida
    let offset = window.scrollY * speed;

    // Limitar desplazamiento
    offset = Math.max(-100, Math.min(offset, 100));

    col.style.backgroundPosition = `center ${offset}px`;
  });
});







