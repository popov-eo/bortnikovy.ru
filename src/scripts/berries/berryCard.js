import {openImagePopup, openDescriptionPopup} from './berryModal.js';
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

//Создание карточки
function createCard(filterColor, name, link, genetics, color, taste, maturity, berryWeight, spines, maintainability, text, youngPlantPrice) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

    //Передача информации о карточки
    cardElement.querySelector('.card__img').src = link;
    cardElement.querySelector('.card__img').alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.genetics').textContent = genetics;
    cardElement.querySelector('.color').textContent = color;
    cardElement.querySelector('.taste').textContent = taste;
    cardElement.querySelector('.maturity').textContent = maturity;
    cardElement.querySelector('.berry-weight').textContent = berryWeight;
    cardElement.querySelector('.spines').textContent = spines;
    cardElement.querySelector('.maintainability').textContent = maintainability;

    const cardDescription = cardElement.querySelector('.card__description');

    const cardText = text;

    text.forEach((i) => {
        cardDescription.append(createDescription(i));
    })

    cardElement.querySelector('.card__price-cutting').textContent = youngPlantPrice;

    cardElement.querySelector('.btn__basket').addEventListener('click', (evt) => {
        const card = evt.target.closest(".card");
        const cartButton = card.querySelector(".btn__basket_price-cutting");
        cartButton.textContent = 'Отправлено';
        setTimeout(changeTextCartBtn, 1500, cartButton);
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

    cardElement.querySelector('.card__button-popup').addEventListener('click', (evt) => {
        openDescriptionPopup(evt, cardText, filterColor);
    })

    cardElement.querySelector('.card__image-wrapper').addEventListener('click', (evt) => {
        openImagePopup(evt, page);
    })

    if (filterColor === 'клубника') {
        cardElement.classList.add('red-outline');
        const spinesElement = cardElement.querySelector('.spines-item');
        spinesElement.classList.add('invisible');
    } else if (filterColor === 'ежевика') {
        cardElement.classList.add('black-outline');
    } else if (filterColor === 'малина') {
        cardElement.classList.add('pink-outline');
    }

    return cardElement;
}

export { createDescription, createCard }