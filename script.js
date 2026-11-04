
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

    description:
      "La salud genital y urinaria requiere atención oportuna. En consulta se valoran infecciones, lesiones y alteraciones que pueden afectar los genitales y las vías urinarias.",

    details: [
      "Virus del papiloma humano (VPH) y condilomas.",
      "Balanitis e inflamación del glande.",
      "Herpes genital.",
      "Clamidia y otras infecciones de transmisión sexual.",
      "Infecciones urinarias y molestias genitales."
    ],

    when:
      "Si presentas ardor al orinar, secreciones, comezón, irritación, lesiones, verrugas o cambios en la zona genital, es recomendable acudir a valoración. También puedes consultar si tuviste una posible exposición a una infección de transmisión sexual.",

    evaluation:
      "La valoración puede incluir historia clínica, exploración física y, cuando sea necesario, pruebas de laboratorio para identificar el origen del problema y determinar el tratamiento adecuado."
  },

  rinones: {
    title: "Riñones y vías urinarias",

    description:
      "Los riñones y las vías urinarias cumplen una función esencial en el organismo. La consulta urológica permite evaluar molestias y enfermedades que afectan la eliminación de la orina.",

    details: [
      "Cálculos renales y piedras en las vías urinarias.",
      "Infecciones urinarias recurrentes.",
      "Cistitis.",
      "Sangre en la orina (hematuria).",
      "Alteraciones en la frecuencia o el flujo urinario."
    ],

    when:
      "Si experimentas dolor en la espalda baja o los costados, ardor al orinar, necesidad frecuente de ir al baño, dificultad para orinar o cambios en el aspecto de la orina, es importante solicitar una valoración.",

    evaluation:
      "Se revisan los síntomas y antecedentes del paciente. Según cada caso, pueden solicitarse estudios de orina, sangre o imagen para evaluar el funcionamiento renal y localizar posibles alteraciones."
  },

  prostata: {
    title: "Próstata y salud masculina",

    description:
      "La salud prostática es una parte importante del bienestar masculino. La consulta permite identificar y evaluar alteraciones de la próstata y síntomas relacionados con la función urinaria.",

    details: [
      "Crecimiento benigno de próstata.",
      "Prostatitis e inflamación prostática.",
      "Evaluación del antígeno prostático específico (PSA).",
      "Dificultad para iniciar la micción.",
      "Chorro urinario débil y necesidad de orinar frecuentemente."
    ],

    when:
      "Si notas que necesitas levantarte varias veces durante la noche para orinar, tienes dificultad para comenzar a orinar, presentas un chorro débil o sientes que no vacías completamente la vejiga, es recomendable acudir a consulta.",

    evaluation:
      "La evaluación considera edad, antecedentes, síntomas y factores de riesgo. Dependiendo del caso, puede incluir exploración física, análisis de PSA y estudios complementarios."
  },

  "salud-sexual": {
    title: "Salud sexual y reproductiva",

    description:
      "La salud sexual masculina forma parte del bienestar físico y emocional. La atención urológica permite evaluar condiciones que pueden afectar la función sexual y la capacidad reproductiva.",

    details: [
      "Disfunción eréctil.",
      "Eyaculación precoz.",
      "Infertilidad masculina.",
      "Varicocele.",
      "Alteraciones de la función reproductiva."
    ],

    when:
      "Si presentas dificultades persistentes para conseguir o mantener una erección, cambios en la eyaculación, dificultades para concebir o molestias testiculares, puedes solicitar una valoración especializada.",

    evaluation:
      "Se revisan los antecedentes médicos, hábitos, síntomas y factores que pueden influir en la salud sexual y reproductiva. Según los hallazgos, pueden indicarse análisis hormonales, estudios seminales o ultrasonido."
  },

  "uro-oncologia": {
    title: "Uro-oncología",

    description:
      "La uro-oncología se enfoca en la evaluación de tumores y enfermedades oncológicas del sistema urinario y del aparato reproductor masculino. La detección y valoración oportunas son fundamentales.",

    details: [
      "Cáncer de próstata.",
      "Tumores de riñón.",
      "Tumores de vejiga.",
      "Tumores de testículo.",
      "Tumores de pene."
    ],

    when:
      "La presencia de sangre en la orina, alteraciones prostáticas, masas testiculares o hallazgos anormales en estudios médicos requiere valoración. Algunos tumores pueden no presentar síntomas en etapas iniciales.",

    evaluation:
      "Se analizan los antecedentes y resultados de estudios previos. Cuando está indicado, pueden solicitarse pruebas de laboratorio, ultrasonido, tomografía u otros estudios para determinar los siguientes pasos."
  },

  cirugia: {
    title: "Cirugía, procedimientos y prevención",

    description:
      "Existen diferentes procedimientos urológicos orientados a tratar padecimientos, prevenir complicaciones y mejorar la calidad de vida. Cada alternativa debe evaluarse de acuerdo con las necesidades del paciente.",

    details: [
      "Circuncisión.",
      "Vasectomía.",
      "Tratamiento de fimosis.",
      "Procedimientos para condilomas.",
      "Vacunación contra el VPH, cuando esté indicada.",
      "Revisiones urológicas preventivas."
    ],

    when:
      "Puedes solicitar una consulta si buscas información sobre algún procedimiento, presentas molestias relacionadas con el prepucio, deseas orientación sobre planificación familiar o quieres realizar una revisión preventiva.",

    evaluation:
      "La doctora revisará tu historial clínico, condiciones de salud y objetivos. Se explicarán las alternativas disponibles, sus beneficios, riesgos y cuidados posteriores cuando corresponda."
  }

};

  const modal = document.getElementById("serviceModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const details = document.getElementById("modalDetails");
  const closeButton = document.getElementById("closeModal");
  const whatsappButton = document.getElementById("whatsappButton");
  const modalWhen = document.getElementById("modalWhen");
const modalEvaluation = document.getElementById("modalEvaluation");

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
      modalWhen.textContent = service.when;
      modalEvaluation.textContent = service.evaluation;

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

}); // Cierre de DOMContentLoaded