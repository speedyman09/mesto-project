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
    imagePopupExit
} from './variables';
import {
    createCard,
    addCard
} from './card';
import {openPopup,closePopup} from './modal';
import {editProfileSubmitter} from './utils';
// event listeners

imagePopupExit.addEventListener('click', () => {
    closePopup(imagePopup);
})

document.querySelector('#editForm').addEventListener('submit', editProfileSubmitter);

profileEditButton.addEventListener('click', () => {
    profilePopupName.value = profileName.textContent;
    profilePopupBio.value = profileBio.textContent;
    openPopup(profilePopup);
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
});

document.querySelector("#addForm").addEventListener("submit", addCard);





