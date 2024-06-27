interface ApiEndpoint {
    get() : string[];
    post(request : {token : string, body : string}) : void;
}

let httpServer : {[key : string]: ApiEndpoint} = {};

@registerEndpoint
class Families implements ApiEndpoint {
    private houses = ['Lannister', 'Targaryen'];

    get(){
        return this.houses;
    }

    post(request : {token : string, body : string}){
        this.houses.push(request.body)
    }
}

@registerEndpoint
class Castles implements ApiEndpoint {
    private castles = ['Winterfell', 'Casterly Rock'];

    get(){
        return this.castles;
    }

    @protect('123')
    post(request : {token : string, body : string}){
        this.castles.push(request.body)
    }
}

function protect(token : string){
    return function(target : any, key : string, descriptor : PropertyDescriptor){
        const method = descriptor.value;
        descriptor.value = function(request : {token : string, body : string}){
            if(request.token != '123'){
                console.log('403 forbiden!!');
            }else{
                const bindingOriginalFunction = method.bind(this);
                const result = bindingOriginalFunction(request)
                return result;
            }
        }
    }
}

/**
 * PropertyDescriptor
 * writable: Indica si la propiedad puede ser modificada
 * enumerable: Indica si la propiedad puede ser accedida a traves de un for loop
 * value: El valor almacenado en la propiedad
 * configurable: Indica si el property descriptor puede ser modificado
 * 
 * Metodos
 * Object.getOwnPropertyDescriptor(variable, propiedad): 
 * Object.defineProperty(variable, propiedad, {propert descriptor a modificar})
 */

function registerEndpoint(target : any){
    const className : string = target.name;
    const endPoint : string = '/' + className.toLowerCase();
    httpServer[endPoint] = new target()
}

//registerEndpoint(Families);
//registerEndpoint(Castles);
console.log(httpServer['/castles'].get());
httpServer['/castles'].post({token: '123', body: 'Castle Black'});
console.log(httpServer['/castles'].get());