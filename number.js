function skillsMember() {
  // Get the value of the input field with id="numb"
  var x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10) {
    alert("Input not valid");
  } else {
    alert("Input OK");
  }
}