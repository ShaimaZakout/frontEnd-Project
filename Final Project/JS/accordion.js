
var acc = document.getElementsByClassName("accordion"); //جلب كل العناصر الموجودة في الديف الي شغالين عليه وهاي مصفوفة
var i;

for (i = 0; i < acc.length; i++) {  
  acc[i].addEventListener("click", function() { 
    this.classList.toggle("active"); //عشان يجيب علامة + وال ناقص
     var panel = this.nextElementSibling; //العنصر الي بتضغط عليه هات الاخ الي بعديه
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; 
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; //السكرول هاي لجلب الهايت
    } 
  });
}