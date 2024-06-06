function llenarTabla(equipos) {

    const main = document.querySelector('#main')
    const max = Math.ceil(equipos.length / 4)
    const table = document.createElement('table')

    for (let i = 0; i < max; i++) {

        const tableBody = document.createElement('rankingTable' + i);
        tableBody.setAttribute("id", "rankingTable" + i)
        tableBody.setAttribute("cellspacing", "0")
        tableBody.setAttribute("cellpadding", "0")

        //equipos.forEach((equipo, index) => {
        //array a entrar en la tabla
        const equipo = equipos

        for (let j = 0; j < 4; j++) {

            if (equipo[0]) {
                const row = document.createElement('tr')

                const cellBandera = document.createElement('td')
                cellBandera.textContent = equipo[0][0]
                row.appendChild(cellBandera)

                const cellEquipo = document.createElement('td')
                cellEquipo.textContent = equipo[0][1]
                row.appendChild(cellEquipo)

                const inputt = document.createElement("INPUT")
                inputt.setAttribute("type", "text")
                inputt.setAttribute("id", i + "puntos" + j)
                row.appendChild(inputt)

                tableBody.appendChild(row)
                equipo.shift()
            }
        }
        table.appendChild(tableBody);
    }
    main.appendChild(table);
}

//load
document.addEventListener('DOMContentLoaded', function () {
    const barajadoArray = JSON.parse(localStorage.getItem('barajadoArray'))
    if (barajadoArray && Array.isArray(barajadoArray)) {
        llenarTabla(barajadoArray);
    } else {
        alert('No se encontraron equipos barajados en localStorage.');
    }
})

function bigin() {
    //busca los equipos por tabla y ve de cada tabla quien es el que
    const barajadoArray = JSON.parse(localStorage.getItem('barajadoArray'))
    const max = Math.ceil(barajadoArray.length / 4)

    for (let i = 0; i < max; i++) {
        let temp = [];
        for (let j = 0; j < 4; j++) {
            const puntos = document.getElementById(i + "puntos" + j)
            if (temp.length == 0)
                temp.push(puntos)
        }
    }
}