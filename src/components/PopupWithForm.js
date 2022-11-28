import Popup from 'Popup.js'
export default class PopupWithForm extends Popup {
    constructor(popupSel, callback) {
        super(popupSel)
        this._callback = callback
        this._inputList = this._popup.querySelectorAll(".popup__form-input");
        this._button = this._popup.querySelector(".popup__save-button");
        this._formPopup = this._popup.querySelector(".popup__form");
    }
    _getInputValues () {
        const inputValuesList = []
        this._inputList.forEach((item) => {
            inputValuesList.push(item.value)
        })
        return inputValuesList;
    }

    setEventListeners () {
        super.setEventListeners();
        // обработчик сабмита форм
        this._formPopup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues());
          });
    }

    close ()  {
        super.close();
        this._formPopup.reset();
    }
}