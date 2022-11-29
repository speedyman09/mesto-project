export default class FormValidator {
  constructor(
    {
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    },
    formElement
  ) {
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled");
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", "disabled");
    }
  }

  _setEventListeners() {
    this._formElement.addEventListener("reset", () => {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled"); // отключение кнопки сабмита
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      }); // очищение ошибок, если пользователь введ что-то не то и закрыл попап, при следующем открытии ошибок не будет видно
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

//----------------------------------------------------------
export { configValidate, enableValidation, disableSubmitButton };

const configValidate = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  inactiveButtonClass: "form__submit_disabled",
};

const isValid = (formElement, inputElement, configValidate) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(
      inputElement.getAttribute("data_error_message")
    );
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configValidate
    );
  } else {
    hideInputError(formElement, inputElement, configValidate);
  }
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  configValidate
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(configValidate.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configValidate.errorClass);
};

const hideInputError = (formElement, inputElement, configValidate) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(configValidate.inputErrorClass);
  errorElement.classList.remove(configValidate.errorClass);
  errorElement.textContent = "";
};

const setEventListeners = (formElement, configValidate) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configValidate.inputSelector)
  );
  const submitForm = formElement.querySelector(
    configValidate.submitButtonSelector
  );
  toggleButtonState(inputList, submitForm, configValidate);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, configValidate);
      toggleButtonState(inputList, submitForm, configValidate);
    });
  });
};
const toggleButtonState = (inputList, submitForm, configValidate) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(submitForm, configValidate);
    //submitForm.setAttribute("disabled", "");
    //submitForm.classList.add(configValidate.inactiveButtonClass);
  } else {
    enableSubmitButton(submitForm, configValidate);
    //submitForm.removeAttribute("disabled");
    //submitForm.classList.remove(configValidate.inactiveButtonClass);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const enableValidation = ({ configValidate }) => {
  const formList = Array.from(
    document.querySelectorAll(configValidate.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, configValidate);
  });
};

function disableSubmitButton(submitForm, configValidate) {
  submitForm.setAttribute("disabled", "");
  submitForm.classList.add(configValidate.inactiveButtonClass);
}
function enableSubmitButton(submitForm, configValidate) {
  submitForm.removeAttribute("disabled");
  submitForm.classList.remove(configValidate.inactiveButtonClass);
}
