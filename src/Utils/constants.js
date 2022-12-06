//селекторы
const profileNameSelector = document.querySelector(".profile__name"); //имя профиля
const profileBioSelector = document.querySelector(".profile__description"); //описание профиля
const avatarImageSelector = document.querySelector(".profile__avatar"); //аватар профиля
const cardTemplateSelector = document
  .querySelector(".card-template")
  .content.querySelector("article");

const cardPopupExit = document.querySelector(".addPopup__exit");
const imagePopupExit = document.querySelector(".imagePopup__exit");
const avatarPopupExit = document.querySelector(".avatarPopup__exit");

//карточки
const cardsContainer = document.querySelector(".cards");
const card = document.querySelector(".cards__card");

const profile = document.querySelector(".profile");
const popupList = Array.from(document.querySelectorAll(".popup"));
const popupExit = document.querySelector(".popup__exit");
const profilePopup = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit");

const profileForm = document.querySelector("#editForm");
const profilePopupName = document.querySelector("#editForm1");
const profilePopupBio = document.querySelector("#editForm2");

const cardForm = document.querySelector("#addForm");
const cardPopupSaveButton = document.querySelector(".addPopup__save-button");

const cardPopup = document.querySelector(".addPopup");

const profileAddButton = document.querySelector(".profile__add-button");

const cardInputName = document.querySelector("#addForm1");
const cardInputLink = document.querySelector("#addForm2");
const imagePopupSel = document.querySelector(".imagePopup");
const imagePopupText = document.querySelector(".imagePopup__text");
const imagePopupImage = document.querySelector(".imagePopup__image");

const avatarPopup = document.querySelector(".avatarPopup");
const avatarPopupInput = document.querySelector("#avatarForm1");
const avatarContainer = document.querySelector(".profile__avatar-container");

const avatarPopupForm = document.querySelector("#avatar-form");

const configValidate = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__save-button",

  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  inactiveButtonClass: "form__submit_disabled",
};

const userFormObj = {
  formName: "user-form",
  submitButtonSelector: ".popup__save-button",
  inputSelector: ".popup__form-input",
};

const placeFormObj = {
  formName: "place-form",
  submitButtonSelector: ".addPopup__save-button",
  inputSelector: ".popup__form-input",
};
const avatarFormObj = {
  formName: "avatar-form",
  submitButtonSelector: ".avatarPopup__save-button",
  inputSelector: ".popup__form-input",
};
const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
  headers: {
    authorization: "8f6991cb-ed06-4bec-89fd-92424de41418",
    "Content-Type": "application/json",
  },
};
const profileConfig = {
  profileNameSelector: ".profile__name",
  profileBioSelector: ".profile__description",
  avatarImageSelector: ".profile__avatar",
};

export {
  profile,
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
  userFormObj,
  placeFormObj,
  avatarFormObj,
  config,
  avatarPopup,
  avatarPopupInput,
  avatarContainer,
  avatarPopupExit,
  avatarImageSelector,
  avatarPopupForm,
  card,
  profileConfig,
  configValidate,
  popupList,
};