//4.-Typed arrays
/*Create a function that takes an array of numbers as a parameter and returns only the even numbers. */

function onlyEvenNumber(numbers: number[]){
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 != 1){
            console.log(numbers[i]);
        }
        else{
            console.log(numbers[i]);
        }
    }
}