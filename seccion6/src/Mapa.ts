import { Mappable } from "./Mappable";
import { MapGeocoder } from "./MapGeocoder";
import { SearchOptions } from "./SearchOptions ";

export class Mapa{
    private googleMap : google.maps.Map;
    private geocoder: MapGeocoder; 

    constructor(divId : string){
        this.googleMap = new google.maps.Map(document.getElementById(divId)!.appendChild, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
        this.geocoder = new MapGeocoder(this.googleMap); 
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
        const infoWindow = new.google.maps.infoWindow({
            content: 'Hello World'
        });
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
            lat: mappable.getLocation.lat,
            lng: mappable.getLocation.lng
            },
        });
        this.geocoder.addMarkerInfo(marker, mappable);
    }

    searchText(options: SearchOptions): void{
        this.geocoder.searchText(options); 
    }
}