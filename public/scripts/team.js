// page team
function llenarTablaInicial() {
    const tabla = document.getElementById('tabla')
    if (localStorage.getItem('myArray') !== null) {
        let tab = JSON.parse(localStorage.getItem('myArray'))
        let temp = ''
        tab.forEach((element, index) => {
            temp = temp + `<tr>
                                <td>${element[0]}</td>
                                <td>${element[1]}</td>
                                <td>
                                <button onclick="edit(${index})">Editar</button>
                                <button onclick="deleteElement(${index})">Borrar</button>
                                </td>                              
                            </tr>`
        })
        tabla.innerHTML = `<tr class="destacado">
                                <td>Bandera</td>
                                <td>Nombre</td>
                                <td></td>
                               
                            </tr>
                            ${temp}`
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

//agregar un equipo
function anadir() {
    if (localStorage.getItem('myArray') !== null) {
        let myArray = JSON.parse(localStorage.getItem('myArray'))
        let nombre = document.getElementById('nombre').value

        let bandera = document.getElementById('bandera').value
        myArray.push([bandera, nombre]);
        localStorage.setItem('myArray', JSON.stringify(myArray))
        llenarTablaInicial();
    } else {
        let myArray = [];
        let nombre = document.getElementById('nombre').value
        let bandera = document.getElementById('bandera').value
        myArray.push([bandera, nombre])
        localStorage.setItem('myArray', JSON.stringify(myArray))
        llenarTablaInicial();
    }
    document.getElementById('nombre').value = ''
    document.getElementById('bandera').value = ''
}

//edita un equipo
function edit(index) {
    let tab = JSON.parse(localStorage.getItem('myArray'))
    const nuevoNombre = prompt('Ingrese el nuevo nombre para el equipo:', tab[index][1])
    if (nuevoNombre) {
        tab[index][1] = nuevoNombre.trim()
        localStorage.setItem('myArray', JSON.stringify(tab));
        llenarTablaInicial();
    }
}

//elimina a un equipo
function deleteElement(index) {
    let tab = JSON.parse(localStorage.getItem('myArray'));
    if (confirm('¿Estás seguro de que quieres eliminar este equipo?')) {
        tab.splice(index, 1);
        localStorage.setItem('myArray', JSON.stringify(tab)); llenarTablaInicial();
    }
}

//baraja los equipos
function validarCantidadEquipos(myArray) {
    let led = myArray.length
    if (myArray.length >= 16 && myArray.length <= 32)
        return true
    else
        return false
}

function barajarEquipos(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function dividirEquiposEnGrupos(array) {
    const barajadosArray = barajarEquipos([...array])
    const numEquipos = barajadosArray.length
    const numGrupos = Math.ceil(numEquipos / 4)
    const grupos = []

    for (let i = 0; i < numGrupos; i++) {
        grupos.push(barajadosArray.slice(i * 4, (i + 1) * 4))
    }

    return grupos;
}

function redirigirBarajear() {
    let myArray = JSON.parse(localStorage.getItem('myArray'));
    if (validarCantidadEquipos(myArray)) {
        const bArray = barajarEquipos([...myArray]);
        localStorage.setItem('barajadoArray', JSON.stringify(bArray));
        const grupos = dividirEquiposEnGrupos(bArray);
        localStorage.setItem('gruposArray', JSON.stringify(grupos));
        window.location.href = "http://127.0.0.1:5500/public/pages/ranking.html"
    } else {
        alert('El número de equipos debe ser entre 16 y 32.')
    }
}

//load
document.addEventListener('DOMContentLoaded', function () {
    llenarTablaInicial()
})