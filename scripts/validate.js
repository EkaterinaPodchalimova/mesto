const showInputError = (element, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(element.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(element.errorClass);
    closePopupTypeEdit.addEventListener('click',() => {
        errorElement.textContent = '';
        inputElement.classList.remove(element.inputErrorClass);
    });
    closePopupTypeAddCard.addEventListener('click',() => {
        errorElement.textContent = '';
        inputElement.classList.remove(element.inputErrorClass);
    });
    document.addEventListener('click',() => {
        errorElement.textContent = '';
        inputElement.classList.remove(element.inputErrorClass);
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (element, inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(element.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(element.inactiveButtonClass);
        buttonElement.removeAttribute('disabled', true);
    }
};

const hideInputError = (element, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(element.inputErrorClass);
    errorElement.classList.remove(element.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (element, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(element, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(element, formElement, inputElement);
    }
};

const setEventListeners = (element,formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(element.inputSelector));
    const buttonElement = formElement.querySelector(element.submitButtonSelector);
    toggleButtonState(element,inputList,buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(element, formElement, inputElement);
            toggleButtonState(element,inputList,buttonElement);
        });
    });
};

const enableValidation = (element) => {
    const formList = Array.from(document.querySelectorAll(element.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(element, formElement);
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

