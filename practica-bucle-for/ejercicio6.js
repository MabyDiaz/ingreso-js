/* 6-Crea una función llamada contarDigitos que tome un número como parámetro y devuelva la cantidad de dígitos que tiene. Utiliza un ciclo for para contar los dígitos. */

function contarDigitos(numero) {
  let digitos = 0;
  for (let i = numero; i > 0; i = Math.floor(i / 10)) {
    digitos++;
  }
  return digitos;
}

console.log(contarDigitos(1245));
