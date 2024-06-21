enum Role {
    Doctor,
    Cirujano,
    Enfermero,
    Admnistrativo
}

/**Declaración de una interfaz */
interface Staff {
    nombre: string,
    email: string,
    role: Role
}

interface Billable {
    total: number,
    currentBill(): string
}

const cirujano = {
    nombre: 'Fernando',
    email: 'fer@gmail.com',
    role: Role.Cirujano,
    total: 20,
    currentBill(){
        return `Valor actual de la factura es de ${this.total}`
    }
}

const imprimirStaff = (staff : Staff) => {
    console.log(staff);
} 

const imprimircurrentBill = (bill : Billable) => {
    console.log(bill.currentBill());
} 

imprimirStaff(cirujano);
imprimircurrentBill(cirujano);
/**
 * Diferencias entre `interface` y `type` en TypeScript
 *
 * Aspecto                         | `interface`                        | `type`
 * --------------------------------|------------------------------------|----------------------------------------
 * Extensibilidad                  | Puede extender múltiples interfaces| Puede crear intersecciones (`&`)
 * Implementación en Clases        | Sí                                 | No
 * Fusiones Automáticas            | Sí                                 | No
 * Representación de Tipos Complejos| Limitada                           | Muy flexible
 * Uso Común                       | Describir la forma de objetos      | Alias de tipos, tipos complejos
*/