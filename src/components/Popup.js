export default class Popup {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.closeButton = this.selector.querySelector(".popup__exit");
    this._handleEscClose = this._handleEscClose.bind(this);

    this._setEventListeners();
  }
  _setEventListeners() {
    this.closeButton.addEventListener("mousedown", () => this.close);
    this.selector.addEventListener("mousedown", () => this.close);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  open() {
    this.selector.classList.add("popup_opened");
    window.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this.selector.classList.remove("popup_opened");
    window.removeEventListener("keydown", this._handleEscClose);
  }
}
