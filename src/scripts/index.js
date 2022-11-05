/* add css in webpack */ 
import './../pages/index.css';
import {
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
    avatarPopup,
    avatarPopupInput,
    avatarContainer,
    avatarPopupExit,
    avatarPopupForm,
    avatarImage
} from './variables';
import {
    createCard,
    addCard
} from './card';
import {openPopup,closePopup} from './modal';
import {editProfileSubmitter, avatarSubmitter, editProfile} from './utils';
import { placeFormObj, userFormObj, avatarFormObj } from './variables';
import { validateForm, prepareOnOpen } from './validate';
import { closeByEscape, closePopupChecker } from './modal';
import { getProfileInfo } from './api';

const editAvatar = (avatarUrl) => {
    avatarImage.src = avatarUrl;
}
Promise.all([getProfileInfo()])
 .then((values) => {
    console.log(values);
    editProfile(values[0]);
    editAvatar(values[0].avatar);
 })
    





















validateForm(userFormObj);

validateForm(placeFormObj);

validateForm(avatarFormObj);

avatarContainer.addEventListener('click', () => {
    openPopup(avatarPopup);
})
avatarPopupForm.addEventListener('submit', avatarSubmitter)
    

avatarPopupExit.addEventListener('click', () => {
    closePopup(avatarPopup);
})
imagePopupExit.addEventListener('click', () => {
    closePopup(imagePopup);
})

document.querySelector('#editForm').addEventListener('submit', editProfileSubmitter);

profileEditButton.addEventListener('click', () => {
    profilePopupName.value = profileName.textContent;
    profilePopupBio.value = profileBio.textContent;
    openPopup(profilePopup);
    prepareOnOpen(userFormObj);
    }
);

popupExit.addEventListener('click', () => {
    closePopup(profilePopup);
    }
);

cardPopupExit.addEventListener('click', () => {
    closePopup(cardPopup);
})
profileAddButton.addEventListener('click', () => {
    openPopup(cardPopup);
    prepareOnOpen(placeFormObj);
});

document.querySelector("#addForm").addEventListener("submit", addCard);

document.querySelector('.popup').addEventListener('mousedown', (evt) => {
    if (document.querySelector('.popup_opened')) {
        closePopupChecker(evt);
    }
});

document.querySelector('.addPopup').addEventListener('mousedown', (evt) => {
    if (document.querySelector('.popup_opened')) {
        closePopupChecker(evt);
    }
});



imagePopup.addEventListener('mousedown', (evt) => {
    if (document.querySelector('.popup_opened')) {
        closePopupChecker(evt);
    }
});
avatarPopup.addEventListener('mousedown', (evt) => {
    if (document.querySelector('.popup_opened')) {
        closePopupChecker(evt);
    }
});







