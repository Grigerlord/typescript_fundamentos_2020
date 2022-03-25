export {};
// 10, '10'

// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// //Buscar userName dado un ID

// function getUserNameById(id: number | string){
//     //Logica de negocio, find the user
//     return 'grigerluis'
// }

// getUserNameById(20);
// getUserNameById('20');


//Alias de tipos para TS

type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

//Buscar userName dado un ID

function getUserNameById(id: IdUser): Username{
    //Logica de negocio, find the user
    return 'grigerluis'
}

getUserNameById(20);
getUserNameById('20');




//Tipos literales
//100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smalPicture: SquareSize = '200x200';
let smalPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500'
let bigPicture: SquareSize = '1000x1000'