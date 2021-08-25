
function guardar_usuario() {
     //datos almacenados del formulario de registro
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let cedula = document.getElementById("cedula").value;
    let usuario = document.getElementById("usuario").value;
    let correo = document.getElementById("correo").value;
    let contra = document.getElementById("contra").value;
    let confirmContra = document.getElementById("confirmContra").value;

    nuevo_usuarioToSystem(nombre, apellidos, cedula, usuario, correo, contra, confirmContra); 

    //verifica si la confirmContra y contra son iguales
    if (contra !== confirmContra) {
        alert('Las contraseña no cohinciden, ingrese nuevamente los datos.');
        location.href = 'registro.html';
    } else {
        alert('Usuario registrado con exito.');
        location.href = 'index.html';
    }

}

var Usuario = [];

function nuevo_usuarioToSystem(pNombre,pApellidos,pCedula,pUsuario,pCorreo,pContra,pconfirmContra) {

    var nuevoUsuario = {
        nombre: pNombre,
        apellidos: pApellidos,
        cedula: pCedula,
        usuario: pUsuario,
        correo: pCorreo,
        contra: pContra,
        confirmContra: pconfirmContra

    };
    console.log(nuevoUsuario);
    Usuario.push(nuevoUsuario);
    almacenamiento(Usuario);
}

function llamado_usuario() {
    let usuario = localStorage.getItem("usuario");
    let contra = localStorage.getItem("contra");

}

function obtener_Dato() {
    var datosLista = localStorage.getItem('DatosUsuario')
    if (datosLista == null) {
        Usuario = [];
    } else {
        Usuario = JSON.parse(datosLista);
    }
    return Usuario;
}

function almacenamiento(plista) {
    localStorage.setItem('DatosUsuario', JSON.stringify(plista));
    localStorage.setItem('usuario', usuario.value);
    localStorage.setItem('contra', contra.value);

}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    guardar_usuario();
    obtener_Dato();
});
