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

export {toNum, toCurrency, Product, ProductGrape, Cart}