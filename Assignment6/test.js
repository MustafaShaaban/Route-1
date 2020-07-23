// 1--  Write a program that allow to the user enter number then print it.

var userNumber = prompt('What\'s your number ?');
window.console.log(userNumber);

// 2--  Write a program that takes a number from user then print yes if that number can divide by 3 and 4, otherwise print no.

var userNum = prompt('Enter Your number, please.');

if ((userNum % 3) == 0) {
    // first condition
    window.console.log('Yes');
} else if ((userNum % 4) == 0) {
    //second condition.
    window.console.log('Yes');
}
else {
    // all other cases.
    window.console.log('No');
}


// 3-- Write a program that allows the user to insert 2 integers then print the max.

var userNum1 = prompt('Enter Your first number, please.');
var userNum2 = prompt('Enter Your seconed number, please.');
// Check first number
if (userNum1 > userNum2) {

    window.console.log(userNum1);

} else if (userNum1 < userNum2) { // Check seconed number

    window.console.log(userNum2);
    // Check other Cases
} else {
    window.console.log('There\'s no max Number');
}


// 4--  Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

var userCase = prompt('Enter Your number, please.');

if (userCase > 1) {
    // first condition
    window.console.log('positive');
}
else {
    // all other cases.
    window.console.log('negative');
}

// 5-- Write a program that takes 3 integers from the user then print the max element and the min element.

var userN1 = prompt('Enter Your first number, please.');
var userN2 = prompt('Enter Your seconed number, please.');
var userN3 = prompt('Enter Your third number, please.');

if (userN1 > userN2 && userN1 > userN3) {
    // useN1 is the Max number now check the Min
    if (userN2 < userN3) {
        window.console.log('Max Number is ' + userN1);
        window.console.log('Min Number is ' + userN2);
    } else if (userN2 > userN3) {
        window.console.log('Max Number is ' + userN1);
        window.console.log('Min Number is ' + userN3);
    }

} else if (userN2 > userN1 && userN2 > userN3) {

    // useN2 is the Max number now check the Min
    if (userN1 < userN3) {
        window.console.log('Max Number is ' + userN2);
        window.console.log('Min Number is ' + userN1);
    } else if (userN1 > userN3) {
        window.console.log('Max Number is ' + userN2);
        window.console.log('Min Number is ' + userN3);
    }


} else {
    // useN3 is the Max number now check the Min
    if (userN1 < userN2) {
        window.console.log('Max Number is ' + userN3);
        window.console.log('Min Number is ' + userN1);
    } else if (userN1 > userN2) {
        window.console.log('Max Number is ' + userN3);
        window.console.log('Min Number is ' + userN2);
    }

}

// 6-- Write a program that allows the user to insert an integer number then check if the number is oven or odd.

var numberUser = prompt('Enter Your number, please.');

// check if the number can be divided by 2
if ((numberUser % 2) == 0) {
    // If yes so its even
    window.console.log('You Number is even');
} else {
    // If no so its odd
    window.console.log('You Number is odd');
}

// [7-] 8- write a program that take a character from the user then check if it is vowel chars (a, e, i, o, u), print vowel otherwise print consonant.

var userChar = prompt('Please insert your character.');

if (userChar == "a" || userChar == "e" || userChar == "i" || userChar == "o" || userChar == "u") {
    window.console.log('Your character is a vowel');
} else {
    window.console.log('Your character is a consonant');
}

// Another way 


var userChar = prompt('Please insert your character.');

if (userChar == "a") {
    // first case
    window.console.log('Your character is a vowel');

} else if (userChar == "e") {
    // sconed case
    window.console.log('Your character is a vowel');

} else if (userChar == "i") {
    // third case
    window.console.log('Your character is a vowel');

} else if (userChar == "o") {
    // fourth case
    window.console.log('Your character is a vowel');

} else if (userChar == "u") {
    // fifth case
    window.console.log('Your character is a vowel');
}
else {
    // other case
    window.console.log('Your character is a consonant');
}


// 9 - write a program that allows the user to insert an integer then print all numbers between 1 to that's number.

var userEntry = prompt('Please insert your Number.');

for (let i = 1; i <= Number(userEntry); i++) {
    window.console.log(i);
}



// 10- Write a program that allows the user to insert an integer then print a multiplication table up to 12.

var userEntry = prompt('Please insert your Number.');

for (let i = 1; i <= 12; i++) {
    window.console.log(i * Number(userEntry));
}



// 11-  Write a program that allows to the user to insert a number then print all even numbers between 1 to this number.

var userEntry = prompt('Please insert your Number.');

