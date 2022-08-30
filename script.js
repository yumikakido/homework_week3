//Assignment Code
var generateBtn = document.querySelector("#generate");

//choose string randomly
function randomString(stringLength, characterSet)  {
  const charSet = characterSet
  let randomString = '';
  for (let I = 0; I < stringLength; I++) {
     let randomPoz = Math.floor(Math.random() * charSet.length);
     randomString += charSet.substring(randomPoz,randomPoz+1);
  };
  return randomString;
};

// series of prompts for password criteria
// password criteria
function generatePassword(lengthOfPassword, lowercase, uppercase, numeric, specialCharacters){
  
  //lengthOfPassword (at least 8 characters and no more than 128 characters)
if (lengthOfPassword >= 8 && lengthOfPassword <=128 ) {
  var characterSet = ''

    //character types (lowercase)
    if (lowercase){
      characterSet = characterSet + "abcdefghijklmnopqrstuvwxyz"
    }

    //character types (uppercase)
    if (uppercase){
      characterSet = characterSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    //character types (numeric)
    if(numeric) {
      characterSet = characterSet + "123456789"
    }

    //character types (specialCharacters)
    if(specialCharacters) {
      characterSet = characterSet + " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
      return randomString(lengthOfPassword, characterSet)
  }
  
}
 
//Write password to the #password input
function writePassword(){

  var htmlLengthOfPassword = document.querySelector("#lengthOfPassword").value;

  var htmlLowerCase = document.querySelector("#lowerCase").checked;
  var htmlUpperCase = document.querySelector("#upperCase").checked;
  var htmlNumeric = document.querySelector("#numeric").checked;
  var htmlSpecialCharacters = document.querySelector("#specialCharacters").checked;

  // at least one character type should be selected
  if (!htmlLowerCase && !htmlUpperCase && !htmlNumeric && !htmlSpecialCharacters) {
    alert("You must pick one option!");
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
  
  //Double check 
  console.log(password)

  } 
}

// Validate input
function validateInput(originalPassword, passwordOptions) {

  //split a string into an array of substrings
  var generatedPasswordAsArray = originalPassword.split("")

  var hasLowercase = false
  var hasUppercase = false
  var hasNumeric = false
  var hasSpecialCharacters = false

  generatedPasswordAsArray.array.forEach(passwordCharacter => {
    if(passwordOptions.lowercase){
      if(hasLowercase.includes(passwordCharacter)) {
        hasLowercase = true;
      }
    }

      if(passwordOptions.uppercase){
        if(hasUppercase.includes(passwordCharacter)) {
          hasUppercase = true;
        }
      }

      if(passwordOptions.numeric) {
        if(hasNumeric.includes(passwordCharacter)) {
          hasNumeric = true;
        }
      }
      
      if(passwordOptions.specialCharacters){
        if(hasSpecialCharacters.includes(passwordCharacter)) {
          hasSpecialCharacters = true;
      }
    } 
  });
}

//Update input if one of the criteria is ticked but not included
if(passwordOptions.lowercase) {
  if(!hasLowercase) {
    generatedPasswordAsArray[0] = randomString(1, "abcdefghijklmnopqrstuvwxyz")
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
