const popupTypeEdit = document.querySelector('.popup_type_edit-user');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
export const popupTypeCardPhoto = document.querySelector('.popup_type_card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameElementProfile = document.querySelector('.profile__name');
const jobElementProfile = document.querySelector('.profile__job');
const formElementTypeEdit = popupTypeEdit.querySelector('.popup__container_type_edit-user');
const formElementTypeAddCard = popupTypeAddCard.querySelector('.popup__container_type_add-card');
export const closePopupTypeEdit = popupTypeEdit.querySelector('.popup__close_type_edit-user');
export const closePopupTypeAddCard = popupTypeAddCard.querySelector('.popup__close_type_add-card');
const closePopupTypeCardPhoto = popupTypeCardPhoto.querySelector('.popup__close_type_card');
export const photoCard = popupTypeCardPhoto.querySelector('.popup__card-photo');
export const placeCard = popupTypeCardPhoto.querySelector('.popup__card-place');
const nameElementInput = formElementTypeEdit.querySelector('.popup__input_value_name');
const jobElementInput = formElementTypeEdit.querySelector('.popup__input_value_job');
const placeElementInput = popupTypeAddCard.querySelector('.popup__input_value_place');
const photoElementInput = popupTypeAddCard.querySelector('.popup__input_value_photo');
const formTypeAdd = popupTypeAddCard.querySelector('.popup__form_type_add-card');
const elements = document.querySelector('.elements');
import { FormValidator, selectors} from './validate.js';
import { initialCards} from "./initial-cards.js";
import { Card} from './cards.js';

export function openPopup(event) {
    event.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
}

function openPopupTypeEdit() {
    nameElementInput.value = nameElementProfile.textContent;
    jobElementInput.value = jobElementProfile.textContent;
    const validForm = new FormValidator(selectors, popupTypeEdit.querySelector(selectors.formSelector));
    validForm.permittedSubmitButton();
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
    renderElements([{name: placeElementInput.value,link:photoElementInput.value}]);
    closePopup(popupTypeAddCard);
    cleanInput(formTypeAdd);
    const validForm = new FormValidator(selectors, popupTypeAddCard.querySelector(selectors.formSelector));
    validForm.disableSubmitButton();
}

function cleanInput(element) {
    element.reset();
}

function keyHandler(evt) {
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
        closePopup(openedPopup);
        cleanInput(openedPopup.querySelector(selectors.formSelector));
    }
}

function formValidation({formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        const validForm = new FormValidator(selectors, formElement);
        validForm.enableValidation();
    });
}

const renderElements = (cardsList) =>{
    cardsList.forEach((element) => {
        const cardElement = new Card(element);
        const newCard = cardElement.generateCard();
        elements.prepend(newCard);
    })
}

renderElements(initialCards);
formValidation(selectors);

popupTypeEdit.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')){
        closePopup(evt.target);
        cleanInput(evt.target.querySelector(selectors.formSelector));
    }
});
popupTypeCardPhoto.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')){
        closePopup(evt.target);
    }
});
popupTypeAddCard.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')){
        closePopup(evt.target);
        cleanInput(evt.target.querySelector(selectors.formSelector));
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
    closePopup(popupTypeCardPhoto);
});