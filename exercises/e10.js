// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let namesWithA = [];
   for (let i = 0; i < array.length; i++) {
    let name = array[i].name;
    for (let j = 0; j < name.length; j++) {
        let letterOne = name.charAt(j);
        if (letterOne.toLowerCase() === letter.toLowerCase()) {
            namesWithA.push(name);
            break;
        }
    }
  }
  return namesWithA ;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
