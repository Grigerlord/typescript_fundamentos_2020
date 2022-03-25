// Corchetes []

//Tipo Explicito

let users: string[];
users = ['Ida', 'Gris', 'budy', 'ania'];
//users = [1, true, 'test']; //Error

//Inferidos

let otherUsers = ['Ida', 'Gris', 'budy', 'ania'] //tipo: String[]

//Array<TIPO>

let pictureTitle: Array<string>;

pictureTitle = ['foto1', 'foto2', 'foto3',]


//Accediendo a los valores en una array

console.log('First User', users[1]);

console.log('First Title', pictureTitle);


//Propiedades enarray

console.log('usando length', users.length);


//Uso de funciones de array
users.push('Kat');
users.sort();
console.log("users", users);
