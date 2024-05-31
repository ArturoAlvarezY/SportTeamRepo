
//localStorage.setItem('myArray', JSON.stringify(array));

//let tab = JSON.parse(localStorage.getItem('myArray'));

//console.log(JSON.parse(localStorage.getItem('myArray')));
function anadir() {
    
    if (localStorage.getItem('myArray') !== null) {
        let myArray = JSON.parse(localStorage.getItem('myArray'));
        let nombre = document.getElementById('nombre').value;
        let bandera = document.getElementById('bandera').value;
        myArray.push([bandera,nombre]);
        localStorage.setItem('myArray', JSON.stringify(myArray));
        llenarTabla();
       
    }
};