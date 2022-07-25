import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._photo = this._element.querySelector('.popup__card-photo');
        this._place = this._element.querySelector('.popup__card-place');
    }
    open({link, name}) {
        this._photo.src = link;/*Ссылка на card*/
        this._photo.alt = 'Изображение' + name;/*Ссылка на card*/
        this._place.textContent = name;/*Ссылка на card*/
        super.open();
    }
}