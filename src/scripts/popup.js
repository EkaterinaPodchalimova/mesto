export default class Popup {
    constructor(selector) {
        this._element = document.querySelector(selector);
        this._close = this._element.querySelector('.popup__close')
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._close.addEventListener('click', () => this.close());
        this._element.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        })
    }

    open() {
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown',(evt) => this._handleEscClose(evt));
    }

    close() {
        this._element.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
    }
}
