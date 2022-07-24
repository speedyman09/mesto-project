/* add DOM elements into JS */
const editPopupCloseButton = document.querySelector('.popup__exit');
const editPopupOverlay = document.querySelector('.overlay');
const editPopupOpenButton = document.querySelector('.profile__edit');
const editPopupOverlayForm1 = document.querySelector('#editForm1');
const editPopupOverlayForm2 = document.querySelector('#editForm2');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__description');
const editPopupSaveButton = document.querySelector('.popup__save-button');
const addPopupOverlay = document.querySelector('.addOverlay');
const addPopupExit = document.querySelector('.addPopup__exit');
const addPopupSaveButton = document.querySelector('.addPopup__save-button');
const addCardButton = document.querySelector('.profile__add-button');

/* code */

/* values for Edit popup form */

editPopupOverlayForm1.value = profileName.textContent;
editPopupOverlayForm2.value = profileBio.textContent;

/* change name and bio using form functionality */

const editProfileSubmitter = (evt) => {
    evt.preventDefault();
    profileName.textContent = editPopupOverlayForm1.value;
    profileBio.textContent = editPopupOverlayForm2.value;
    closeEditPopup();
}

editPopupSaveButton.addEventListener('click', editProfileSubmitter);

/* editPopup open and close functionality */

const openEditPopup = () => {
    editPopupOverlay.classList.add('overlay_opened');
}

const closeEditPopup = () => {
    editPopupOverlay.classList.remove('overlay_opened');
}

editPopupOpenButton.addEventListener('click', () => {
    openEditPopup();
    }
);

editPopupCloseButton.addEventListener('click', () => {
    closeEditPopup();
    }
);

/* addPopup functionality */
const openAddPopup = () => {
    addPopupOverlay.classList.add('addOverlay_opened');
}
const closeAddPopup = () => {
    addPopupOverlay.classList.remove('addOverlay_opened');
}

addPopupExit.addEventListener('click', () => {
    closeAddPopup();
})
addCardButton.addEventListener('click', () => {
    openAddPopup();
})



/* default Cards array */

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

