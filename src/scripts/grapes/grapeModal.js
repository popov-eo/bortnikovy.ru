import { openModal } from '../modalFunc.js'
import { createDescription } from './grapeCard.js';

const imagePopUp = document.querySelector('.popup_type_image');
const popupTitle = document.querySelector('.popup__title');
const popupAutors = document.querySelector('.popup__autors');
const popupGenetics = document.querySelector('.popup__genetics');
const popupColor = document.querySelector('.popup__color');
const popupTaste = document.querySelector('.popup__taste')
const popupMaturity = document.querySelector('.popup__maturity');
const popupBunchWeight = document.querySelector('.popup__bunch-weight');
const popupBerryWeight = document.querySelector('.popup__berry-weight');
const popupFrostResistance = document.querySelector('.popup__frost-resistance');
const popupDiseaseResistance = document.querySelector('.popup__disease-resistance');
const popupSugarСontent = document.querySelector('.popup__sugar-content');
const popupAcidity = document.querySelector('.popup__acidity');
const modalImage = imagePopUp.querySelector('.popup__image');
const page = document.querySelector('.page');
const paragraphContainer = document.querySelector('.popup__description');
const descriptionPopUp = document.querySelector('.popup_type_description');

function openDescriptionPopup(event, txt) {

    if (event.target.classList.contains('card__button-popup') === true) {
        const card = event.target.closest('.card')

        popupTitle.textContent = card.querySelector('.card__title').textContent;
        popupAutors.textContent = card.querySelector('.autors').textContent;
        popupGenetics.textContent = card.querySelector('.genetics').textContent;
        popupColor.textContent = card.querySelector('.color').textContent;
        popupTaste.textContent = card.querySelector('.taste').textContent;
        popupMaturity.textContent = card.querySelector('.maturity').textContent;
        popupBunchWeight.textContent = card.querySelector('.bunch-weight').textContent;
        popupBerryWeight.textContent = card.querySelector('.berry-weight').textContent;
        popupFrostResistance.textContent = card.querySelector('.frost-resistance').textContent;
        popupDiseaseResistance.textContent = card.querySelector('.disease-resistance').textContent;
        popupSugarСontent.textContent = card.querySelector('.sugar-content').textContent;
        popupAcidity.textContent = card.querySelector('.acidity').textContent;

        paragraphContainer.innerHTML = '';

        txt.forEach((i) => {
            paragraphContainer.append(createDescription(i));
        })

        openModal(descriptionPopUp, page)

    } else {
        popupTitle.textContent = event.target.querySelector('.card__title').textContent;
        popupAutors.textContent = event.target.querySelector('.autors').textContent;
        popupGenetics.textContent = event.target.querySelector('.genetics').textContent;
        popupColor.textContent = event.target.querySelector('.color').textContent;
        popupTaste.textContent = event.target.querySelector('.taste').textContent;
        popupMaturity.textContent = event.target.querySelector('.maturity').textContent;
        popupBunchWeight.textContent = event.target.querySelector('.bunch-weight').textContent;
        popupBerryWeight.textContent = event.target.querySelector('.berry-weight').textContent;
        popupFrostResistance.textContent = event.target.querySelector('.frost-resistance').textContent;
        popupDiseaseResistance.textContent = event.target.querySelector('.disease-resistance').textContent;
        popupSugarСontent.textContent = event.target.querySelector('.sugar-content').textContent;
        popupAcidity.textContent = event.target.querySelector('.acidity').textContent;

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