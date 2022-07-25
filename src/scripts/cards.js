export class Card {
    constructor({name, link}, template, handleCardClick) {
        this._name = name;
        this._link = link;
        this._template =  template;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
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

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => this._setLike());
        this._element.querySelector('.element__trash').addEventListener('click', () => this._deleteCard());
        this._element.querySelector('.element__photo').addEventListener('click', () => this._handleCardClick({link:this._link, name:this._name}));
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__text').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
}
