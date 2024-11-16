import { openDescriptionPopup, openImagePopup } from './grapeModal.js';
import { ProductGrape, Cart } from '../cart.js';

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

    cardElement.querySelector('.card__price-cutting').textContent = `${priceCutting}`;
    cardElement.querySelector('.card__price-vine').textContent = `${priceVine}`;

    cardElement.querySelector('.card__button-popup').addEventListener('click', (evt) => {
        openDescriptionPopup(evt, cardText);
    })

    cardElement.querySelector('.card__image-wrapper').addEventListener('click', (evt) => {
        openImagePopup(evt, page);
    })

    cardElement.querySelector('.btn__basket_price-cutting').addEventListener('click', (evt) => {
        const card = evt.target.closest(".card");
        const quantity = 1;
        const type = 'grape';
        const cutting = true;
        const product = new ProductGrape(card, quantity, type, cutting);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        myCart.addProduct(product);
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
    })

    cardElement.querySelector('.btn__basket_price-vine').addEventListener('click', (evt) => {
        const card = evt.target.closest(".card");
        const quantity = 1;
        const type = 'grape';
        const cutting = false;
        const product = new ProductGrape(card, quantity, type, cutting);
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        myCart.products = savedCart.products;
        myCart.addProduct(product);
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
    })

    if (filterColor === 'красный') {
        cardElement.classList.add('red-outline');
    } else if (filterColor === 'белый') {
        cardElement.classList.add('white-outline');
    } else if (filterColor === 'черный') {
        cardElement.classList.add('black-outline');
    } else if (filterColor === 'розовый') {
        cardElement.classList.add('pink-outline');
    } else {
        cardElement.classList.add('technical-outline');
    }

    return cardElement;
  }

  export { createCard, createDescription }