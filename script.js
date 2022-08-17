//Welcome to my password generator, "Krypton Encryption" lol


//Welcome message!

confirm("Welcome to the password generator; Krypton Encryption!")


var password=document.getElementById("password");

var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
//for simplicity I pooled together uppercase, lowercase, numbers and special characters into one variable, otherwise-
// my code would keep exploding! :(

//Password length prompt
var globalPasswordLength = Number(prompt("Please pick a password length more than 8 and less than 128.",""));

var password = "";

//idea for variable concepts came from https://dev.to/code_mystery/random-password-generator-using-javascript-6a. Credit to website and creator.


//This prompt directs the user to click the Generate Password button to continue the process
confirm("Please click the red 'Generate Password' button that appears next.")


//What made sense to me was to have a series of Event listeners and  simple functions to let users customize their password

//Prompt for lowercase option
document.querySelector('#generate').addEventListener('click', promptMe2);

function promptMe2() {
    var lowerCase = String(window.prompt
        ("Do you want to include lowercase letters?",""));
    alert ("You picked: " + lowerCase + "!");

}

//Prompt for uppercase option
document.querySelector('#generate').addEventListener('click', promptMe3);

function promptMe3() {
    var upperCase = String(window.prompt
        ("Do you want to include uppercase letters?",""));
     alert ("You picked: " + upperCase + "!");
    
 }

 //Prompt for number option
document.querySelector('#generate').addEventListener('click', promptMe4);

function promptMe4() {
    var numbers = String(window.prompt
        ("Do you want to include numbers?",""));
    alert ("You picked: " + numbers + "!");
        
 }  

 //Prompt for special characters
document.querySelector('#generate').addEventListener('click', promptMe5);

function promptMe5() {
     var special = String(window.prompt
        ("Do you want to include special characters?",""));
    alert ("You picked: " + special + "!");
    //Confirm dialog box lets user know where to expect the password to generate
    confirm("Now we will generate your personal password below!")
    
    //This loop returns a random selection from the global characters variable to generate a personal password
    for (var i = 1; i <= globalPasswordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber +1);
       }
    
    //Web API that grabs the password info and gernerate it.
       document.getElementById("password").value = password;
//Basic concept for the for loop came from https://dev.to/code_mystery/random-password-generator-using-javascript-6a. Credit to website and creator.

           
}             



//Note Be Sure to refresh the page immediately after clicking on the link!


//I hoped you enjoyed my attempt at making a javascript password generator! :)