

const addTeamFlag=()=>{

    //Primero, definimos los nombres y las etiquetas de los elementos que queremos introduci
    const myFlag= document.createElement('button');

    //Asignamos el elemento que tendra adentro nuestras etiquetas html
    myFlag.textContent='selecciona';

    /*Debemos agregar un bucle, que cada vez que escribamos un ID, le aumente 1 unidad a ese ID*/
   
    let newId= teamId++
//Le damos un nombre de ID a cada elemento, con el +i para que cada uno de ellos aumente su indice en uno
//Y por ende, tenga un ID unico.
    myFlag.id= 'flagicon' +newId;
    //ahora las invocamos 
    button.appendChild(myFlag)
}

//Ahora debo invocar el boton para que cada vez que sea tocado, se invoque a la accion de agregar el equipo

addTeamFlag.addEventListener('click', ()=>{
    addTeamFlag()

   
})

// Obtén los botones por su ID

const editarBtn = document.getElementById("editarBtn");
const borrarBtn = document.getElementById("borrarBtn");

// Añade un evento de click al botón de editar

editarBtn.addEventListener("click", function() {
    alert("Has hecho clic en el botón de editar!");
  });


// Añade un evento de click al botón de borrar

borrarBtn.addEventListener("click", function() {
    alert("Has hecho clic en el botón de borrar!");
  });

  