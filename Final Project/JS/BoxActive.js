function activeBox(){
    document.getElementById('iconActive').style.backgroundColor="blue";
    document.getElementById('butonActiv').style.backgroundColor="blue";
    document.getElementById('butActive').style.width="15px";
    document.getElementById('butActive').style.height="15px";

 }
 function activeBoxmusOut(){
   document.getElementById('iconActive').style.backgroundColor="dodgerblue";
   document.getElementById('butonActiv').style.backgroundColor="dodgerblue";
   document.getElementById('butActive').style.width="10px";
   document.getElementById('butActive').style.height="10px";
  }
 document.getElementById('butActive').addEventListener("mouseout",activeBoxmusOut,false);
document.getElementById('butActive').addEventListener("mouseover",activeBox,false);

 function activeBox1(){
    document.getElementById('iconActive1').style.backgroundColor="blue";
    document.getElementById('butonActiv1').style.backgroundColor="blue";
    document.getElementById('butActive1').style.width="15px";
    document.getElementById('butActive1').style.height="15px";
 }
 function activeBox1mouseOut(){
   document.getElementById('iconActive1').style.backgroundColor="dodgerblue";
   document.getElementById('butonActiv1').style.backgroundColor="dodgerblue";
   document.getElementById('butActive1').style.width="10px";
   document.getElementById('butActive1').style.height="10px";
}
document.getElementById('butActive1').addEventListener("mouseout",activeBox1mouseOut,false);
document.getElementById('butActive1').addEventListener("mouseover",activeBox1,false);


 function activeBox2(){
    document.getElementById('iconActive2').style.backgroundColor="blue";
    document.getElementById('butonActiv2').style.backgroundColor="blue";
    document.getElementById('butActive2').style.width="15px";
    document.getElementById('butActive2').style.height="15px";
 }
 
 function activeBox2moseOut(){
   document.getElementById('iconActive2').style.backgroundColor="dodgerblue";
   document.getElementById('butonActiv2').style.backgroundColor="dodgerblue";
   document.getElementById('butActive2').style.width="10px";
   document.getElementById('butActive2').style.height="10px";
}
document.getElementById('butActive2').addEventListener("mouseout",activeBox2moseOut,false);
document.getElementById('butActive2').addEventListener("mouseover",activeBox2,false);

//  var header = document.getElementById("Service-dots1");
// var btns = header.getElementsByClassName("Service-dot");
// for (var i = 0; i < Service-dot.length; i++) {
//    Service-dot[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//        // If there's no active class
//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" active", "");
//       }
//        // Add the active class to the current/clicked button
//       this.className += " active";
//   });}
