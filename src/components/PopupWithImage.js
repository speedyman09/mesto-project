import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._image = this.popupElem.querySelector(".imagePopup__image");
    this._title = this.popupElem.querySelector(".imagePopup__text");
  }
  open(name, link) {
    super.open();
    this._image.src = link;
    this._title.textContent = name;
    this._image.alt = name;
  }
}

