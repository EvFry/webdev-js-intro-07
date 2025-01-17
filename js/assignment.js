"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Function to return the remainder of two numbers
function returnTheRemainder(num1, num2) {
    return num1 % num2;
}

// Function to check if a number is even
function checkIfEven(num) {
    return num % 2 === 0;
}

// Function to get the fourth element from the array
function getTheFourthElement(arr) {
    return arr[3]; // Arrays are zero-indexed, so the fourth element is at index 3
}

// Render the output in the HTML elements
function render() {
    // Call functions and log the result to the HTML
    remainderElement.textContent = returnTheRemainder(5, 4);  // Expected: 1
    checkIfEvenElement.textContent = checkIfEven(47);  // Expected: false
    lostNumbersElement.textContent = getTheFourthElement(lostNumbers);  // Expected: 16
}

// Event listener for the submission button
submissionBtn.addEventListener("click", function () {
    render();
});