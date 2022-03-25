//vouid_______________________________________

//Tipo Explicito
function showInfo(user: any): any{
    console.log('User Info', user.id, user.username, user.fullName);
    //return 'hola';
}

showInfo({id: 1, username: 'Griger', fullName: 'Griger Ratia'})




//Tipo Inferido o implicito
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        fullName: ${user.fullName}
    `);
}

showFormattedInfo({id: 1, username: 'Griger', fullName: 'Griger Ratia'})




//TRipo Void, como tipo de dato en una variable
let unusable: void;
//unusable = null;
unusable = undefined;



//Tipo Never_______________________________________________
function handleError(code: number, message: string): never {
    // Procesamiento de tu codigo . process your code here
    //Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not found');
} catch (error) {

}


// function sumNumbers(limit: number): never{
//     let sum = 0;
//     while(true){
//         sum++;
//     }
// }

// sumNumbers(10);
//Ciclo Infinito, el programa nunca termina