const carrito = [
    { nombre: 'Monitor de 20 pulgas', precio: 500},
    { nombre: 'Television', precio: 500},
    { nombre: 'Tablet', precio: 500},
    { nombre: 'Audifonos', precio: 500},
    { nombre: 'Teclado', precio: 500},
    { nombre: 'Celular', precio: 500}
]

const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - Precio : ${producto. precio}`;
})

const nuevoArreglo2 = carrito.forEach( function(producto ){
    return `${producto.nombre} - Precio : ${producto. precio}`;
}) 
console.log(nuevoArreglo);
console.log(nuevoArreglo2);