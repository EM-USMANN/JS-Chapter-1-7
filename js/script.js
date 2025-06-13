
// alert name 

document.getElementById("alertName").onclick = function () {

    let name = prompt("Enter your name:");
    if (name === null || name.trim() === "") {
        alert("Name cannot be empty!");
        return;
    }
    // let name = "Jhon"; 

    alert("Hello " + name + "!");

    let codeLine = 'alert("Hello " + name + "!");';
    document.getElementById("originalStatement").innerText = codeLine;


}

// clear statement code 
document.getElementById("clearStatement").onclick = function () {

    document.getElementById("originalStatement").innerText = "";
};

// clear output result
document.getElementById("clear-output").onclick = function () {
    document.getElementById("outputResult").innerHTML = "";
}


// alert number

document.getElementById("alertNumber").onclick = function () {
    let number = "5";

    alert("Number " + number + "!");

    let codeLine = 'alert("Number " + number Variable + "!");';
    document.getElementById("originalStatement").innerText = codeLine;


};


// show variable names

document.getElementById("show-variable-names").onclick = function () {


    let html = `<ul>
        <li>A Variable name can't contain any spaces.</li>
        <li>A Variable name can contain letters, numbers, dollar signs, and underscores.</li>
        <li>Though a Varaible name can't be any JavaScript's keywords. For example, <mark>userAlert</mark>.</li>
        <li>Capital letters are fine, but be careful. Varaible names are case sensitive. A <mark>rose</mark> is not a <mark>Rose</mark>.If you assign the string "Floribundas" to the variable <mark>rose</mark>, and then ask JavaScript for the value assigned to <mark>Rose</mark>, you'll come up empty.</li>
    </ul>`;

    document.getElementById("outputResult").innerHTML = html;



};


// show camel case examples


document.getElementById("show-camelCase").onclick = function () {


    let camelCase = `<ul>
            <li>user</li>
            <li>userResponse</li>
            <li>userResponseTime</li>
            <li>userResponseTimeLimit</li>
        </ul>`;

    document.getElementById("outputResult").innerHTML = camelCase;



}


// some 2 numbers

document.getElementById("sum-number").onclick = function () {
    let firstNumber = prompt("Enter first number:");
    let secondNumber = prompt("Enter second number:");

    if (firstNumber === null || secondNumber === null || isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers!");
        return;
    }

    let sum = parseFloat(firstNumber) + parseFloat(secondNumber);


    alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);

    let codeLine = `let sum = parseFloat(${firstNumber}) + parseFloat(${secondNumber});`;
    document.getElementById("originalStatement").innerText = codeLine;

    document.getElementById("outputResult").innerText = sum;



}

// subtract 2 numbers

document.getElementById("subtract-number").onclick = function () {
    let firstNumber = prompt("Enter first number:");
    let secondNumber = prompt("Enter second number:");

    if (firstNumber === null || secondNumber === null || isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers!");
        return;
    }

    let subtract = parseFloat(firstNumber) - parseFloat(secondNumber);

    alert("The subtraction of " + firstNumber + " and " + secondNumber + " is: " + subtract);

    let codeLine = `let subtract = parseFloat(${firstNumber}) - parseFloat(${secondNumber});`;
    document.getElementById("originalStatement").innerText = codeLine;

    document.getElementById("outputResult").innerText = subtract;

}



// multiply 2 numbers

document.getElementById("multiply-number").onclick = function () {
    let firstNumber = prompt("Enter first number:");
    let secondNumber = prompt("Enter second number:");

    if (firstNumber === null || secondNumber === null || isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers!");
        return;
    }

    let multiply = parseFloat(firstNumber) * parseFloat(secondNumber);

    alert("The multiplication of " + firstNumber + " and " + secondNumber + " is: " + multiply);

    let codeLine = `let multiply = parseFloat(${firstNumber}) * parseFloat(${secondNumber});`;
    document.getElementById("originalStatement").innerText = codeLine;

    document.getElementById("outputResult").innerText = multiply;

}

// Divide 2 numbers

document.getElementById("divide-number").onclick = function () {
    let firstNumber = prompt("Enter first number:");
    let secondNumber = prompt("Enter second number:");

    if (firstNumber === null || secondNumber === null || isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers!");
        return;
    }

    if (parseFloat(secondNumber) === 0) {
        alert("Division by zero is not allowed!");
        return;
    }

    let divide = parseFloat(firstNumber) / parseFloat(secondNumber);

    alert("The division of " + firstNumber + " and " + secondNumber + " is: " + divide);

    let codeLine = `let divide = parseFloat(${firstNumber}) / parseFloat(${secondNumber});`;
    document.getElementById("originalStatement").innerText = codeLine;

    document.getElementById("outputResult").innerText = divide;

}