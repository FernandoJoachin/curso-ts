/** Declaración de Variables */
// Anotacion de tipos - Se indica a ts que tipo de dato usar en una variable
let saludo : string = 'Hola mundo';
// Inferencia de tipos - ts se encarga de asignar el tipo de dato dependiendo del valor inicial de la variable
let despedida = "Adios mundo";

/**Declaración de objetos */
let persona : {
    nombre: string,
    edad: number
    fechaNacimiento: {
        day: string,
        month: string,
        year: string
    }
} = {
    nombre: 'Fernando',
    edad: 22,
    fechaNacimiento: {
        day: '7',
        month: '11',
        year: '2002'
    }
}
/**Declaración de arreglos */
let frutas : string[] = ['manzana', 'banana', 'cereza'];
let mix : any[] = [1, 'manzana', 2, 'banana'];

/**Declaración de tuplas */
type vehiculoType = [string, number, string];
let vehiculo : vehiculoType = ['ferrari', 2012, 'azul'];
let moto : vehiculoType = ['yamaha', 2002, 'verde oscuro'];

/**Declaracion de Enum */
enum DiasSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

let diaActual : DiasSemana = DiasSemana.Lunes;


/**Declaracion de Any */
let mix2 : any[] = [1, 'manzana', 2, 'banana'];

/**Declaracion de Union */
function imprimirId(id: number | string) {
    console.log(`El ID es: ${id}`);
}

imprimirId(101); 
imprimirId("ABC");

/**Declaracion de Literal */
let esActivo: true;
let coche: 'ferrari';