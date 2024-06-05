
function llenarTabla(equipos) {
    const tableBody = document.querySelector('#rankingTable')

    equipos.forEach((equipo, index) => {
        const row = document.createElement('tr');

        const cellPosicion = document.createElement('td')
        cellPosicion.textContent = equipo[0]
        row.appendChild(cellPosicion);

        const cellEquipo = document.createElement('td')
        cellEquipo.textContent = equipo[1];
        row.appendChild(cellEquipo);

        tableBody.appendChild(row);

    })
}

//load
document.addEventListener('DOMContentLoaded', function () {
    const barajadoArray = JSON.parse(localStorage.getItem('barajadoArray'))
    if (barajadoArray && Array.isArray(barajadoArray)) {
        llenarTabla(barajadoArray);
    } else {
        //alert('No se encontraron equipos barajados en localStorage.');
    }
})