

// Type your code below this line!
// *npm install prompt-sync

const prompt = require("prompt-sync")();
const numero = prompt("Ingresa el número de amigos: ");

function FriendList(friendList){
    this.friends = friendList;
}

let list =[];
for (let i=1; i<=numero; i++){
    const prompt = require("prompt-sync")();
    const nombreAmigo = prompt(`Ingresa el nombre del amigo ${i}: `);
    list.push(nombreAmigo);
    
}
const nuevaLista = new FriendList(list);
console.log(nuevaLista.friends);

// Type your code above this line!

