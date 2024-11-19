import { grapeCards } from './grapeCardsData.js';
import { openModal, closeModal, handleCloseByOverlayClick } from '../modalFunc.js';
import { createCard } from './grapeCard.js';
import { popupContainerFill, Cart } from '../cart.js';

const popups = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.cards__container-list');
const page = document.querySelector('.page');
const cart = document.querySelector('.popup__busket');
const cartNum = document.querySelector("#cart_num");

const myCart = new Cart();

if (localStorage.getItem("cart") === null || localStorage.getItem("cart") === undefined) {
  localStorage.setItem("cart", JSON.stringify(myCart));
}


let savedCart = [];

try {
    savedCart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (error) {
    console.error("Ошибка парсинга JSON:", error);
    localStorage.setItem("cart", JSON.stringify(myCart));
    savedCart = []; // Защитное значение по умолчанию
};

myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

// Открытие корзины
document.querySelector('.busket').addEventListener('click', () => {
    openModal(cart, page);
    popupContainerFill();
})

//Вывод через цикл карточек
grapeCards.forEach(function(element){
    cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
})

document.querySelector('.sorting__btn-black').addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        if (element.filterColor.includes('черный')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
        }
    })
})

document.querySelector('.sorting__btn-red').addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        if (element.filterColor.includes('красный')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
        }
    })
})

document.querySelector('.sorting__btn-pink').addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        if (element.filterColor.includes('розовый')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
        }
    })
})

document.querySelector('.sorting__btn-white').addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        if (element.filterColor.includes('белый')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
        }
    })
})

document.querySelector('.sorting__btn-all').addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
    })
})

document.querySelector('.sorting__btn-technical').addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        if (element.filterColor.includes('технический')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
        }
    })
})

// создание искомой карточки
function createSearchingCard(nameLowerCase, searchString, element) {
    if (nameLowerCase.includes(`${searchString}`)) {
        cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
    }
}

// создание списка искомых карточек
function createSearchingCardList() {
    let searchString = document.querySelector('.search-input').value;
    searchString = searchString.toLowerCase()
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        const elementNameLowerCase = element.name.toLowerCase()
        createSearchingCard(elementNameLowerCase, searchString, element)
    })
    if (cardsContainer.innerHTML === "") {
        let li = document.createElement('li')
        li.textContent = 'Ничего не найдено, попробуйте снова. Вводите только кирилические символы.';
        cardsContainer.appendChild(li)
    }
}

// создание списка искомых карточек если был нажат ENTER
function createSearchingCardListIfKeydownEnter(evt) {
    if (evt.keyCode === 13) {
        createSearchingCardList()
    }
}

// создание списка искомых карточек если был нажат ENTER
document.querySelector('.search-input').addEventListener('click', () => {
    document.addEventListener('keyup', (evt) => {
        createSearchingCardListIfKeydownEnter(evt)
    })
})

document.querySelector('.search-btn').addEventListener('click', () => {
    createSearchingCardList()
})

document.querySelector('.reset_search-btn').addEventListener('click', () => {
    cardsContainer.innerHTML = '';
    grapeCards.forEach(function(element){
        cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.autors, element.genetics, element.color, element.taste, element.maturity, element.bunchWeight, element.berryWeight, element.frostResistance, element.diseaseResistance, element.sugarСontent, element.acidity, element.text, element.priceCutting, element.priceVine))
    })
})

popups.forEach((popup) => {
    // находим кнопку закрытия
    const closeButton = popup.querySelector('.popup__close')

    // вешаем обработчик закрытия по клику на кнопку
    closeButton.addEventListener('click', () => closeModal(popup, page))

    // вешаем обработчик закрытия кликом по оверлею
    popup.addEventListener('mousedown', handleCloseByOverlayClick)
})


document.querySelector('.left-panel__form').addEventListener('submit', function(event) {
    event.preventDefault();
});