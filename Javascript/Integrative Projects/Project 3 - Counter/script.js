var textLabel = document.getElementById('countLabel');
var count = 0;

function sum(){
    count++;
    textLabel.textContent = count;
}
function subtract(){
    count--;
    textLabel.textContent = count;
}
function restart(){
    count = 0;
    textLabel.textContent = count;
}
