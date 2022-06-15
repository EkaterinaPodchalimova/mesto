const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage ,rest) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(rest.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(rest.errorClass);
    closePopupTypeEdit.addEventListener('click',() => {
        errorElement.textContent = '';
        errorElement.classList.remove(rest.errorClass);
        inputElement.classList.remove(rest.inputErrorClass);
    });
    closePopupTypeAddCard.addEventListener('click',() => {
        errorElement.textContent = '';
        errorElement.classList.remove(rest.errorClass);
        inputElement.classList.remove(rest.inputErrorClass);
    });
    document.addEventListener('click', function (evt) {
       if (evt.target.classList.contains('popup')){
            errorElement.textContent = '';
            errorElement.classList.remove(rest.errorClass);
            inputElement.classList.remove(rest.inputErrorClass);
        }
    });
    document.addEventListener('keydown', (evt) => {
        if (evt.key === "Escape") {
            errorElement.textContent = '';
            errorElement.classList.remove(rest.errorClass);
            inputElement.classList.remove(rest.inputErrorClass);
        }
    });
};

const hideInputError = (formElement, inputElement, rest) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(rest.inputErrorClass);
    errorElement.classList.remove(rest.errorClass);
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
};

const permittedSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
};

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass, ...rest}) => {
    if (hasInvalidInput(inputList)) {
        disableSubmitButton(buttonElement, inactiveButtonClass);
    } else {
        permittedSubmitButton(buttonElement, inactiveButtonClass)
    }
};

const checkInputValidity = (formElement, inputElement, rest) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, rest);
    } else {
        hideInputError(formElement, inputElement, rest);
    }
};

const setEventListeners = (formElement,{inputSelector,submitButtonSelector, ...rest}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList,buttonElement,rest);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, rest);
            toggleButtonState(inputList,buttonElement, rest);
        });
    });
};

const enableValidation = ({formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, rest);
    });
};

enableValidation(selectors);

