// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_"]
var mainString = [];
var randomPassword = "";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var passwordLength = prompt("Please enter number of characters for new password. It may be between 8 and 128 characters.");
  if(!passwordLength || passwordLength <=7 || passwordLength >=129) {
    return alert("Invalid Input. Please try again.");
  }

var useLower = confirm("Would you like new password to use lower case letters?");
if(useLower === true) {
  mainString = mainString.concat(lowerCase);
}

var useUpper = confirm("Would you like new password to use upper case letters?");
if(useUpper === true) {
  mainString = mainString.concat(upperCase);
} 

var useNumbers = confirm("Would you like new password to use Numbers?");
if(useNumbers === true) {
  mainString = mainString.concat(numbers);
}

var useSpecial = confirm("Would you like new password to use Special Characters?");
if(useSpecial === true) {
  mainString = mainString.concat(specialChars);
}

var randomPassword = "";
for (var i = 0; i < passwordLength; i++) {
  randomPassword += mainString[Math.floor(Math.random() * (mainString.length))];
console.log(Math.floor(Math.random() * (mainString.length)));
console.log(randomPassword);
}
return randomPassword;
}
