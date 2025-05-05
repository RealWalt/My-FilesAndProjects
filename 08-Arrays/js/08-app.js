const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}


// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring
const { nombre, disponible } = producto;

console.log(producto);


//Destructuring con Arreglos
const numeros = [10,20,30,40,50];

const [ primero, segundo, ...tercero] = numeros;

console.log(tercero);
console.log(primero);