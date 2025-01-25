document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); 
        mensaje.textContent = ''; // Limpiar mensajes previos

        const nombre = formulario.nombre.value.trim();
        const email = formulario.email.value.trim();
        const edad = formulario.edad.value.trim();
        const telefono = formulario.telefono.value.trim();

        //validar nombre
        if (nombre.length < 3 || nombre.length > 50) {
            mensaje.textContent = 'El nombre debe tener entre 3 y 50 caracteres.';
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensaje.textContent = 'Ingrese un correo electrónico válido.';
            return;
        }

        // Validar edad
        const edadNum = Number(edad);
        if (isNaN(edadNum) || edadNum < 18 || edadNum > 100) {
            mensaje.textContent = 'La edad debe ser un número entre 18 y 100.';
            return;
        }

        // Validar telefono
        const telefonoRegex = /^\d{8}$/;
        if (!telefonoRegex.test(telefono)) {
            mensaje.textContent = 'El teléfono debe seguir el formato 189748524';
            return;
        }

        // Mensaje de todo esta correcto
        mensaje.textContent = 'Formulario enviado con éxito.';
    });
});
