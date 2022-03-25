"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//[1, 'user]
let user;
user = [1, 'grigerluis'];
console.log('user', user);
console.log('Id: ', user[0]);
console.log('User name: ', user[1]);
console.log('Username.length ', user[1].length);
//Tuplas con varios valores
//id. username, ispPro
let userInfo;
userInfo = [2, 'paparazzi', true];
console.log('UserInfo', `
    ${userInfo[0]}
    ${userInfo[1]}
    ${userInfo[2]}
`);
//Arreglo de tuplas
let arreglo = [];
arreglo.push([1, 'grigerluis']);
arreglo.push([2, 'idalysteresa']);
arreglo.push([3, 'tulylindito']);
console.log('Arreglo', arreglo);
//Uso de funcxiones array
//tulylindito --> tulylindito001
arreglo[2][1] = arreglo[2][1].concat('001');
console.log('Arreglo', arreglo);
