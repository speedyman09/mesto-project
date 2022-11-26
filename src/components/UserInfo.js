export default class UserInfo {
  constructor({
    userNameSelector,
    userDescriptionSelector,
    userAvatarSelector,
  }) {
    this._userNameSelector = userNameSelector;
    this._userDescriptionSelector = userDescriptionSelector;
    this._userAvatarSelector = userAvatarSelector;
    this._name = document.querySelector(this._userNameSelector);
    this._Description = document.querySelector(this._userDescriptionSelector);
    this._userAvatar = document.querySelector(this._userAvatarSelector);
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
    this._userAvatar.src = data.avatar;
  }
}
