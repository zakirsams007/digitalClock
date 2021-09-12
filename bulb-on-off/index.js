

const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener('click', function(){

    if(bulb.src.match('OFF')){

        bulb.src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"

        bulbSwitch.innerHTML='TURN OFF'
    }
    else{

       bulb.src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
             
        bulbSwitch.innerHTML='TURN ON'
    }
});