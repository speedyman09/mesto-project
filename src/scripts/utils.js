import {
    profileName,
    profilePopupName,
    profileBio,
    profilePopupBio,
    profilePopup,
    avatarImage,
    avatarPopupInput,
    avatarPopup
} from './variables'
import { closePopup } from './modal';
const editProfileSubmitter = (e) => {
    e.preventDefault();
    profileName.textContent = profilePopupName.value;
    profileBio.textContent = profilePopupBio.value;
    closePopup(profilePopup);
}
const avatarSubmitter = (e) => {
    e.preventDefault();
    avatarImage.src = avatarPopupInput.value;
    closePopup(avatarPopup);
}
export {
    editProfileSubmitter,
    avatarSubmitter
}