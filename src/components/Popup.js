export default class Popup {
    
    constructor(popupSel) {
    this.selector = document.querySelector(popupSel);
    this._closeButton = this.selector.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);

    this.setEventListeners();
  }
  setEventListeners() {
    this._closeButton.addEventListener("mousedown", () => this.close);
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
