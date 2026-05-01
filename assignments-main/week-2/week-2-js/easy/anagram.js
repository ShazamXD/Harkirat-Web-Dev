/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // BASE CASE
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
        return false; // since can never be anagram 
    }
  
    // Helper function to sort characters in a string
    function sortString(str) {
        return str.toLowerCase().split('').sort().join('');
    }
    // to convert each character to lower case
    // to convet the string into an array
    // to sort the array 
    // to convert the sorted array back to the sorted string
  
    // Sort and compare the sorted strings
    return sortString(str1) === sortString(str2);
  }
  module.exports = isAnagram;
