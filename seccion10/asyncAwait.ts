class Family3 {
    constructor(
        public readonly name: string,
        public readonly castles: string[]
    ){}
}

const lanister3 : Family3 = new Family3('Lannister', ['Winterfell', 'Casterly Rock']);
const targaryen3 : Family3 = new Family3('Targaryen', ['Dragonstone', 'Summerhall']);

const families3 : Family3[] = [lanister3, targaryen3];

function getCastlesByFamily3(family : string) : Promise<string[]> {
    let p : Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundCastles = families3.filter((x) => x.name == family);
    
            if(foundCastles.length > 0){
               resolve(foundCastles.map((x) => x.castles)[0]);
            }else{
                reject('No se encontraron castillos');
            }
        }, 2000);
    });
    return p;
}

async function logCastlesSearch(family : string) {
    let foundCastles = await getCastlesByFamily3(family);
    console.log(foundCastles);
}

console.log('Comenzando la busqueda...'); 
logCastlesSearch('Lannister')
    .catch(reason => console.log(`Error: ${reason}`))

console.log('Busqueda terminada...'); 