//Clases: Definición de un conjunto de objetos similares, que constan con métodos y datos que resumen la característica de ese conjunto de objetos
interface Volable {
    altitud(): string
}

abstract class Vehiculo {
    protected readonly marca : string;
    private readonly modelo : string;
    private readonly color : string;
    private precio : number;

    constructor(marca : string, modelo : string, color : string, precio : number){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
    }

    //Opcion2
/*     constructor(
        private marca : string, 
        private modelo : string, 
        private color : string
    ){} */

    abstract drive() : void;

    get getPrecio(){
        return this.precio;
    }

    set setPrecio(valor : number){
        this.precio = valor;
    }

    static precioAMoneda(valor : number, tipoDeMoneda : string){
        let resultado = '';
        switch (tipoDeMoneda) {
          case 'USD':
            resultado = 'US ' + valor;
            break;
          case 'PESO':
            resultado = '$' + valor;
            break;
          default:
            break;
        }
        return resultado;
    }
}

class Car extends Vehiculo {
    drive() {
        console.log(`Conduciendo un car de la marca ${this.marca}`);
    }
}

class Avion extends Vehiculo implements Volable {
    drive() {
        console.log(`Conduciendo un avion de la marca ${this.marca}`);
    }

    altitud(): string {
        return '50.000 pies'
    }
}

const mazda = new Car('mazda', '3', 'negro', 2000);
mazda.drive();
console.log(`El precio actual es ${mazda.getPrecio}`);
mazda.setPrecio = 4000;
console.log(`El precio actual es ${mazda.getPrecio}`);
console.log(Car.precioAMoneda(200, 'USD'));
console.log(mazda);