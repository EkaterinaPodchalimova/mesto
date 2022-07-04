import { openPopup, popupTypeCardPhoto, photoCard, placeCard} from './index.js';

export class Card {
    constructor(element) {
        this._name = element.name;
        this._link = element.link;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('#element-template')
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _setLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _openPopupPhoto() {
        photoCard.src = this._link;
        photoCard.alt = 'Изображение' + this._name;
        placeCard.textContent = this._name;
        openPopup(popupTypeCardPhoto);
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => this._setLike());
        this._element.querySelector('.element__trash').addEventListener('click', () => this._deleteCard());
        this._element.querySelector('.element__photo').addEventListener('click', () => this._openPopupPhoto());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__text').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
}
