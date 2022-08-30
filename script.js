// Assignment Code
var generateBtn = document.querySelector("#generate");

// Choose string randomly
function randomString(stringLength, characterSet)  {
  const charSet = characterSet
  let randomString = '';
  for (let I = 0; I < stringLength; I++) {
     let randomPoz = Math.floor(Math.random() * charSet.length);
     randomString += charSet.substring(randomPoz,randomPoz+1);
  };
  return randomString;
};

// Series of prompts for password criteria
// Password criteria
function generatePassword(lengthOfPassword, lowercase, uppercase, numeric, specialCharacters){
  
  // LengthOfPassword (at least 8 characters and no more than 128 characters)
if (lengthOfPassword >= 8 && lengthOfPassword <=128 ) {
  var characterSet = ''

    // Character types (lowercase)
    if (lowercase){
      characterSet = characterSet + "abcdefghijklmnopqrstuvwxyz"
    }

    // Character types (uppercase)
    if (uppercase){
      characterSet = characterSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    // Character types (numeric)
    if(numeric) {
      characterSet = characterSet + "123456789"
    }

    // Character types (specialCharacters)
    if(specialCharacters) {
      characterSet = characterSet + " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
      return randomString(lengthOfPassword, characterSet)
  }
  
}

// Validate input and check if the selected character type(s) is included 
function validateInput(originalPassword, passwordOptions) {

  // Split a string into an array of substrings
  var generatedPasswordAsArray = originalPassword.split("")

  var hasLowercase = false
  var hasUppercase = false
  var hasNumeric = false
  var hasSpecialCharacters = false

  generatedPasswordAsArray.array.forEach(passwordCharacter => {
    if(passwordOptions.lowercase){
      if(characterSet.includes(passwordCharacter)) {
        hasLowercase = true;
      }
    }

      if(passwordOptions.uppercase){
        if(characterSet.includes(passwordCharacter)) {
          hasUppercase = true;
        }
      }

      if(passwordOptions.numeric) {
        if(characterSet.includes(passwordCharacter)) {
          hasNumeric = true;
        }
      }
      
      if(passwordOptions.specialCharacters){
        if(characterSet.includes(passwordCharacter)) {
          hasSpecialCharacters = true;
      }
    } 
  });
}

// Update input if one of the character types is ticked but not included
function updateInput() {
if(passwordOptions.lowercase) {
  if(!hasLowercase) {
    generatedPasswordAsArray[0] = randomString(1, "abcdefghijklmnopqrstuvwxyz")
  }
}

  if(passwordOptions.uppercase) {
    if(!hasUppercase) {
      generatedPasswordAsArray[1] = randomString(1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
  }

  if(passwordOptions.numeric) {
    if(!hasNumeric) {
      generatedPasswordAsArray[2] = randomString(1, "123456789")
    }
  }

  if(passwordOptions.specialCharacters) {
    if(!hasSpecialCharacters) {
      generatedPasswordAsArray[3] = randomString(1, "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
    }
  }

  // Return an array as a string 
  return generatedPasswordAsArray.join("")
}



// Write password to the #password input
function writePassword(){

  var htmlLengthOfPassword = document.querySelector("#lengthOfPassword").value;

  var htmlLowerCase = document.querySelector("#lowerCase").checked;
  var htmlUpperCase = document.querySelector("#upperCase").checked;
  var htmlNumeric = document.querySelector("#numeric").checked;
  var htmlSpecialCharacters = document.querySelector("#specialCharacters").checked;

  // At least one character type should be selected, if not return alert
  if (!htmlLowerCase && !htmlUpperCase && !htmlNumeric && !htmlSpecialCharacters) {
    alert("You must pick one option");
  }
  
  else {
    var password = generatePassword(
      htmlLengthOfPassword,
      htmlLowerCase,
      htmlUpperCase,
      htmlNumeric,
      htmlSpecialCharacters,
    );

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  // Output password to the console to double check 
  console.log(password)

  } 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
