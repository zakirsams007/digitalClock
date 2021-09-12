





const root = document.querySelector("#root");
const button = document.querySelector("button");



 function creatItems(item){
     //card
    const card = document.createElement('div');
    card.classList.add('card');

    //photos
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    //title
    const title = document.createElement('h4');
    title.innerHTML = item.title;


    //append all 
    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);
}

const displayImg = (photos) => {
    //card
     
    photos.forEach(function(photos){
        creatItems(photos);
    })
   
    
    
}


button.addEventListener('click', clicked = () =>  { 

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then((item) => {
        displayImg(item);
    }) 

})





