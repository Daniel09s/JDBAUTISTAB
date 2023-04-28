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
    const resultado = document.getElementById('resultado') as HTMLDivElement;
    
    const tipoD = document.getElementById('tipoDocumento') as HTMLInputElement;
    const numeroDocumento = document.getElementById('id') as HTMLInputElement;

    btnBuscar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que se recargue la pagina
    //Validacion formulario
    //obtener datos de los inputs

            let myHeaders = new Headers(); // clase para
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAyMjM0ODc3NCwiY29ycmVvIjoiZXNhbmNoZXoxOTg4QGdtYWlsLmNvbSIsImlhdCI6MTY4MTYwODM4MCwiZXhwIjoxNjgyMjEzMTgwfQ.q5KH3EX0r_x9nBfPw_Sdlo5Qve9SKNqBq52XFxxsXnQ");
    
            let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            };   

            fetch(`https://apiestudiantes.maosystems.dev/estudiantes/${numeroDocumento.value}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                

                console.log(data);
                console.log(data.data[2]);
                if(numeroDocumento.value === ""){
                    alert("Ingrese un numero de id");
                }else{
                    
                    for(let i=0; i<data.data.length; i++){

                        tipoD.innerText = "";
                        numeroDocumento.innerText = "";
                        const tabla = document.createElement('table');
                        const encabezado = document.createElement('thead');
                        const cuerpo = document.createElement('tbody');
                        tabla.appendChild(encabezado);
                        tabla.appendChild(cuerpo);
                       
    
                        const filaEncabezado = document.createElement('tr');
                        const celdaEncabezado = document.createElement('th');
                        celdaEncabezado.innerText = ("id");
    
                        const celdaEncabezado2 = document.createElement('th');
                        celdaEncabezado2.innerText = "Nombre";
    
                        const celdaEncabezado3 = document.createElement('th');
                        celdaEncabezado3.innerText = "Apellido";
    
                        const celdaEncabezado4 = document.createElement('th');
                        celdaEncabezado4.innerText = "Celular";
    
                        const celdaEncabezado5 = document.createElement('th');
                        celdaEncabezado5.innerText = "Correo";
    
                        const celdaEncabezado6 = document.createElement('th');
                        celdaEncabezado6.innerText = "Linkedin";
    
                        const celdaEncabezado7 = document.createElement('th');
                        celdaEncabezado7.innerText = "Github";
    
                        filaEncabezado.appendChild(celdaEncabezado);
                        filaEncabezado.appendChild(celdaEncabezado2);
                        filaEncabezado.appendChild(celdaEncabezado3);
                        filaEncabezado.appendChild(celdaEncabezado4);
                        filaEncabezado.appendChild(celdaEncabezado5);
                        filaEncabezado.appendChild(celdaEncabezado6);
                        filaEncabezado.appendChild(celdaEncabezado7);
                        encabezado.appendChild(filaEncabezado);

                        const fila1= document.createElement('tr');
                        const celda1 = document.createElement('td');
                        celda1.innerText = data.data[i].estudiante_id;
    
                        const celda2 = document.createElement('td');
                        celda2.innerText = data.data[i].estudiante_nombres;
    
                        const celda3 = document.createElement('td');
                        celda3.innerText = data.data[i].estudiante_apellidos;
    
                        const celda4 = document.createElement('td');
                        celda4.innerText = data.data[i].estudiante_celular;
    
                        const celda5 = document.createElement('td');
                        celda5.innerText = data.data[i].estudiante_correo;
    
                        const celda6 = document.createElement('td');
                        celda6.innerText = data.data[i].estudiante_linkedin;
    
                        const celda7 = document.createElement('td');
                        celda7.innerText = data.data[i].estudiante_github;
    
                        fila1.appendChild(celda1);
                        fila1.appendChild(celda2);
                        fila1.appendChild(celda3);
                        fila1.appendChild(celda4);
                        fila1.appendChild(celda5);
                        fila1.appendChild(celda6);
                        fila1.appendChild(celda7);
                        cuerpo.appendChild(fila1);
    
                        resultado.appendChild(tabla);
                        
                    }
                    
                }
            })
            .catch(error => console.log('error', error));
        
    });
    }
}
