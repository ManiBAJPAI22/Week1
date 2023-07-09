function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      // cleanedStr.length - 1 - i : reversing the string

      return false;
    }
  }

  return true;
}

const input = isPalindrome("Racecar");
console.log(input);

// (/[^a-z0-9]/g, "" ) : this is used to replce non-alphanumeric character with ""
