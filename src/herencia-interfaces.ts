export {}

enum PhotoOrientation {
    Landscape,
    Portraits,
    Square,
    Panorama
}

interface Entity {
    id: number,
    title: string,
}

interface Albun extends Entity{
    //copia de los atributos de Entity
    description: string
}

interface Picture extends Entity{
    orientation: PhotoOrientation
}


const albun: Albun = {
    id: 1,
    title: 'meetups',
    description: 'Comunity events around the world'
}

const picture: Picture = {
    id: 1,
    title: 'family',
    orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture //PUDO HACERSE: let newpicture: Picture = {}
newPicture.id = 2
newPicture.title = 'Moon'

console.log('Albun:', albun);
console.log('Picture:', picture);
console.log('NewPicture:', newPicture);