/* Algoritmo para adivinar un número. */

let numeroSecreto = Math.floor(Math.random() * 10 + 1);
//console.log(numeroSecreto);
let intento = 1;

while (intento <= 3) {
  let numeroIngresado = parseFloat(prompt("Ingrese un número entre 1 y 10: "));

  if (numeroIngresado === numeroSecreto) {
    alert(
      `Felicidades!!! Adivinaste el número en ${intento} ${
        intento == 1 ? "vez" : "veces"
      }`
    );
    break;
  } else {
    if (numeroIngresado > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    intento++;
  }

  if (intento > 3) {
    alert(`Lo siento! Usaste la cantidad máxima de intentos.`);
  }
}
