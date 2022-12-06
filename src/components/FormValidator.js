export default class FormValidator {
  constructor(
    {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      errorClass,
    },
    formElement
  ) {
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._errorClass = errorClass;
    this._formElement = document.querySelector(formElement);
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.name}-error`
    );
    errorElement.textContent = this._customErrorMessage(inputElement);
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.name}-error`
    );
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _customErrorMessage(elem) {

    if(elem.validity.valid) {
      return "";
    }

    if (elem.validity.patternMismatch && elem.dataset.mismatch) {
      return elem.dataset.mismatch;
    } 

    return elem.validationMessage;
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _disableButton(){
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", "disabled");
  }
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      // this._buttonElement.classList.add(this._inactiveButtonClass);
      // this._buttonElement.setAttribute("disabled", "disabled");
      this._disableButton();
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", "disabled");
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener("reset", () => {
      // this._buttonElement.classList.add(this._inactiveButtonClass);
      // this._buttonElement.setAttribute("disabled", "disabled");
      this._disableButton();
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
      this._toggleButtonState();
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
