import { openDescriptionPopup, openImagePopup } from './grapeModal.js';
import { ProductGrape, Cart } from '../cart.js';
import { deleteCounterCutting, deleteCounterVine } from '../card.js';

const cardTemplate = document.querySelector('#card-template').content;
const page = document.querySelector('.page');
const cartNum = document.querySelector("#cart_num");
const paragraphTemplate = document.querySelector('#popup__paragraph-template').content;

const myCart = new Cart();

function createDescription(txt) {
    const paragraphElement = paragraphTemplate.querySelector('.popup__paragraph').cloneNode(true);

    paragraphElement.textContent = txt;

    return paragraphElement;
}

function changeTextCartBtn(button) {
    button.textContent = 'В корзину';
    button.classList.remove('animated-gradient');
    button.classList.add("btn");
    button.classList.remove("btnForAnimation");
}

function disableBtn(button) {
    button.classList.add('disable');
}

function enableBtn(button) {
    button.classList.remove('disable');
}

function isCutting(cardElement, cartButtonCutting, productCuttingQuantity) {
    cartButtonCutting.classList.add("invisible");

    const priceWrapperCutting = cardElement.querySelector('.price-wrapper-cutting');

    const counter = document.createElement("div");
    counter.classList.add("popup__product-wrap");
    counter.classList.add("busket-item-cutting-counter");

    const reduceBtn = document.createElement("button");
    reduceBtn.classList.add("busket-item-count_btn");
    reduceBtn.classList.add("busket-item-count_minus");
    reduceBtn.classList.add("card__count-cutting-minus");
    reduceBtn.setAttribute("type", "button");
    reduceBtn.innerHTML = "–";

    const inputCount = document.createElement("input");
    inputCount.classList.add("busket-item-count_input");
    inputCount.classList.add("card__count-input-cutting");
    inputCount.setAttribute("type", "text");
    inputCount.readOnly = true;
    inputCount.setAttribute("value", `${productCuttingQuantity}`);
    console.log(productCuttingQuantity);
    inputCount.value = productCuttingQuantity;

    const incrBtn = document.createElement("button");
    incrBtn.classList.add("busket-item-count_btn");
    incrBtn.classList.add("busket-item-count_plus");
    incrBtn.classList.add("card__count-cutting-plus");
    incrBtn.setAttribute("type", "button");
    incrBtn.innerHTML = "+";

    counter.appendChild(reduceBtn);
    counter.appendChild(inputCount);
    counter.appendChild(incrBtn);
    priceWrapperCutting.append(counter);
}

function isVine(cardElement, cartButtonVine, productVineQuantity) {
    cartButtonVine.classList.add("invisible");

    const priceWrapperVine = cardElement.querySelector('.price-wrapper-vine');

    const counter = document.createElement("div");
    counter.classList.add("popup__product-wrap");
    counter.classList.add("busket-item-vine-counter");

    const reduceBtn = document.createElement("button");
    reduceBtn.classList.add("busket-item-count_btn");
    reduceBtn.classList.add("busket-item-count_minus");
    reduceBtn.classList.add("card__count-vine-minus");
    reduceBtn.setAttribute("type", "button");
    reduceBtn.innerHTML = "–";

    const inputCount = document.createElement("input");
    inputCount.classList.add("busket-item-count_input");
    inputCount.classList.add("card__count-input-vine");
    inputCount.setAttribute("type", "text");
    inputCount.readOnly = true;
    inputCount.setAttribute("value", `${productVineQuantity}`);
    inputCount.value = productVineQuantity;

    const incrBtn = document.createElement("button");
    incrBtn.classList.add("busket-item-count_btn");
    incrBtn.classList.add("busket-item-count_plus");
    incrBtn.classList.add("card__count-vine-plus");
    incrBtn.setAttribute("type", "button");
    incrBtn.innerHTML = "+";

    counter.appendChild(reduceBtn);
    counter.appendChild(inputCount);
    counter.appendChild(incrBtn);
    priceWrapperVine.append(counter);
}

function showCounter(cardElement, cartButtonCutting, cartButtonVine, productCuttingInCart, productVineInCart, productCuttingQuantity, productVineQuantity) {
    if (productCuttingInCart && !productVineInCart) {
        isCutting(cardElement, cartButtonCutting, productCuttingQuantity);
    } else if (productCuttingInCart && productVineInCart) {
        isCutting(cardElement, cartButtonCutting, productCuttingQuantity);
        isVine(cardElement, cartButtonVine, productVineQuantity);
    } else if (productVineInCart && !productCuttingInCart) {
        isVine(cardElement, cartButtonVine, productVineQuantity);
    }
}

