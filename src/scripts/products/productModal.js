import { openModal } from '../modalFunc.js'
import { createDescription } from './productCard.js';

const imagePopUp = document.querySelector('.popup_type_image');
const popupTitle = document.querySelector('.popup__title');
const modalImage = imagePopUp.querySelector('.popup__image');
const page = document.querySelector('.page');
const paragraphContainer = document.querySelector('.popup__description');
const descriptionPopUp = document.querySelector('.popup_type_description');

function openDescriptionPopup(event, txt) {

    if (event.target.classList.contains('card__button-popup') === true) {
        const card = event.target.closest('.card')

        popupTitle.textContent = card.querySelector('.card__title').textContent;

        paragraphContainer.innerHTML = '';

        txt.forEach((i) => {
            paragraphContainer.append(createDescription(i));
        })

        openModal(descriptionPopUp, page)

    } else {
        popupTitle.textContent = event.target.querySelector('.card__title').textContent;

        paragraphContainer.innerHTML = '';

        txt.forEach((i) => {
            paragraphContainer.append(createDescription(i));
        })

        openModal(descriptionPopUp)
    }
}

function openImagePopup(event) {
    const card = event.target.closest('.card')

    modalImage.alt = card.querySelector('.card__img').alt;
    modalImage.src = card.querySelector('.card__img').src;

    openModal(imagePopUp, page)
}

export { openImagePopup, openDescriptionPopup }