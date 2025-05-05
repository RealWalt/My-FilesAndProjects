"use strict";

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto); //te deja modificr las llaves de un objeto pero no te deja agregar ni elimina (pregunta de trabajo)




producto.disponible = false;
//producto.imagen = 'imagen.jpg'

console.log(producto);

console.log(Object.isSealed(producto));

