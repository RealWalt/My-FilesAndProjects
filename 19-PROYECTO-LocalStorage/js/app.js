// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
    //CUando el usuario agrega un nuevo tweet 
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem( 'tweets' )) || [];


        crearHTML();
    })
}




//Funciones
function agregarTweet(e) {
     e.preventDefault();

     //Textarea donde el usuario escribe
     const tweet = document.querySelector('#tweet').value;

     //validacion 
     if(tweet === '') {
        mostrarError('Este campo no puede ir vacio');

        return; //Evita que se siga ejecutando mas lineas de codigo
     }

     const tweetObj = {
        id: Date.now(),
        tweet
     }

     //Agregar al arreglo de tweets

     tweets = [...tweets, tweetObj];

     //Una vez agregado vamos a crear el html
     crearHTML();

     // Reiniciar formulario
     formulario.reset()
}

//Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');


    // Insertarle el contenido
    const contenedor = document.querySelector('#contenido');
    contenedor.appendChild(mensajeError);

    //Elimina la alerta despues de 3segundos 
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets

function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
         tweets.forEach( tweet => {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            // Agregar la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }



            // Crear el html

            const li = document.createElement('li')


            // agregar el texto al li
            li.textContent = tweet.tweet;

            // Asignar boton
            li.appendChild(btnEliminar);

            //Insertar en el html
            listaTweets.appendChild(li);
         } )
    }

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
//elimina el tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
} 

function limpiarHTML() {
    while( listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

