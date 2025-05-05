const carrito = [
    { nombre: 'Monitor de 20 pulgas', precio: 500},
    { nombre: 'Television', precio: 500},
    { nombre: 'Tablet', precio: 500},
    { nombre: 'Audifonos', precio: 500},
    { nombre: 'Teclado', precio: 500},
    { nombre: 'Celular', precio: 500}
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio : ${producto. precio}`);


carrito.forEach( (producto ) => console.log(`${producto.nombre} - Precio : ${producto. precio} `));

console.log(nuevoArreglo);