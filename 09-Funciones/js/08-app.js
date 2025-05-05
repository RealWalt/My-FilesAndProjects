function sumar( a, b){
    return  a + b ;
}

const resultado = sumar(6, 3);

console.log(resultado);

// ejemplo mas avanzado

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
     return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(22);
total = agregarCarrito(221);
total = agregarCarrito(442);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(`El total a pagar es de ${totalPagar}`);


console.log(total);