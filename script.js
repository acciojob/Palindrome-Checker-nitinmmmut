// complete the given function

// function palindrome(str){

// }
// module.exports = palindrome
function Palindrome(str) {
    return str === str.split('').reverse().join('');
//     The split('') method is used to convert the string into an array of characters.
// The reverse() method is used to reverse the order of the characters in the array.
// The join('') method is used to convert the reversed array of characters back into a string.
}
console.log(Palindrome("madam")); // Output: true
console.log(Palindrome("hello")); // Output: false
