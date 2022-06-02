let popupTypeEdit = document.querySelector('.popup_type_edit-user');
let popupTypeAddCard = document.querySelector('.popup_type_add-card');
let popupTypeCardPhoto = document.querySelector('.popup_type_card');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let nameElementProfile = document.querySelector('.profile__name');
let jobElementProfile = document.querySelector('.profile__job');
let formElementTypeEdit = popupTypeEdit.querySelector('.popup__container_type_edit-user');
let formElementTypeAddCard = popupTypeAddCard.querySelector('.popup__container_type_add-card');
let closePopupTypeEdit = popupTypeEdit.querySelector('.popup__close_type_edit-user');
let closePopupTypeAddCard = popupTypeAddCard.querySelector('.popup__close_type_add-card');
let closePopupTypeCardPhoto = popupTypeCardPhoto.querySelector('.popup__close_type_card');
let nameElementInput = formElementTypeEdit.querySelector('.popup__input_value_name');
let jobElementInput = formElementTypeEdit.querySelector('.popup__input_value_job');
let placeElementInput = popupTypeAddCard.querySelector('.popup__input_value_place');
let photoElementInput = popupTypeAddCard.querySelector('.popup__input_value_photo');
let photoCard = popupTypeCardPhoto.querySelector('.popup__card-photo');
let placeCard = popupTypeCardPhoto.querySelector('.popup__card-place');
let elements = document.querySelector('.elements');
let cardTemplate = document.querySelector('#element-template').content;
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach(function (element) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__photo').setAttribute('src',element.link);
    cardElement.querySelector('.element__photo').setAttribute('alt','изображение ' + element.name);
    cardElement.querySelector('.element__text').textContent = element.name;
    elements.append(cardElement);
    const likeButton = cardElement.querySelector('.like');
    likeButton.addEventListener('click',likeClick);
    const trashButton = cardElement.querySelector('.trash');
    trashButton.addEventListener('click',function (){deleteCard(cardElement)});
    if((element.link == '') || (element.name == '') || (element.name == undefined) || ((element.link == undefined)))
    {
        deleteCard(cardElement);
    }
    cardElement.querySelector('.element__photo').addEventListener('click', function (){photoOpen(cardElement)});

});

editButton.addEventListener('click',editClick);
addButton.addEventListener('click',function() {popupOpened(popupTypeAddCard)});
closePopupTypeEdit.addEventListener('click',function() {closeClick(popupTypeEdit)});
closePopupTypeAddCard.addEventListener('click', function() {closeClick(popupTypeAddCard);cleanInput();});
closePopupTypeCardPhoto.addEventListener('click',function () {closeClick(popupTypeCardPhoto)})
formElementTypeEdit.addEventListener('submit', formSubmitTypeEdit);
formElementTypeAddCard.addEventListener('submit', formSubmitTypeAddCard);


function popupOpened(event) {
    event.classList.add('popup_opened');
}

function editClick() {
    popupOpened(popupTypeEdit);
    nameElementInput.value = nameElementProfile.textContent;
    jobElementInput.value = jobElementProfile.textContent;
}

function closeClick(event) {
    event.classList.remove('popup_opened');
}

function formSubmitTypeEdit(evt) {
    evt.preventDefault();
    nameElementProfile.textContent = nameElementInput.value;
    jobElementProfile.textContent = jobElementInput.value;
    closeClick(popupTypeEdit);
}

function formSubmitTypeAddCard(evt) {
    evt.preventDefault();
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__text').textContent =  placeElementInput.value;
    cardElement.querySelector('.element__photo').setAttribute('alt','изображение ' + placeElementInput.value);
    cardElement.querySelector('.element__photo').setAttribute('src',photoElementInput.value);
    elements.append(cardElement);
    cleanInput();
    closeClick(popupTypeAddCard);
    const likeButton = cardElement.querySelector('.like');
    likeButton.addEventListener('click',likeClick);
    const trashButton = cardElement.querySelector('.trash');
    trashButton.addEventListener('click',function (){deleteCard(cardElement)});
    trashButton.addEventListener('click',function (){deleteCard(cardElement)});
    cardElement.querySelector('.element__photo').addEventListener('click', function (){photoOpen(cardElement)});
}

function likeClick(event) {
    event.target.classList.toggle('like_active');
}

function cleanInput() {
    photoElementInput.value = '';
    placeElementInput.value = '';
}

function deleteCard(evt) {
    evt.remove();
}

function photoOpen(evt) {
    popupOpened(popupTypeCardPhoto);
    photoCard.setAttribute('src', evt.querySelector('.element__photo').getAttribute('src'));
    photoCard.setAttribute('alt','Изображение' + evt.querySelector('.element__photo').getAttribute('src'));
    placeCard.textContent = evt.querySelector('.element__text').textContent;
}