// BMI Calculator
// 1 inch = 2.54 centimeters
// 1 pound = 0.4536 kilograms

function BMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let heightInCentimeters = height * 2.54;
    let weightInKilograms = weight * 0.4536;

    // Calculating for BMI
    let heightInMeters = heightInCentimeters / 100;
    let result = weightInKilograms / (heightInMeters * heightInMeters);
    document.getElementById("result").innerHTML = 'BMI Result: ' + result +"%.";
}