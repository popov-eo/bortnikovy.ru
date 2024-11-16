const contactForm = document.querySelector('.contact-us__form')

const validationConfig = {
  formSelector: '.contact-us__form',
  inputSelector: '.contact-us__input-field',
  submitButtonSelector: '.btn-submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'input_invalid',
  errorClass: 'input-error_active'
}

function showInputError(
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElement,
  inputErrorClass,
  errorClass) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  })
}

function makeButtonStateInactive(buttonElement, inactiveButtonClass) {
  buttonElement.disabled = true;
  buttonElement.classList.add(inactiveButtonClass);
}

function makeButtonStateActive(buttonElement, inactiveButtonClass) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(inactiveButtonClass);
}

function setEventListeners(
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  makeButtonStateInactive(buttonElement, inactiveButtonClass);

  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {

          if (inputElement.validity.patternMismatch) {
              inputElement.setCustomValidity(inputElement.dataset.errorMessage)
          } else {
              inputElement.setCustomValidity('');
          }

          if (!inputElement.validity.valid) {
              showInputError(
                  formElement,
                  inputElement,
                  inputElement.validationMessage,
                  inputErrorClass,
                  errorClass
              )
          } else {
              hideInputError(
                  formElement,
                  inputElement,
                  inputErrorClass,
                  errorClass
              )
          }

          if (hasInvalidInput(inputList)) {
              makeButtonStateInactive(buttonElement, inactiveButtonClass);
          }
           else {
              makeButtonStateActive(buttonElement, inactiveButtonClass);
          }
      })
  })
}

function enableValidation(config) {
  const form = document.querySelector(config.formSelector);

  setEventListeners(
    form,
    config.inputSelector,
    config.submitButtonSelector,
    config.inactiveButtonClass,
    config.inputErrorClass,
    config.errorClass
  )
}

function handleForm(event) { 
  event.preventDefault(); 

}

contactForm.querySelector('.btn-submit').addEventListener('submit', handleForm);



enableValidation(validationConfig);



function renderLoading(contactForm, isLoading) {
  const submitButton = contactForm.querySelector('.btn-submit');
  if (isLoading) {
      submitButton.textContent = 'Отправка...';
  } else {
      submitButton.textContent = 'Отправить'
  }
}