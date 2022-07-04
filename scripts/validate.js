export const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
import { closePopupTypeEdit, closePopupTypeAddCard} from './index.js';

export class FormValidator {
    constructor(selector, element) {
        this._inputSelector = selector.inputSelector;
        this._submitButtonSelector = selector.submitButtonSelector;
        this._inactiveButtonClass = selector.inactiveButtonClass;
        this._inputErrorClass = selector.inputErrorClass;
        this._errorClass = selector.errorClass;
        this._formElement = element;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        })
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
        closePopupTypeEdit.addEventListener('click',() => {
            this.resetValidation()
        });
        closePopupTypeAddCard.addEventListener('click',() => {
            this.resetValidation()
        });
        document.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup')) {
                this.resetValidation()
            }
        });
        document.addEventListener('keydown', (evt) => {
            if (evt.key === "Escape") {
                this.resetValidation()
            }
        });}

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.disableSubmitButton();
        } else {
            this.permittedSubmitButton()
        }
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    disableSubmitButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }/*Пришлось сделать публичными для ображения в index.js*/

    permittedSubmitButton() {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled', true);
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        })
    }

    enableValidation(){
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
            this._setEventListeners();
    }
}
