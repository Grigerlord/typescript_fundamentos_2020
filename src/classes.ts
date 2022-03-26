export {}

enum PhotoOrientation {
    Landscape,
    Portraits,
    Square,
    Panorama
}

class Picture {
    //PROPIEDADS
    id: number;
    title: string;
    orientation: PhotoOrientation;

    //CONSTRUCTOR
    constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation
        ){
            this.id = id;
            this.title = title;
            this.orientation = orientation;
    }

    //METODOS
    toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`
    }
}


class Albun {
    id: number;
    title: string;
    picture: Picture[] = [];

    constructor(
        id: number,
        title: string,
    ){
        this.id = id;
        this.title = title;
    }

    addPicture(picture: Picture) {
        this.picture.push(picture)
    }
}

const albun: Albun = new Albun(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Platzi Session', PhotoOrientation.Square)
albun.addPicture(picture)

console.log('Albun:', albun);
