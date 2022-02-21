const productDec = document.querySelectorAll(".product__quantity-control_dec");
const productInc = document.querySelectorAll(".product__quantity-control_inc");
const productAdd = document.querySelectorAll(".product__add");
const cartProducts = document.querySelector(".cart__products");
let sumDec = 0;
let sumInc = 0;

function decrease(event) {
    sumDec = Number(event.target.nextElementSibling.innerText);
    if (sumDec > 0) {
        sumDec -= 1;
        event.target.nextElementSibling.innerText = sumDec;
        console.log(event.target.nextElementSibling.innerText);
    }
}

function increase(event) {
    if (sumInc === 0 || sumInc > 0) {
        let sumInc = Number(event.target.previousElementSibling.innerText);
        sumInc += 1;
        event.target.previousElementSibling.innerText = sumInc;
    }
}

function addBusket(event) {
    let id = event.target.closest(".product").dataset.id;
    let imgSrc = event.target.closest(".product__controls").previousElementSibling.src;
    let numberValue = event.target.previousElementSibling.querySelector(".product__quantity-value").innerText;
    let div = document.createElement("div");
    let addElem = cartProducts.appendChild(div);

    const cartProduct = Array.from(document.querySelectorAll(".cart__product"));

    /*if (cartProduct.length === 0 && numberValue > 0) {
        addElem.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${numberValue}</div></div>`;
    } else if (cartProduct.length > 0 && numberValue > 0) {
        cartProduct.find((item) => {
            if (id === item.dataset.id) {
                addElem.remove();
                let number = Number(item.lastElementChild.innerText) + Number(numberValue);
                item.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${number}</div></div>`;
            } 
        });
    } else if (cartProduct.length > 0 && numberValue > 0) {
        if (!cartProduct.dataset.includes(id)) {
            addElem.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${numberValue}</div></div>`; 
        }
    }*/

    /*cartProduct.find((item) => {
        if (cartProduct.length === 0) {
            addElem.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${numberValue}</div></div>`;
        }
        if (cartProduct.length > 0 && id === item.dataset.id) {
            addElem.remove();
            let number = Number(item.lastElementChild.innerText) + Number(numberValue);
            item.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${number}</div></div>`;
        } else if (cartProduct.length === 0 || id !== item.dataset.id) {
            addElem.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${numberValue}</div></div>`;
        }
    });*/

    if (cartProduct.length === 0 && cartProduct.length < 1 && numberValue > 0) {
        addElem.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${numberValue}</div></div>`;
    }

    if (cartProduct.length > 0 && numberValue > 0) {
        for (let item of cartProduct) {
            if (id === item.dataset.id) {
                addElem.remove();
                let number = Number(item.lastElementChild.innerText) + Number(numberValue);
                item.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${number}</div></div>`;
                

            }
        }

        let mapId = cartProduct.map((item) => item.dataset.id);
        if (!mapId.includes(id)) {
            addElem.outerHTML = `<div class="cart__product" data-id=${id}><img class="cart__product-image" src=${imgSrc}><div class="cart__product-count">${numberValue}</div></div>`;
        }
    }
}

for (let item of productDec) {
    item.addEventListener("click", decrease);
}

for (let item of productInc) {
    item.addEventListener("click", increase);
}

for (let item of productAdd) {
    item.addEventListener("click", addBusket);
}