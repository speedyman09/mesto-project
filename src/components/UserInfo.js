export default class UserInfo {
  constructor({
    profileNameSelector,
    profileBioSelector,
    avatarImageSelector,
  }) {
    // this._profileNameSelector = profileNameSelector;
    // this._profileBioSelector = profileBioSelector;
    // this._avatarImageSelector = avatarImageSelector;
    this._name = document.querySelector(profileNameSelector);
    this._Description = document.querySelector(profileBioSelector);
    this._userAvatar = document.querySelector(avatarImageSelector);
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
