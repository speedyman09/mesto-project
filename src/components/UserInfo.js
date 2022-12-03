export default class UserInfo {
  constructor({ nameTitle, jobTitle, elementUserAvatar }) {
    this._name = document.querySelector(nameTitle);
    this._Description = document.querySelector(jobTitle);
    this._userAvatar = document.querySelector(elementUserAvatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._Description.textContent,
    };
  }

  setUserInfo(data) {
    this.userId = data._id;
    this._name.textContent = data.name;
    this._Description.textContent = data.about;
  }

  setUserAvatar(data) {
    this.userId = data._id;
    this._userAvatar.src = data.avatar;
  }
}
