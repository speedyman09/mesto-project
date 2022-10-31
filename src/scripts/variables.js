const popupExit = document.querySelector('.popup__exit');
const profilePopup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit');
const profileForm = document.querySelector('#editFormForm');
const profilePopupName = document.querySelector('#editForm1');
const profilePopupBio = document.querySelector('#editForm2');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__description');
const cardForm = document.querySelector('#addForm');
const cardPopupSaveButton = document.querySelector('.addPopup__save-button');
const cardPopup = document.querySelector('.addPopup');
const cardPopupExit = document.querySelector('.addPopup__exit');
const profileAddButton = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('.card-template').content;
const cardsContainer = document.querySelector('.cards');
const cardInputName = document.querySelector('#addForm1');
const cardInputLink = document.querySelector('#addForm2');
const imagePopup = document.querySelector('.imagePopup');
const imagePopupText = document.querySelector('.imagePopup__text');
const imagePopupImage = document.querySelector('.imagePopup__image');
const imagePopupExit = document.querySelector('.imagePopup__exit');
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
export {
    popupExit,
    profilePopup,
    profileEditButton,
    profileForm,
    profilePopupName,
    profilePopupBio,
    profileName,
    profileBio,
    cardForm,
    cardPopupSaveButton,
    cardPopup,
    cardPopupExit,
    profileAddButton,
    cardTemplate,
    cardsContainer,
    cardInputName,
    cardInputLink,
    imagePopup,
    imagePopupText,
    imagePopupImage,
    imagePopupExit,
    initialCards
}