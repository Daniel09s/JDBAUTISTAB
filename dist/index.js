"use strict";
const btnGuardar = document.getElementById('btn-guardar'); // Tratar como un elemento html
btnGuardar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que se recargue la pagina
    console.log('Ingreso a la validacion del formulario');
    //Validacion formulario
    //obtener datos de los inputs
    const tipoDocumento = document.getElementById('tipoDocumento');
    const numeroDocumento = document.getElementById('numeroDocumento');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const numeroCelular = document.getElementById('numeroCelular');
    const email = document.getElementById('email');
    const usuarioLink = document.getElementById('usuarioLi');
    const usuarioGit = document.getElementById('usuarioGi');
    console.log(tipoDocumento.value);
});
