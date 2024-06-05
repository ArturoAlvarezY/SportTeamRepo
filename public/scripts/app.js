//localStorage.setItem('name', nombre.value);
//localStorage.getItem('name');
//localStorage.setItem('testp', ["hola","pastel","Tururi",["hola dentro","hola dentro 2"]]);
// El arreglo:
//var array = [
//                ["icono Italia", "Italia"],
//                ["icono Espana", "Espana"],
//                ["icono Brazil", "Brazil"],
//                ["icono Germany", "Germany"]
//            ];
////// Se guarda en localStorage despues de JSON stringificarlo 
//localStorage.setItem('myArray', JSON.stringify(array));

// Obtener el arreglo de localStorage

//var array = localStorage.getItem('myArray');
//// Se parsea para poder ser usado en js con JSON.parse :)
//array = JSON.parse(array);



const tabla = document.getElementById('tabla');

function llenarTabla() {
    if (localStorage.getItem('myArray') !== null) {
        let tab = JSON.parse(localStorage.getItem('myArray'));
        let temp = '';
        tab.forEach(element => {
            temp = temp + `<tr>
                                <td>${element[0]}</td>
                                <td>${element[1]}</td>
                                <td>
                                <button onclick="edit(indice)">Editar</button>
                                <button onclick="delete(indice)">Borrar</button>
                                </td>                              
                            </tr>`;

                            function edit(index) { 
                                let tab = JSON.parse(localStorage.getItem('myArray'));
                                 const nuevoNombre = prompt('Ingrese el nuevo nombre para el equipo:', tab[index][1]);
                                 if (nuevoNombre) { 
                                tab[index][1] = nuevoNombre.trim(); 
                                localStorage.setItem('myArray', JSON.stringify(tab)); 
                                llenarTabla(); 
                                }
                                 } 
                            function deleteElement(index) { 
                                let tab = JSON.parse(localStorage.getItem('myArray'));
                                 if (confirm('¿Estás seguro de que quieres eliminar este equipo?')) { 
                                tab.splice(index, 1); 
                                localStorage.setItem('myArray', JSON.stringify(tab)); llenarTabla();
                                 } 
                                } 
                                window.onload = llenarTabla;


        });
        tabla.innerHTML = `
            <tr class="destacado">
                <td>Bandera</td>
                <td>Nombre</td>
                <td></td>
               
            </tr>
            ${temp}
        `;
    } else {
        tabla.innerHTML = `
                        <tr class="destacado">
                            <td>Bandera</td>
                            <td>Nombre</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Introdusca un equipo.</td>
                            <td></td>
                        </tr>
        `
    }
};

window.addEventListener('load', () => {
    llenarTabla();
});

//var array = [
//                ["icono Italia", "Italia"],
//                ["icono Espana", "Espana"],
//                ["icono Brazil", "Brazil"],
//                ["icono Germany", "Germany"]
//            ];
////// Se guarda en localStorage despues de JSON stringificarlo 
//localStorage.setItem('myArray', JSON.stringify(array));

//console.log(JSON.parse(localStorage.getItem('myArray')));
function anadir() {
    if (localStorage.getItem('myArray') !== null) {
        let myArray = JSON.parse(localStorage.getItem('myArray'));
        let nombre = document.getElementById('nombre').value;
        let bandera = document.getElementById('bandera').value;
        let editar = document.getElementById('editarBtn').value;
        let borrar = document.getElementById('borrarBtn').value;
       

        myArray.push([bandera,nombre, editar, borrar]);
        localStorage.setItem('myArray', JSON.stringify(myArray));
        llenarTabla();
    } else {
        let myArray = [];
        let nombre = document.getElementById('nombre').value;
        let bandera = document.getElementById('bandera').value;
        let editar = document.getElementById('editarBtn').value;
        let borrar = document.getElementById('borrarBtn').value;
        myArray.push([bandera,nombre, editar, borrar]);
        localStorage.setItem('myArray', JSON.stringify(myArray));
        llenarTabla();
    }
    document.getElementById('nombre').value = '';
    document.getElementById('bandera').value = ''; 
    let editar = document.getElementById('editarBtn').value = 'editar'
    let borrar = document.getElementById('borrarBtn').value = 'borrar'
};