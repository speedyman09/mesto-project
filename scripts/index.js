/* add DOM elements into JS */
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
/* code */

/* open Popup and close Popup functions */

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

/* image popup open and close */

/*
const openImagePopup = () => {
    imageOverlay.classList.add('imageOverlay_opened');
}
*/

imagePopupExit.addEventListener('click', () => {
    closePopup(imagePopup);
})


/* change name and bio using form functionality */

const editProfileSubmitter = (e) => {
    e.preventDefault();
    profileName.textContent = profilePopupName.value;
    profileBio.textContent = profilePopupBio.value;
    closePopup(profilePopup);
}

/*popupSaveButton.addEventListener('click', editProfileSubmitter);*/
document.querySelector('#editForm').addEventListener('submit', editProfileSubmitter);

/* editPopup open and close functionality */


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

/* cardPopup functionality */


cardPopupExit.addEventListener('click', () => {
    closePopup(cardPopup);
})
profileAddButton.addEventListener('click', () => {
    openPopup(cardPopup);
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

/* add card function */

const createCard = (item) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.cards__image');
    const like = card.querySelector('.cards__like');
    const title = card.querySelector('.cards__text');
    const deleteButton = card.querySelector('.cards__delete');

    image.src = item.link;
    image.alt = item.name;
    title.textContent = item.name;

    like.addEventListener("click", (e) => {
        e.target.classList.toggle("cards__like_liked");
    });
    deleteButton.addEventListener("click", (e) => {
        e.target.closest('.cards__card').remove();
    });
    image.addEventListener('click', () => {
        openPopup(imagePopup);
        imagePopupImage.src = item.link;
        imagePopupImage.alt = item.name;
        imagePopupText.textContent = item.name;
    })
    return card;
}

initialCards.forEach((item) => {
    const card = createCard(item);
    cardsContainer.append(card);
});

/* add card from addPopup save */


const addCard = (e) => {
    e.preventDefault();
    const cardValues = {
        name: cardInputName.value,
        link: cardInputLink.value,
    };
    e.target.reset();
    const card = createCard(cardValues);
    cardsContainer.prepend(card);
    closePopup(cardPopup);
};

/*
addPopupSaveButton.addEventListener("click", () => {
    addCard(addPopupSaveButton);
});
*/
document.querySelector("#addForm").addEventListener("submit", addCard);





