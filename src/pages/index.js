/* add css in webpack */
import "./../pages/index.css";
import Api from "../components/API";
//import FormValidator from "../components/FormValidator";
//import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
//import Popup from "../components/Popup";
//import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import {
  popupExit,
  profilePopup,
  profileEditButton,
  profileForm,
  profilePopupName,
  profilePopupBio,
  profileNameSelector,
  profileBioSelector,
  cardForm,
  cardPopupSaveButton,
  cardPopup,
  cardPopupExit,
  profileAddButton,
  cardTemplateSelector,
  cardsContainer,
  cardInputName,
  cardInputLink,
  imagePopupSel,
  imagePopupText,
  imagePopupImage,
  imagePopupExit,
  avatarPopup,
  avatarPopupInput,
  avatarContainer,
  avatarPopupExit,
  avatarPopupForm,
  avatarImageSelector,
  profileConfig,
  configValidate,
  placeFormObj,
  userFormObj,
  avatarFormObj,
} from "../Utils/constants";

import {
  handleCardClick, 
  handleCardDelete,
  handleLikeClick,
} from "../Utils/cardHandlers"

import { openPopup, closePopup } from "../scripts/modal";
// import {editProfileSubmitter, avatarSubmitter,} from './utils';

import { validateForm, prepareOnOpen } from "../scripts/validate";
import { closeByEscape, closePopupChecker } from "../scripts/modal";
import {
  getProfileInfo,
  initialCards,
  postCard,
  patchAvatar,
  patchProfile,
  deleteLike,
  putLike,
} from "../scripts/api";
import Card from "../components/Card";
import PopupWithImage from "../components/PopupWithImage";
const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
  headers: {
    authorization: "8f6991cb-ed06-4bec-89fd-92424de41418",
    "Content-Type": "application/json",
  },
});
const userinfo = new UserInfo(profileConfig);

//const api = new Api(config);
//const setValidation = formElement => {  const popupValidator = new FormValidator(configValidate, formElement);  popupValidator.enableValidation();};

//popupList.forEach(popup => {   setValidation(popup); });

const editProfile = (values) => {
  profileNameSelector.textContent = values.name;
  profileBioSelector.textContent = values.about;
};
const editAvatar = (avatarUrl) => {
  avatarImageSelector.src = avatarUrl;
};
const editProfileSubmitter = (e) => {
  e.preventDefault();
  const data = { name: profilePopupName.value, about: profilePopupBio.value };
  api
    .patchProfile(data)
    .then(() => {
      userinfo.setUserInfo(data);
      profilePopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
};
const avatarSubmitter = (e) => {
  e.preventDefault();
  const link = { avatar: avatarPopupInput.value };
  api
    .patchAvatar(link)
    .then(() => {
      userinfo.setUserAvatar(link);
      avatarPopupInstance.close();
      avatarPopupInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
};
const profilePopupForm = new PopupWithForm(
  ".profilePopup",
  editProfileSubmitter
);
const avatarPopupInstance = new PopupWithForm(".avatarPopup", avatarSubmitter);

const sendCardToServer = (cardInputName, cardInputLink) => {
  return postCard(cardInputName, cardInputLink)
    .then((item) => {
      const card = new Card(
        // data object
        item, 
        // user id 
        localStorage.getItem("me_id"),
        // card template selector
        cardTemplateSelector,
        {
          handleCardClick,
          handleCardDelete,
          handleLikeClick
        }
      )
      cardsContainer.prepend(card.createCard());

      closePopup(cardPopup);
      setTimeout(() => {
        // visual effect
        cardForm.reset();
      }, 500);
      
    })
    .catch((err) => {
      console.error(err);
    });
};

const addCard = (e) => {
  e.preventDefault();
  const cardValues = {
    name: cardInputName.value,
    link: cardInputLink.value,
  };
  sendCardToServer(cardInputName, cardInputLink);
};

const cardPopupInstance = new PopupWithForm(".addPopup", addCard);

Promise.all([getProfileInfo(), initialCards()])
  .then((values) => {
    editProfile(values[0]);
    localStorage.setItem("me_id", values[0]._id);
    editAvatar(values[0].avatar);
    values[1].forEach(function (cardObj) {
      const card = new Card(
        // data object
        cardObj, 
        // user id 
        values[0]._id,
        // card template selector
        cardTemplateSelector,
        {
          handleCardClick,
          handleCardDelete,
          handleLikeClick
        }
      )
      cardsContainer.append(card.createCard());
    });
  })
  .catch((err) => {
    console.error(err);
  });
  
validateForm(userFormObj);
validateForm(placeFormObj);
validateForm(avatarFormObj);

avatarContainer.addEventListener("click", () => {
  avatarPopupInstance.open();
});

profileEditButton.addEventListener("click", () => {
  profilePopupName.value = profileNameSelector.textContent;
  profilePopupBio.value = profileBioSelector.textContent;
  profilePopupForm.open();
  prepareOnOpen(userFormObj);
});

// cards form

cardPopupExit.addEventListener("click", () => {
  cardPopupInstance.close();
});

// add new card button
profileAddButton.addEventListener("click", () => {
  cardPopupInstance.open();
  prepareOnOpen(placeFormObj);
});

document.querySelector(".popup").addEventListener("mousedown", (evt) => {
  if (document.querySelector(".popup_opened")) {
    closePopupChecker(evt);
  }
});

document.querySelector(".addPopup").addEventListener("mousedown", (evt) => {
  if (document.querySelector(".popup_opened")) {
    closePopupChecker(evt);
  }
});

imagePopupSel.addEventListener("mousedown", (evt) => {
  if (document.querySelector(".popup_opened")) {
    closePopupChecker(evt);
  }
});

avatarPopup.addEventListener("mousedown", (evt) => {
  if (document.querySelector(".popup_opened")) {
    closePopupChecker(evt);
  }
});

export { editProfile, sendCardToServer };
