const carrito = [
    { nombre: 'Monitor de 20 pulgas', precio: 500},
    { nombre: 'Television', precio: 500},
    { nombre: 'Tablet', precio: 500},
    { nombre: 'Audifonos', precio: 500},
    { nombre: 'Teclado', precio: 500},
    { nombre: 'Celular', precio: 500}
]


for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio : ${carrito[i]. precio}`);
}

carrito.forEach( function(producto ){
    console.log(`${producto.nombre} - Precio : ${producto. precio}`);
}) 