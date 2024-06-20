// Modo watch: tsc archivo.ts -w
// Modo watch en multiples archivos: tsc -init, tsc -w

// Exclude: Para exclusivar la compilacion de archivos ts (Se puede poner patrones)
// Include: Para incluir que archivos ts se van a compilar (Se puede poner patrones como **/*.dev.ts)
// Files: Para incluir que archivos ts se van a compilar pero se tiene que poner archivo por archivo (No se puede poner patrones)

// Target en tsconfig.json: Sirve para indicar desde que versión de JavaScript tendra que compilarse el archivo TS
//Lib en tsconfig.json: Si se activa, se tiene que poner las librerias de manera manual para trabajar con la versión de JS escrita en el Target. Ejemplo: "lib": ["DOM", "ES6"]

// SourceMap en tsconfig.json: Si se activa nos permite crear archivos .map de los archivos TS

// noEmitOnError en tsconfig.json: Si se activa impide que se genere un archivo JS si hubo un error en el archivo TS

//OutDir en tsconfig.json: Si se activa nos permite especificar el directorio donde se colocará el código JavaScript compilado.
//RootDir en tsconfig.json: Sirve para especificar el directorio raíz donde va a buscar los archivos TS que tiene que compilar
//removeComments en tsconfig.json: Si se activa nos permite generar un archivo JS sin los comentarios hechos en el archivo TS

//Strict en tsconfig.json : Habilita el modo estricto de JavaScrip.
/* 
1. noImplicitAny Permite el uso de variables y parámetros sin tipos explícitos.
2. strictNullChecks Permite que `null` y `undefined` sean asignables a cualquier otro tipo. Puedo poner ! al final para evitar cuando uso querySelector y puede ser null
3. strictFunctionTypes Permite asignaciones de funciones menos seguras.
4. strictBindCallApply Permite usos menos seguros de los métodos `bind`, `call` y `apply`.
5. strictPropertyInitialization Permite que las propiedades de una clase no se inicialicen en el constructor.
6. noImplicitThis Permite que `this` sea de tipo `any` si no está explícitamente tipado.
7. alwaysStrict No añade `"use strict";` automáticamente en el código generado.
8. noImplicitReturns Permite funciones con caminos de código que no devuelven un valor.
9. noFallthroughCasesInSwitch Permite que los casos en `switch` caigan a través de otros casos sin un `break`.
10. noUnusedLocals Permite la existencia de variables locales no utilizadas.
11. noUnusedParameters Permite la existencia de parámetros de función no utilizados.
12. strictBindCallApply Permite usos menos seguros de los métodos `bind`, `call` y `apply`.
13. useUnknownInCatchVariables Permite que las variables de captura en bloques `catch` sean de tipo `any` en lugar de `unknown`. */