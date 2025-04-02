function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    } else {
      console.error(`No se encontró el elemento con el ID: ${id}`);
    }
  }
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact100-form");
    const nameInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("mensaje");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Validar el campo de nombre
        if (nameInput.value.trim() === "") {
            alert("Por favor, ingresa tu nombre.");
            isValid = false;
        }

        // Validar el campo de correo electrónico
        if (emailInput.value.trim() === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            alert("Por favor, ingresa un correo electrónico válido.");
            isValid = false;
        }

        // Validar el campo de mensaje
        if (messageInput.value.trim() === "") {
            alert("Por favor, ingresa tu mensaje.");
            isValid = false;
        }

        // Si algún campo no es válido, prevenir el envío del formulario
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});