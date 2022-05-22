let openpopup = document.querySelector('.popup_opened');
let popupbutton = document.querySelector('.edit-button');
let nameprofile = document.querySelector('.profile__name');
let jobprofile = document.querySelector('.profile__job');
let formElement = openpopup.querySelector('.popup__container');
let closebutton = openpopup.querySelector('.popup__close');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');
let savebutton = formElement.querySelector('.submit');

popupbutton.addEventListener('click',editclick);
closebutton.addEventListener('click',closeclick);
formElement.addEventListener('submit', formSubmitHandler);

function editclick() {
    openpopup.setAttribute('style','display: flex');
    nameInput.value = nameprofile.innerHTML;
    jobInput.value = jobprofile.innerHTML;
}

function closeclick() {
    openpopup.removeAttribute('style','display: flex');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameprofile.textContent = nameInput.value;
    jobprofile.textContent = jobInput.value;
    openpopup.removeAttribute('style','display: flex');
}