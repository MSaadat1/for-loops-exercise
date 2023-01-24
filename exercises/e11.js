// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
let withdrawalSums = [];
for (let i = 0; i < array.length; i++) {
    let total = 0;
    if(array[i].hasOwnProperty("withdrawals")){
        for (let j = 0; j < array[i].withdrawals.length; j++) {
            total += array[i].withdrawals[j];
        }
    }else{
        total = 0;
    }
    withdrawalSums.push(total);
}
return withdrawalSums;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
