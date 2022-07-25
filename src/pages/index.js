import './index.css';
import { Card} from '../components/Cards.js';
import { initialCards} from '../utils/initial-cards.js';
import { validationConfig} from "../utils/validation-config.js";
import { buttonEditProfile, buttonAddCard, nameElementInput, jobElementInput} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

const userInformation = new UserInfo({name: '.profile__name', job:'.profile__job'});
const formTypeEdit = new FormValidator(validationConfig, document.forms.edit);
const formTypeAddCard = new FormValidator(validationConfig, document.forms.add);

const createElement = ({name, link}) => {
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
    cardsList.addItem(createElement({name, link}));
    popupTypeAddCard.close();
};

const popupTypeEdit = new PopupWithForm('.popup_type_edit-user', handleButtonClickTypeEdit);
popupTypeEdit.setEventListeners();

const popupTypeAddCard = new PopupWithForm('.popup_type_add-card', handleButtonClickTypeAddCard);
popupTypeAddCard.setEventListeners();

const popupTypeCardPhoto = new PopupWithImage('.popup_type_card');
popupTypeCardPhoto.setEventListeners();

const cardsList = new Section((item) => {
        cardsList.addItem(createElement(item));
    },
    '.elements');
cardsList.renderItems(initialCards);

function formValidation({formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        const validForm = new FormValidator(validationConfig, formElement);
        validForm.enableValidation();
    });
}
formValidation(validationConfig);

buttonEditProfile.addEventListener('click', () => {
    const {name, job} = userInformation.getUserInfo();
    formTypeEdit.resetValidation();
    popupTypeEdit.open();
    formTypeEdit.permittedSubmitButton();
    nameElementInput.value = name;
    jobElementInput.value = job;
});
buttonAddCard.addEventListener('click', () => {
    formTypeAddCard.resetValidation();
    popupTypeAddCard.open()
});