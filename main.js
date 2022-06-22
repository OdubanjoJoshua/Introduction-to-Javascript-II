// This are the input section for the user
var firstNumber = parseFloat(prompt('Enter first number: '));
var secondNumber = parseFloat(prompt('Enter Second Number: '));
var list = prompt("Enter the operator from the list (+, -, * or /): ");

// this is the conditional statement for the simple calculator
if (list == '+') {
    var output = firstNumber + secondNumber
    alert(output);
}
else if (list == '-') {
    var output = firstNumber - secondNumber
    alert(output);
}
else if (list == '*') {
    var output = firstNumber * secondNumber
    alert(output);
}
else if (list == '/') {
    var output = firstNumber / secondNumber
    alert(output);
}
else{
    alert('Choose the operator from the list (+, -, * or /)')
}