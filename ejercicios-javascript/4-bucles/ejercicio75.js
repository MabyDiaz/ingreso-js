/* 75. Escribe un bucle `for` que recorra los números del 1 al 20. Dentro del bucle, verifica si
cada número es par o impar y muestra un mensaje correspondiente en la consola. */

for (let i = 1; i<= 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par.`);
    } else {
        console.log(`El número ${i} es impar.`);
    }
}