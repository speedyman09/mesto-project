import { config, cardInputLink, cardInputName } from "../Utils/constants";

function checkData(data) {
  if (data.ok) {
    return data.json();
  } else {
    return Promise.reject(`Ошибка: ${data.status}`);
  }
}

const getProfileInfo = function () {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: {
      authorization: config.headers.authorization,
    },
  }).then(checkData);
};

const patchAvatar = function (avatarPopupInput) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarPopupInput.value,
    }),
  }).then(checkData);
};

const patchProfile = function (profilePopupName, profilePopupBio) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: profilePopupName.value,
      about: profilePopupBio.value,
    }),
  }).then(checkData);
};

const initialCards = function () {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: {
      authorization: config.headers.authorization,
    },
  }).then(checkData);
};

const deleteRemovedCard = function (id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: {
      authorization: config.headers.authorization,
    },
  }).then(checkData);
};

const postCard = function (cardInputName, cardInputLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardInputName.value,
      link: cardInputLink.value,
    }),
  }).then(checkData);
};

const deleteLike = function (id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "DELETE",
    headers: {
      authorization: config.headers.authorization,
    },
  }).then(checkData);
};

const putLike = function (id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "PUT",
    headers: {
      authorization: config.headers.authorization,
    },
  }).then(checkData);
};

export {
  getProfileInfo,
  deleteLike,
  putLike,
  deleteRemovedCard,
  initialCards,
  postCard,
  patchAvatar,
  patchProfile,
};
