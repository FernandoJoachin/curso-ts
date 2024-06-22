import { faker } from '@faker-js/faker';

export class Passenger{
    private readonly name : string;
    private readonly location : {
        lat : number,
        lng : number
    }

    constructor(){
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }
}