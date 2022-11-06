import { cardsContainer, cardTemplate, cardInputName, cardInputLink, cardPopup, imagePopup, imagePopupImage, imagePopupText } from "./variables";
import { initialCards } from "./variables";
import { openPopup, closePopup, closeByEscape } from "./modal";
import { postCard, deleteRemovedCard, getProfileInfo, deleteLike, putLike} from "./api";

const createCard = (item) => {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.cards__card').dataset.id = item._id;
    const image = card.querySelector('.cards__image');
    const like = card.querySelector('.cards__like');
    const title = card.querySelector('.cards__text');
    const likeNumber = card.querySelector('.cards__like-number');

    image.src = item.link;
    image.alt = item.name;
    title.textContent = item.name;

    like.addEventListener("click", (e) => {
        e.target.classList.toggle("cards__like_liked");
    });

    const deleteButton = card.querySelector('.cards__delete');
    if (localStorage.getItem("me_id") == item.owner._id) {
        deleteButton.addEventListener("click", (e) => {
        const card = e.target.closest('.cards__card');
        deleteRemovedCard(card.dataset.id)
        .then(() => {
            card.remove();
          })
          .catch((err) => {
            console.log(err);
          });
        });
    } else {
        deleteButton.remove();
    }

    image.addEventListener('click', () => {
        openPopup(imagePopup);
        imagePopupImage.src = item.link;
        imagePopupImage.alt = item.name;
        imagePopupText.textContent = item.name;
    });

    likeNumber.textContent = item.likes.length;

    let likedByMe = item.likes.reduce(function (result, current) {
        return result || (current._id == localStorage.getItem("me_id"));
      }, false);

    if (likedByMe) {
        like.classList.add('cards__like_liked');
    }

    like.addEventListener("click", () => {
        likedByMe
          ? 
          deleteLike(item).then(
            (item) => {
                like.classList.remove('cards__like_liked');
                likeNumber.textContent = item.likes.length;
                likedByMe = !likedByMe;
            }
          )
        : putLike(item).then(
            (item) => {
                like.classList.add('cards__like_liked');
                likeNumber.textContent = item.likes.length;
                likedByMe = !likedByMe;
            }
          )
      });

    return card;
}
// initialCards.forEach((item) => {
//     const card = createCard(item);
//     cardsContainer.append(card);
// });
const addCard = (e) => {
    e.preventDefault();
    const cardValues = {
        name: cardInputName.value,
        link: cardInputLink.value,
    };
    // e.target.reset();
    postCard(cardInputName, cardInputLink)
     .then(
        (item) => {
            const card = createCard(item);
            cardsContainer.prepend(card);
        }
     );
    closePopup(cardPopup);
};
  
export {
    createCard,
    addCard,
}