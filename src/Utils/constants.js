const popupExit = document.querySelector(".popup__exit");
const profilePopup = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit");
const profileForm = document.querySelector("#editFormForm");
const profilePopupName = document.querySelector("#editForm1");
const profilePopupBio = document.querySelector("#editForm2");
const profileNameSelector = document.querySelector(".profile__name");
const profileBioSelector = document.querySelector(".profile__description");
const cardForm = document.querySelector("#addForm");
const cardPopupSaveButton = document.querySelector(".addPopup__save-button");
const cardPopup = document.querySelector(".addPopup");
const cardPopupExit = document.querySelector(".addPopup__exit");
const profileAddButton = document.querySelector(".profile__add-button");
const cardTemplate = document
  .querySelector(".card-template")
  .content.querySelector("article");
const cardsContainer = document.querySelector(".cards");
const card = document.querySelector(".cards__card");
const cardInputName = document.querySelector("#addForm1");
const cardInputLink = document.querySelector("#addForm2");
const imagePopup = document.querySelector(".imagePopup");
const imagePopupText = document.querySelector(".imagePopup__text");
const imagePopupImage = document.querySelector(".imagePopup__image");
const imagePopupExit = document.querySelector(".imagePopup__exit");
const avatarPopup = document.querySelector(".avatarPopup");
const avatarPopupInput = document.querySelector("#avatarForm1");
const avatarContainer = document.querySelector(".profile__avatar-container");
const avatarPopupExit = document.querySelector(".avatarPopup__exit");
const avatarImageSelector = document.querySelector(".profile__avatar");
const avatarPopupForm = document.querySelector("#avatar-form");

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

export {
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
  cardTemplate,
  cardsContainer,
  cardInputName,
  cardInputLink,
  imagePopup,
  imagePopupText,
  imagePopupImage,
  imagePopupExit,
  userFormObj,
  placeFormObj,
  config,
  avatarFormObj,
  avatarPopup,
  avatarPopupInput,
  avatarContainer,
  avatarPopupExit,
  avatarImageSelector,
  avatarPopupForm,
  card,
};
