//6.-Type Guards
/*Implement a function that determines if a parameter is of type string using type guards. */

function isString(variable: unknown): variable is string{
    return typeof variable === 'string';
}

isString('hola');
isString(2);