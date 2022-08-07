import Popup from "./Popup.js";
import { validationConfig} from "../utils/validation-config.js";

export default class PopupWithForm extends Popup{
    constructor(selector, handleButtonClick) {
        super(selector);
        this._form = this._element.querySelector(validationConfig.formSelector);
        this._handleButtonClick = handleButtonClick;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit',(evt) => {
            evt.preventDefault();
            this._handleButtonClick(this._getInputValues())
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    _getInputValues() {
        this._formInputValues = {};
        this._form.querySelectorAll('.popup__input').forEach((element) => {
            this._formInputValues[element.name] = element.value
        });
        return this._formInputValues;
    }

    renderLoading(isLoading) {
        this._button = this._form.querySelector('.popup__button');
        if (isLoading) {
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = 'Сохранить';
        }
    }
}