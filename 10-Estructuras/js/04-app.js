// Operador mayor que y menor que

const dinero = 200;
const totalAPagar = 300;
const tarjeta = false;
const cheque = false;

if( dinero >= totalAPagar) {
    console.log('Si podemos pagar')
} else if(cheque) {
    console.log('Si puedo pagar porque tengo un cheque')
} 
else if(tarjeta){
    console.log('Si puedes pagar porque tengo la tarjeta')
}
 else {
    console.log('Fondos insuficientes')
}