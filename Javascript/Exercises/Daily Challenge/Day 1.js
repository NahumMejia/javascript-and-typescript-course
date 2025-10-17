// Exercise 1: Sum even numbers in an array
// Description: Given an array of numbers, write a function that sums all the even numbers in the array.

const numbers = [2, 4, 6, 8, 1];
var sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum += numbers[i];m
    } else {
        console.log('pass');
    }
}

console.log(sum);
