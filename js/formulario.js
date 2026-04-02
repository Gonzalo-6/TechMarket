document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let valido = true;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmar = document.getElementById("confirmar");

    limpiarErrores();

    if (nombre.value.trim() === "") {
        mostrarError("errorNombre", "Campo obligatorio");
        valido = false;
    }

    const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email.value)) {
        mostrarError("errorEmail", "Email inválido");
        valido = false;
    }

    if (password.value.length < 4) {
        mostrarError("errorPassword", "Mínimo 4 caracteres");
        valido = false;
    }

    if (password.value !== confirmar.value) {
        mostrarError("errorConfirmar", "No coinciden");
        valido = false;
    }

    if (valido) {
        alert("Compra realizada correctamente");
    }
});

function mostrarError(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
}

function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}
