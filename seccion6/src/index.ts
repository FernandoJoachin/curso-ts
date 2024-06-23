import { ne } from "@faker-js/faker";
import { Driver } from "./Driver";
import { Mapa } from "./Mapa";
import { Passenger } from "./Passenger";
import { MyHome } from "./MyHome";

const googleMap = new Mapa('map');
const passenger = new Passenger();
const driver = new Driver();
const myHome = new MyHome(passenger);

googleMap.addMarker(passenger);
googleMap.addMarker(driver);
googleMap.addMarker(myHome);