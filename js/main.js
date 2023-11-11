/* Assegnazione variabili */
const images = ['01.jpg', '02.jpg', '03.jpg','04.jpg','05.jpg']
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const items = document.querySelector(".items");
/* immagine visualizzata corrente */
let currentImage = 0;

/* inizializzazione ciclo for per le immagini */
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

/* seleziono tutte le classi che contengono le immagini */
const itemsAll = document.querySelectorAll('.item');

/* al click su prev visualizza l'immagine precedente */
prev.addEventListener('click', function (){
    console.log("ho cliccato su prev");
    if(currentImage > 0){
        itemsAll[currentImage].classList.remove('active');
        currentImage--;
        itemsAll[currentImage].classList.add('active');
    }
});

/* al click su next visualizza l'immagine successiva */
next.addEventListener ('click', function (){
    console.log("ho cliccato su next");
    if(currentImage < itemsAll.length - 1){
        itemsAll[currentImage].classList.remove('active');
        currentImage++;
        itemsAll[currentImage].classList.add('active');
    }
});
