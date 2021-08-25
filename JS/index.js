


form.addEventListener('submit', function (event) {
    event.preventDefault();
    validacion();
});


// compruebe si los datos almacenados del formulario de registro son iguales a los datos ingresados en el formulario de inicio de sesión
function validacion() {

    // datos almacenados del formulario de registro
    let datosnombre = localStorage.getItem("usuario");
    let datosPw = localStorage.getItem("contra");


    // datos ingresados desde el formulario de inicio de sesión
    const getUser = document.getElementById("usuario").value;
    const getPassword = document.getElementById("password").value;

    // compruebe si los datos almacenados del formulario de registro son iguales a los datos del formulario de inicio de sesión
    if (datosPw !== getPassword || datosnombre !== getUser) {
        alert('Error de credenciales');

    } else {
        alert('Credenciales correctas');
        location.href = 'principal.html';
    }
}