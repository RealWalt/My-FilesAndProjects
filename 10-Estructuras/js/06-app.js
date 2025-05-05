const usuario = false;
const puedoPagar = false;

if(usuario && puedoPagar) {
    console.log('Si puedes comprar');
} else if(!usuario) {
    console.log('Inicia sesion o registrate para continuar');
} else if(!puedoPagar) {
    console.log('Fondos insuficientes');
}
else {
    console.log('No puedes comprar');
}