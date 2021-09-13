 var btn = document.getElementById('change');
 var txt = document.getElementById('color');

 var colorGenerate = function(){
     newColor =  '#' + (Math.random()*0xFFFFFF<<0).toString(16);
     if(newColor.length<7){
         colorGenerate();
     }
 } 

 btn.addEventListener('click',function(){
     colorGenerate();
     document.body.style.background=newColor;
     btn.style.color = newColor;
     txt.innerText=newColor
 })