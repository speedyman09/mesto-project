import Api from "../components/API";
import PopupWithImage from "../components/PopupWithImage";

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
  headers: {
    authorization: "8f6991cb-ed06-4bec-89fd-92424de41418",
    "Content-Type": "application/json",
  },
});

const imagePopup = new PopupWithImage(".imagePopup");

const handleCardClick = ({name, link}) => {
    imagePopup.open(name, link);
  };
  
  const handleCardDelete = (card, successFunc) => {
    api.deleteRemovedCard(card.dataset.id)
    .then(successFunc)
    .catch((err) => {
      console.error(err);
    });
  };
  
  const handleLikeClick = (card, likedByMe, successFunc) => {
    likedByMe
      ? api.deleteLike(card.dataset.id)
          .then((card) => {
            successFunc(card);
          })
          .catch((err) => {
            console.error(err);
          })
      : api.putLike(card.dataset.id)
          .then((card) => {
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
