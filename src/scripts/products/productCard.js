import {openImagePopup, openDescriptionPopup} from '../products/productModal.js';
import {Product, Cart} from '../cart.js';

const cardTemplate = document.querySelector('#card-template').content;
const paragraphTemplate = document.querySelector('#popup__paragraph-template').content;
const page = document.querySelector('.page');
const cartNum = document.querySelector("#cart_num");

const myCart = new Cart();

function createDescription(txt) {
    const paragraphElement = paragraphTemplate.querySelector('.popup__paragraph').cloneNode(true);

    paragraphElement.textContent = txt;

    return paragraphElement;
}

function changeTextCartBtn(button, after) {
    button.textContent = 'В корзину';
    button.classList.remove('animated-gradient');
    button.classList.add("btn");
    button.classList.remove("btnForAnimation");
}

function createCard(name, link, text, price){
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

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

    cardElement.querySelector('.btn__basket').addEventListener('click', (evt) => {
        const card = evt.target.closest(".card");
        const cartButton = card.querySelector(".btn__basket_price-cutting");
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

    return cardElement;
}

export { createCard, createDescription }