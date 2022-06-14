const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
const {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = selectors;

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    closePopupTypeEdit.addEventListener('click',() => {
        errorElement.textContent = '';
        errorElement.classList.remove(errorClass);
        inputElement.classList.remove(inputErrorClass);
    });
    closePopupTypeAddCard.addEventListener('click',() => {
        errorElement.textContent = '';
        errorElement.classList.remove(errorClass);
        inputElement.classList.remove(inputErrorClass);
    });
    document.addEventListener('click', function (evt) {
       if (evt.target.classList.contains('popup')){
            errorElement.textContent = '';
            errorElement.classList.remove(errorClass);
            inputElement.classList.remove(inputErrorClass);
        }
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonStateInvalid = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }
};

const toggleButtonStateValid = (inputList, buttonElement) => {
    if (!hasInvalidInput(inputList)) {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled', true);
    }
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonStateInvalid(inputList,buttonElement);
    toggleButtonStateValid(inputList,buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonStateInvalid(inputList,buttonElement);
            toggleButtonStateValid(inputList,buttonElement);
        });
    });
};

const enableValidation = (popup) => {
    const formList = Array.from(document.querySelectorAll(popup));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

enableValidation(formSelector);

