import { openModal } from '../modalFunc.js'
import { createDescription } from './berryCard.js';

const imagePopUp = document.querySelector('.popup_type_image');
const popupTitle = document.querySelector('.popup__title');
const popupGenetics = document.querySelector('.popup__genetics');
const popupColor = document.querySelector('.popup__color');
const popupTaste = document.querySelector('.popup__taste')
const popupMaturity = document.querySelector('.popup__maturity');
const popupMaintainability = document.querySelector('.popup__maintainability');
const popupSpines = document.querySelector('.popup__spines');
const popupBerryWeight = document.querySelector('.popup__berry-weight');
const modalImage = imagePopUp.querySelector('.popup__image');
const page = document.querySelector('.page');
const paragraphContainer = document.querySelector('.popup__description');
const descriptionPopUp = document.querySelector('.popup_type_description');

function openDescriptionPopup(event, txt, filterColor) {

    const popupTypeDescription = document.querySelector('.popup_type_description')
    const popupSpinesElement = popupTypeDescription.querySelector('.popup__spines-element');

    if (event.target.classList.contains('card__button-popup') === true) {
        const card = event.target.closest('.card')

        popupTitle.textContent = card.querySelector('.card__title').textContent;
        popupGenetics.textContent = card.querySelector('.genetics').textContent;
        popupColor.textContent = card.querySelector('.color').textContent;
        popupTaste.textContent = card.querySelector('.taste').textContent;
        popupMaturity.textContent = card.querySelector('.maturity').textContent;
        popupBerryWeight.textContent = card.querySelector('.berry-weight').textContent;
        if (filterColor === 'клубника') {
            popupSpinesElement.classList.add('invisible');
        } else {
            popupSpinesElement.classList.remove('invisible');
            popupSpines.textContent = card.querySelector('.spines').textContent;
        }
        popupMaintainability.textContent = card.querySelector('.maintainability').textContent;

        paragraphContainer.innerHTML = '';

        txt.forEach((i) => {
            paragraphContainer.append(createDescription(i));
        })

        openModal(descriptionPopUp, page)

    } else {
        popupTitle.textContent = event.targetquerySelector('.card__title').textContent;
        popupGenetics.textContent = event.targetquerySelector('.genetics').textContent;
        popupColor.textContent = event.targetquerySelector('.color').textContent;
        popupTaste.textContent = event.targetquerySelector('.taste').textContent;
        popupMaturity.textContent = event.targetquerySelector('.maturity').textContent;
        popupBerryWeight.textContent = event.targetquerySelector('.berry-weight').textContent;
        popupSpines.textContent = event.targetquerySelector('.spines').textContent;
        popupMaintainability.textContent = event.targetquerySelector('.maintainability').textContent;

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

export { openDescriptionPopup, openImagePopup }