import { recipeCards } from "./recipies/recipiesCardsData.js";
import { popupContainerFill, Cart } from './cart.js';

const popups = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.recipes__list');
const cardTemplate = document.querySelector('#recipe-template').content;
const paragraphContainer = document.querySelector('.popup__description');
const paragraphTemplate = document.querySelector('#popup__paragraph-template').content;
const imagePopUp = document.querySelector('.popup_type_image');
const modalImage = imagePopUp.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title');
const page = document.querySelector('.page');
const cart = document.querySelector('.popup__busket');
const cartNum = document.querySelector("#cart_num");

if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));

const myCart = new Cart();

myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

// Открытие корзины
document.querySelector('.busket').addEventListener('click', () => {
    openModal(cart, page);
    popupContainerFill();
})


// Функция открытия попап. (окно)
function openModal(popup, body){
    popup.classList.add('popup_is-opened')
    body.classList.add('no-scroll')
    document.addEventListener('keydown', closePopupEsc)
};

// закрытие модального окна без аргументов
function closeModal(modal, body) {
    modal.classList.remove("popup_is-opened")
    body.classList.remove("no-scroll")
    document.removeEventListener('keydown', closePopupEsc)
}

// Функция закрытия попап по оверлею
const handleCloseByOverlayClick = function (evt) {
    if (evt.target.classList.contains('popup_is-opened')) { // проверяем наличие класса у evt.target через contains
        closeModal(evt.target, page);
    }
};

// Функция закрытия через попап ESC
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_is-opened');
        closeModal(activePopup, page);
    }
}

function createDescription(txt) {
    const paragraphElement = paragraphTemplate.querySelector('.popup__paragraph').cloneNode(true);

    paragraphElement.textContent = txt;

    return paragraphElement;
}

function openImagePopup(event, txt) {

    if (event.target.classList.contains('recipe__title') === true) {
        recipe = event.target.closest('.recipe')

        modalImage.alt = recipe.querySelector('.recipe__img').alt;
        modalImage.src = recipe.querySelector('.recipe__img').src;
        popupTitle.textContent = recipe.querySelector('.recipe__title').textContent;

        paragraphContainer.innerHTML = '';

        txt.forEach((i) => {
            paragraphContainer.append(createDescription(i));
        })

        openModal(imagePopUp, page)
    } else {
        modalImage.alt = event.target.querySelector('.recipe__img').alt;
        modalImage.src = event.target.querySelector('.recipe__img').src;
        popupTitle.textContent = event.target.querySelector('.recipe__title').textContent;

        paragraphContainer.innerHTML = '';

        txt.forEach((i) => {
            paragraphContainer.append(createDescription(i));
        })

        openModal(imagePopUp, page)
    }
}

//Создание карточки рецепта
function createRecipeCard(name, link, text){
    const cardElement = cardTemplate.querySelector('.recipe').cloneNode(true)

    //Передача информации о карточки
    cardElement.querySelector('.recipe__img').src = link;
    cardElement.querySelector('.recipe__img').alt = name;
    cardElement.querySelector('.recipe__title').textContent = name;
    cardElement.querySelector('.recipe__description').textContent = text;

    const recipeText = text;

    // при нажатие на карточку будет срабатывать openImagePopup
    cardElement.addEventListener('click', (evt) => {
        openImagePopup(evt, recipeText);
    })

    return cardElement;
}

//Вывод через цикл карточек рецептов
recipeCards.forEach(function(element){
    cardsContainer.append(createRecipeCard(element.name, element.link, element.text))
})

popups.forEach((popup) => {
    // находим кнопку закрытия
    const closeButton = popup.querySelector('.popup__close')

    // вешаем обработчик закрытия по клику на кнопку
    closeButton.addEventListener('click', () => closeModal(popup, page))

    // вешаем обработчик закрытия кликом по оверлею
    popup.addEventListener('mousedown', handleCloseByOverlayClick)
})


