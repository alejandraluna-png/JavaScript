function register() {
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("user").value;
  let edad = document.getElementById("age").value;
  let correo = document.getElementById("Email").value;

  edad = parseInt(edad)

  if (nombre === "" || apellido === "" || edad == "" || correo === "") {
    alert(`Por favor ingrese todos los campos`);
  } else {
    if (edad >= 18) {
      alert(`Hola ${nombre} ${apellido}, has aplicado correctamente te contactaremos en ${correo}`);
    } vaciarCampos()

    if (edad <= 17) {
      alert(`Hola ${nombre} ${apellido}, no cumples con la edad requerida`);
    }
  }
}

function vaciarCampos(){
  document.getElementById("name").value = ""
  document.getElementById("user").value = ""
  document.getElementById("age").value = ""
  document.getElementById("Email").value = ""

}