function increaseCountOfProductCutting(cardElement) {
    cardElement.querySelector('.card__count-cutting-plus').addEventListener("click", (evt) => {
        if (cardElement === !evt.target.closest(".card")) {
            cardElement = evt.target.closest(".card");
        }
        const inputCountCutting = cardElement.querySelector('.card__count-input-cutting');
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;

        const name = cardElement.querySelector('.card__title').textContent;

        myCart.products.forEach((i) => {
            if (i.name === `${name} черенок`) {
                i.quantity++;
                inputCountCutting.setAttribute("value", `${i.quantity}`);
                cartNum.textContent = myCart.count;
                localStorage.setItem("cart", JSON.stringify(myCart));
                inputCountCutting.value = i.quantity;
            }
        })
    })
}

function reduceCountOfProductCutting(cardElement, cartButtonCutting) {
    cardElement.querySelector('.card__count-cutting-minus').addEventListener("click", (evt) => {
        if (cardElement === !evt.target.closest(".card")) {
            cardElement = evt.target.closest(".card");
        }
        const inputCountCutting = cardElement.querySelector('.card__count-input-cutting');
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;

        const name = cardElement.querySelector('.card__title').textContent;

        myCart.products.forEach((i) => {
            if (i.name === `${name} черенок`) {
                if (i.quantity > 1) {
                    i.quantity--;
                    inputCountCutting.setAttribute("value", `${i.quantity}`);
                } else if (i.quantity === 1) {
                    myCart.removeProduct(i);
                    localStorage.setItem("cart", JSON.stringify(myCart));
                    cartNum.textContent = myCart.count;
                    deleteCounterCutting(cardElement, cartButtonCutting);
                    myCart.products = savedCart.products;
                    inputCountCutting.setAttribute("value", "1");
                }
                cartNum.textContent = myCart.count;
                localStorage.setItem("cart", JSON.stringify(myCart));
                inputCountCutting.value = i.quantity;
            }
        })
    })
}

function increaseCountOfProductVine(cardElement) {
    cardElement.querySelector('.card__count-vine-plus').addEventListener("click", (evt) => {
        if (cardElement === !evt.target.closest(".card")) {
            cardElement = evt.target.closest(".card");
        }
        const inputCountVine = cardElement.querySelector('.card__count-input-vine');
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;

        const name = cardElement.querySelector('.card__title').textContent;

        myCart.products.forEach((i) => {
            if (i.name === `${name} саженец`) {
                i.quantity++;
                inputCountVine.setAttribute("value", `${i.quantity}`);
                cartNum.textContent = myCart.count;
                localStorage.setItem("cart", JSON.stringify(myCart));
                inputCountVine.value = i.quantity;
            }
        })
    })
}

function reduceCountOfProductVine(cardElement, cartButtonVine) {
    cardElement.querySelector('.card__count-vine-minus').addEventListener("click", (evt) => {
        if (cardElement === !evt.target.closest(".card")) {
            cardElement = evt.target.closest(".card");
        }
        const inputCountVine = cardElement.querySelector('.card__count-input-vine');
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;

        const name = cardElement.querySelector('.card__title').textContent;

        myCart.products.forEach((i) => {
            if (i.name === `${name} саженец`) {
                if (i.quantity > 1) {
                    i.quantity--;
                    inputCountVine.setAttribute("value", `${i.quantity}`);
                } else if (i.quantity === 1) {
                    myCart.removeProduct(i);
                    localStorage.setItem("cart", JSON.stringify(myCart));
                    cartNum.textContent = myCart.count;
                    deleteCounterVine(cardElement, cartButtonVine);
                    inputCountVine.setAttribute("value", "1");
                }
                cartNum.textContent = myCart.count;
                localStorage.setItem("cart", JSON.stringify(myCart));
                inputCountVine.value = i.quantity;
            }
        })
    })
}

const savedCart = JSON.parse(localStorage.getItem("cart"));
myCart.products = savedCart.products;

