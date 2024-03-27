/* 87. Crea una función llamada `calcularDescuento` que tome un precio y un porcentaje de
descuento como argumentos. La función debe calcular el precio final con descuento y
mostrarlo en la consola. */

function calcularDescuento(precio, porcentaje) {
  let precioFinal = precio - (precio * porcentaje) / 100;
  return precioFinal;
}

console.log(calcularDescuento(20, 10));