for (let i = 1; i <= Number(userEntry); i++) {
    if ((i % 2) == 0) {
        // If yes so print it.
        window.console.log(i);
    }
}

// 12- Write a program that takes two integers then print the power.


var userNumb = prompt('Enter Your number, please.');
var userPower = prompt('Enter The power number, please.');

window.console.log(userNumb ** userPower);


// [12] 13-  Write a program to enter marks of five subjects and calculate total, average and percentage.

/* 

Assign the values to variables for each subject
With Number () function to convert the returned value from a string to a number

*/
var sub1 = Number(prompt('Enter Your First subject mark, please.'));
var sub2 = Number(prompt('Enter Your Seconed subject mark, please.'));
var sub3 = Number(prompt('Enter Your Third subject mark, please.'));
var sub4 = Number(prompt('Enter Your Fourth subject mark, please.'));
var sub5 = Number(prompt('Enter Your Fifth subject mark, please.'));

var totalMarks = sub1 + sub2 + sub3 + sub4 + sub5; // Assign the total
var averageMarks = totalMarks / 5; // Assign average
var subjectsTotal = 500; // Assign the total considering each subject max number is 100.
var percen = (totalMarks / subjectsTotal) * 100;

// print Total
window.console.log("Total Marks = " + totalMarks);
// print Average
window.console.log("Average Marks = " + averageMarks);
// print Percentage
window.console.log("Percentage of total 500 is = " + percen + " %");


// [13] 14- -Write a program to input month number and print number of days in that month.

// take the user data and assign to a variable
var userMonth = Number(prompt('Enter Your Month order, please.'));

// check if its rly a month or not 
if (userMonth != 0 && userMonth <= 12) {

    // if yes check if its from the 31 days months
    if (userMonth == 1 || userMonth == 3 || userMonth == 5 || userMonth == 7 || userMonth == 8 || userMonth == 10 || userMonth == 12) {
        window.console.log("Days in the Month = " + 31 + " days");

        // Or check its February 
    } else if (userMonth == 2) {
        window.console.log("This is February and Days maybe = " + 28 + " Or " + 29 + " days");
        // other months are 30 OFC
    } else {
        window.console.log("Days in the Month = " + 30 + " days");
    }
    // Its not a number between 1 to 12, output will be error msg
} else {
    window.console.log("Please Enter a valid Month order from 1 to 12")
}


// [14] - 15 -- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade.

var physics = Number(prompt('Enter Your physics mark, please.'));
var chemistry = Number(prompt('Enter Your chemistry mark, please.'));
var biology = Number(prompt('Enter Your Biology mark, please.'));
var mathematics = Number(prompt('Enter Your Mathematics mark, please.'));
var computer = Number(prompt('Enter Your Computer mark, please.'));

// shortcut variables.
var totalMarks = physics + chemistry + biology + mathematics + computer; // Assign the total
var subjectsTotal = 500; // Assign the total considering each subject max number is 100.
var percen = (totalMarks / subjectsTotal) * 100;

// Start checking the precentages
if (percen <= 100 && percen >= 90) {
    window.console.log("Total is : " + totalMarks + " & Your Grade is A, Congratulations, Perfect !!");
} else if (percen >= 80) {
    window.console.log("Total is : " + totalMarks + " & Your Grade is B, Congratulations, Welldone !!");
} else if (percen >= 70) {
    window.console.log("Total is : " + totalMarks + " & Your Grade is C, Congratulations !!");
} else if (percen >= 60) {
    window.console.log("Total is : " + totalMarks + " & Your Grade is B, You can do better !!");
} else if (percen >= 40) {
    window.console.log("Total is : " + totalMarks + " & Your Grade is E, Do more efforts !!");
} else if (percen < 40 && percen >= 0) {
    window.console.log("Total is : " + totalMarks + " & Your Grade is F, Disappointed !!");
} else {
    window.console.log("You didn't enter a valid numbers !!")
}


// [15] - 16 --Write a program to create Simple Calculator Using switch case.

var userNumberOne = Number(prompt('Enter first number'));
var userNumberOp = prompt('Enter [ + ] or [ - ] or [ * ] or [ / ]');
var userNumberTwo = Number(prompt('Enter 2nd number'));


switch (userNumberOp) {
    case "+":
        window.console.log(userNumberOne + userNumberTwo);
        break;
    case "-":
        window.console.log(userNumberOne - userNumberTwo);
        break;
    case "*":
        window.console.log(userNumberOne * userNumberTwo);
        break;
    case "/":
        window.console.log(userNumberOne / userNumberTwo);
        break;
    default:
        window.console.log("You didn't eneter valid numbers or a valid operation");
        break;
}

