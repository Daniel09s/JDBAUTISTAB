const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement; // Tratar como un elemento html

btnGuardar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que se recargue la pagina

    console.log('Ingreso a la validacion del formulario');
    //Validacion formulario
    //obtener datos de los inputs

    const tipoDocumento = document.getElementById('tipoDocumento') as HTMLSelectElement;
    const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const apellido = document.getElementById('apellido') as HTMLInputElement;
    const numeroCelular = document.getElementById('numeroCelular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const usuarioLink = document.getElementById('usuarioLi') as HTMLInputElement;
    const usuarioGit = document.getElementById('usuarioGi') as HTMLInputElement;
    console.log(tipoDocumento.value);

});