const popupTypeEdit = document.querySelector('.popup_type_edit-user');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupTypeCardPhoto = document.querySelector('.popup_type_card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameElementProfile = document.querySelector('.profile__name');
const jobElementProfile = document.querySelector('.profile__job');
const formElementTypeEdit = popupTypeEdit.querySelector('.popup__container_type_edit-user');
const formElementTypeAddCard = popupTypeAddCard.querySelector('.popup__container_type_add-card');
const closePopupTypeEdit = popupTypeEdit.querySelector('.popup__close_type_edit-user');
const closePopupTypeAddCard = popupTypeAddCard.querySelector('.popup__close_type_add-card');
const closePopupTypeCardPhoto = popupTypeCardPhoto.querySelector('.popup__close_type_card');
const nameElementInput = formElementTypeEdit.querySelector('.popup__input_value_name');
const jobElementInput = formElementTypeEdit.querySelector('.popup__input_value_job');
const placeElementInput = popupTypeAddCard.querySelector('.popup__input_value_place');
const photoElementInput = popupTypeAddCard.querySelector('.popup__input_value_photo');
const photoCard = popupTypeCardPhoto.querySelector('.popup__card-photo');
const placeCard = popupTypeCardPhoto.querySelector('.popup__card-place');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template').content;
const formTypeAdd = popupTypeAddCard.querySelector('.popup__form_type_add-card');

function openPopup(event) {
    event.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
}

function openPopupTypeEdit() {
    nameElementInput.value = nameElementProfile.textContent;
    jobElementInput.value = jobElementProfile.textContent;
    toggleButtonStateValid(Array.from(popupTypeEdit.querySelectorAll(inputSelector)),popupTypeEdit.querySelector(submitButtonSelector));
    openPopup(popupTypeEdit);
}

function closePopup(event) {
    event.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler);
}

function submitFormTypeEdit(evt) {
    evt.preventDefault();
    nameElementProfile.textContent = nameElementInput.value;
    jobElementProfile.textContent = jobElementInput.value;
    closePopup(popupTypeEdit);
}

function submitFormTypeAddCard(evt) {
    evt.preventDefault();
    elements.prepend(createCard(placeElementInput.value, photoElementInput.value));
    closePopup(popupTypeAddCard);
    cleanInput(formTypeAdd);
}

function setLike(event) {
    event.target.classList.toggle('element__like_active');
}

function cleanInput(element) {
    element.reset();
    toggleButtonStateInvalid(Array.from(element.querySelectorAll(inputSelector)),element.querySelector(submitButtonSelector));
}

function deleteCard(element) {
    element.remove();
}

function openPopupPhoto(evt) {
    const textElement = evt.querySelector('.element__text');
    photoCard.src = evt.querySelector('.element__photo').src;
    photoCard.alt = 'Изображение' + textElement.textContent;
    placeCard.textContent = textElement.textContent;
    openPopup(popupTypeCardPhoto);
}

function createCard(a, b) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const trashButton = cardElement.querySelector('.element__trash');
    const cardPhoto = cardElement.querySelector('.element__photo');
    const likeButton = cardElement.querySelector('.element__like');
    cardElement.querySelector('.element__text').textContent = a;
    cardPhoto.alt = 'изображение ' + a;
    cardPhoto.src = b;
    likeButton.addEventListener('click', setLike);
    trashButton.addEventListener('click', function () {
        deleteCard(cardElement)
    });
    cardPhoto.addEventListener('click', function () {
        openPopupPhoto(cardElement)
    });
    return cardElement;
}

function keyHandler(evt) {
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
        closePopup(openedPopup);
        cleanInput(openedPopup.querySelector('.popup__form'));
    }
}

initialCards.forEach(function (element) {
    elements.prepend(createCard(element.name, element.link));
});
document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')){
        closePopup(evt.target);
        cleanInput(evt.target.querySelector(formSelector));
    }
});
editButton.addEventListener('click', openPopupTypeEdit);
addButton.addEventListener('click', function () {
    openPopup(popupTypeAddCard)
});
formElementTypeEdit.addEventListener('submit',submitFormTypeEdit);
formElementTypeAddCard.addEventListener('submit',submitFormTypeAddCard);
closePopupTypeEdit.addEventListener('click', function () {
    closePopup(popupTypeEdit)
});
closePopupTypeAddCard.addEventListener('click', function () {
    closePopup(popupTypeAddCard);
    cleanInput(formTypeAdd);
});
closePopupTypeCardPhoto.addEventListener('click', function () {
    closePopup(popupTypeCardPhoto)
});