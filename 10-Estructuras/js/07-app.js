 

 const efectivo = 0;
 const credito = 1020;
 const disponible = efectivo + credito;
 const totalPagar = 600;

 if( efectivo > totalPagar || credito > totalPagar || disponible >= totalPagar ) {
    console.log('Si podemos pagar');
 } else {
    console.log('Fondos insuficientes');
 }