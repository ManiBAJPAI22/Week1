/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

//my solution

function isAnagram(str1, str2) {
  const string1 = str1.split("").sort().join("");
  const string2 = str2.split("").sort().join("");

  if (string1 === string2) {
    return "True";
  } else {
    return "False";
  }
}
const a = isAnagram("car", "acr");
console.log(a);