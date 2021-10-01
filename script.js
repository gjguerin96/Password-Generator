// Assignment Code
var generateBtn = document.querySelector("#generate");


//arrays for the 4 character types available
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
var specCharArray = ["!","@","#","$","%","&","*","_","-","=","+","?","~"]

function generatePassword() {
  var passLength = parseInt(prompt("Please enter desired password length, 8-128 characters."));

  //stops the function if user enters an incompatible value
  if (passLength < 8 || passLength > 128){
    window.alert("Length must be between 8 and 128")
    return null
  }
  if(Number.isNaN(passLength)){
    alert("Please enter a number")
    return null
  }

  //assigns booleans for the 4 character types
  var lowerCase = confirm("Do you want lowercase letters?")
  var upperCase = confirm("Do you want uppercase letters?")
  var numbers = confirm("Do you want numbers?")
  var specChar = confirm("Do you want special characters?")
  
  if (lowerCase===false && upperCase===false && numbers===false && specChar===false){
    window.alert("You must select at least one option")
    return null
  }

  // var passwordOptions = {
  //   length: passLength,
  //   hasLowerCase: lowerCase,
  //   hasUpperCase: upperCase,
  //   hasNumbers: numbers,
  //   hasSymbols: specChar
  // }
  
  // creates an empty array and then assigns character types to it based on what the user selected
  var availChar = []

  if (lowerCase===true){
    availChar = availChar.concat(lowerCaseArray)
  }
  if(upperCase===true){
    availChar = availChar.concat(upperCaseArray)
  }
  if(numbers===true){
    availChar = availChar.concat(numbersArray)
  }
  if(specChar===true){
    availChar = availChar.concat(specCharArray)
  }
  
  //returns a random string of the selected character types
  var passArray = []
  for (var i = 0; i < passLength; i++) {
    var ranChar = Math.floor(Math.random() * availChar.length)
    var comChoice = availChar[ranChar] 
    passArray.push(comChoice)
  }
  password = passArray.join("")
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);