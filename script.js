const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

    var passwordSettings = promptPasswordSettings();

    if(passwordSettings){
        var password = generatePassword(passwordSettings);
    	passwordText.value = password;
        passwordText.classList.add("success");
    }


}

function generatePassword(passwordSettings) {
    var collection = [];
	if(passwordSettings.lowercase){
        collection.push(...lowercase);
    }
    if(passwordSettings.uppercase){
        collection.push(...uppercase);
    }
    if(passwordSettings.numeric){
        collection.push(...numeric);
    }
    if(passwordSettings.specialChars){
        collection.push(...specialChars);
    }
    return collection.sort(() => Math.random() - 0.5).slice(0, passwordSettings.length).join('');
}

function promptPasswordSettings(){
    var passwordSettings = {
        length: null,
        lowercase: false,
        uppercase: false,
        numeric: false,
        specialChars: false
    };
    try
    {
        //password length and validation
        var passwordLength = Number(prompt("How long?"));
        if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
            throw "password length";
        }
        passwordSettings.length = passwordLength;

        //lower case
        var passwordLowercase = prompt("Would you like lowercase characters?");
        if(passwordLowercase == 'Yes' || passwordLowercase == 'yes'){
            passwordSettings.lowercase = true;
        }

        //uppercase
        var passwordUppercase = prompt("Would you like uppercase characters?");
        if(passwordUppercase == 'Yes' || passwordUppercase == 'yes'){
            passwordSettings.uppercase = true;
        }

        //numeric
        var passwordNumeric = prompt("Would you like numberic characters?");
        if(passwordNumeric == 'Yes' || passwordNumeric == 'yes'){
            passwordSettings.numeric = true;
        }

        //special characters
        var passwordSpecialChars = prompt("Would you like special characters?");
        if(passwordSpecialChars == 'Yes' || passwordSpecialChars == 'yes'){
            passwordSettings.specialChars = true;
        }

        //check to make sure atleast one prompt is true
        if(passwordSettings.lowercase == false && passwordSettings.uppercase == false && passwordSettings.numeric == false && passwordSettings.specialChars == false){
            throw "options";
        }

        return passwordSettings;

    } catch (e)
    {
        alert(`There's been an error with your ${e} input`);
		passwordText.classList.add("error");
        return null;
    }


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
