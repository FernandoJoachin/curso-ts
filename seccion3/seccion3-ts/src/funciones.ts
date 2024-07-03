/**Declarando el tipo de dato de retorno */
function sumar(a : number, b : number) : number {
    return a + b;
}

const restar = (a : number, b : number) : number => a - b;

function imprimir(callback : (a : number, b : number) => number) : void {
    console.log(callback(10, 2));
}

imprimir(sumar);
imprimir(restar);

/**Diferencia entre void y never */
// El tipo void se utiliza para indicar que una función no devuelve un valor.

// El tipo never se utiliza para indicar que una función no termina de manera normal. Esto significa que la función nunca retorna ningún valor porque siempre lanza una excepción o entra en un bucle infinito.

const throwError = (message : string) : never => {
    throw new Error(message);
}