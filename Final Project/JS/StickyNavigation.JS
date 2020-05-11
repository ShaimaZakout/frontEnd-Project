window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop; //بيجبلنا ارتفاع الديف

function myFunction() {
  if (window.pageYOffset >= sticky) { //هنا بجيب ارتفاع الصفحة
    navbar.classList.add("sticky");//   اضافة كلاس جديد موجود في CSS 
  } else {
    navbar.classList.remove("sticky"); //نحذف هذا الكلاس
  }
}