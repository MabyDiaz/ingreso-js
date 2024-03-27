/* 77. Define un objeto con información de productos, como nombres y precios. Utiliza un
bucle `for...in` para mostrar los nombres y precios de los productos en la consola. */

let productos = {
  producto1: {
    nombre: "cartera",
    color: "beige",
    precio: 12.5,
  },

  producto2: {
    nombre: "reloj",
    color: "oro",
    precio: 20.0,
  },

  producto3: {
    nombre: "zapato",
    color: "negro",
    precio: 72.5,
  },
};

for (let producto in productos) {
  console.log(productos[producto].nombre);
  console.log(productos[producto].color);
  console.log(productos[producto].precio);
}
