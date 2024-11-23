// Mostrar formulario de registro
function showRegister() {
    // Código existente para mostrar el formulario de registro
}

// Función para iniciar sesión
function login(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    
    // Obtener valores de los campos de inicio de sesión
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Recuperar datos guardados en localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Validar si los datos ingresados coinciden con los guardados
    if (email === storedEmail && password === storedPassword) {
        alert('Inicio de sesión exitoso');
        closeModal();
    } else {
        alert('Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
}

// Función para mostrar u ocultar contenido adicional en la sección de 'Ver más'
function toggleVerMas() {
    const contenidoAdicional = document.getElementById("contenidoAdicional");
    const botonVerMas = document.querySelector(".banner button");

    // Alternar visibilidad del contenido adicional
    contenidoAdicional.classList.toggle("hidden");

    // Cambiar texto del botón entre "Ver más" y "Ver menos"
    botonVerMas.textContent = contenidoAdicional.classList.contains("hidden") ? "Ver más" : "Ver menos";
}
