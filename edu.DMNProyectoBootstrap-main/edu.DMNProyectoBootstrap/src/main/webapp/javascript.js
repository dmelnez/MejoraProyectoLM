// Apartado del boton de cambio de color del fondo

const toggleButton = document.getElementById('botonColores');
const body = document.body;

botonColores.addEventListener('click', () => {
  body.classList.toggle('modo-oscuro');
});

function validar() {
  console.log("el valor es:")
  console.log(document.getElementById("segunda").value);
  if (document.getElementById("segunda").value != document.getElementById("primera").value ) {
      alert("no coinciden las contraseñas")
      document.getElementById("segunda").focus() /*en esto conseguimos que el cursor esté sobre el campo */
      return false
  }
  else
      return true

}



