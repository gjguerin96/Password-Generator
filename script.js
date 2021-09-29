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


var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"]
var specCharArray = ["!","@","#","$","%","&","*","_","-","=","+","?","~"]



function generatePassword() {
  var passLength = prompt("Please enter desired password length, 8-128 characters.");

  if (passLength < 8 || passLength > 128){
    window.alert("Length must be between 8 and 128")
    generatePassword()
  }

  var lowerCase = confirm("Do you want lowercase letters?")
  var upperCase = confirm("Do you want uppercase letters?")
  var numbers = confirm("Do you want numbers?")
  var specChar = confirm("Do you want special characters?")
  
  if (lowerCase===false && upperCase===false && numbers===false && specChar===false){
    window.alert("You must select at least one option")
    generatePassword()
  }
  if (lowerCase===false){
    lowerCaseArray = []
  }
  if (upperCase===false){
    upperCaseArray = []
  }
  if (numbers===false){
    numbersArray = []
  }
  if (specChar===false){
    specCharArray = []
  }

  //if (lowerCase===true && upperCase===true && numbers===true && specChar===true){
    var availChar = lowerCaseArray.concat(upperCaseArray,numbersArray,specCharArray)
    var passArray = []
    for (var i = 0; i < passLength; i++) {
      var ranChar = Math.floor(Math.random() * availChar.length)
      var comChoice = availChar[ranChar]
      passArray.push(comChoice)
    }
    password = passArray.join("")
    window.alert(password)
  //}

  // else if (lowerCase===true && upperCase===true && numbers===true && specChar===false){
  //   var availChar = lowerCaseArray.concat(upperCaseArray,numbersArray)
  //   var passArray = []
  //   for (var i = 0; i < passLength; i++) {
  //     var ranChar = Math.floor(Math.random() * availChar.length)
  //     var comChoice = availChar[ranChar]
  //     passArray.push(comChoice)
  //   }
  //   password = passArray.join("")
  //   window.alert(password)
  // }

  // else if (lowerCase===true && upperCase===true && numbers===false && specChar===false){
  //   var availChar = lowerCaseArray.concat(upperCaseArray)
  //   var passArray = []
  //   for (var i = 0; i < passLength; i++) {
  //     var ranChar = Math.floor(Math.random() * availChar.length)
  //     var comChoice = availChar[ranChar]
  //     passArray.push(comChoice)
  //   }
  //   password = passArray.join("")
  //   window.alert(password)
  // }

  // else if (lowerCase===true && upperCase===false && numbers===false && specChar===false){
  //   var availChar = lowerCaseArray
  //   var passArray = []
  //   for (var i = 0; i < passLength; i++) {
  //     var ranChar = Math.floor(Math.random() * availChar.length)
  //     var comChoice = availChar[ranChar]
  //     passArray.push(comChoice)
  //   }
  //   password = passArray.join("")
  //   window.alert(password)
  // }

  // else if (lowerCase===true && upperCase===false && numbers===true && specChar===false){
  //   var availChar = lowerCaseArray.concat(numbersArray)
  //   var passArray = []
  //   for (var i = 0; i < passLength; i++) {
  //     var ranChar = Math.floor(Math.random() * availChar.length)
  //     var comChoice = availChar[ranChar]
  //     passArray.push(comChoice)
  //   }
  //   password = passArray.join("")
  //   window.alert(password)
  // }

  
}


generatePassword();