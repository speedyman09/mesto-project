const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

const popupClosing = (evt) => {
    const currentPopupElement = document.querySelector('.popup_opened');
    if (
        evt.target === currentPopupElement.querySelector('.popup__exit') ||
        evt.target === currentPopupElement.querySelector('.addPopup__exit') ||
        evt.target === currentPopupElement ||
        evt.key === "Escape"
      ) {
        closePopup(currentPopupElement);
      }
}

const closeAtEsc = (evt) => {
    closePopup(evt);
};

export {
    openPopup,
    closePopup,
    popupClosing
};
