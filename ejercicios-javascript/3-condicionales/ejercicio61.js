/* 61- Escribe una función llamada esPrimo que tome un número como argumento y retorne
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y
por sí mismo. */

function esPrimo(numero) {
  // Si el número es menor o igual a 1, no es primo
  if (numero <= 1) {
    return false;
  }

  // Verificar si el número es divisible por algún número entre 2 y la mitad de su valor
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si es divisible por algún número, no es primo
    if (numero % i === 0) {
      return false;
    }
  }

  // Si no fue divisible por ningún número, entonces es primo
  return true;
}
console.log(esPrimo(83));

// let numero = 83;
// if (esPrimo(numero)) {
//   console.log(numero + " es primo.");
// } else {
//   console.log(numero + " no es primo.");
// }

// Otra Forma:
function esPrimo(numero) {
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
    return false;
  }

  // Verificar si el número es divisible por algún número entre 2 y número - 1
  for (let i = 2; i <= numero - 1; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  // Si no se encontró ningún divisor, el número es primo
  return true;
}

// Ejemplo de uso
// const numero = 17;
// if (esPrimo(numero)) {
//   console.log(numero + " es primo");
// } else {
//   console.log(numero + " no es primo");
// }

// // Otra Forma:
// function esPrimo(numero) {
//   // Los números menores o iguales a 1 no son primos
//   if (numero <= 1) {
//     return false;
//   }

//   // Verificar si el número es divisible por algún número entre 2 y su mitad
//   for (let i = 2; i <= numero / 2; i++) {
//     if (numero % i === 0) {
//       return false;
//     }
//   }

//   // Si no se encontró ningún divisor, el número es primo
//   return true;
// }

// // Ejemplo de uso
// const numero = 17;
// if (esPrimo(numero)) {
//   console.log(numero + " es primo");
// } else {
//   console.log(numero + " no es primo");
// }
