let myArray = JSON.parse(localStorage.getItem('myArray'));

function llenarTablaYRedirigir() {
    window.location.href = "http://127.0.0.1:5500/public/pages/ranking.html"; 
}


    var listaEquipos = document.getElementById('listaEquipos'); 
    var equiposArray = Array.from(listaEquipos.paises);
    equiposArray.sort(function(a, b) {
        return a.innerText.localeCompare(b.innerText);
    });

//  while (listaEquipos.firstChild) {
//      listaEquipos.removeChild(listaEquipos.firstChild);
//  }
//  
//  equiposArray.forEach(function(equipo) {
//      listaEquipos.appendChild(equipo);
//  });

