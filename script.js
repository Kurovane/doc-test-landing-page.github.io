
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


document.addEventListener("DOMContentLoaded", () => {

  const services = {
    infecciones: {
      title: "Infecciones y enfermedades genitales",
      description: "Atención urológica para evaluar infecciones y enfermedades genitales.",
      details: [
        "VPH y condilomas.",
        "Balanitis y herpes genital.",
        "Clamidia y otras infecciones.",
        "Valoración y orientación médica."
      ]
    },

    rinones: {
      title: "Riñones y vías urinarias",
      description: "Evaluación de padecimientos de los riñones y las vías urinarias.",
      details: [
        "Cálculos renales.",
        "Cistitis e infecciones urinarias.",
        "Sangre en la orina.",
        "Alteraciones al orinar."
      ]
    },

    prostata: {
      title: "Próstata y salud masculina",
      description: "Atención para evaluar la salud prostática.",
      details: [
        "Hiperplasia prostática.",
        "Prostatitis.",
        "Antígeno prostático (PSA).",
        "Síntomas urinarios."
      ]
    },

    "salud-sexual": {
      title: "Salud sexual y reproductiva",
      description: "Valoración de la función sexual y reproductiva masculina.",
      details: [
        "Infertilidad masculina.",
        "Disfunción eréctil.",
        "Eyaculación precoz.",
        "Varicocele."
      ]
    },

    "uro-oncologia": {
      title: "Uro-oncología",
      description: "Evaluación urológica de tumores y enfermedades oncológicas.",
      details: [
        "Tumores de riñón.",
        "Cáncer de próstata.",
        "Tumores de vejiga.",
        "Tumores de testículo y pene."
      ]
    },

    cirugia: {
      title: "Cirugía, procedimientos y prevención",
      description: "Orientación sobre procedimientos urológicos y prevención.",
      details: [
        "Circuncisión.",
        "Vasectomía.",
        "Fulguración.",
        "Vacunación contra VPH y check-ups."
      ]
    }
  };

  const modal = document.getElementById("serviceModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const details = document.getElementById("modalDetails");
  const closeButton = document.getElementById("closeModal");
  const whatsappButton = document.getElementById("whatsappButton");

  // Comprobar que los elementos existan
  if (!modal || !title || !description || !details || !closeButton || !whatsappButton) {
    console.error("Error: faltan elementos HTML del modal.");
    return;
  }

  // Abrir modal
  document.querySelectorAll(".service-trigger").forEach(button => {

    button.addEventListener("click", () => {

      const service = services[button.dataset.service];

      if (!service) {
        console.error("Servicio no encontrado:", button.dataset.service);
        return;
      }

      title.textContent = service.title;
      description.textContent = service.description;

      details.replaceChildren();

      service.details.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        details.appendChild(li);
      });

      const phone = "52XXXXXXXXXX";

      const message = `Hola, doctora. Me gustaría agendar una cita para ${service.title}.`;

      whatsappButton.href =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

    });

  });

  // Cerrar modal
function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Botón X
closeButton.addEventListener("click", closeModal);

// Clic fuera del contenido
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
