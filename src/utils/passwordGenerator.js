const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=|/.,:;[]{}";

export function passwordGenerator(
  length,
  isUppercase,
  isLowercase,
  isNumbers,
  isSymbols
) {
  let password = "";
  let characters = "";
  characters += isUppercase ? uppercaseLetters : "";
  characters += isLowercase ? lowercaseLetters : "";
  characters += isNumbers ? numbers : "";
  characters += isSymbols ? symbols : "";

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
