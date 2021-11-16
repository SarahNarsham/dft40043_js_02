function BMI() {
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var bmi = w / (h * h);
    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
}