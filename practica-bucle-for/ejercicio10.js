/* 10-Crea una función llamada contarLetrasMayusculas que tome una cadena de texto como parámetro y devuelva la cantidad de letras mayúsculas que contiene. Utiliza un ciclo for para recorrer la cadena y un condicional if para verificar si cada carácter es una letra mayúscula. */

function contarLetrasMayusculas(frase) {
  let mayusculas = 0;
  for (let i = 0; i <= frase.length - 1; i++) {
    if (frase[i] >= "A" && frase[i] <= "Z") {
      mayusculas++;
    }
  }
  return mayusculas;
}

console.log(contarLetrasMayusculas("Hola Mundo!"));
