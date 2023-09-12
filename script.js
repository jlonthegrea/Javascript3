// Assignment code here
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['!', '#', '$', '%', '&', '-', '(', ')', '*', '+', '?', '=', '@', '>', '<']
var numberCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



console.log(specialCharacters);
console.log(numberCharacters);
console.log(lowerCase);
console.log(upperCase);

function getPassword() {
var userPassword = "";


  var passwordLength = prompt( " How many characters would you like in the password? ");
  console.log(passwordLength);
  if (Number.isNaN(passwordLength)) {
    alert( " Password length must be a number. ");
    return passwordLength;
  }
  if (passwordLength < 8) {
    alert( " Password must be atleast 8 charcters. ");
    return passwordLength;
  }
  if (passwordLength > 128) {
    alert( " Password cannot exceed 128 characters. ");
    return passwordLength;
  }
  var hasSpecialCharacters = confirm(
    " Click OK for Special Character(s). "
  );
  var hasNumberCharacters = confirm(
    " Click OK for Number(s). "
  );
  var hasLowercase = confirm(
    " Click OK for lowercase character(s). "
  );
  var hasUppercase = confirm(
    " Click OK for uppercase characters(s). "
  );
  if (hasSpecialCharacters) {
  }else if (hasNumberCharacters) {
  }else if (hasLowercase) {
  }else if (hasUppercase) {
  }else {
    alert ( " Password must conatain atleast one of the criteria. ")
  }
  var getPassword = {
    passwordLength,
    hasSpecialCharacters,
    hasNumberCharacters,
    hasLowercase,
    hasUppercase
  };

  return getPassword;
}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random()* arr.passwordLength);
  var randElement = arr[randIndex];
}

function generatePassword() {
  var options = getPassword ();
  var currentArr = new Array ()
  if (options.hasSpecialCharacters){
    currentArr = currentArr.concat(specialCharacters)
  }
  if (options.hasNumberCharacters){
    currentArr = currentArr.concat(numberCharacters)
  }
  if (options.hasLowercase){
    currentArr = currentArr.concat(lowerCase)
  }
  if (options.hasUppercase){
    currentArr = currentArr.concat(upperCase)
  }
  console.log(currentArr)

 let i = 0
 while ( i < options.passwordLength) {
  userPassword += getRandom(currentArr);
  i++
 }
  return userPassword
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
