/* add css in webpack */
import "./../pages/index.css";
import Api from "../components/API";
import FormValidator from "../components/FormValidator";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import PopupWithForm from "../components/PopupWithForm";
import {
  profileEditButton,
  profilePopupName,
  profilePopupBio,
  profileNameSelector,
  profileBioSelector,
  cardForm,
  cardPopupExit,
  profileAddButton,
  cardTemplateSelector,
  cardInputName,
  cardInputLink,
  avatarPopupInput,
  avatarContainer,
  avatarImageSelector,
  profileConfig,
} from "../Utils/constants";

import {
  handleCardClick,
  handleCardDelete,
  handleLikeClick,
} from "../Utils/cardHandlers";

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

const editProfile = (values) => {
  profileNameSelector.textContent = values.name;
  profileBioSelector.textContent = values.about;
};
const editAvatar = (avatarUrl) => {
  avatarImageSelector.src = avatarUrl;
};
const editProfileSubmitter = (e, inputs) => {
  e.preventDefault();
  const data = { name: inputs['user-name'], about: inputs['input-description'] };
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
      // setTimeout(() => {
      //   avatarPopupInput.value = "";
      // }, 500);
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

const section = new Section(".cards", (item) => {
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
      handleLikeClick,
    }
  );

  return card.createCard();
});

const sendCardToServer = (cardInputName, cardInputLink) => {
  return api
    .postCard({ title: cardInputName, link: cardInputLink })
    .then((item) => {
      section.addItem(item);

      cardPopupInstance.close();
      // setTimeout(() => {
      //   // visual effect
      //   cardForm.reset();
      // }, 500);
    })
    .catch((err) => {
      console.error(err);
    });
};

const addCard = (e, inputs) => {
  e.preventDefault();
  sendCardToServer(inputs['input-title'], inputs['input-link']);
};

const cardPopupInstance = new PopupWithForm(".addPopup", addCard);

Promise.all([api.getProfileInfo(), api.initialCards()])
  .then(([userData, cards]) => {
    editProfile(userData);
    localStorage.setItem("me_id", userData._id);
    editAvatar(userData.avatar);

    section.renderItems(cards);
  })
  .catch((err) => {
    console.error(err);
  });

const userFormValidation = new FormValidator(
  {
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__form-input_disabled",
    errorClass: "popup__form-error_active",
  },
  ".popup__form"
);
const avatarFormValidation = new FormValidator(
  {
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".avatarPopup__save-button",
    inactiveButtonClass: "popup__form-input_disabled",
    errorClass: "popup__form-error_active",
  },
  ".avatarPopup__form"
);
const cardFormValidation = new FormValidator(
  {
    inputSelector: ".popup__form-input",
    submitButtonSelector: ".addPopup__save-button",
    inactiveButtonClass: "popup__form-input_disabled",
    errorClass: "popup__form-error_active",
  },
  ".addPopup__form"
);

userFormValidation.enableValidation();
avatarFormValidation.enableValidation();
cardFormValidation.enableValidation();

avatarContainer.addEventListener("click", () => {
  avatarPopupInstance.open();
});

profileEditButton.addEventListener("click", () => {
  profilePopupName.value = profileNameSelector.textContent;
  profilePopupBio.value = profileBioSelector.textContent;
  profilePopupForm.open();
});

// cards form

// cardPopupExit.addEventListener("click", () => {
//   cardPopupInstance.close();
// });

// add new card button
profileAddButton.addEventListener("click", () => {
  cardPopupInstance.open();
});

export { editProfile, sendCardToServer };
