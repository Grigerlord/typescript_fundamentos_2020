//  <tipo> // Angel Bracket Sintax
let username: any;
username = 'grigerluis';

//tenemos una cadena, TS, confia en mi!
let message: string = (<string>username).length > 5 ?
                        `Welcome ${username}` :
                        `Username is too short`;
console.log('Message:', message);


let usernameWtihId: any = 'idalysteresa';
// Como obtener el username
username = (<string>usernameWtihId).substring(0, 12);
console.log("User Name Only:", username);


// Sintaxis 'as'

let message2 = (username as string).length > 5 ?
                        `Welcome ${username}` :
                        `Username is too short`;
console.log('Message:', message2);



let helloUser: any;
helloUser = 'Hello Paparazzi'
username = (helloUser as string).substring(6);
console.log('username', username);
