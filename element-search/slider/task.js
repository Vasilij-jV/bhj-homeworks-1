const sliderItem = Array.from(document.querySelectorAll(".slider__item"));

function sliderActivePrev() {
    let decArr;
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[i].className === "slider__item slider__item_active" && i === 0) {
            sliderItem[i].className = "slider__item";
            decArr = sliderItem.length - 1;
            sliderItem[decArr].className = "slider__item slider__item_active";
            break;
        } 
        
        if (sliderItem[i].className === "slider__item slider__item_active" && i > 0) {
            sliderItem[i].className = "slider__item";
            decArr = i - 1;
            sliderItem[decArr].className = "slider__item slider__item_active";
            break;
        }
    }
}

function sliderActiveNext() {
    let incArr = sliderItem.length - 1;;
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[i].className === "slider__item slider__item_active" && i === incArr) {
            sliderItem[i].className = "slider__item";
            sliderItem[0].className = "slider__item slider__item_active";
            break;
        } 
        
        if (sliderItem[i].className === "slider__item slider__item_active" && i < incArr) {
            sliderItem[i].className = "slider__item";
            incArr = i + 1;
            sliderItem[incArr].className = "slider__item slider__item_active";
            break;
        }
    }
}

document.querySelector(".slider__arrow.slider__arrow_prev").onclick = sliderActivePrev;
document.querySelector(".slider__arrow.slider__arrow_next").onclick = sliderActiveNext;