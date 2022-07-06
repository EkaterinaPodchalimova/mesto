import { FormValidator} from './validate.js';
import { validationConfig} from "./validation-config.js";
import { Card} from './cards.js';
import { initialCards} from "./initial-cards.js";
const popupTypeEdit = document.querySelector('.popup_type_edit-user');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
export const popupTypeCardPhoto = document.querySelector('.popup_type_card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const nameElementProfile = document.querySelector('.profile__name');
const jobElementProfile = document.querySelector('.profile__job');
const formElementTypeEdit = popupTypeEdit.querySelector('.popup__container_type_edit-user');
const formElementTypeAddCard = popupTypeAddCard.querySelector('.popup__container_type_add-card');
const closePopupTypeEdit = popupTypeEdit.querySelector('.popup__close_type_edit-user');
const closePopupTypeAddCard = popupTypeAddCard.querySelector('.popup__close_type_add-card');
const closePopupTypeCardPhoto = popupTypeCardPhoto.querySelector('.popup__close_type_card');
export const photoCard = popupTypeCardPhoto.querySelector('.popup__card-photo');
export const placeCard = popupTypeCardPhoto.querySelector('.popup__card-place');
const nameElementInput = formElementTypeEdit.querySelector('.popup__input_value_name');
const jobElementInput = formElementTypeEdit.querySelector('.popup__input_value_job');
const placeElementInput = popupTypeAddCard.querySelector('.popup__input_value_place');
const photoElementInput = popupTypeAddCard.querySelector('.popup__input_value_photo');
const formTypeAdd = popupTypeAddCard.querySelector('.popup__form_type_add-card');
const elements = document.querySelector('.elements');
const validFormTypeEdit = new FormValidator(validationConfig, popupTypeEdit.querySelector(validationConfig.formSelector));
const validFormTypeAddCard = new FormValidator(validationConfig, popupTypeAddCard.querySelector(validationConfig.formSelector));

export function openPopup(event) {
    event.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
}

function openPopupTypeEdit() {
    nameElementInput.value = nameElementProfile.textContent;
    jobElementInput.value = jobElementProfile.textContent;
    validFormTypeEdit.permittedSubmitButton();
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
    renderElements([{name: placeElementInput.value,link:photoElementInput.value}], '#element-template');
    closePopup(popupTypeAddCard);
    cleanInput(formTypeAdd);
    validFormTypeAddCard.disableSubmitButton();
}

function cleanInput(element) {
    element.reset();
}

function keyHandler(evt) {
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
        closePopup(openedPopup);
        cleanInput(openedPopup.querySelector(validationConfig.formSelector));
        openedPopup.classList.contains('popup_type_edit-user') ? validFormTypeEdit.resetValidation() : validFormTypeAddCard.resetValidation();

    }
}

function clickTypeOutside(evt) {
    if (evt.target.classList.contains('popup_opened')){
        closePopup(evt.target);
        cleanInput(evt.target.querySelector(validationConfig.formSelector));
        evt.target.classList.contains('popup_type_edit-user') ? validFormTypeEdit.resetValidation() : validFormTypeAddCard.resetValidation();
    }
}

function formValidation({formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        const validForm = new FormValidator(validationConfig, formElement);
        validForm.enableValidation();
    });
}

const renderElements = (cardsList, template) =>{
    cardsList.forEach((element) => {
        const cardElement = new Card(element, template);
        const newCard = cardElement.generateCard();
        elements.prepend(newCard);
    })
}

renderElements(initialCards,'#element-template');
formValidation(validationConfig);

popupTypeEdit.addEventListener('click', function (evt) {
    clickTypeOutside(evt);
});
popupTypeCardPhoto.addEventListener('click', function (evt) {
    clickTypeOutside(evt)
});
popupTypeAddCard.addEventListener('click', function (evt) {
    clickTypeOutside(evt);
});
editButton.addEventListener('click', openPopupTypeEdit);
addButton.addEventListener('click', function () {
    openPopup(popupTypeAddCard)
});
formElementTypeEdit.addEventListener('submit',submitFormTypeEdit);
formElementTypeAddCard.addEventListener('submit', submitFormTypeAddCard);
closePopupTypeEdit.addEventListener('click', function (event) {
    closePopup(popupTypeEdit);
    validFormTypeEdit.resetValidation();
});
closePopupTypeAddCard.addEventListener('click', function (event) {
    closePopup(popupTypeAddCard);
    cleanInput(formTypeAdd);
    validFormTypeAddCard.resetValidation();
});
closePopupTypeCardPhoto.addEventListener('click', function () {
    closePopup(popupTypeCardPhoto);
});