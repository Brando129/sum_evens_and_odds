/*Write a function that takes a list of numbers and returns a list with two elements:

The first element should be the sum of all even numbers in the list.
The second element should be the sum of all odd numbers in the list.*/


function sumEvenOdd(listOfNumbers) {
    "use strict";
  
    // Initialize variables
    let evenSum = 0;
    let oddSum = 0;
  
    // Loop through the list of numbers
    for (let number of listOfNumbers) {
      // Check if the number is even
      if (number % 2 === 0) {
        // Add the number to the even sum
        evenSum += number;
      } else {
        // Add the number to the odd sum
        oddSum += number;
      }
    }
  
    // Return a list with the two sums
    return [evenSum, oddSum];
  }

console.log(sumEvenOdd([1,2,3,4,5,6,7,8,9]))