export default class Popup {
  constructor(selector) {
    this.popupElem = document.querySelector(selector);
    this.closeButton = this.popupElem.querySelector(".popup__exit");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._btnName = this.popupElem.querySelector(".popup__save-button");

    this._setEventListeners();
  }
  _setEventListeners() {
    this.closeButton.addEventListener("mousedown", () => this.close());
    this.popupElem.addEventListener("mousedown", (evt) => {
      if (evt.target === this.popupElem) {
        this.close();
      }
    });
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  open() {
    this.popupElem.classList.add("popup_opened");
    window.addEventListener("keydown", this._handleEscClose);
    this._initialText = this._btnName.textContent;
    this._btnName.textContent = "Сохранение";
  }
  close() {
    this.popupElem.classList.remove("popup_opened");
    window.removeEventListener("keydown", this._handleEscClose);
    this._initialText = this._btnName.textContent;
    this._btnName.textContent = "Сохранение...";
  }
}
