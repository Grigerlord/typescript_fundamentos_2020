"use strict";
//  <tipo> // Angel Bracket Sintax
let username;
username = 'grigerluis';
//tenemos una cadena, TS, confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('Message:', message);
let usernameWtihId = 'idalysteresa';
// Como obtener el username
username = usernameWtihId.substring(0, 12);
console.log("User Name Only:", username);
// Sintaxis 'as'
let message2 = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('Message:', message2);
let helloUser;
helloUser = 'Hello Paparazzi';
username = helloUser.substring(6);
console.log('username', username);
