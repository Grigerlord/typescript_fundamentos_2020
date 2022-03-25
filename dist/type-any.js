"use strict";
//Tipo explicito
let idUser;
idUser = 1; //Number
idUser = '1'; //String
console.log('idUser:', idUser);
//Tipo Inferido o Implicito
let otherId;
otherId = 2;
otherId = '2';
console.log('otherId', otherId);
let surprise = 'Hello TypeScript';
//surprise.sayHello(); //Error //
const res = surprise.substring(6);
console.log('res', res);
