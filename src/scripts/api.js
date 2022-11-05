  import {config} from './variables';

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
    console.log(`${config.baseUrl}/users/me`);
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

  const getRemovedCard = function (cardObj) {
    return fetch(`${config.baseUrl}/cards/${cardObj._id}`, {
      method: "DELETE",
      headers: {
        authorization: config.headers.authorization,
      },
    }).then(checkData);
  };
  
  const postCard = function (pictureNameInput, pictureLinkInput) {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: pictureNameInput.value,
        link: pictureLinkInput.value,
      }),
    }).then(checkData);
  };
  
  const getLikeDelete = function (cardObj) {
    return fetch(`${config.baseUrl}/cards/likes/${cardObj._id}`, {
      method: "DELETE",
      headers: {
        authorization: config.headers.authorization,
      },
    }).then(checkData);
  };
  
  const getAddedLike = function (cardObj) {
    return fetch(`${config.baseUrl}/cards/likes/${cardObj._id}`, {
      method: "PUT",
      headers: {
        authorization: config.headers.authorization,
      },
    }).then(checkData);
  };
  
  export {
    getProfileInfo,
    getLikeDelete,
    getAddedLike,
    getRemovedCard,
    initialCards,
    postCard,
    patchAvatar,
    patchProfile
  };
  