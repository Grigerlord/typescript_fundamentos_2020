export {}
//Funcion para mostrar una fotografia
enum PhotoOrientacion {
    landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientacion
}

function showPicture(picture: Picture){
    console.log(`
    [
        Title: ${picture.title},
        Date: ${picture.date},
        Orientation: ${picture.orientation}
    ]`);
}

let myPic = {
    title: 'Test Title',
    date: '2022-03',
    orientation: PhotoOrientacion.landscape
}

showPicture(myPic)
showPicture({
    title: 'Test 2 Title',
    date: '2022-03-25',
    orientation: PhotoOrientacion.Portrait,
    // extra: 'test' //Error
})


interface PictureConfig {
    title?: string,
    date?: string,
    orientation?: PhotoOrientacion
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'default', date: '00-00'}
    if(config.title) {
        pic.title = config.title
    }
    if(config.date) {
        pic.date = config.date
    }

    return pic
}

let picture = generatePicture({})
console.log('picture:', picture);
picture = generatePicture({title: 'Travel Pic'})
console.log('Picture', picture);
picture = generatePicture({title: 'Travel Pic', date: '2022-03-25'})
console.log('Picture', picture);



//Interfaz: Usuario

interface User {
    readonly id: number,
    username: string,
    isPro: boolean
}

// let user: User
// user = {id: 1234, username: 'grigerluis', isPro: true}
// console.log('User:', user);
// console.log('paparazi');
// console.log('user, );

