import { recipeCards } from "./recipies/recipiesCardsData.js";

const popups = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.recipes__list');
const cardTemplate = document.querySelector('#recipe-template').content;

const paragraphContainer = document.querySelector('.popup__description');
const paragraphTemplate = document.querySelector('#popup__paragraph-template').content;

const popup = document.querySelector('.popup');

const imagePopUp = document.querySelector('.popup_type_image');

const imageDescription = imagePopUp.querySelector('.popup__description');

const modalImage = imagePopUp.querySelector('.popup__image');

const popupDescription = document.querySelector('.popup__description');

const popupTitle = document.querySelector('.popup__title');

const page = document.querySelector('.page');

const descriptionWrapper = document.querySelector('.popup__description');

const cart = document.querySelector('.popup__busket');
const cartNum = document.querySelector("#cart_num");
const popupProductList = cart.querySelector('.popup__busket-list');
const popupCost = document.querySelector("#popup_cost");

// Корзина
function toNum(str) {
  const num = Number(str.replace(/ /g, ""));
  return num;
}

function toCurrency(num) {
  const format = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(num);
  return format;
}

class Product {
  quantity;
  cutting;
  imageSrc;
  name;
  priceCutting;
  priceVine;
  constructor(card, quantity, cutting) {
    this.quantity = quantity;
    this.cutting = cutting;
    this.imageSrc = card.querySelector(".card__img").src;
    this.name = card.querySelector(".card__title").textContent;
    this.priceCutting = card.querySelector(".card__price-cutting").textContent;
    this.priceVine = card.querySelector(".card__price-vine").textContent;
  }
}

class Cart {
  products;
  constructor() {
    this.products = [];
  }
  get count() {
    let total = 0;
    this.products.forEach((i) => {
      total = total + i.quantity;
    })
    return total;
  }
  addProduct(product) {
    if (product.cutting) {
      product.name = product.name + " черенок";
    } else {
      product.name = product.name + " саженец";
    }

    const productInProducts = this.products.some((i) => {
      return i.name === product.name;
    });
    if (!productInProducts) {
      this.products.push(product);
    }
  }
  increaseCountOfProduct(product) {
    product.quantity++;
    return product.quantity;
  }
  reduceCountOfproduct(product) {
    if (product.quantity > 1) {
      product.quantity--;
      return product.quantity;
    }
  }
  removeProduct(index) {
    this.products.splice(this.products.indexOf(index), 1);
  }
  get cost() {
    const prices = this.products.map((product) => {
      let price = 0;
      if (product.cutting) {
        price = toNum(product.priceCutting) * product.quantity;
      } else {
        price = toNum(product.priceVine) * product.quantity;
      }
      return price;
    });
    const sum = prices.reduce((acc, num) => {
      return acc + num;
    }, 0);
    return sum;
  }
}

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
    let productTotalPrice = 0;
    if (product.cutting) {
      productTotalPrice = toNum(product.priceCutting) * product.quantity;
    } else {
      productTotalPrice = toNum(product.priceVine) * product.quantity;
    }
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


