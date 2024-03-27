/* 66- Crea una función llamada sumaDigitos que tome un número entero como argumento y
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar
6 (1 + 2 + 3). */

function sumaDigitos(numero) {
  // Inicializo una variable para almacenar la suma de los dígitos
  let suma = 0;

  // Itero sobre cada dígito en la cadena de texto
  for (let i = 0; i < numero.length; i++) {
    // Obtengo el dígito actual convirtiéndolo de nuevo a un número
    let digito = parseInt(numero[i]);

    // Sumar el dígito al total
    suma += digito;
  }

  // Retornar la suma de los dígitos
  return suma;
}

let numero = prompt("Ingrese un número entero positivo");
let sumaNumero = sumaDigitos(numero);

alert(`La suma de los dígitos del numero ${numero} es ${sumaNumero}.`);
