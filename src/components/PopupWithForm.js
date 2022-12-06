import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(selector, callback) {

    super(selector);
    
    this._callback = callback;
    this._formPopup = this.popupElem.querySelector(".popup__form");
    this._inputList = this.popupElem.querySelectorAll(".popup__form-input");
    this._button = this.popupElem.querySelector(".popup__save-button");
    this.setEventListeners();
  }

  _getInputValues() {
    // const inputValuesList = [];
    this._inputValuesList = {};
    // this._inputList.forEach((item) => {
    //   inputValuesList.push(item.value);
    // });
    this._inputList.forEach(input => {
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

  close() {
    super.close();
    setTimeout(()=>{
      this._formPopup.reset();
    }, 500);
    
  }
}
