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
  constructor({}) {
    this._name = name;
    this._link = link;
  }
  //куда вставлять елементы
  //создать элемент
  //удалить элемент
  //установить лайк
  //посчитать лайки
  //удалить лайк
  //слушатели событий
}

import {
  cardsContainer,
  cardTemplate,
  cardInputName,
  cardInputLink,
  cardPopup,
  imagePopup,
  imagePopupImage,
  imagePopupText,
} from "../Utils/constants";
import { initialCards, card } from "../Utils/constants";
import { openPopup, closePopup, closeByEscape } from "./modal";
import {
  postCard,
  deleteRemovedCard,
  getProfileInfo,
  deleteLike,
  putLike,
} from "./api";
import { removeCard, sendCardToServer } from "../pages/index";

const createCard = (item, likeButtonHandler) => {
  const card = cardTemplate.cloneNode(true);
  card.dataset.id = item._id;
  const image = card.querySelector(".cards__image");
  const like = card.querySelector(".cards__like");
  const title = card.querySelector(".cards__text");
  const likeNumber = card.querySelector(".cards__like-number");

  image.src = item.link;
  image.alt = item.name;
  title.textContent = item.name;

  const deleteButton = card.querySelector(".cards__delete");
  if (localStorage.getItem("me_id") == item.owner._id) {
    deleteButton.addEventListener("click", (e) => {
      const card = e.target.closest(".cards__card");
      removeCard(card);
    });
  } else {
    deleteButton.remove();
  }

  image.addEventListener("click", () => {
    imagePopupImage.src = item.link;
    imagePopupImage.alt = item.name;
    imagePopupText.textContent = item.name;
    openPopup(imagePopup);
  });

  likeNumber.textContent = item.likes.length;

  let likedByMe = item.likes.reduce(function (result, current) {
    return result || current._id == localStorage.getItem("me_id");
  }, false);

  if (likedByMe) {
    like.classList.add("cards__like_liked");
  }

  like.addEventListener("click", () => {
    likeButtonHandler(item, likedByMe, (item) => {
      likedByMe
        ? like.classList.remove("cards__like_liked")
        : like.classList.add("cards__like_liked");
      likeNumber.textContent = item.likes.length;
      likedByMe = !likedByMe;
    });
  });

  return card;
};

export { createCard };
