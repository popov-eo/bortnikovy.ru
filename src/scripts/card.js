function deleteCounterCutting(cardElement, cartButtonCutting) {
    const priceWrapperCutting = cardElement.querySelector('.price-wrapper-cutting')
    priceWrapperCutting.removeChild(cardElement.querySelector('.busket-item-cutting-counter'))

    cartButtonCutting.classList.remove("invisible")
}

function deleteCounterVine(cardElement, cartButtonVine) {
    const priceWrapperVine = cardElement.querySelector('.price-wrapper-vine')
    priceWrapperVine.removeChild(cardElement.querySelector('.busket-item-vine-counter'))

    cartButtonVine.classList.remove("invisible")
}

export { deleteCounterCutting, deleteCounterVine }