//  chapter 14-16 Assignment # 13-15 JAVASCRIPT

// question no 1

// var studentNames = [];

// question no 2

// var studentNames = new Array();

// question no 3

// var studentNames = ["John", "Jane", "Jim", "Jasmine"];
//  console.log(studentName);
// question no 4

// var numbers = [1, 2, 3, 4, 5];
// console.log(Number);

// question no 5

// var flags = [true, false, true, false, true];
// console.log(flags);

// question no 6

// var mixed = [1, "two", true, [3, 4], {five: 5}];
// console.log(mixed);

//    question no 7
// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("Available Education Qualifications in Pakistan:<br><br>");
// for (var i = 0; i < education.length; i++) {
//   document.write(education[i] + "<br>");
// }

// question 8

// var students = ["John", "Jane", "Jim"];
// var scores = [450, 480, 470];

// for (var i = 0; i < students.length; i++) {
//   var student = students[i];
//   var score = scores[i];
//   var percentage = (score / 500) * 100;
//   console.log("Student: " + student);
//   console.log("Score: " + score);
//   console.log("Percentage: " + percentage + "%");
//   console.log("");
// }

// question 9

// Initialize an array with color names
// var colors = ["Red", "Green", "Blue"];

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array
// var newColor = prompt("What color do you want to add to the beginning?");
// colors.unshift(newColor);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array
// newColor = prompt("What color do you want to add to the end?");
// colors.push(newColor);

// c. Add two more colors to the beginning of the array
// colors.unshift("Purple", "Yellow");

// d. Delete the first color in the array
// colors.shift();

// e. Delete the last color in the array
// colors.pop();

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index
// var index = prompt("At which index do you want to add a color?");
// newColor = prompt("What color do you want to add?");
// colors.splice(index, 0, newColor);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
// index = prompt("At which index do you want to start deleting color(s)?");
// var deleteCount = prompt("How many colors do you want to delete?");
// colors.splice(index, deleteCount);

// question 10

// var studentScores = [85, 75, 96, 56, 100, 82, 67];

// studentScores.sort(function(a, b){
//   return a - b;
// });

// console.log("Sorted student scores in ascending order: " + studentScores);

// question 11

// var cities = ["Paris", "London", "Berlin", "New York", "Tokyo"];
// var selectedCities = cities.slice(0, 3);

// console.log("Cities array: " + cities);
// console.log("Selected cities: " + selectedCities);

// question 12

// var arr = ["This", " is", " my", " cat"];
// var sentence = arr.join("");

// console.log("Array: " + arr);
// console.log("Sentence: " + sentence);

// question 13

// var queue = [];

// queue.push(1);
// queue.push(2);
// queue.push(3);

// console.log("Original queue: " + queue);

// var firstIn = queue.shift();
// console.log("First in: " + firstIn);
// console.log("Updated queue: " + queue);

// var secondIn = queue.shift();
// console.log("Second in: " + secondIn);
// console.log("Updated queue: " + queue);

// question 14
// var stack = [];

// var push = function(value) {
//     stack.push(value);
// };

// var pop = function() {
//     return stack.length ? stack.pop() : null;
// };

// var peek = function() {
//     return stack.length ? stack[stack.length - 1] : null;
// };
// push(1);
// push(2);
// push(3);

// console.log(peek());  // Output: 3
// console.log(pop());  // Output: 3
// console.log(pop());  // Output: 2
// console.log(pop());  // Output: 1
// console.log(pop());  // Output: null

// question 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }
// document.write("</select>");

// ARRAYS AND LOOP Assignment # 17-20 JAVASCRIPT

// question 1
// var multiDimArray = [[]];
// var multiDimArray = [[[,,,],[,,,],[,,,]],[[,,,],[,,,],[,,,]]];
// console.log(multiDimArray);

// question 2

// var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// var value = matrix[1][2];
// console.log(matrix);

// question 3

// for (var i = 1; i <= 14; i++) {
//   console.log(i);
// }

// question 4

// Get input from the user
// var number = +(prompt("Enter the number to print the multiplication table for:"));
// var length = +(prompt("Enter the length of the table:"));

// // Print the multiplication table
// for (var i = 1; i <= length; i++) {
//   var result = number * i;
//   console.log(number + " x " + i + " = " + result);
// }

// question 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// question 6

// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h3>Counting:</h3>");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<h3>Reverse counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
//   document.write(i + ", ");
// }

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<h3>Odd:</h3>");
// for (var i = 1; i <= 19; i += 2) {
//   document.write(i + ", ");
// }

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h3>Series:</h3>");
// for (var i = 2; i <= 20; i += 2) {
//   document.write(i + "k, ");
// }


// question 7

// // Define the array of items
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Prompt the user to enter an item to search for
// var searchItem = prompt("Enter an item to search for:");

// // Flag variable to keep track of whether the item is found
// var found = false;

// // Loop through the array and check if the item matches each element
// for (var i = 0; i < items.length; i++) {
//   if (searchItem === items[i]) {
//     found = true;
//     break;
//   }
// }

// // Display a message indicating whether the item was found or not
// if (found) {
//   alert(searchItem + " is present in the list at index " + i);
// } else {
//   alert(searchItem + " is not present in the list");
// }

// question 8

// // Define the array of numbers
// var numbers = [24, 53, 78, 91, 12];

// // Assume the first number is the largest
// var largestNumber = numbers[0];

// // Loop through the rest of the array and update largestNumber if a larger number is found
// for (var i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largestNumber) {
//     largestNumber = numbers[i];
//   }
// }

// // Display the largest number
// console.log("The largest number in the array is: " + largestNumber);

// question 9

// const arr = [24, 53, 78, 91, 12];
// let min = arr[0]; // assume the first element is the smallest

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log("The smallest number is:", min);

// question 10

// for (let i = 1; i <= 20; i++) {
//   let multiple = i * 5;
//   console.log(multiple);
// }



