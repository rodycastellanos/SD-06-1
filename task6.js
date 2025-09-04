

// Type your code below this line!
const prompt = require("prompt-sync")();

let ciclo = prompt("¿Deseas ingresar un nuevo artículo?: (Yes/No) ");
const listaProductos = [];

while (ciclo === "Yes") {
  const producto = prompt("Ingresa el producto que desea agregar: ");
  const cantidad = prompt("Ingresa la cantidad del producto: ");
  
  listaProductos.push([producto, cantidad]);  // ← aquí el cambio

  ciclo = prompt("¿Deseas ingresar un nuevo artículo?: (Yes/No) ");
}

function ProductosComprados(listaProductos) {
  this.lista = listaProductos;
}

const nuevaLista = new ProductosComprados(listaProductos);
console.log(nuevaLista);



// Type your code above this line!

