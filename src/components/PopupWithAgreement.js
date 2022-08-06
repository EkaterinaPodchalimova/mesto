import Popup from "./Popup.js";
import {validationConfig} from "../utils/validation-config";
export default class PopupWithAgreement extends Popup{
    constructor(selector) {
        super(selector);
        this._form = this._element.querySelector(validationConfig.formSelector);

    }

    submitAgree(deleteServer) {
        this._deleteServer = deleteServer;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._deleteServer();
            this.close();
        });
    }
}