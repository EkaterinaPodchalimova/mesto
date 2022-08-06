import './index.css';
import { Card} from '../components/Card.js';
import { validationConfig} from "../utils/validation-config.js";
import {
    buttonEditProfile,
    buttonAddCard,
    buttonEditAvatar,
    nameElementInput,
    jobElementInput,
    avatar
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithAgreement from "../components/PopupWithAgreement.js";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const userInformation = new UserInfo({name: '.profile__name', about:'.profile__job'});
const initialCards = [];
const cardsList = new Section('.elements');
const formTypeEdit = new FormValidator(validationConfig, document.forms.edit);
const formTypeAddCard = new FormValidator(validationConfig, document.forms.add);
const formTypeEditAvatar = new FormValidator(validationConfig, document.forms.avatar);

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
    headers: {
        authorization: '74bc18a1-28e6-48d3-a590-75a477f90392',
        'Content-Type': 'application/json'
    }
});
api.getUserInformation()
    .then(res => {
        userInformation.setUserInfo({name: res.name, about: res.about, id: res._id});
        avatar.src = res.avatar;
    })
    .catch((err) => {
        console.log(err);
    });
api.getInitialCards()
    .then(res => {
        res.forEach(el => {
            initialCards.unshift({name: el.name, link: el.link, likes: el.likes, id: el._id, owner: el.owner._id})
        });
        cardsList.renderItems(initialCards,
            (item) => {
                cardsList.addItem(
                    createElement(item))
                });
    })
    .catch((err) => {
        console.log(err);
    });

const editAvatar = async ({link}) => {
    popupTypeEditAvatar.close();
    avatar.src = await api.editAvatar(link)
        .then(res => res.avatar)
        .catch((err) => {
            console.log(err);
        });
};

const createElement = ({name , link, likes, id, owner}) => {
    const cardElement = new Card({name , link, likes}, '#element-template', handleCardClick, handleTrashClick, userInformation.getUserId(), handleButtonClickLike);
    cardElement.getId(id, owner);
    return cardElement.generateCard();
}

const handleCardClick = ({name, link}) => {
    popupTypeCardPhoto.open({link, name});
};

const handleTrashClick = (id,func) => {
    popupTypeDeleteCard.open();
    popupTypeDeleteCard.submitAgree( () => {
        api.deleteCard(id)
            .catch((err) => {
                console.log(err);
            });
        func();
    });
};

const handleButtonClickLike = async (result, id , func)  => {
   let likeNumber;
    if (result) {
        likeNumber = await api.addLike(id)
            .then(res => res.likes.length)
            .catch((err) => {
                console.log(err);
            });
        func(likeNumber);
    } else {
        likeNumber = await api.deleteLike(id)
            .then(res =>   res.likes.length)
            .catch((err) => {
                console.log(err);
            });
        func(likeNumber);
    }

};

const handleButtonClickTypeEdit = async ({name, about}) => {
    userInformation.setUserInfo({name, about});
    popupTypeEditUser.close()
    await api.setUserInformation({name, about})
        .catch((err) => {
        console.log(err);
    });
};

const handleButtonClickTypeAddCard = async ({name, link}) => {
    await api.postNewCard({name, link})
        .then((res) => {
            cardsList.addItem(createElement({name, link, likes: [], id: res._id, owner: res.owner._id}));
    })
        .catch((err) => {
            console.log(err);
        });
    popupTypeAddCard.close();
};

const popupTypeEditUser = new PopupWithForm('.popup_type_edit-user', handleButtonClickTypeEdit);
popupTypeEditUser.setEventListeners();

const popupTypeAddCard = new PopupWithForm('.popup_type_add-card', handleButtonClickTypeAddCard);
popupTypeAddCard.setEventListeners();

const popupTypeCardPhoto = new PopupWithImage('.popup_type_card');
popupTypeCardPhoto.setEventListeners();

const popupTypeEditAvatar = new PopupWithForm('.popup_type_edit-avatar', editAvatar);
popupTypeEditAvatar.setEventListeners();

const popupTypeDeleteCard = new PopupWithAgreement('.popup_type_delete-card');
popupTypeDeleteCard.setEventListeners();

function validationForms({formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        const validForm = new FormValidator(validationConfig, formElement);
        validForm.enableValidation();
    });
}
validationForms(validationConfig);

buttonEditProfile.addEventListener('click', () => {
    const {name, about} = userInformation.getUserInfo();
    formTypeEdit.resetValidation();
    popupTypeEditUser.open();
    formTypeEdit.permittedSubmitButton();
    nameElementInput.value = name;
    jobElementInput.value = about;
});
buttonAddCard.addEventListener('click', () => {
    formTypeAddCard.resetValidation();
    popupTypeAddCard.open()
});
buttonEditAvatar.addEventListener('click', () => {
    formTypeEditAvatar.resetValidation();
    popupTypeEditAvatar.open();
})