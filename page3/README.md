Funcionalidad a crear:

Cada vez que le de al boton de anadir, me debe pedir 1 nombre de equipo que debe ser menor o igual a 12 caracteres

Profundizando mas:

1. En el boton de anadir debo agregar una funcionalidad que una vez que se le de click 
la misma te pida el nombre y el escudo

con el addTeam.EventListenner(click, (function)={

})

2. Puedo probar con un prompt que este incrustado en esa funcion y luego se returne a cada parrafo asignado de la siguiente manera:

const function =()=>{
    const uTeamName= prompt('dime el nombre de tu equipo')
    if(uTeamName===''){
        return 'por favor, dale un nombre a tu equipo'
    }else{
        return team1.InnerHTML=`<p>${uTeamName}</p>`
    }
}

Obstaculo: Tenemos un solo boton el cual debe rellenar un input por cada linea, de las 16.

Como hacemos para que cada input sea impreso en una linea debajo de la tabla?

log(function())

3. Ahora el reto es la instruccion de que no solamente debe ser el parrafo del team1, sino que cada vez que se escriba 1 nuevo parrafo para el equipo, vaya aumentado, se me ocurre algo asi como con un bucle for 

for(n=1, n<=16, n++)

Se me ocurre algo como, for(n=team1, n<=team16, n++) 

En sintesis, me parece que quedaria algo asi:

addTeam.EventListenner(click, (function)={
    for(n=team1, n<=team16, n++){
        const uTeamName= prompt('dime el nombre de tu equipo')
    if(uTeamName===''){
        return 'por favor, dale un nombre a tu equipo'
    }else{
        return n.InnerHTML=`<p>${uTeamName}</p>`
    }
}
    })


4. Debo investigar como pedir al usuario una imagen de una medida maxima y una minima para que cuando el me la 
suelte en el formato que sea, ponerla redonda (border-radius) y que se ponga justo detras del texto 


IDEA LOCA, VER SI SE CUMPLE

Que cada vez que toque el boton, se me pida escribir mediante prompt, que ese resultado se guarde, se almacene
y luego se coloque en columnas 