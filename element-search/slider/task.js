const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
let number = 0;

function addActive() {
    if (this === document.querySelector(".slider__arrow.slider__arrow_prev") && number > 0) {
        sliderItem[number].className = "slider__item";
        sliderItem[number - 1].className = "slider__item slider__item_active";
        number -= 1;
    } else if (this === document.querySelector(".slider__arrow.slider__arrow_prev") && number === 0) {
        sliderItem[number].className = "slider__item";
        sliderItem[sliderItem.length - 1].className = "slider__item slider__item_active";
        number = sliderItem.length - 1;
    }

    if (this === document.querySelector(".slider__arrow.slider__arrow_next") && number < (sliderItem.length - 1) ) {
        sliderItem[number].className = "slider__item";
        sliderItem[number + 1].className = "slider__item slider__item_active";
        number += 1;
    } else if (this === document.querySelector(".slider__arrow.slider__arrow_next") && number === (sliderItem.length - 1)) {
        sliderItem[number].className = "slider__item";
        sliderItem[0].className = "slider__item slider__item_active";
        number = 0;
    }
}

document.querySelector(".slider__arrow.slider__arrow_prev").onclick = addActive;
document.querySelector(".slider__arrow.slider__arrow_next").onclick = addActive;