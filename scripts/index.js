let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let nameElementProfile = document.querySelector('.profile__name');
let jobElementProfile = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__container');
let closePopupButton = popup.querySelector('.popup__close');
let nameElementInput = formElement.querySelector('.popup__input_name');
let jobElementInput = formElement.querySelector('.popup__input_job');

editButton.addEventListener('click',editClick);
closePopupButton.addEventListener('click',closeClick);
formElement.addEventListener('submit', formSubmitHandler);

function editClick() {
    popup.classList.add('popup_opened');
    nameElementInput.value = nameElementProfile.textContent;
    jobElementInput.value = jobElementProfile.textContent;
}

function closeClick() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameElementProfile.textContent = nameElementInput.value;
    jobElementProfile.textContent = jobElementInput.value;
    popup.classList.remove('popup_opened');
}