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
const cardTemplate = document.querySelector('.card-template').content;
const cardList = document.querySelector('.cards');
const addTitle = document.querySelector('#addForm1');
const addLink = document.querySelector('#addForm2');
const imageOverlay = document.querySelector('.imageOverlay');
const imagePopupText = document.querySelector('.imagePopup__text');
const imagePopupImage = document.querySelector('.imagePopup__image');
const imagePopupExit = document.querySelector('.imagePopup__exit');
/* code */

/* image popup open and close */

const openImagePopup = () => {
    imageOverlay.classList.add('imageOverlay_opened');
}
const closeImagePopup = () => {
    imageOverlay.classList.remove('imageOverlay_opened');
}

imagePopupExit.addEventListener('click', () => {
    closeImagePopup();
})


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
        openImagePopup();
        imagePopupImage.src = item.link;
        imagePopupImage.alt = item.name;
        imagePopupText.textContent = item.name;
    })
    return card;
}

initialCards.forEach((item) => {
    const card = createCard(item);
    cardList.append(card);
});

/* add card from addPopup save */


const addCard = (e) => {
    e.preventDefault();
    const cardValues = {
        name: addTitle.value,
        link: addLink.value,
    };
    e.target.reset();
    const card = createCard(cardValues);
    cardList.prepend(card);
    closeAddPopup();
};

/*
addPopupSaveButton.addEventListener("click", () => {
    addCard(addPopupSaveButton);
});
*/
document.querySelector("#addForm").addEventListener("submit", addCard);





