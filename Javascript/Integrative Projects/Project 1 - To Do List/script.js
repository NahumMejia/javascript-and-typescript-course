function addTask(){

    //Get the value from the Text Frield
    let textFromTheField = document.getElementById('userText').value;

    //Checks if the textField it's empty
    if(textFromTheField.trim() === ''){
        alert('Add something');
    }else
        {
        //Create the li HTML element
        let newLiElement = document.createElement('li');
        newLiElement.textContent = textFromTheField;

        //Create the delete button on the li element
        let deleteButton = document.createElement('button');
        deleteButton.textContent = ' x ';
        
        //Attach the delete button on the li element
        newLiElement.appendChild(deleteButton);
        
        //Delete functionality
        deleteButton.addEventListener('click', function(){
            newLiElement.remove();
        })
        
        //Show the li on DOM
        let father = document.getElementById('taskList');
        father.appendChild(newLiElement);

        //Clean Input
        let input = document.getElementById('userText');
        input.value = '';
    }
}