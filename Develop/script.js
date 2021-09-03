// Assignment code here
var resetAll = function() {
  passwordLength = 0;
  charset = "";
  passwordText = "";
};

var getPasswordLength = function() {
  while (!passwordLength) {
    passwordLength = parseInt(window.prompt("How many characters would you like for your password (8 minimum, 128 maximum)"));
    if (Number.isInteger(passwordLength)) {
      console.log("Password Length: " + passwordLength);
      if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please enter a value between 8 and 128.");
        resetAll();
      }
      else {
        return passwordLength;
      }
    }
    else {
      window.alert("Please enter a numeric value.");
      resetAll();
    }
  }
};

var getLowercaseChars = function() {
  includeLowercase = window.confirm("Would you like to include lowercase characters?");
  if (includeLowercase) {
    lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  }
  else {
    lowercaseChars = "";
  }
  return lowercaseChars;
};

var getUpperCaseChars = function() {
  includeUpperCase = window.confirm("Would you like to include uppercase characters?");
  if (includeUpperCase) {
    uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else {
    uppercaseChars = "";
  }
  return uppercaseChars;
};

var getNumericChars = function() {
  includeNumbers = window.confirm("Would you like to include numbers?");
  if (includeNumbers) {
    numericChars = "0123456789";
  }
  else {
    numericChars = "";
  }
  return numericChars;
};

var getSpecialChars = function () {
  includeSpecial = window.confirm("Would you like to include special characters?");
  if (includeSpecial) {
    specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  else {
    specialChars = "";
  }
  return specialChars;
};

var generatePassword = function() {
  resetAll();
  length = getPasswordLength();
  charset = getLowercaseChars() + getUpperCaseChars() + getNumericChars() + getSpecialChars();
  if (!charset) {
    window.alert("You need to select which characters you want. Please refresh the page to restart.")
  };
  console.log("Password Length: " + length);
  console.log("Character Set: " + charset);
  for (var i = 0; i < length; i++) {
    passwordText += charset[Math.floor(Math.random() * charset.length)];
  }
  console.log("Password: " + passwordText);
  return passwordText;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
