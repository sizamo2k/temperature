
//function to convert fahrenheit to celsius
function convertToC() {
    //takes user input of the TempValue and uses parseFloat to make sure it returns a floating pt number 
    var fTempVal = parseFloat(document.getElementById("fTemp").value);  
    //takes the ftemp number and performs the calculation to get the celsius temp
    var cTempVal = (fTempVal - 32) * (5 / 9);
    //returns the value of cTemp
    document.getElementById("cTemp").value = cTempVal;
}


//function to convert from celsius to fahrenheit 
function convertToF() {
    //takes user input of the ctempvalue and uses parseFloat to make sure it returns a floating pt number 
    var cTempVal = parseFloat(document.getElementById("cTemp").value);
    //takes the ctemp number and performs the calculation to get the fahrenheit temp
    var fTempVal = (cTempVal * (9 / 5)) + 32;
    //returns the value of fTemp
    document.getElementById("fTemp").value = fTempVal;
}
