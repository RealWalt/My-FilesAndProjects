const producto = "Monitor 20 pulgadas";

//.replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0, 10) );
// console.log(producto.slice(8) );
console.log(producto.slice(2, 1));

//Alternativa a slice
//pregunta de trabajo
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

const usuario = 'Juan';
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));