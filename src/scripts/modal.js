const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    window.addEventListener('keydown', closeByEscape);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', closeByEscape);
}

const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
};
}

const closePopupChecker = (evt) => {
    const currentPopupElement = document.querySelector('.popup_opened');
    if (
        evt.target === currentPopupElement.querySelector('.popup__exit') ||
        evt.target === currentPopupElement 
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
