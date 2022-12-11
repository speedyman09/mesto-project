import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(selector, callback) {
    super(selector);

    this._callback = callback;
    this._formPopup = this.popupElem.querySelector(".popup__form");
    this._inputList = this.popupElem.querySelectorAll(".popup__form-input");
    this._button = this.popupElem.querySelector(".popup__save-button");
    this._submitBtnText = this._button.textContent;
    this.setEventListeners();
  }

  _getInputValues() {
    this._inputValuesList = {};

    this._inputList.forEach((input) => {
      this._inputValuesList[input.name] = input.value;
    });
    return this._inputValuesList;
  }

  setEventListeners() {
    this._formPopup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(evt, this._getInputValues());
    });
  }

  // указываем 2 параметра (2й с текстом по умолчанию, чтобы не указывать лишний раз его)
  renderLoading(isLoading, loadingText = "Сохранение...") {
    if (isLoading) {
      this._button.textContent = loadingText;
    } else {
      this._button.textContent = this._submitBtnText;
    }
  }

  close() {
    super.close();
    setTimeout(() => {
      this._formPopup.reset();
    }, 500);
  }
}
