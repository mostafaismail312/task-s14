//  task 1
// var num = window.prompt("Enter your Nmber"));
// if (num % 2 == 0) {
//   alert("Number is postive ");
// } else {
//   alert("Number is negaive ");
// }

//  task 2
// var x = window.prompt("Enter your variable");
// if (isNaN(x)) {
//   alert("x is not a number");
// } else {
//   alert("x is  a number");
// }

//  task 3
// var x = Number(window.prompt("Enter your frist Nmber "));
// var y = Number(window.prompt("Enter your scund Nmber "));
// if (x > y) {
//   alert("largest of two number is " + x);
// } else if (y > x) {
//   alert("largest of two number is " + y);
// } else {
//   alert(" two number is equal");
// }

//  task 4

// function evalNumbers(x, y, operation) {
//   if (operation == "+") {
//     console.log(x + y);
//   } else if (operation == "*") {
//     console.log(x * y);
//   } else if (operation == "/") {
//     console.log(x / y);
//   } else if (operation == "%") {
//     console.log(x % y);
//   } else {
//     console.log("its not operation");
//   }
// }
// evalNumbers(25, 5, "+");
// evalNumbers(25, 5, "*");
// evalNumbers(25, 5, "/");
// evalNumbers(25, 5, "%");

//  task 5
// function checkLeapYear(year) {
//   if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }
// }

//  task 6
// function findGrade(mark) {
//   if (mark <= 100 && mark >= 90) {
//     console.log("your grade is A+");
//   } else if (mark < 90 && mark >= 80) {
//     console.log("your grade is A");
//   } else if (mark < 80 && mark >= 70) {
//     console.log("your grade is B+");
//   } else if (mark < 70 && mark >= 60) {
//     console.log("your grade is B");
//   } else {
//     console.log(" you feilled");
//   }
// }
// findGrade(95);
// findGrade(85);
// findGrade(70);
// findGrade(50);

// task 7

// function findDaysInMonth(month) {
//   if (
//     month == "January" ||
//     month == "May " ||
//     month == "March" ||
//     month == "July" ||
//     month == "August" ||
//     month == "October" ||
//     month == "December"
//   ) {
//     console.log(" the number of days to this month is 31 days");
//   } else if (
//     month == "April" ||
//     month == "June " ||
//     month == "September" ||
//     month == "November"
//   ) {
//     console.log(" the number of days to this month is 30 days");
//   } else if (month == "February") {
//     console.log(" the number of days to this month is 28 days or 29 days");
//   } else {
//     console.log("its not a month");
//   }
// }
// findDaysInMonth("January");
// findDaysInMonth("August");
// findDaysInMonth("April");
// findDaysInMonth("February");
// findDaysInMonth("far");

// task 8

// task 9
// function countDigits(number) {
//   return number.toString().length;
// }
// console.log(countDigits(153));
// console.log(countDigits(1805));
// console.log(countDigits(45));

// // task 9
// function reverseString(str) {
//   return str.reverse();
// }
// console.log(reverseString("Mostafa"));
// console.log(reverseString("welcomejs"));
