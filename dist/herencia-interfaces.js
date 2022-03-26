"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portraits"] = 1] = "Portraits";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const albun = {
    id: 1,
    title: 'meetups',
    description: 'Comunity events around the world'
};
const picture = {
    id: 1,
    title: 'family',
    orientation: PhotoOrientation.Landscape
};
let newPicture = {}; //PUDO HACERSE: let newpicture: Picture = {}
newPicture.id = 2;
newPicture.title = 'Moon';
console.log('Albun:', albun);
console.log('Picture:', picture);
console.log('NewPicture:', newPicture);
