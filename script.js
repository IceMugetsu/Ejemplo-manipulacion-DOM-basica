const h1 = document.querySelector('h1');   /* --> Es para elegir una etiqueta, clase o id */

/* Siguen las mismas reglas para llamar a una etiqueta, clase o id en CSS*/
/* const p = document.querySelector('p');
/* const parrafito = document.querySelector('.parrafito');
/* const pid = document.querySelector('#pid'); */




/* console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Perritos"; /* Sirve para cambiar el texto de una etiqueta que fue seleccionada por el ".querySelector" solo que no se llama a la etiqueta, si no a la variable de la etiqueta en javascript*/

/*  h1.innerHTML = "Perritos <br> Camaron"; /* Tambien se pueden escribir etiquetas */

/*  h1.innerText = "dadaadad <br>"; /* interpreta todo lo que haya adentro como texto (Forma basica de proteccion contra ataques)*/

/* h1.getAttribute(); */ /* Forma normal de modificar un atributo */

/*  console.log(h1.getAttribute('class')); /* Asi devuelve el valor de un atributo o clase a la consola */

/*   h1.setAttribute("class", "rojo") /* Cambia el nombre de la clase, de "class" a "rojo". Pero en el doc html seguira diciendo "class" mientras que en la consola solo dira "rojo" */

/*  h1.classList.add("verde"); /* Agrega una segunda clase */
/*  h1.classList.remove("verde"); /* Elimina una clase con ese nombre */
// h1.classlist.contains("verde") Devuelve un valor True o False dependiendo de si nuestra clase tiene ese valor

/*  input.value = "45455" // De esta manera podemos entrar al valor de los input directamente, sin hacer otros procesos.

// Para crear un nuevo elemento en el html se usa "document.createElement()"

console.log(document.createElement("span"));

// Para crear un elemento desde javascript, que puedan ver nuestros usuarios:

const img = document.createElement("img");
img.setAttribute("src", "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*")
console.log(img);

pid.append(img); // Agrega el elemento despues del contenido que tenga ese parrafo.

// Para borrar un contenido y despues agregarle el elmento se hace asi:
/* Primero se pone el "pid.innerHTML="";"  y depues se agrega el elemento: "pid.append(img);" */




// Ahora vamos a escuchar cosas que hagan los usuarios para generar eventos:
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

/* function sumarInputValues(event) {
    const sumainputs = input1.value + input2.value;
    result.innerText = "Resultado: " + sumainputs;
    
} */



// ADDEVENTLISTNER //
// Escucha cada vez que surja cierto evento //
// sus sintaxis se ver abajo, conformada por la variable del objeto html, la propiedad ".addEventListener", entre parentsis, el nombre del evento
// y por ultimo el codigo javascript del evento osae el nombre de la funcion (No se le ponen parentesis a la funcion que se manda a llamar en esta
// sintaxis).

/* btn.addEventListener('click', btnOnClick); */


// Los Formularios, por defecto toman el ultimo objeto de tipo 

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumainputs = input1.value + input2.value;
    result.innerText = "Resultado: " + sumainputs;
}
// En el anterior codigo la propiedad ".preventDefault" hace que no se ejecute el evento de input que por defecto hace, osea enviar info a una
// url y que se recargue la pagina.
// Si se especifica el tipo del boton (submit o button) el "Form" no le asignara el tipo submit por defecto.





