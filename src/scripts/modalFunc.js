const page = document.querySelector('.page');

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
    document.removeEventListener('keydown', closePopupEsc)  // удаляем из карточки
}

  // Функция закрытия через попап ESC
function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_is-opened');
        closeModal(activePopup, page);
    }
}

// Функция закрытия попап по оверлею
const handleCloseByOverlayClick = function (evt) {
    if (evt.target.classList.contains('popup_is-opened')) { // проверяем наличие класса у evt.target через contains
        closeModal(evt.target, page);
    }
};

export { openModal, closeModal, handleCloseByOverlayClick }