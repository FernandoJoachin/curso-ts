interface Media {
    title : string;
    genres : string[];
    director? : {name : string};
}

const fetchedMediaData2 : Media = {
    title: 'goodfellas',
    genres: ['drama', 'crime']
}

console.log(fetchedMediaData2.director ?? 'Director no encontrado');