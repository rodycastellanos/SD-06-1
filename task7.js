

// Type your code below this line!
const prompt = require("prompt-sync")();
const marca = prompt("Ingresa la marca del auto: ");
const color = prompt("Ingresa el color del auto: ");
const puertas = prompt("Ingresa el numero de puertas que tiene el auto: ");
const kilometraje = prompt("Ingresa el kilometraje actual del auto: ");
const tipo = prompt("Que tipo de auto es (Combustión/Electrico): ");
const llantas = prompt("Cuántas llantas tiene el auto: ");

function CaracteristicasCoche(marca, color, puertas, kilometraje, tipo, llantas){
    this.marca = marca;
    this.color = color,
    this.puertas = puertas;
    this.km = kilometraje;
    this.tipo= tipo;
    this.llantas = llantas;
}


const nuevoAuto = new CaracteristicasCoche(marca, color, puertas, kilometraje, tipo, llantas);
console.log(nuevoAuto);


// Type your code above this line!

