// Simulate a registration action
function registrarse() {
    alert("Redirigiendo a la página de registro...");
}

// Simple login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Iniciar sesión con:\nEmail: ${email}\nContraseña: ${password}`);
    } else {
        alert('Por favor, complete todos los campos');
    }
});
