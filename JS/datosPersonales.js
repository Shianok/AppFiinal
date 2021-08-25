
function guardar_datos() {
    //datos almacenados del formulario de registro
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let masaMuscular = document.getElementById("masaMuscular").value;
    let edad = document.getElementById("edad").value;
    let notaExtra = document.getElementById("notaExtra").value;

    nuevos_datosToSystem(peso, altura, masaMuscular, edad, notaExtra);

    if (peso == "" || altura == "" || masaMuscular == "" || edad == "") {
        alert('Porfavor ingrese datos validos');
        location.href = 'datosPersonales.html';
    } else {
        alert('Datos actualizados.');
        creaTabla();
    }

    
}

var Datos = [];

function nuevos_datosToSystem(pPeso,pAltura,pMasaMuscular,pEdad,pNotaExtra) {

    var nuevosDatos = {
        peso: pPeso,
        altura: pAltura,
        masaMuscular: pMasaMuscular,
        edad: pEdad,
        notaExtra: pNotaExtra

    };
    console.log(nuevosDatos);
    Datos.push(nuevosDatos);
    almacena(Datos);
}

function obtener_Dato() {
    var datosPersona = localStorage.getItem('DatosPersonales')
    if (datosPersona == null) {
        Datos = [];
    } else {
        Datos = JSON.parse(datosPersona);
    }
    return Datos;
}

function almacena(plista) {
    localStorage.setItem('DatosPersonales', JSON.stringify(plista));
}


function creaTabla() {
    var lista = obtener_Dato();
    var tbody = document.querySelector('#tablaHistorial tbody');

    tbody.innerHTML = "";

    for (var i = 0; i < lista.length; i++) {
        var row = tbody.insertRow(i);
        var pesoCell = row.insertCell(0),
            alturaCell = row.insertCell(1),
            edadCell = row.insertCell(2),
            masaMuscularCell = row.insertCell(3)

        pesoCell.innerHTML = lista[i].peso;
        alturaCell.innerHTML = lista[i].altura;
        edadCell.innerHTML = lista[i].edad;
        masaMuscularCell.innerHTML = lista[i].masaMuscular;


        tbody.appendChild(row);
    }
}



form.addEventListener('submit', function (event) {
        event.preventDefault();
        obtener_Dato
        guardar_datos();
    });
