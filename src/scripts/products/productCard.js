import { openImagePopup, openDescriptionPopup } from '../products/productModal.js';
import { Product } from '../cart.js';
import { deleteCounterCutting } from '../card.js';
import { savedCart, myCart } from './products.js'

const cardTemplate = document.querySelector('#card-template').content;
const paragraphTemplate = document.querySelector('#popup__paragraph-template').content;
const page = document.querySelector('.page');
const cartNum = document.querySelector("#cart_num");

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

function showCounter(cardElement, cartButtonCutting, productCuttingInCart, productCuttingQuantity) {
    if (productCuttingInCart) {
        isCutting(cardElement, cartButtonCutting, productCuttingQuantity);
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
            if (i.name === name) {
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

        const name = cardElement.querySelector('.card__title').textContent;

        myCart.products.forEach((i) => {
            if (i.name === name) {
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

function createCard(name, link, text, price){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;

    //Передача информации о карточки
    cardElement.querySelector('.card__img').src = link;
    cardElement.querySelector('.card__img').alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    const cardDescription = cardElement.querySelector('.card__description');

    const cardText = text;

    text.forEach((i) => {
        cardDescription.append(createDescription(i));
    })

    cardElement.querySelector('.card__price-cutting').textContent = price;

    cardElement.querySelector('.btn__busket').addEventListener('click', (evt) => {
        const card = evt.target.closest(".card");
        const cartButton = card.querySelector(".btn__busket_price-cutting");
        cartButton.textContent = 'Отправлено';
        cartButton.classList.remove("btn");
        cartButton.classList.add("btnForAnimation");
        cartButton.classList.add("animated-gradient");
        setTimeout(changeTextCartBtn, 1200, cartButton);
        const quantity = 1;
        const type = 'product';
        const cutting = true;
        const product = new Product(card, quantity, type, cutting);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        myCart.addProduct(product);
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
    })

    // при нажатие на карточку будет срабатывать openImagePopup
    cardElement.querySelector('.card__button-popup').addEventListener('click', (evt) => {
        openDescriptionPopup(evt, cardText);
    })

    cardElement.querySelector('.card__image-wrapper').addEventListener('click', (evt) => {
        openImagePopup(evt, page);
    })

    let productCuttingInCart = false;
    let productCuttingQuantity = 1;

    myCart.products = savedCart.products;

    myCart.products.forEach((i) => {
        if (i.name === name) {
            return productCuttingInCart = true, productCuttingQuantity = i.quantity;
        }
    })

    const cartButtonCutting = cardElement.querySelector(".btn__busket_price-cutting");

    showCounter(cardElement, cartButtonCutting, productCuttingInCart, productCuttingQuantity);

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
        const type = 'product';
        const cutting = true;
        const product = new Product(card, quantity, type, cutting);
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

    return cardElement;
}

export { createCard, createDescription }