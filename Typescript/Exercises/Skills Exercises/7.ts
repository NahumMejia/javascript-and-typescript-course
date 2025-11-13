//7.-Generics
/*Create a generic function that returns the first element of an array of any type. */

function firstElement<T>(array: T[]): T | undefined{
    if(array.length == 0){
        return undefined;
    }
    else{
        return array[0];
    }
}