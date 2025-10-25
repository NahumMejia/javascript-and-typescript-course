function convert(){
    //Get the value in the first input
    var userNumber = Number(document.getElementById('user-input').value);
    //Verify if it's a valid number
    if(isNaN(userNumber)){
        window.alert('Submit a valid number');
    }
    //Principal procedure
    else{
        //Get the Original Temperature Scale value
        var originalTemperatureScale = document.getElementById('initial-scale').value;
        //Get the value from the required scale
        var userConvertScale = document.getElementById('to-scale').value;
        //Concat both original scale and required scale to have better cases on the switch
        var conversion = originalTemperatureScale.concat("-", userConvertScale);
        var convertedNumber;
        switch(conversion){
            case "Celsius-Fahrenheit":
                convertedNumber = ((userNumber * 1.8) + 32);
                break;
            case "Celsius-Kelvin":
                convertedNumber = (userNumber +  273.15);
                break;
            case "Celsius-Celsius":
                window.alert('The scales are the same');
                convertedNumber = userNumber;
                break;
            case "Fahrenheit-Celsius":
                convertedNumber = ((userNumber - 32)/1.8);
                break;
            case "Fahrenheit-Kelvin":
                convertedNumber = (((userNumber - 32) / 1.8) + 273.15);
                break;
            case "Fahrenheit-Fahrenheit":
                window.alert('The scales are the same');
                convertedNumber = userNumber;
                break;
            case "Kelvin-Celsius":
                convertedNumber = (userNumber - 273.15);
                break;
            case "Kelvin-Fahrenheit":
                convertedNumber = (((userNumber - 273.15) * 1.8) + 32)
                break;
            case "Kelvin-Kelvin":
                window.alert('The scales are the same');
                convertedNumber = userNumber;
                break;
        }
        var finalScale = document.getElementById('final-scale');
        convertedNumber.toFixed(2);
        finalScale.value = convertedNumber;
    }
}