function cambiarEstado(boton, titulo) {
    alert(`Has rentado el libro`);
    boton.innerHTML = 'No disponible';
    boton.style.backgroundColor = 'red';
    boton.style.color = 'white';
    boton.disabled = true;
    }

    function sesion() {
        alert("Inicio de sesion exitoso");
    }

    function registro() {
        alert("Registrado");
    }
    function lisa(newTitle) {
        document.getElementById('cambio').textContent = newTitle;
      }