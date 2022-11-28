import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSel, callback) {
    super(popupSel);
    this._callback = callback;
    this._formPopup = this.PopupSel.querySelector(".popup__form");
    this._inputList = this.selector.querySelectorAll(".popup__form-input");
    this._button = this.selector.querySelector(".popup__save-button");
  }

  _getInputValues() {
    const inputValuesList = [];
    this._inputList.forEach((item) => {
      inputValuesList.push(item.value);
    });
    return inputValuesList;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}
