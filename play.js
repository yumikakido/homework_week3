var characterSet = ''

var lowercase = true
var uppercase = true

if (lowercase) {
  characterSet = 'abcdefghijklmnopqrstuvwxyz'
}

if (uppercase) {
  characterSet =  characterSet + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

console.log(characterSet)