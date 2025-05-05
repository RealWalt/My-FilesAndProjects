"use strict";

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //congelar objeto


// producto.disponible = false;
// producto.imagen = 'imagen.jpg'

console.log(producto);

console.log(Object.isFrozen(producto));

