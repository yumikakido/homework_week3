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

    var initialStringAsArray = Array.from(randomString(lengthOfPassword, characterSet))
    //give random number/character (e.g. Array.from("ABCDefgh")) instead of randomString to check if validation function works

    var hasLowercase = false
    var hasUppercase = false
    var hasNumeric = false
    var hasSpecialCharacters = false

    if (lowercase) {
      initialStringAsArray.forEach(eachCharacter => {
        if("abcdefghijklmnopqrstuvwxyz".includes(eachCharacter)) {
          hasLowercase = true
        }
      })
      if (!hasLowercase) {
        initialStringAsArray[0] = randomString(1, "abcdefghijklmnopqrstuvwxyz")
      }
    }

    if (uppercase) {
      initialStringAsArray.forEach(eachCharacter => {
        if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(eachCharacter)) {
          hasUppercase = true
        }
      })
      if (!hasUppercase) {
        initialStringAsArray[1] = randomString(1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      }
    }

    if (numeric) {
      initialStringAsArray.forEach(eachCharacter => {
        if("123456789".includes(eachCharacter)) {
          hasNumeric = true
        }
      })
      if (!hasNumeric) {
        initialStringAsArray[2] = randomString(1, "123456789")
      }
    }
    
    if (specialCharacters) {
      initialStringAsArray.forEach(eachCharacter => {
        if("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".includes(eachCharacter)) {
          hasSpecialCharacters = true
        }
      })
      if (!hasSpecialCharacters) {
        initialStringAsArray[3] = randomString(1, "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
      }
    }

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
