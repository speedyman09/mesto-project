import { cardsContainer, initialCards, cardTemplate, cardInputName, cardInputLink, cardPopup, imagePopup, imagePopupImage, imagePopupText } from "./variables";
import { openPopup, closePopup, closeByEscape } from "./modal";
const createCard = (item) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.cards__image');
    const like = card.querySelector('.cards__like');
    const title = card.querySelector('.cards__text');
    const deleteButton = card.querySelector('.cards__delete');

    image.src = item.link;
    image.alt = item.name;
    title.textContent = item.name;

    like.addEventListener("click", (e) => {
        e.target.classList.toggle("cards__like_liked");
    });
    deleteButton.addEventListener("click", (e) => {
        e.target.closest('.cards__card').remove();
    });
    image.addEventListener('click', () => {
        openPopup(imagePopup);
        imagePopupImage.src = item.link;
        imagePopupImage.alt = item.name;
        imagePopupText.textContent = item.name;
        window.addEventListener('keydown', closeByEscape);
    })
    return card;
}
initialCards.forEach((item) => {
    const card = createCard(item);
    cardsContainer.append(card);
});
const addCard = (e) => {
    e.preventDefault();
    const cardValues = {
        name: cardInputName.value,
        link: cardInputLink.value,
    };
    e.target.reset();
    const card = createCard(cardValues);
    cardsContainer.prepend(card);
    closePopup(cardPopup);
};
export {
    createCard,
    addCard
}