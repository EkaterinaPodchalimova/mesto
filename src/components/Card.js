export class Card {
    constructor({name , link, likes}, template, handleCardClick, handelTrashClick, user, handleButtonClickLike) {
        this._name = name;
        this._link = link;
        this._likesNumber = likes.length;
        this._likesOwner = likes;
        this._template =  template;
        this._handleCardClick = handleCardClick;
        this._handelTrashClick = handelTrashClick;
        this._user = user;
        this._handleButtonClickLike = handleButtonClickLike;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _deleteTrash() {
        if(!(this._user === this._ownerId)) {
            this._trash.remove();
            this._trash = null;
        }
    }

    _setUserLike() {
        if(this._likesOwner.some(el => el._id === this._user)) {
            this._like.classList.add('element__like_active')
        }
    }

    _setLike() {
        this._like.classList.toggle('element__like_active');
        this._handleButtonClickLike(
            this._like.classList.contains('element__like_active'),
            this._id,
            (likesNumber) => {
                this._likes.textContent = likesNumber
            });
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => this._setLike());
        this._trash.addEventListener('click', () => {
            this._handelTrashClick(this._id, () => this._deleteCard());
        });
        this._photo.addEventListener('click', () => this._handleCardClick({link:this._link, name:this._name}));
    }

    getId(id, ownerId) {
        this._id = id
        this._ownerId = ownerId;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.element__like');
        this._photo = this._element.querySelector('.element__photo');
        this._trash = this._element.querySelector('.element__trash');
        this._likes = this._element.querySelector('.element__like-number');
        this._photo.src = this._link;
        this._photo.alt = `Изображение ${this._name}`;
        this._element.querySelector('.element__text').textContent = this._name;
        this._likes.textContent = this._likesNumber;
        this._setEventListeners();
        this._deleteTrash();
        this._setUserLike();
        return this._element;
    }
}
