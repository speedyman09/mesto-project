import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor(popupSel) {
    super(popupSel);
    this._image = this.selector.querySelector(".cards__image");
    this._title = this.selector.querySelector(".cards__text");
  }
  open(name, link) {
    super.open();
    this._image.src = link;
    this._title.textContent = name;
    this._image.alt = name;
  }
}
