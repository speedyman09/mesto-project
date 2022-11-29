//Создание класса Card
//Поработайте с функциональностью работы карточек и валидации форм.
//Всю валидацию форм вы до этого писали в отдельном файле, а работу
//карточек — в другом. Теперь преобразуйте функции, которые существовали
//ранее, в единое целое — классы Card и FormValidator.
//В этом пункте задания поговорим про класс Card.
//Организуйте в классе Card код, который создаёт карточку с текстом и ссылкой на изображение:
//принимает в конструктор её данные и селектор её template-элемента;
//содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
//содержит приватные методы для каждого обработчика;
//содержит один публичный метод, который возвращает полностью работоспособный и наполненный
//данными элемент карточки.
//Для каждой карточки создайте экземпляр класса Card. Когда дойдёте до реализации классов
//Popup, свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор
//функцию handleCardClick. При клике на карточку эта функция должна открывать попап с картинкой.

export default class Card {
  constructor(
    { likes, link, name, owner, _id: id },
    currentUserId,
    cardTemplateSelector,
    { handleCardClick, handleCardDelete, handleLikeClick, cardImageloader }
  ) {
    this._name = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._likes = likes;
    this._id = id;
    this._ownerId = owner._id;
    this._currentUserId = currentUserId;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeClick = handleLikeClick;
    this._imageloader = cardImageloader;
  }
  //куда вставлять элементы
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .cloneNode(true);

    return cardElement;
  }
  //создать элемент
  createCard() {
    this._card = this._getTemplate();
    this._image = this._card.querySelector(".cards__image");
    this._title = this._card.querySelector(".cards__text");
    this._likeNumber = this._card.querySelector(".cards__like-number");
    this._like = this._card.querySelector(".cards__like");
    this._deleteButton = this._card.querySelector(".cards__delete");

    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._likeNumber.textContent = this._likes.length;
    this._setDeleteButtonState();
    this._setLikeState();
    this._setEventListeners();
    this._imageloader();
    return this._card;
  }
  //удалить элемент
  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  isLiked() {
    return this._isLiked;
  }
  //установить лайк
  setLike(data) {
    this._isLiked =
      data.likes.filter((item) => {
        return item._id == this._currentUserId;
      }).length > 0;
    this._likeNumber.textContent = data.likes.length;
    if (this._isLiked) {
      this._like.classList.add("cards__like_liked");
    } else {
      this._like.classList.remove("cards__like_liked");
    }
    this._toggleLikeContainer(data);
  }

  _toggleLikeContainer(data) {
    if (data.likes.length === 1)
      this._likeNumber.classList.add("cards__like_liked");
    else if (data.likes.length === 0) {
      this._likeNumber.classList.remove("cards__like_liked");
    }
  }
  //удалить лайк
  _setDeleteButtonState() {
    if (this._ownerId === this._currentUserId) {
      this._deleteButton.addEventListener("click", (e) => {
        const card = e.target.closest(".cards__card");
        removeCard(card);
      });
    } else {
      _deleteButton.remove();
    }
  }

  //посчитать лайки
  _setLikeState() {
    if (this._likes.length > 0) {
      this._likeNumber.classList.add("cards__like_liked");
    }
    if (this._likes.some((item) => item._id === this._currentUserId)) {
      this._like.classList.add("cards__like_liked");
      this._isLiked = true;
    }
  }
  //слушатели событий
  _setEventListeners() {
    this._deleteButton.addEventListener("click", () =>
      this._handleCardDelete()
    );
    this._like.addEventListener("click", () => this._handleLikeClick());
    this._image.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }
}
