class Bird {
    fly() : void {
        console.log('volando');
    }
}

class Fish {
    swim() : void {
        console.log('nadando');
    }
}

type UnknowPet = Fish | Bird;

function printPet(pet : UnknowPet){
    if(pet instanceof Fish){
        pet.swim();
    }
}

const pet = new Fish();
printPet(pet);