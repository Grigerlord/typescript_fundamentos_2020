//Orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    landscape, //0
    portrait,  //1
    square,    //2
    panorama   //3
}

const landscape: PhotoOrientation = PhotoOrientation.landscape;

console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[0]);



enum PictureOrientation {
    landscape,      //0    //al siguiente valor se le suma uno.
    portrait = 10,  //10   //Como lo estamos inicializando en 10, se imprime diez, y al siguiente se le agrega uno.
    square,         //11
    panorama        //12
}

// console.log('portrait', PictureOrientation.landscape);
// console.log('portrait', PictureOrientation.portrait);
// console.log('portrait', PictureOrientation.square);
// console.log('portrait', PictureOrientation.panorama);


enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp',
    Venezuela = 'ven'
}

enum Country {
    Chile = 'chi',
    Argentina = 'arg'
}

const country: Country = Country.Argentina;

console.log('Country: ', country);
