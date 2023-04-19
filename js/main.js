let containerElement = document.getElementById("container");
let sliderElement = document.getElementById("slider");
let slideElements = document.getElementsByClassName("slide");
let btnBack = document.getElementById("btnBack");
let btnNext = document.getElementById("btnNext");
let currentSlide = 0;
let ultimaSlideConTastoNext = 3; //slideElements.length-1

// inserire dinamicamente da js un elemento in un altro (una slide nel container)
// let x = document.createElement("img");
// x.src = "https://www.sinonimi-contrari.it/includes/images/sharers/sinonimi-di-prova.png";
// x.className = "slide hidden";
// sliderElement.append(x);

console.log(slideElements);

btnNext.addEventListener("click", function(){

    console.log("Current Slide: ", currentSlide);

    if(currentSlide < ultimaSlideConTastoNext) {
        for (let c = 0; c < slideElements.length; c++) {
            const slide = slideElements[c];

            if(c == currentSlide+1 ) {
                slide.classList.remove("hidden");
                console.log("Slide corrente: " + c + " -> Va visualizzata");
            } else {
                slide.classList.add("hidden");
                console.log("Slide corrente: " + c + " -> Va nascosta");
            }
        }

        currentSlide++;
    } else {
        console.log("non c'è una slide successiva");
    }

});

btnBack.addEventListener("click", function(){

    if(currentSlide>0) {
        for (let c = 0; c < slideElements.length; c++) {
                const slide = slideElements[c];

            if(c == currentSlide-1 ) {
                slide.classList.remove("hidden");
                console.log("Slide corrente: " + c + " -> Va visualizzata");
            } else {
                slide.classList.add("hidden");
                console.log("Slide corrente: " + c + " -> Va nascosta");
            }
        }
        
        currentSlide--;
    } else {
        console.log("non c'è una slide precedente");
    }

});