/* 90. Crea una función llamada `crearLista` que tome un arreglo de elementos y devuelva
una lista ordenada (HTML) de esos elementos. Llama a la función con un arreglo de frutas
y muestra la lista en la consola. */

function crearLista(elementos) {
  let lista = "<ol>"; // Comenzar con el tag de inicio de la lista no ordenada

  // Iterar sobre los elementos y crear los elementos <li>
  for (let elemento of elementos) {
    lista += `<li>${elemento}</li>`; // Agregar el elemento a la lista
  }

  lista += "</ol>"; // Agregar el tag de cierre de la lista

  return lista; // Devolver la lista completa
}

// Ejemplo de uso: arreglo de frutas
let frutas = ["Manzana", "Banana", "Naranja", "Pera"];

// Llamar a la función con el arreglo de frutas y mostrar la lista en la consola
console.log(crearLista(frutas));
