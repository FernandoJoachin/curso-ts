class Family2 {
    constructor(
        public readonly name: string,
        public readonly castles: string[]
    ){}
}

const lanister2 : Family2 = new Family2('Lannister', ['Winterfell', 'Casterly Rock']);
const targaryen2 : Family2 = new Family2('Targaryen', ['Dragonstone', 'Summerhall']);

const families2 : Family2[] = [lanister2, targaryen2];

function getCastlesByFamily2(family : string) : Promise<string[]> {
    let p : Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundCastles = families2.filter((x) => x.name == family);
    
            if(foundCastles.length > 0){
               resolve(foundCastles.map((x) => x.castles)[0]);
            }else{
                reject('No se encontraron castillos');
            }
        }, 2000);
    });
    return p;
}

console.log('Comenzando la busqueda...'); 
getCastlesByFamily2('Lannister')
    .then(castles => {
        console.log(`Castillos encontrados: ${castles.join(', ')}`);
        return castles.length;
    })
    .then(numberCastles => console.log(`# Castillos encontrados ${numberCastles}`))
    .catch(reason => console.log(`Error: ${reason}`))

console.log('Busqueda terminada...'); 