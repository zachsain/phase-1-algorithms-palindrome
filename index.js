function isPalindrome(word) {
  let reverseStr = ""
  let stringLength =  word.length()

  for (let i = (stringLength - 1); i >= 0; i--) {
    reverseStr = reverseStr + word.charAt(i)
  }
  
}

/* 
  Add your pseudocode here
  want algorithm to accept an arguement of a string
  if string is a palindrome the output = true 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
