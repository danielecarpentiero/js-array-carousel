const images = ['01.jpg', '02.jpg', '03.jpg','04.jpg','05.jpg']
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const items = document.querySelector(".items");
let currentImage = 0;


for (let i = 0; i < images.length; i++){
    const item = document.createElement("div");
    item.classList.add('item');
    
    if (currentImage === i){
        item.classList.add('active')
    }

    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `01 ${i}`;

    item.append(img)
    items.append(item);
}

const itemsAll = document.querySelectorAll('.item');

prev.addEventListener('click', function (){
    console.log("ho cliccato su prev");
    if(currentImage > 0){
        itemsAll[currentImage].classList.remove('active');
        currentImage--;
        itemsAll[currentImage].classList.add('active');
    }
});

next.addEventListener ('click', function (){
    console.log("ho cliccato su next");
    if(currentImage < itemsAll.length - 1){
        itemsAll[currentImage].classList.remove('active');
        currentImage++;
        itemsAll[currentImage].classList.add('active');
    }
});
