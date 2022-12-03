import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(selector, callback) {
    super(selector);

    this._callback = callback;
    this._formPopup = this.selector.querySelector(".popup__form");
    this._inputList = this.selector.querySelectorAll(".popup__form-input");
    this._button = this.selector.querySelector(".popup__save-button");
    this.setEventListeners();
  }

  _getInputValues() {
    const inputValuesList = [];
    this._inputList.forEach((item) => {
      inputValuesList.push(item.value);
    });
    return inputValuesList;
  }

  setEventListeners() {
    this._formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(evt);
    });
  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}
