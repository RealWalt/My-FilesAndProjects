const producto = "Monitor 20 Pulgadas";

// .repeat te va a permitir repetir una cadena de texto...
const texto = ' en promocion'.repeat(3); //si el numero no es entero, se redondea automaticamente.

console.log(texto);
console.log(`${producto} ${texto} !!!!`); 

// Split, dividir un string

const actividad = "Estoy aprendiedno JavaScript Moderno";
console.log(actividad.split(" "));


const hobbie = 'Leer, caminar, coger, ereerea';
console.log(hobbie.split(","));

const tweet = "Aprendiendo JavaScript #JSModernoConJUan"; 
console.log(tweet.split("#"));