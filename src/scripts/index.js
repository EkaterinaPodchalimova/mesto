import '../pages/index.css';
import { Card} from './cards.js';
import { initialCards} from './initial-cards.js';
import { validationConfig} from "./validation-config.js";
import FormValidator from './validate.js';
import PopupWithImage from './popup-with-image.js';
import PopupWithForm from './popup-with-form.js';
import Section from './section.js';
import UserInfo from './user-info.js';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const formElementTypeEdit = document.querySelector('.popup__container_type_edit-user');
const nameElementInput = formElementTypeEdit.querySelector('.popup__input_value_name');
const jobElementInput = formElementTypeEdit.querySelector('.popup__input_value_job');
const popupTypeCardPhoto = new PopupWithImage('.popup_type_card');
const userInformation = new UserInfo({name: '.profile__name', job:'.profile__job'});
const formTypeEdit = new FormValidator(validationConfig, document.forms.edit);

const renderElements = ({name, link}) => {
    const cardElement = new Card({name, link}, '#element-template', handleCardClick);
    return cardElement.generateCard();
}

const handleCardClick = ({name, link}) => {
    popupTypeCardPhoto.open({link, name});
};

const handleButtonClickTypeEdit = ({name, job}) => {
    userInformation.setUserInfo({name, job});
    popupTypeEdit.close()
};

const handleButtonClickTypeAddCard = ({name, link}) => {
    const card = new Section({
            items: [{name, link}],
            renderer: renderElements},
        '.elements');
    card.renderItems();
    popupTypeAddCard.close();
};

const popupTypeEdit = new PopupWithForm('.popup_type_edit-user', handleButtonClickTypeEdit);
popupTypeEdit.setEventListeners();

const popupTypeAddCard = new PopupWithForm('.popup_type_add-card', handleButtonClickTypeAddCard);
popupTypeAddCard.setEventListeners();

const cardsList = new Section({
    items: initialCards,
    renderer: renderElements},
    '.elements');
cardsList.renderItems();

editButton.addEventListener('click', () => {
    popupTypeEdit.open();
    formTypeEdit.permittedSubmitButton();
    nameElementInput.value = userInformation.getUserInfo().name;
    jobElementInput.value = userInformation.getUserInfo().job;
});
addButton.addEventListener('click', () => popupTypeAddCard.open());