/* add css in webpack */
import "./../pages/index.css";
import Api from "../components/API.js";
//import FormValidator from "../components/FormValidator";
//import Section from "../components/Section";
//import Card from "../components/Сard";
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
  imagePopup,
  imagePopupText,
  imagePopupImage,
  imagePopupExit,
  avatarPopup,
  avatarPopupInput,
  avatarContainer,
  avatarPopupExit,
  avatarPopupForm,
  avatarImageSelector,
  profileConfig
} from "../Utils/constants";
import { createCard } from "../scripts/card";
import { openPopup, closePopup } from "../scripts/modal";
// import {editProfileSubmitter, avatarSubmitter,} from './utils';
import {
  configValidate,
  placeFormObj,
  userFormObj,
  avatarFormObj,
} from "../Utils/constants";
import { validateForm, prepareOnOpen } from "../scripts/validate";
import { closeByEscape, closePopupChecker } from "../scripts/modal";
import {
  getProfileInfo,
  initialCards,
  deleteRemovedCard,
  postCard,
  patchAvatar,
  patchProfile,
  deleteLike,
  putLike,
} from "../scripts/api";


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
  const data = {name: profilePopupName.value, about: profilePopupBio.value};
  api.patchProfile(data)
    .then(() => {
      userinfo.setUserInfo(data);
      console.log("Have set userInfo");
      profilePopupForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
};
const avatarSubmitter = (e) => {
  e.preventDefault();
  const link = {avatar: avatarPopupInput.value}
  api.patchAvatar(link)
    .then(() => {
      userinfo.setUserAvatar(link);
      avatarPopupInstance.close();
      avatarPopupInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
};

const profilePopupForm = new PopupWithForm(".profilePopup",  editProfileSubmitter);
const avatarPopupInstance = new PopupWithForm(".avatarPopup", avatarSubmitter);


const removeCard = (card) => {
  deleteRemovedCard(card.dataset.id)
    .then(() => {
      card.remove();
    })
    .catch((err) => {
      console.error(err);
    });
};
const sendCardToServer = (cardInputName, cardInputLink) => {
  return postCard(cardInputName, cardInputLink)
    .then((item) => {
      const card = createCard(item, likeButtonHandler);
      cardsContainer.prepend(card);
      closePopup(cardPopup);
      cardForm.reset();
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

const likeButtonHandler = (item, likedByMe, successFunc) => {
  likedByMe
    ? deleteLike(item)
        .then(successFunc)
        .catch((err) => {
          console.error(err);
        })
    : putLike(item)
        .then(successFunc)
        .catch((err) => {
          console.error(err);
        });
};

Promise.all([getProfileInfo(), initialCards()])
  .then((values) => {
    editProfile(values[0]);
    localStorage.setItem("me_id", values[0]._id);
    editAvatar(values[0].avatar);
    values[1].forEach(function (cardObj) {
      const card = createCard(cardObj, likeButtonHandler);
      cardsContainer.append(card);
    });
  })
  .catch((err) => {
    console.error(err);
  });

validateForm(userFormObj);

validateForm(placeFormObj);

validateForm(avatarFormObj);

avatarContainer.addEventListener("click", () => {
  openPopup(avatarPopup);
});
avatarPopupForm.addEventListener("submit", avatarSubmitter);

avatarPopupExit.addEventListener("click", () => {
  closePopup(avatarPopup);
});
imagePopupExit.addEventListener("click", () => {
  closePopup(imagePopup);
});

document
  .querySelector("#editForm")
  .addEventListener("submit", editProfileSubmitter);

profileEditButton.addEventListener("click", () => {
  profilePopupName.value = profileNameSelector.textContent;
  profilePopupBio.value = profileBioSelector.textContent;
  openPopup(profilePopup);
  prepareOnOpen(userFormObj);
});

popupExit.addEventListener("click", () => {
  closePopup(profilePopup);
});

cardPopupExit.addEventListener("click", () => {
  closePopup(cardPopup);
});
profileAddButton.addEventListener("click", () => {
  openPopup(cardPopup);
  prepareOnOpen(placeFormObj);
});

document.querySelector("#addForm").addEventListener("submit", addCard);

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

imagePopup.addEventListener("mousedown", (evt) => {
  if (document.querySelector(".popup_opened")) {
    closePopupChecker(evt);
  }
});
avatarPopup.addEventListener("mousedown", (evt) => {
  if (document.querySelector(".popup_opened")) {
    closePopupChecker(evt);
  }
});

export { editProfile, removeCard, sendCardToServer };
