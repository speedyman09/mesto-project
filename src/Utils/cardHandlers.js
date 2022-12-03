import {
    deleteLike,
    putLike,
    deleteRemovedCard,
  } from "../scripts/api";

import PopupWithImage from "../components/PopupWithImage";

const handleCardClick = ({name, link}) => {
    const popup = new PopupWithImage(".imagePopup");
    popup.open(name, link);
  };
  
  const handleCardDelete = (card, successFunc) => {
    deleteRemovedCard(card.dataset.id)
    .then(successFunc)
    .catch((err) => {
      console.error(err);
    });
  };
  
  const handleLikeClick = (card, likedByMe, successFunc) => {
    likedByMe
      ? deleteLike(card.dataset.id)
          .then((card) => {
            console.log("Like has been deleted;")
            successFunc(card);
          })
          .catch((err) => {
            console.error(err);
          })
      : putLike(card.dataset.id)
          .then((card) => {
            console.log("Like has been put;")
            successFunc(card);
          })
          .catch((err) => {
            console.error(err);
          });
  };

export {
  handleCardClick, 
  handleCardDelete,
  handleLikeClick,
};
