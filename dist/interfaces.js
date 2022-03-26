"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Funcion para mostrar una fotografia
var PhotoOrientacion;
(function (PhotoOrientacion) {
    PhotoOrientacion[PhotoOrientacion["landscape"] = 0] = "landscape";
    PhotoOrientacion[PhotoOrientacion["Portrait"] = 1] = "Portrait";
    PhotoOrientacion[PhotoOrientacion["Square"] = 2] = "Square";
    PhotoOrientacion[PhotoOrientacion["Panorama"] = 3] = "Panorama";
})(PhotoOrientacion || (PhotoOrientacion = {}));
function showPicture(picture) {
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
};
showPicture(myPic);
showPicture({
    title: 'Test 2 Title',
    date: '2022-03-25',
    orientation: PhotoOrientacion.Portrait,
    // extra: 'test' //Error
});
function generatePicture(config) {
    const pic = { title: 'default', date: '00-00' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture:', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('Picture', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2022-03-25' });
console.log('Picture', picture);
// let user: User
// user = {id: 1234, username: 'grigerluis', isPro: true}
// console.log('User:', user);
// console.log('paparazi');
// console.log('user, );
