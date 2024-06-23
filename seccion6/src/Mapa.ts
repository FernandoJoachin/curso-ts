import { Mappable } from "./Mappable";

export class Mapa{
    private googleMap : google.maps.Map;
    constructor(divId : string){
        this.googleMap = new google.maps.Map(document.getElementById(divId)!.appendChild, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    /**Primera Solucion */
/*     addPassengerMarker(passenger: Passenger) {
        new google.maps.Marker({
          map: this.googleMap,
          position: {
            lat: passenger.getLocation.lat,
            lng: passenger.getLocation.lng
          },
        });
    }
    addDriverMarker(driver: Driver) {
        new google.maps.Marker({
          map: this.googleMap,
          position: {
            lat: driver.getLocation.lat,
            lng: driver.getLocation.lng
          },
        });
    } */

        /**Segunda solucion */
/*     addMarker(person: Person) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
            lat: person.getLocation.lat,
            lng: person.getLocation.lng
            },
        });
    } */

    addMarker(mappable: Mappable) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
            lat: mappable.getLocation.lat,
            lng: mappable.getLocation.lng
            },
        });
    }
}