
// function organizarGrupos() {
//     if (localStorage.getItem('myArray') !== null) {
//         let tab = JSON.parse(localStorage.getItem('myArray'));
//         let temp = '';
//     }
// }
// 
// function barajarEquipos(myArray) {
//     myArray.sort(function() { return Math.random() - 0.5 }); 
//     localStorage.setItem()
// }

export function redirigirBarajear() {
    console.log("conecte");
    let myArray = JSON.parse(localStorage.getItem('myArray'));
    if (validarCantidadEquipos(myArray)) {
       let bArray = barajarEquipos(myArray)
       // redirigir a pagina 4
    } else {
        alert('El número de equipos debe ser entre 16 y 32.');
        console.log('El número de equipos debe ser entre 16 y 32.');
    }

   // return myArray.length >= 16 && myArray.length <= 32;
}
