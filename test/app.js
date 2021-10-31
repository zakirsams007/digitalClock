

var btn = document.getElementById('colorChange');
var txt = document.getElementById('color');

changeColor = () => {
 
    newColor = '#' + (Math.random() * 0xfffff << 0).toString(16);
    
    if(newColor.length<7){
        changeColor();
    }
}

btn.addEventListener('click')