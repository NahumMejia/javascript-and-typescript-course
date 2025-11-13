//5.-Union types
/*Create a function that accepts a parameter that can be either a string or a number, 
and returns its length (if it's a string) or double its value (if it's a number). */

function numberOrString(variable:number | string){
    if(typeof variable === 'string'){
        return variable.length;
    }
    else{
        return variable * 2;
    }
}

numberOrString('hola');
numberOrString(5);