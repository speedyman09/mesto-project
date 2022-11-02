const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
        window.removeEventListener('keydown', closeByEscape);
};
}

const closePopupChecker = (evt) => {
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



export {
    openPopup,
    closePopup,
    closePopupChecker,
    closeByEscape
};
