const cart = document.querySelector('.popup__busket');
const popupProductList = cart.querySelector('.popup__busket-list');
const popupCost = document.querySelector("#popup_cost");
const cartNum = document.querySelector("#cart_num");

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
    type;
    cutting;
    imageSrc;
    name;
    priceCutting;
    constructor(card, quantity, type, cutting) {
        this.quantity = quantity;
        this.cutting = cutting;
        this.imageSrc = card.querySelector(".card__img").src;
        this.name = card.querySelector(".card__title").textContent;
        this.type = type;
        this.priceCutting = card.querySelector(".card__price-cutting").textContent;
    }
}

class ProductGrape {
    quantity;
    type;
    cutting;
    imageSrc;
    name;
    priceCutting;
    priceVine;
    constructor(card, quantity, type, cutting) {
        this.quantity = quantity;
        this.cutting = cutting;
        this.imageSrc = card.querySelector(".card__img").src;
        this.name = card.querySelector(".card__title").textContent;
        this.type = type;
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
        if (product.type === 'grape') {
            if (product.cutting) {
                product.name = product.name + " черенок";
            } else {
                product.name = product.name + " саженец";
            }
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

function popupContainerFill() {
    popupProductList.innerHTML = null;
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    myCart.products = savedCart.products;
    if (myCart.products.length === 0) {
        const productItem = document.createElement("li");
        productItem.classList.add("popup__busket-list-item");
        productItem.textContent = 'Ваша корзина пока пуста.';
        popupProductList.appendChild(productItem);
    }
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

    const clearCart = document.querySelector(".popup__busket_clear-btn");

    clearCart.addEventListener("click", () => {
        myCart.products.forEach((product) => {
            myCart.products.splice(product);
        })
        localStorage.setItem("cart", JSON.stringify(myCart));
        cartNum.textContent = myCart.count;
        popupContainerFill();
    });

    productsHTML.forEach((productHTML) => {
        popupProductList.appendChild(productHTML);
    });

    popupCost.value = toCurrency(myCart.cost);
}

export {toNum, toCurrency, Product, ProductGrape, Cart, popupContainerFill}