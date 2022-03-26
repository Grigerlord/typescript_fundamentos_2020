export {}
//Crear una fotografia

//function createPicture(title, date, size){
    //title
//}


type SquareSize = '100x100' | '500x500' | '1000x1000'

//Usamo TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize){
//     //Secrea la fotografia
//     console.log('create Picture Usando Using', title, date, size);

// }

// createPicture('My birtda', '2022-03-25', '500x500')
// createPicture('Colombia Trip', '2022-03')

//Parametros opcionales

function createPicture(title?: string, date?: string, size?: SquareSize){
    //Secrea la fotografia
    //console.log('create Picture Usando Using', title, date, size);

}

createPicture('My birtday', '2022-03-25', '500x500')
createPicture('Colombia Trip', '2022-03')


//Flat Array Functions
let createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // }
    return {
        title, date, size
    }
}

const picture = createPic('Platzi Session', '2022-03-10', '100x100')
//console.log('picture', picture);




//Tipos de retorno con typescrip
function handleError(code: number, message: string): never | string {
    //Procesamiento del codigo, mensaje
    if(message === 'error') {
        throw new Error(`${message}. Code error: ${code}`)
    } else {
        return 'An error has ocurred'
    }
}

let result = handleError(200,'OK') //string
    console.log('result', result);
try {
    result = handleError(404, 'error') //never
    console.log('result', result);
} catch (error) {
    console.warn('Seprodujo el error e ingresamos al catch');
}
