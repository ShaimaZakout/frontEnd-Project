var modal = document.getElementById("myModal");


var box = document.getElementById("myBox");
var modalBox = document.getElementById("modal-content");

box.onclick = function(){
  modal.style.display = "block";
  modalBox.innerHTML = "<img src ='images/s2.png'> "+"<br><h1>Elham , Neama , Shaimaa <br> كل التوفيق والسداد لنا </h1>";
   modalBox.style.backgroundColor = "#e27676";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
 
