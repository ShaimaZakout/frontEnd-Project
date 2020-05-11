function validateForm() {
    var x = document.getElementById('val').value;
    if (x == "" || x == "null") {
     window.alert("Name must be filled out");
     }
    var lowerCaseLetters = /[a-z]/g;
     var upperCaseLetters = /[A-Z]/g;
      var numbers = /[0-9]/;
    var pwd = document.forms["myForm"]["psw"].value;
    if(!(pwd.match(lowerCaseLetters) && pwd.match(numbers) && pwd.match(upperCaseLetters) && pwd.length >= 8) ){
     window.alert("Your password should contain : A lowercase letter,capital (uppercase) letter,a number,and minimum 8 characters");
      return false;
    }
  }