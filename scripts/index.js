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
const popupList = Array.from(document.querySelectorAll('.popup'));

function openPopup(event) {
    event.classList.add('popup_opened');
}

function openPopupTypeEdit() {
    nameElementInput.value = nameElementProfile.textContent;
    jobElementInput.value = jobElementProfile.textContent;
    enableValidation({
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__error_visible'
    });
    openPopup(popupTypeEdit);
}

function closePopup(event) {
    event.classList.remove('popup_opened');
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

function keyHandler(evt,element) {
    if (evt.keyCode === 27) {
        closePopup(element);
        cleanInput(element.querySelector('.popup__form'));
    }
}

function clickForm(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
}

initialCards.forEach(function (element) {
    elements.prepend(createCard(element.name, element.link));
});

popupList.forEach(function (element) {
    document.addEventListener('keydown', (evt) => {
        keyHandler(evt,element);
    });
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
popupTypeEdit.addEventListener('click',function (e) {
        closePopup(popupTypeEdit);
});
closePopupTypeAddCard.addEventListener('click', function () {
    closePopup(popupTypeAddCard);
    cleanInput(formTypeAdd);
});
popupTypeAddCard.addEventListener('click',function (e) {
    closePopup(popupTypeAddCard);
    cleanInput(formTypeAdd);
});
closePopupTypeCardPhoto.addEventListener('click', function () {
    closePopup(popupTypeCardPhoto)
});
popupTypeCardPhoto.addEventListener('click',function (e) {
    closePopup(popupTypeCardPhoto);
});
popupTypeEdit.querySelector('.popup__form').addEventListener('click',clickForm);
popupTypeAddCard.querySelector('.popup__form').addEventListener('click',clickForm);
popupTypeCardPhoto.querySelector('.popup__card-photo').addEventListener('click',clickForm);
popupTypeCardPhoto.querySelector('.popup__card-place').addEventListener('click',clickForm);