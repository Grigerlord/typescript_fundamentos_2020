"use strict";
console.log('Hello Hello');
//Tipo Number_______________________________________________
//Explicito
let phone;
phone = 1;
phone = 3453654;
//phone = 'string';  //Error de tipo de dato
//Implicito
let phoneNumber = 4164974654;
let areaCode = 58;
//phoneNumber = true  //Error de tipo de dato
let hex = 0xbff;
let binary = 0b101000110;
let octal = 0o744;
//tipo Boolean_______________________________________________
//Explicito
let isPro;
isPro = true;
//isPro = 123;  //Error de tipo de dato
//Imlpicito o Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 'string' //Error de tipo de dato
//Strings_______________________________________________
let userName = 'Griger Luis';
userName = 'Idalys Teresa';
//username = true //Error por el tipo de dato
//template string
//uso de back-tick `
let userInfo;
userInfo = `
    USer Info:
    username: ${userName}
    Full name: ${userName + ' Betancourt'}
    phonNumber: ${'+' + areaCode + phoneNumber}
    IsPro: ${isPro}
`;
console.log(userInfo);
