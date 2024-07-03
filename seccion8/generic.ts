class ArrayOfNumbers {
    constructor(private collection : number[]){}

    get(index : number) : number {
        return this.collection[index]
    }
}

class ArrayOfString {
    constructor(private collection : string[]){}

    get(index : number) : string {
        return this.collection[index]
    }
}

class ArrayOfAny <T> {
    constructor(private collection : T[]){}

    get(index : number) : T {
        return this.collection[index]
    }
}

const col = new ArrayOfAny<String>(['a','b']); //Tambien se puede por inferencia haciendo que ya no sea necesario el <Type>

//Funciones
function printString(args : string[]) : void {
    for (let index = 0; index < args.length; index++) {
        console.log(args[index]);;
    }
}

function printNumber(args : number[]) : void {
    for (let index = 0; index < args.length; index++) {
        console.log(args[index]);;
    }
}

function printAny<T>(args : T[]) : void {
    for (let index = 0; index < args.length; index++) {
        console.log(args[index]);;
    }
}

printAny<string>(['a','b']);
printAny<number>([1,2]);

//Constrains
interface Media {
    print() : void
}

class Movie implements Media {
    constructor(private name : string){}

    print(): void {
        console.log(`pelicula ${this.name}`);
    }
}

class TVShow implements Media {
    constructor(private name : string){}

    print(): void {
        console.log(`pelicula ${this.name}`);
    }
}

function printMedia<T extends Media>(medias : T[]){
    medias.forEach(media => {
        media.print()
    });
}

const media : Media[] = [new Movie('goodfellas'), new TVShow('breaking bad')];
printMedia(media);

//KeyOf
function findValue<T extends object, U extends keyof T>(object : T, key : U){
    return object[key]
}
findValue({name: 'Fernando', age: 22}, 'age')

//Buit-in TS
class Vehicle {
    branch : string = '';
    model : string = '';
}

function createVehicle() : Vehicle {
    const vehicle : Partial<Vehicle> = {};
    vehicle.branch = 'Ford';
    return vehicle as Vehicle;
}
let cards : Readonly<string[]> = ['ford', 'mazda']