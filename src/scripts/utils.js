import {
    profileName,
    profilePopupName,
    profileBio,
    profilePopupBio,
    profilePopup,
    avatarImage,
    avatarPopupInput,
    avatarPopup,
    avatarPopupForm
} from './variables'
import { closePopup } from './modal';
import { patchAvatar, patchProfile } from './api';
const editProfile = (values) => {
    profileName.textContent = values.name;
    profileBio.textContent = values.about;
}
const editProfileSubmitter = (e) => {
    e.preventDefault();
    patchProfile(profilePopupName, profilePopupBio)
     .then(() => {
        editProfile({
            name: profilePopupName.value,
            about: profilePopupBio.value
        });
        closePopup(profilePopup);
     })
     .catch((err) => {
        console.error(err);
     })
}
const avatarSubmitter = (e) => {
    e.preventDefault();
    patchAvatar(avatarPopupInput)
     .then(() => {
        avatarImage.src = avatarPopupInput.value;
        closePopup(avatarPopup);
        avatarPopupInput.value = '';
     })
     .catch((err) => {
        console.log(err);
     })
}
export {
    editProfileSubmitter,
    avatarSubmitter,
    editProfile
}