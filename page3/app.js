const tableContainer= document.getElementById('teamsTable');
const addTeam= document.getElementById('addTeam');

//Dado a que quiero agregar unos elementos cada vez que le de click a un boton, 
//he creado un contenedor para estos

//Debo ser capaz 



const addTeamElements=()=>{

    //Primero, definimos los nombres y las etiquetas de los elementos que queremos introducir
    const newTeam= document.createElement('p');
    const editButton= document.createElement('button');
    const deleteButton= document.createElement('button');

    //Asignamos el elemento que tendra adentro nuestras etiquetas html
    newTeam.textContent= prompt('Nombre de tu equipo:');
    editButton.textContent= 'Edit';
    deleteButton.textContent='Delete';

    /*Debemos agregar un bucle, que cada vez que escribamos un ID, le aumente 1 unidad a ese ID*/
    let teamId=1;
    let newId= teamId++
//Le damos un nombre de ID a cada elemento, con el +i para que cada uno de ellos aumente su indice en uno
//Y por ende, tenga un ID unico.
    newTeam.id= 'team' +newId;
    editButton.id= 'edit' +newId;
    deleteButton.id= 'delete' +newId;
    //ahora las invocamos 
    tableContainer.appendChild(newTeam)
    tableContainer.appendChild(editButton)
    tableContainer.appendChild(deleteButton)

    if(newTeam===''){
        return 'escribe el nombre de tu equipo por favor'
    }else{
        return `${newTeam}`
    }
}

//Ahora debo invocar el boton para que cada vez que sea tocado, se invoque a la accion de agregar el equipo

addTeam.addEventListener('click', ()=>{
    addTeamElements()

    if(addTeamElements>16){
        return 'lo sentimos, ya no hay puesto para otro equipo';
    }
})

    