//Создание карточки
function createCard(filterColor, name, link, autors, genetics, color, taste, maturity, bunchWeight, berryWeight, frostResistance, diseaseResistance, sugarСontent, acidity, text, priceCutting, priceVine) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

    //Передача информации о карточки
    cardElement.querySelector('.card__img').src = link;
    cardElement.querySelector('.card__img').alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.autors').textContent = autors;
    cardElement.querySelector('.genetics').textContent = genetics;
    cardElement.querySelector('.color').textContent = color;
    cardElement.querySelector('.taste').textContent = taste;
    cardElement.querySelector('.maturity').textContent = maturity;
    cardElement.querySelector('.bunch-weight').textContent = bunchWeight;
    cardElement.querySelector('.berry-weight').textContent = berryWeight;
    cardElement.querySelector('.frost-resistance').textContent = frostResistance;
    cardElement.querySelector('.disease-resistance').textContent = diseaseResistance;
    cardElement.querySelector('.sugar-content').textContent = sugarСontent;
    cardElement.querySelector('.acidity').textContent = acidity;
    const cardDescription = cardElement.querySelector('.card__description');

    if (filterColor.includes('технический')) {
        cardElement.querySelector('.icon-container').classList.add('wine-icon');
    }

    const cardText = text;

    text.forEach((i) => {
        cardDescription.append(createDescription(i));
    })

    cardElement.querySelector('.card__price-cutting').textContent = priceCutting;
    cardElement.querySelector('.card__price-vine').textContent = priceVine;

    cardElement.querySelector('.card__button-popup').addEventListener('click', (evt) => {
        openDescriptionPopup(evt, cardText);
    })

    cardElement.querySelector('.card__image-wrapper').addEventListener('click', (evt) => {
        openImagePopup(evt, page);
    })

    let productCuttingInCart = false;
    let productVineInCart = false;
    let productCuttingQuantity = 1;
    let productVineQuantity = 1;

    myCart.products = savedCart.products;

    myCart.products.forEach((i) => {
        if (i.name === `${name} черенок`) {
            return productCuttingInCart = true, productCuttingQuantity = i.quantity;
        } else if (i.name === `${name} саженец`) {
            return productVineInCart = true, productVineQuantity = i.quantity;
        }

        console.log(productCuttingInCart, productVineInCart)
    })

    const cartButtonCutting = cardElement.querySelector(".btn__busket_price-cutting");
    const cartButtonVine = cardElement.querySelector(".btn__busket_price-vine");

    showCounter(cardElement, cartButtonCutting, cartButtonVine, productCuttingInCart, productVineInCart, productCuttingQuantity, productVineQuantity);

    cardElement.querySelector('.btn__busket_price-cutting').addEventListener('click', (evt) => {
        disableBtn(cartButtonCutting)
        setTimeout(enableBtn, 1000, cartButtonCutting);
        const card = evt.target.closest(".card");
        const cartButton = card.querySelector(".btn__busket_price-cutting");
        cartButton.textContent = 'Отправлено';
        cartButton.classList.remove("btn");
        cartButton.classList.add("btnForAnimation");
        cartButton.classList.add("animated-gradient");
        setTimeout(changeTextCartBtn, 1000, cartButton);
        let quantity = 1;
        const type = 'grape';
        const cutting = true;
        const product = new ProductGrape(card, quantity, type, cutting);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        myCart.addProduct(product);
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
        let productCuttingQuantity = 1;
        setTimeout(isCutting, 1000, cardElement, cartButtonCutting, productCuttingQuantity);
        setTimeout(increaseCountOfProductCutting, 1000, card);
        setTimeout(reduceCountOfProductCutting, 1000, card, cartButtonCutting);
    })

    if (cardElement.querySelector('.card__count-cutting-plus')) {
        increaseCountOfProductCutting(cardElement)
    }

    if (cardElement.querySelector('.card__count-cutting-minus')) {
        reduceCountOfProductCutting(cardElement, cartButtonCutting)
    }


    cardElement.querySelector('.btn__busket_price-vine').addEventListener('click', (evt) => {
        disableBtn(cartButtonVine)
        setTimeout(enableBtn, 1000, cartButtonVine);
        const card = evt.target.closest(".card");
        const cartButton = card.querySelector(".btn__busket_price-vine");
        cartButton.textContent = 'Отправлено';
        cartButton.classList.remove("btn");
        cartButton.classList.add("btnForAnimation");
        cartButton.classList.add("animated-gradient");
        setTimeout(changeTextCartBtn, 1200, cartButton);
        let quantity = 1;
        const type = "grape";
        const cutting = false;
        const product = new ProductGrape(card, quantity, type, cutting);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        myCart.addProduct(product);
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
        let productVineQuantity = 1;
        setTimeout(isVine, 1000, cardElement, cartButtonVine, productVineQuantity);
        setTimeout(increaseCountOfProductVine, 1000, card);
        setTimeout(reduceCountOfProductVine, 1000, card, cartButtonVine);
    })

    if (cardElement.querySelector('.card__count-vine-plus')) {
        increaseCountOfProductVine(cardElement)
    }

    if (cardElement.querySelector('.card__count-vine-minus')) {
        reduceCountOfProductVine(cardElement, cartButtonVine)
    }

    const cardDecorTop = cardElement.querySelector('.decor-top');

    if (filterColor === 'красный') {
        cardDecorTop.classList.add('red-outline');
    } else if (filterColor === 'белый') {
        cardDecorTop.classList.add('white-outline');
    } else if (filterColor === 'черный') {
        cardDecorTop.classList.add('black-outline');
    } else if (filterColor === 'розовый') {
        cardDecorTop.classList.add('pink-outline');
    } else {
        cardDecorTop.classList.add('technical-outline');
    }

    return cardElement;
}

export { createCard, createDescription }