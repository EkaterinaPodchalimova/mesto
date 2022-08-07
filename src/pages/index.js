import './index.css';
import { Card} from '../components/Card.js';
import { validationConfig} from "../utils/validation-config.js";
import {
    buttonEditProfile,
    buttonAddCard,
    buttonEditAvatar,
    nameElementInput,
    jobElementInput
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithAgreement from "../components/PopupWithAgreement.js";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const userInformation = new UserInfo({name: '.profile__name', about:'.profile__job', avatar: '.avatar'});
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
Promise.all([
    api.getUserInformation(),
    api.getInitialCards()
])
    .then(([resUser, resCards]) => {
        userInformation.setUserInfo({name: resUser.name, about: resUser.about, id: resUser._id});
        userInformation.editAvatar(resUser.avatar);
        resCards.forEach(el => {
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
    popupTypeEditAvatar.renderLoading(true);
    await api.editAvatar(link)
        .then(res => {
            userInformation.editAvatar(res.avatar);
            popupTypeEditAvatar.renderLoading(false);
            popupTypeEditAvatar.close();
        })
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
            .then(() => {
                func();
                popupTypeDeleteCard.close();
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

const handleButtonClickLike = async (result, id , func)  => {
    if (result) {
        await api.addLike(id)
            .then(res => {
                func(res.likes.length)
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        await api.deleteLike(id)
            .then(res => {
                func(res.likes.length)
            })
            .catch((err) => {
                console.log(err);
            });
    }

};

const handleButtonClickTypeEdit = async ({name, about}) => {
    popupTypeEditUser.renderLoading(true);
    await api.setUserInformation({name, about})
        .then((res) => {
            userInformation.setUserInfo({name, about, id: res._id});
            popupTypeEditUser.renderLoading(false);
            popupTypeEditUser.close()
        })
        .catch((err) => {
        console.log(err);
    });
};

const handleButtonClickTypeAddCard = async ({name, link}) => {
    await api.postNewCard({name, link})
        .then((res) => {
            cardsList.addItem(createElement({name, link, likes: [], id: res._id, owner: res.owner._id}));
            popupTypeAddCard.close();
    })
        .catch((err) => {
            console.log(err);
        });
};

const openValidPopup = (popup, form) => {
    form.resetValidation();
    popup.open();
}

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
    openValidPopup(popupTypeEditUser, formTypeEdit);
    formTypeEdit.permittedSubmitButton();
    nameElementInput.value = name;
    jobElementInput.value = about;
});
buttonAddCard.addEventListener('click', () => {
    openValidPopup(popupTypeAddCard,formTypeAddCard)
});
buttonEditAvatar.addEventListener('click', () => {
    openValidPopup(popupTypeEditAvatar, formTypeEditAvatar)
})