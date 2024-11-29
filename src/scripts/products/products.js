import { productCards } from './productCardsData.js';
import { createCard } from './productCard.js';
import { openModal, closeModal, handleCloseByOverlayClick } from '../modalFunc.js';
import { popupContainerFill, Cart } from '../cart.js';

const popups = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.cards__container-list');
const page = document.querySelector('.page');
const cart = document.querySelector('.popup__busket');
const cartNum = document.querySelector("#cart_num");
const clearCart = document.querySelector(".popup__busket_clear-btn");

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

clearCart.addEventListener("click", () => {
    myCart.products.forEach((product) => {
        myCart.products.splice(product);
    })

    cardsContainer.innerHTML = '';

    localStorage.setItem("cart", JSON.stringify(myCart));

    popupContainerFill();

    savedCart = [];
    cartNum.textContent = myCart.count;
    myCart.products = savedCart.products;

    productCards.forEach(function(element){
        cardsContainer.append(createCard(element.name, element.link, element.text, element.price))
    })
    savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
})

productCards.forEach(function(element){
  cardsContainer.append(createCard(element.name, element.link, element.text, element.price))
})

document.querySelector('.sorting__btn-perepel').addEventListener('click', () => {
  cardsContainer.innerHTML = '';
  productCards.forEach(function(element){
    if (element.type.includes('перепёлочка')) {
      cardsContainer.append(createCard(element.name, element.link, element.text, element.price))
    }
  })
})

document.querySelector('.sorting__btn-berries').addEventListener('click', () => {
  cardsContainer.innerHTML = '';
  productCards.forEach(function(element){
    if (element.type.includes('калинка-малинка')) {
      cardsContainer.append(createCard(element.name, element.link, element.text, element.price))
    }
  })
})

document.querySelector('.sorting__btn-all').addEventListener('click', () => {
  cardsContainer.innerHTML = '';
  productCards.forEach(function(element){
    cardsContainer.append(createCard(element.name, element.link, element.text, element.price))
  })
})

document.querySelector('.sorting__btn-vegetables').addEventListener('click', () => {
  cardsContainer.innerHTML = '';
  productCards.forEach(function(element){
    if (element.type.includes('огородная братва')) {
      cardsContainer.append(createCard(element.name, element.link, element.text, element.price))
    }
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