import Popup from "./popup.js";
import FormValidator from "./validate.js";
import { validationConfig} from "./validation-config.js";

export default class PopupWithForm extends Popup{
    constructor(selector, handleButtonClick) {
        super(selector);
        this._validForm = new FormValidator(validationConfig, this._element.querySelector(validationConfig.formSelector));
        this._form = this._element.querySelector(validationConfig.formSelector);
        this._handleButtonClick = handleButtonClick;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this._handleButtonClick(this._getInputValues())
        });
        this._validForm.enableValidation()
    }

    close() {
        super.close();
        this._form.reset();
        this._validForm.resetValidation();
    }

    _getInputValues() {
        this._formInputValues = {};
        for (let i=0; i<(this._form.elements.length - 1); i++)
        { this._formInputValues[this._form.elements[i].name] = this._form.elements[i].value;
        }
        return this._formInputValues;
    }
}