//Get the button
var mybutton = document.getElementById("myBtn"); //الزر 

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(); myFunction()};
 function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block"; //إن كان اكبر من 20 روح اظهر الزر
  } else {
    mybutton.style.display = "none";//اخفاء الزر
  }
}
 // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //بنخلي السكرول 0 عندما نضغط على الزر
  document.documentElement.scrollTop = 0;
}





  function myFunction() {  
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + "%";
}