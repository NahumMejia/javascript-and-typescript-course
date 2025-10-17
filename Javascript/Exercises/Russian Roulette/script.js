function WillTheySurvive(){
    //Generate a random number between 1 to 6
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumber);
    
    //Extract the information from the text field
    let userNumber = parseInt(document.getElementById('userTextField').value);
    
    //Validation
    if (!userNumber){
        alert('We need a valid number');
        return;  // Sale de la función
    }
    
    if (userNumber < 1 || userNumber > 6){
        alert('Choose a number between 1 and 6');
        return;
    }
    
    //Remove previous image if exists
    let father = document.getElementById('content');
    let oldImage = document.querySelector('#content img');
    if(oldImage){
        oldImage.remove();
    }
    
    //Create an image HTML element
    let image = document.createElement('img');
    image.width = 200;
    image.height = 200;
    
    //If the user number & the random number are the same, you lose
    if(userNumber === randomNumber){
        image.src = 'Images/Died.jpg';
    }
    //Else you survive
    else{
        image.src = 'Images/Survive.jpg';
    }
    
    //Show the image element
    father.appendChild(image);
}