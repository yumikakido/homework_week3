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

    // Validate input to check if selected character type(s) is included
    //  Create array from string to go through randomString one by one
    var initialStringAsArray = Array.from(randomString(lengthOfPassword, characterSet))
    // Pass random number/character (e.g. Array.from("ABCDefgh")) instead of randomString to check if validation function works

    var hasLowercase = false
    var hasUppercase = false
    var hasNumeric = false
    var hasSpecialCharacters = false

    // If lowercase is selected and included, return true and no update is required 
    if (lowercase) {
      initialStringAsArray.forEach(eachCharacter => {
        if("abcdefghijklmnopqrstuvwxyz".includes(eachCharacter)) {
          hasLowercase = true
        }
      })
      // If lowercase is selected but not included, update array[0]
      if (!hasLowercase) {
        initialStringAsArray[0] = randomString(1, "abcdefghijklmnopqrstuvwxyz")
      }
    }

    // If uppercase is selected and included, return true and no update is required 
    if (uppercase) {
      initialStringAsArray.forEach(eachCharacter => {
        if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(eachCharacter)) {
          hasUppercase = true
        }
      })
      // If uppercase is selected but not included, update array[1]
      if (!hasUppercase) {
        initialStringAsArray[1] = randomString(1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      }
    }

    // If numeric is selected and included, return true and no update is required 
    if (numeric) {
      initialStringAsArray.forEach(eachCharacter => {
        if("123456789".includes(eachCharacter)) {
          hasNumeric = true
        }
      })
      // If numeric is selected but not included, update array[2]
      if (!hasNumeric) {
        initialStringAsArray[2] = randomString(1, "123456789")
      }
    }

    // If specialCharacters is selected and included, return true and no update is required 
    if (specialCharacters) {
      initialStringAsArray.forEach(eachCharacter => {
        if("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".includes(eachCharacter)) {
          hasSpecialCharacters = true
        }
      })
      // If specialCharacter is selected but not included, update array[3]
      if (!hasSpecialCharacters) {
        initialStringAsArray[3] = randomString(1, "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
      }
    }
    // Return an array as a string
    return initialStringAsArray.join('')
  }
  
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
    alert("You must pick one option to proceed.");
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
