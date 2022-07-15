// Assignment Code
var generateBtn = document.querySelector("#generate");

// Elements
var lowecase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["<",">","?",":",")","(","&","*","&","^","%","$","#","@","!","~"];


// Expected return output
let useUpperCase = false
let useLowerCase = false
let usespecial = false
let usenumbers = false

let password = []

// Write password to the #password input

// function 
function writePassword(lenght) {
// windows alert
  var passwordhtml = document.querySelector("#password");
  var numChar = window.prompt ("Lenght of the password?");
  useUpperCase = window.confirm ("Include Uppercase?");
  useLowerCase = window.confirm ("Include Lowercase?");
  usespecial = window.confirm ("Include Special elements?");
  usenumbers = window.confirm ("Include numbers?");
//
  if(useUpperCase){
    password += uppercase;
  }

  if(useLowerCase){
    password += lowecase;
  }

  if(usespecial){
    password += special;
  }

  if (usenumbers) {
    password += numbers;
  }
  
  if (!uppercase && !lowerCase && !numbers && !special) {
  }
  
  
  // var password = newpassword;
  
  
  
  var newpassword = "";
  console.log(typeof(password));
  
  // random generate new password
  for(var i = 0; i < numChar; i++) {
    var passwordText = Math.floor(Math.random() * password.length);
    newpassword += password.charAt(passwordText);
   console.log(passwordText);
  }
   
  console.log(passwordhtml);
// Send textContent from java to destination
  passwordhtml.textContent = newpassword;
  

 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
