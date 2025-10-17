function WillTheySurvive(){
    //Generate a random number between 1 to 6
    const randomNumber = Math.floor(Math.random() * 6 + 1)
    //Extract the information from the text field
    let userNumber = parseInt(document.getElementById('userTextField').value);

        if(userNumber == randomNumber){
            let userResponse = prompt('You died, Wanna try again? y/n');
            if(userResponse != 'N' && userResponse != 'n'){
                location.reload();
            }
        }else{
            alert('You survived');
        }
}