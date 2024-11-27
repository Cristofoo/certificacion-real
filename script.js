function cambiarEstado(boton, titulo) {
    alert(`Has rentado el libro`);
    boton.innerHTML = 'No disponible';
    boton.style.backgroundColor = 'red';
    boton.style.color = 'white';
    boton.disabled = true;
    }

    function sesion() {
        alert("Has hecho clic en 'Inicio de sesión'");
    }

    function registro() {
        alert("Has hecho clic en 'Registro'");
    }