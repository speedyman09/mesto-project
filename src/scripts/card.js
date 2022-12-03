import {
  cardsContainer,
  cardTemplate,
  cardInputName,
  cardInputLink,
  cardPopup,
  imagePopupSel,
  imagePopupImage,
  imagePopupText,
  cardTemplateSelector,
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
  const card = cardTemplateSelector.cloneNode(true);
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
    openPopup(imagePopupSel);
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
