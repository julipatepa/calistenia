document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío estándar del formulario

    // Captura los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Genera el enlace de WhatsApp
    const phoneNumber = "1138479551"; // Cambia por tu número de WhatsApp con código internacional
    const whatsappURL = `https://api.whatsapp.com/send?phone=${1138479551}&text=Hola,%20soy%20${name}.%20Mi%20correo%20es%20${email}.%20Mensaje:%20${encodeURIComponent(message)}`;

    // Redirige al usuario a WhatsApp
    window.open(whatsappURL, "_blank");
  });