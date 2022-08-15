//Welcome message!
confirm("Welcome to the password generator; Krypton Encryption!")

document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() {
    var userLowerCase = prompt("Please pick a password length more than 8 and less than 14.");
    alert ("You picked: " + userLowerCase + "!");
}

console.log (userLowerCase);
// I used this site as a reference: https://stackoverflow.com/questions/37287093/starting-a-javascript-prompt-after-a-button-is-clicked.

//Picking password length
/*const aNumber = Number(window.prompt
 ("Please pick a password length more than 8 and less than 12.", ""));

    console.log (aNumber);

 const lowerCase = String(window.prompt
    ("Do you want lowercase?", ""));

    console.log (lowerCase);

   // then confirm("You have picked" aNumber, "!");

 //This is here for debugging purposes to see what passes through  



//Do you want lowercase letters?
    /*var lowerCase = (window.prompt
    ("Do you want lowercase letters?", ""));
 
    if lowerCase = "yes" {      
        lowerCase = true;
    } else {
        lowerCase = false;
    }

console.log (lowerCase);
*/

/*var lowerCase = prompt("Do you want lowercase letters?");

if (lowerCase != null) {
    prompt("You have chosen" + lowerCase "!")


}
*?


/*
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/