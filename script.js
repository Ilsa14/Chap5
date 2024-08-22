// Function to add two numbers and display the result
function addNumbers() {
    // Get the values of the input fields
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Calculate the sum
    var sum = num1 + num2;

    // Display the result in the HTML
    document.getElementById('result').textContent = sum;
}
