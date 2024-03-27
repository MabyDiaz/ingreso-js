/* 4-Desarrolla una función llamada invertirNumero que tome un número como parámetro y devuelva el número invertido. Por ejemplo, si se pasa el número 123, la función debería devolver 321. Utiliza un ciclo for para invertir el número. */

function invertirNumero(numero) {
  let numeroString = numero.toString();
  let numeroInvertidoString = "";

  for (let i = 0; i <= numeroString.length - 1; i++) {
    numeroInvertidoString += numeroString[i].split("").reverse().join("");
  }
  let numeroInvertido = parseInt(numeroInvertidoString);
  return numeroInvertido;
}

console.log(invertirNumero(123));

// Otra forma
function invertirNumero1(numero) {
  let numeroString = numero.toString();
  let numeroInvertidoString = "";

  for (let i = numeroString.length - 1; i >= 0; i--) {
    numeroInvertidoString += numeroString[i];
  }
  let numeroInvertido = parseInt(numeroInvertidoString);
  return numeroInvertido;
}

console.log(invertirNumero1(123));
