/* 65- Define una función llamada esPangrama que tome una cadena de texto como
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas
las letras del alfabeto al menos una vez. */
let frase = prompt("Ingrese una frase: ").toLowerCase();

function esPangrama(frase) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";

  // Inicializar un array para almacenar las letras únicas presentes en la frase
  let letrasPresentes = [];

  // Iterar sobre cada letra del alfabeto
  for (let i = 0; i < alfabeto.length; i++) {
    // Obtener la letra actual
    let letra = alfabeto[i];

    // Verificar si la letra actual está presente en la frase
    if (frase.includes(letra)) {
      // Si la letra está presente en la frase, la añadimos al array letrasPresentes
      letrasPresentes.push(letra);
    }
  }

  // Si el tamaño del array letrasPresentes es igual a 26, todas las letras del alfabeto están presentes
  return letrasPresentes.length === 26;
}

//console.log(esPangrama(frase));

if (esPangrama(frase)) {
  alert("La frase ingresada es Pangrama.");
} else {
  alert("La frase ingresada no es Pangrama.");
}

//"El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."
