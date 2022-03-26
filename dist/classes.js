"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portraits"] = 1] = "Portraits";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    //CONSTRUCTOR
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //COMPORTAMIENTO
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}
class Albun {
    constructor(id, title) {
        this.picture = [];
        this.id = id;
        this.title = title;
    }
    addPicture(picture) {
        this.picture.push(picture);
    }
}
const albun = new Albun(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi Session', PhotoOrientation.Square);
albun.addPicture(picture);
console.log('Albun:', albun);
