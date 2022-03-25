"use strict";
//Orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 0] = "landscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama"; //3
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[0]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["landscape"] = 0] = "landscape";
    PictureOrientation[PictureOrientation["portrait"] = 10] = "portrait";
    PictureOrientation[PictureOrientation["square"] = 11] = "square";
    PictureOrientation[PictureOrientation["panorama"] = 12] = "panorama"; //12
})(PictureOrientation || (PictureOrientation = {}));
// console.log('portrait', PictureOrientation.landscape);
// console.log('portrait', PictureOrientation.portrait);
// console.log('portrait', PictureOrientation.square);
// console.log('portrait', PictureOrientation.panorama);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
    Country["Venezuela"] = "ven";
})(Country || (Country = {}));
(function (Country) {
    Country["Chile"] = "chi";
    Country["Argentina"] = "arg";
})(Country || (Country = {}));
const country = Country.Argentina;
console.log('Country: ', country);
