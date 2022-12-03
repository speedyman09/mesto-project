// переменные profile
export const profile = document.querySelector(".profile");
export const profileInfo = profile.querySelector(".profile__info");
export const buttonEdit = profile.querySelector(".profile__button-edit");
export const buttonAvatar = profile.querySelector(".profile__avatar-layout");
export const buttonAdd = profile.querySelector(".profile__button-add");
export const buttonCloseEdit = document.querySelector("#closeEdit");
export const popupEditProfile = document.querySelector("#editProfile");

// Находим переменные для обновления Имени и Рода занятий
export const formEdit = document.querySelector("#formEdit");
export const nameInput = formEdit.querySelector("#heading");
export const jobInput = formEdit.querySelector("#subheading");
export const nameTitle = profile.querySelector(".profile__title");
export const jobTitle = profile.querySelector(".profile__subtitle");

// переменные addCard
export const popupAddCard = document.querySelector("#addCard");
export const buttonDelete = document.querySelector(".element__delete-button");
export const buttonCloseAdd = document.querySelector("#closeAddCard");
export const formAddCard = document.querySelector("#newCard");
export const nameImagePopup = formAddCard.querySelector("#nameImage");
export const linkImagePopup = formAddCard.querySelector("#linkImage");

// submit
export const buttonSubmitChangeAvatar = document.querySelector(
  "#submitChangeAvatar"
);
export const buttonSubmitAddCard = document.querySelector("#submitAddCard");
export const buttonSubmitEditProfile =
  document.querySelector("#submitEditProfile");

// popup изменить аватар
export const popupChangeAvatar = document.querySelector("#changeAvatar");
export const buttonCloseAvatar = document.querySelector("#closeChangeAvatar");
export const formChangeAvatar = document.querySelector("#formChangeAvatar");
export const linkChangeAvatar = document.querySelector("#avatarLinkInput");
export const elementUserAvatar = document.querySelector(".profile__foto");

// создать карточки изображений
export const elementContainer = document.querySelector(".elements"); // куда вставлять
export const elementTemplate = document.querySelector("#element").content; // содержимое шаблона

// popup look-closer
export const popupLookCloser = document.querySelector(
  ".popup_type_look-closer"
);
export const imageLookCloser = popupLookCloser.querySelector(
  ".popup__look-closer-image"
);
export const nameLookCloser = popupLookCloser.querySelector(
  ".popup__look-closer-name"
);
export const buttonLookCloser = popupLookCloser.querySelector(
  ".popup__close_look-closer"
);
export const buttonCloseLook = popupLookCloser.querySelector(
  "#popup__close_look-closer"
);

export function renderLoading(submitForm) {
  const initialText = submitForm.textContent;
  submitForm.textContent = "Сохранение...";
}

export function returnRenderLoading(submitForm) {
  const initialText = submitForm.textContent;
  submitForm.textContent = "Сохранение";
}

export { config, configValidate, enableValidation, disableSubmitButton };

const configValidate = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  inactiveButtonClass: "form__submit_disabled",
};

function disableSubmitButton(submitForm, configValidate) {
  submitForm.setAttribute("disabled", "");
  submitForm.classList.add(configValidate.inactiveButtonClass);
}
function enableSubmitButton(submitForm, configValidate) {
  submitForm.removeAttribute("disabled");
  submitForm.classList.remove(configValidate.inactiveButtonClass);
}
const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
  headers: {
    authorization: "703c9790-16d9-4dc9-84fc-515962733489",
    "Content-Type": "application/json",
  },
};
