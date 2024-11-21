import { berryCards } from './berryCardsData.js';
import { createCard } from './berryCard.js'
import { openModal, closeModal, handleCloseByOverlayClick } from '../modalFunc.js';
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

let savedCart;

try {
    savedCart = JSON.parse(localStorage.getItem("cart")) || []
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
berryCards.forEach(function(element){
    cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.genetics, element.color, element.taste, element.maturity, element.berryWeight, element.spines, element.maintainability, element.text, element.youngPlantPrice))
})

document.querySelector('.sorting__btn-black').addEventListener('click', (evt) => {
    cardsContainer.innerHTML = '';
    berryCards.forEach(function(element){
        if (element.filterColor.includes('ежевика')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.genetics, element.color, element.taste, element.maturity, element.berryWeight, element.spines, element.maintainability, element.text, element.youngPlantPrice))
        }
    })
})

document.querySelector('.sorting__btn-red').addEventListener('click', (evt) => {
    cardsContainer.innerHTML = '';
    berryCards.forEach(function(element){
        if (element.filterColor.includes('клубника')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.genetics, element.color, element.taste, element.maturity, element.berryWeight, element.spines, element.maintainability, element.text, element.youngPlantPrice))
        }
    })
})

document.querySelector('.sorting__btn-pink').addEventListener('click', (evt) => {
    cardsContainer.innerHTML = '';
    berryCards.forEach(function(element){
        if (element.filterColor.includes('малина')) {
            cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.genetics, element.color, element.taste, element.maturity, element.berryWeight, element.spines, element.maintainability, element.text, element.youngPlantPrice))
        }
    })
})

document.querySelector('.sorting__btn-all').addEventListener('click', (evt) => {
    cardsContainer.innerHTML = '';
    berryCards.forEach(function(element){
        cardsContainer.append(createCard(element.filterColor, element.name, element.link, element.genetics, element.color, element.taste, element.maturity, element.berryWeight, element.spines, element.maintainability, element.text, element.youngPlantPrice))
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