

function redirigirBarajear() {
    let myArray = JSON.parse(localStorage.getItem('myArray'));
    if (validarCantidadEquipos(myArray)) {
        const bArray = barajarEquipos([...myArray]);
        localStorage.setItem('barajadoArray', JSON.stringify(bArray));
        const grupos = dividirEquiposEnGrupos(bArray); 
        localStorage.setItem('gruposArray', JSON.stringify(grupos)); 
        llenarTabla(bArray);
        window.location.href = "http://127.0.0.1:5500/public/pages/ranking.html"
    } else {
        alert('El número de equipos debe ser entre 16 y 32.');
    }
}

function validarCantidadEquipos(myArray) {
    let led = myArray.length
    if (myArray.length >= 16 && myArray.length <= 32)
        return true
    else return false
}

function barajarEquipos(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function dividirEquiposEnGrupos(array) {
    const barajadosArray = barajarEquipos([...array]);
    const numEquipos = barajadosArray.length;
    const numGrupos = Math.ceil(numEquipos / 4); 
    const grupos = [];

    for (let i = 0; i < numGrupos; i++) {
        grupos.push(barajadosArray.slice(i * 4, (i + 1) * 4));
    }

    return grupos; 
}

document.addEventListener('DOMContentLoaded', function () {
    const barajadoArray = JSON.parse(localStorage.getItem('barajadoArray'));

    if (barajadoArray && Array.isArray(barajadoArray)) {
        llenarTabla(barajadoArray);
    } else {
        alert('No se encontraron equipos barajados en localStorage.');
    }
});

function llenarTabla(equipos) {
    const tableBody = document.querySelector('#rankingTable');

    equipos.forEach((equipo, index) => {
        const row = document.createElement('tr');

        const cellPosicion = document.createElement('td');
        cellPosicion.textContent = equipo[0]
        row.appendChild(cellPosicion);

        const cellEquipo = document.createElement('td');
        cellEquipo.textContent = equipo[1];
        row.appendChild(cellEquipo);

        tableBody.appendChild(row);

    });
}