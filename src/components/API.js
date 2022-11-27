//Создание класса Api
//В предыдущем месяце вы создавали отдельный файл api.js.
//Организуйте в файле класс Api, в конструкторе которого будет содержаться URL
//и заголовки для запросов, а методы класса будут обозначать работу с разными эндпоинтами:
//class Api {
//  constructor(options) {
//    // тело конструктора
//  }
//  getInitialCards() {
//        return fetch().then()
//    // ...
//  }
// другие методы работы с API
//}

//const api = new Api({
//  baseUrl: 'https://nomoreparties.co/v1/cohort-42',
//  headers: {
//    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//    'Content-Type': 'application/json'
//  }
//});
//Обратите внимание, что многие другие классы (PopupWithForm, Card, UserInfo)
//будут взаимодействовать с методами класса Api. Для решения этой задачи очень
//хорошо подойдёт материал, который вы изучите в последней теме по ООП. Внедряйте
//методы класса Api в другие классы через передачу колбэк-функций.

export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  //обработчик ответа сервера
  _checkData(data) {
    if (data.ok) {
      return data.json();
    } else {
      return Promise.reject(`Ошибка: ${data.status}`);
    }
  }
  //запрос информации о пользователе
  getProfileInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkData);
  }
  //обновление информации о пользователе
  patchProfile(profile) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: profile.name,
        about: profile.about,
      }),
    }).then(this._checkData);
  }
  //обновляем аватар
  patchAvatar(link) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link.avatarPopupInput,
      }),
    }).then(this._checkData);
  }
  //запрашиваем карточки
  initialCards() {
    return fetch(`${config.baseUrl}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then(this._checkData);
  }
  //постим карточки
  postCard(newCard) {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: newCard.title,
        link: newCard.link,
      }),
    }).then(this._checkData);
  }
  //удаляем карточки
  deleteRemovedCard(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkData);
  }
  //добавляем лайк
  putLike(cardObj) {
    return fetch(`${config.baseUrl}/cards/likes/${cardObj._id}`, {
      method: "PUT",
      headers: this.headers,
    }).then(this._checkData);
  }
  //удаляем лайк
  deleteLike(cardObj) {
    return fetch(`${config.baseUrl}/cards/likes/${cardObj._id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._checkData);
  }
  // Загрузка всех данных
  loadData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }
}
