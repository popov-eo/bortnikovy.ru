import { berryCards } from './berryCardsData.js';
import { createCard } from './berryCard.js'
import { openModal, closeModal, handleCloseByOverlayClick } from '../modalFunc.js';
import { toNum, toCurrency, Cart } from '../cart.js';

const popups = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.cards__container-list');
const page = document.querySelector('.page');
const cart = document.querySelector('.popup__busket');
const cartNum = document.querySelector("#cart_num");
const popupProductList = cart.querySelector('.popup__busket-list');
const popupCost = document.querySelector("#popup_cost");

const myCart = new Cart();

if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("cart"));

myCart.products = savedCart.products;
cartNum.textContent = myCart.count;

function popupContainerFill() {
    popupProductList.innerHTML = null;
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
    const productsHTML = myCart.products.map((product) => {
        const productItem = document.createElement("li");
        productItem.classList.add("popup__busket-list-item");

        const productWrap1 = document.createElement("div");
        productWrap1.classList.add("popup__product-wrap");
        const productWrap2 = document.createElement("div");
        productWrap2.classList.add("popup__product-wrap");

        const productImage = document.createElement("img");
        productImage.classList.add("busket-item-img");
        productImage.setAttribute("src", product.imageSrc);

        const productTitle = document.createElement("h3");
        productTitle.classList.add("busket-item-title");
        productTitle.innerHTML = product.name;

        const productPrice = document.createElement("div");
        productPrice.classList.add("popup__product-price");
        let productTotalPrice = toNum(product.priceCutting) * product.quantity;
        productPrice.innerHTML = toCurrency(productTotalPrice);

        const productWrap3 = document.createElement("div");
        productWrap3.classList.add("popup__product-wrap");
        productWrap3.classList.add("popup__product-big_wrap");

        const counter = document.createElement("div");
        counter.classList.add("popup__product-wrap");
        counter.classList.add("busket-item-counter");

        const reduseBtn = document.createElement("button");
        reduseBtn.classList.add("busket-item-count_btn");
        reduseBtn.classList.add("busket-item-count_minus");
        reduseBtn.setAttribute("type", "button");
        reduseBtn.innerHTML = "–";

        const inputCount = document.createElement("input");
        inputCount.classList.add("busket-item-count_input");
        inputCount.setAttribute("type", "text");
        inputCount.setAttribute("value", product.quantity);

        const incrBtn = document.createElement("button");
        incrBtn.classList.add("busket-item-count_btn");
        incrBtn.classList.add("busket-item-count_plus");
        incrBtn.setAttribute("type", "button");
        incrBtn.innerHTML = "+";

        incrBtn.addEventListener("click", () => {
            let quantityOfProduct = myCart.increaseCountOfProduct(product);
            inputCount.value = quantityOfProduct;
            cartNum.textContent = myCart.count;
            localStorage.setItem("cart", JSON.stringify(myCart));
            popupContainerFill();
        })

        reduseBtn.addEventListener("click", () => {
            let quantityOfProduct = myCart.reduceCountOfproduct(product);
            inputCount.value = quantityOfProduct;
            cartNum.textContent = myCart.count;
            localStorage.setItem("cart", JSON.stringify(myCart));
            popupContainerFill();
        })

        const productDelete = document.createElement("button");
        productDelete.classList.add("popup__busket-item-delete");
        productDelete.innerHTML = "✖";

        productDelete.addEventListener("click", () => {
            myCart.removeProduct(product);
            localStorage.setItem("cart", JSON.stringify(myCart));
            cartNum.textContent = myCart.count;
            popupContainerFill();
        });

        productWrap1.appendChild(productImage);
        productWrap1.appendChild(productTitle);
        counter.appendChild(reduseBtn);
        counter.appendChild(inputCount);
        counter.appendChild(incrBtn);
        productWrap2.appendChild(productPrice);
        productWrap2.appendChild(productDelete);
        productWrap3.appendChild(counter);
        productWrap3.appendChild(productWrap2)
        productItem.appendChild(productWrap1);
        productItem.appendChild(productWrap3);

        return productItem;
    });

    productsHTML.forEach((productHTML) => {
        popupProductList.appendChild(productHTML);
    });

    popupCost.value = toCurrency(myCart.cost);
}

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