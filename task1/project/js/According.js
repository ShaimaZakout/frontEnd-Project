var divs = document.getElementsByClassName('ab1');
function BoxActiv() {
    for (var i = 0; i < divs.length; i++) {
        divs[i].getElementsByTagName('h4').style.color="blue";
        divs[i].getElementsByTagName('p').style.backgroundColor = "dodgerblue";
    }
}
function bo2(){
    var buto = document.getElementsByClassName('but');
    for (var i = 0; i < buto.length; i++) {
        buto[i].style.style.width ="30px";
        buto[i].style.height ="30px";
     
      buto[i].addEventListener('click',BoxActiv,false);
}}

 



