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
  profileAddButton,
  cardTemplateSelector,
  avatarContainer,
  profileConfig,
  configValidate,
} from "../Utils/constants";

import {
  handleCardClick,
  handleCardDelete,
  handleLikeClick,
} from "../Utils/cardHandlers";

import Card from "../components/Card";
const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
  headers: {
    authorization: "8f6991cb-ed06-4bec-89fd-92424de41418",
    "Content-Type": "application/json",
  },
});
const userinfo = new UserInfo(profileConfig);

// const editProfile = (values) => {
//   profileNameSelector.textContent = values.name;
//   profileBioSelector.textContent = values.about;
// };
// const editAvatar = (avatarUrl) => {
//   avatarImageSelector.src = avatarUrl;
// };
const editProfileSubmitter = (e, inputs) => {
  e.preventDefault();
  const data = {
    name: inputs["user-name"],
    about: inputs["input-description"],
  };
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
const avatarSubmitter = (e, inputs) => {
  e.preventDefault();
  const link = { avatar: inputs["input-avatar"] };
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
  sendCardToServer(inputs["input-title"], inputs["input-link"]);
};

const cardPopupInstance = new PopupWithForm(".addPopup", addCard);

Promise.all([api.getProfileInfo(), api.initialCards()])
  .then(([userData, cards]) => {
    userinfo.setUserInfo(userData);

    localStorage.setItem("me_id", userData._id);
    userinfo.setUserAvatar(userData);

    section.renderItems(cards);
  })
  .catch((err) => {
    console.error(err);
  });

const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(configValidate);

avatarContainer.addEventListener("click", () => {
  avatarPopupInstance.open();
});

profileEditButton.addEventListener("click", () => {
  const { about, name } = userinfo.getUserInfo();
  profilePopupName.value = name;
  profilePopupBio.value = about;

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

export { sendCardToServer };
