export class formulario{
    tipoDocumento: number=0;
    numeroDocumento: number=0;
    nombre: string="";
    apellido: string="";
    numeroCelular: number=0;
    email: string="";
    usuarioLink: string="";
    usuarioGit: string="";

    constructor(){
            
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

agregarEstudiante(){
    const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement; // Tratar como un elemento html

    btnGuardar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que se recargue la pagina

    //Validacion formulario
    //obtener datos de los inputs

    const tipoDocumento = document.getElementById('tipoDocumento') as HTMLSelectElement;
    const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const apellido = document.getElementById('apellido') as HTMLInputElement;
    const numeroCelular = document.getElementById('numeroCelular') as HTMLInputElement;
    const email = document.getElementById('correo') as HTMLInputElement;
    const usuarioLink = document.getElementById('usuarioLi') as HTMLInputElement;
    const usuarioGit = document.getElementById('usuarioGi') as HTMLInputElement;

    if( numeroDocumento.value === "" || nombre.value === "" || apellido.value === "" || 
       numeroCelular.value === "" || email.value === "" || usuarioLink.value === "" || usuarioGit.value === ""){
        alert("Todos los datos son obligatorios")
    }else{
        
    

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
    body: raw
  };




  fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result===true){
        alert("Estudiante creado exitosamente");
    }else{
        alert("El estudiante ya se encuentra registrado");
    }
    console.log(result);
  })
  .catch(error => console.log('error', error));
        
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

buscarEstudiante(){
    const btnBuscar = document.getElementById('btn-buscar') as HTMLButtonElement; // Tratar como un elemento html

    btnBuscar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que se recargue la pagina

    //Validacion formulario
    //obtener datos de los inputs

    const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
    const numero = numeroDocumento.value;

    
            let myHeaders = new Headers(); // clase para
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyMjM0ODc3NCwiY29ycmVvIjoiZXNhbmNoZXoxOTg4QGdtYWlsLmNvbSIsImlhdCI6MTY4MTYwODM4MCwiZXhwIjoxNjgyMjEzMTgwfQ.q5KH3EX0r_x9nBfPw_Sdlo5Qve9SKNqBq52XFxxsXnQ");

            /*let raw = JSON.stringify({
            "numeroIdentificacion": Number(numeroDocumento.value),
            });*/


            let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            };    
        
    
        

            fetch(`https://apiestudiantes.maosystems.dev/estudiantes/${numero}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.log('error', error));
        
    });
    }
}
