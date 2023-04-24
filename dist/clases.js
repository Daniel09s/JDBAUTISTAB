export class formulario {
    tipoDocumento = 0;
    numeroDocumento = 0;
    nombre = "";
    apellido = "";
    numeroCelular = 0;
    email = "";
    usuarioLink = "";
    usuarioGit = "";
    constructor() {
    }
    /*validarDatos(){
        const tipoDocumento = document.getElementById('tipoDocumento') as HTMLSelectElement;
        const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
        const nombre = document.getElementById('nombre') as HTMLInputElement;
        const apellido = document.getElementById('apellido') as HTMLInputElement;
        const numeroCelular = document.getElementById('numeroCelular') as HTMLInputElement;
        const email = document.getElementById('correo') as HTMLInputElement;
        const usuarioLink = document.getElementById('usuarioLi') as HTMLInputElement;
        const usuarioGit = document.getElementById('usuarioGi') as HTMLInputElement;
    
        if( this.nombre === "" || this.nombre === "" || this.apellido === "" || this.numeroCelular === null || this.email==="" || this.usuarioLink === "" || this.usuarioGit === "" ){
            alert("Todos los datos son obligatorios")
        }else{
            this.agregarEstudiante();
        }
    }*/
    agregarEstudiante() {
        const btnGuardar = document.getElementById('btn-guardar'); // Tratar como un elemento html
        btnGuardar.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar que se recargue la pagina
            //Validacion formulario
            //obtener datos de los inputs
            const tipoDocumento = document.getElementById('tipoDocumento');
            const numeroDocumento = document.getElementById('numeroDocumento');
            const nombre = document.getElementById('nombre');
            const apellido = document.getElementById('apellido');
            const numeroCelular = document.getElementById('numeroCelular');
            const email = document.getElementById('correo');
            const usuarioLink = document.getElementById('usuarioLi');
            const usuarioGit = document.getElementById('usuarioGi');
            if (numeroDocumento.value === "" || nombre.value === "" || apellido.value === "" ||
                numeroCelular.value === "" || email.value === "" || usuarioLink.value === "" || usuarioGit.value === "") {
                alert("Todos los datos son obligatorios");
            }
            else {
                let myHeaders = new Headers(); // clase para
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyMjM0ODc3NCwiY29ycmVvIjoiZXNhbmNoZXoxOTg4QGdtYWlsLmNvbSIsImlhdCI6MTY4MTYwODM4MCwiZXhwIjoxNjgyMjEzMTgwfQ.q5KH3EX0r_x9nBfPw_Sdlo5Qve9SKNqBq52XFxxsXnQ");
                let raw = JSON.stringify({
                    "tipoIdentificacion": Number(tipoDocumento.value),
                    "numeroIdentificacion": Number(numeroDocumento.value),
                    "nombres": nombre.value,
                    "apellidos": apellido.value,
                    "celular": Number(numeroCelular.value),
                    "correo": email.value,
                    "linkedin": usuarioLink.value,
                    "github": usuarioGit.value
                });
                let requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                };
                fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                    console.log(data);
                    /*if (data === true) {
                        alert("Estudiante creado correctamente");
                    
                    } else {
                        alert("Error al crear el estudiante");
                    }*/
                });
                /*.then(result => console.log(result))
                .catch(error => console.log('error', error));
                */
                /*fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            */
            }
        });
    }
}
