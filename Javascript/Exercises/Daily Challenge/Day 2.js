// Exercise 2: Check if a word is a palindrome
// Description: Given a word, write a function that checks if the word is a palindrome (a word that reads the same backward as forward).

var word = "madam";

word = word.toUpperCase().trim();

var reversedWord = word.split('').reverse().join('')
//Split method converts the string to an array
//Reverse method reverse the new array
//Join method join again the new array into a new string
if (word === reversedWord){
    console.log('It\'s a palindrome');
}
else{
    console.log('It\'s not a palindrome');
}