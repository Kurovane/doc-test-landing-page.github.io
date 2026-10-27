
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario-contacto");

  if (!formulario) {
    console.error("No se encontró el formulario de contacto.");
    return;
  }

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = formulario.querySelector('[name="nombre"]')?.value.trim();
    const telefono = formulario.querySelector('[name="telefono"]')?.value.trim();
    const motivo = formulario.querySelector('[name="motivo"]')?.value.trim();

    if (!nombre || !telefono || !motivo) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Sustituye este número por el WhatsApp del consultorio.
    const numeroConsultorio = "525529009493";

    const mensaje =
      `Hola, quisiera contactar al consultorio de urología.\n\n` +
      `Nombre: ${nombre}\n` +
      `Teléfono: ${telefono}\n` +
      `Motivo de contacto: ${motivo}`;

    const enlace =
      `https://wa.me/${numeroConsultorio}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");

    // Limpiar los campos del formulario
formulario.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario-contacto");

  if (!formulario) {
    console.error("No se encontró el formulario de contacto.");
    return;
  }

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = formulario.querySelector('[name="nombre"]')?.value.trim();
    const telefono = formulario.querySelector('[name="telefono"]')?.value.trim();
    const motivo = formulario.querySelector('[name="motivo"]')?.value.trim();

    if (!nombre || !telefono || !motivo) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Sustituye este número por el WhatsApp del consultorio.
    const numeroConsultorio = "525529009493";

    const mensaje =
      `Hola, quisiera contactar al consultorio de urología.\n\n` +
      `Nombre: ${nombre}\n` +
      `Teléfono: ${telefono}\n` +
      `Motivo de contacto: ${motivo}`;

    const enlace =
      `https://wa.me/${numeroConsultorio}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");
  });
});
