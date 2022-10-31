import {
    profileName,
    profilePopupName,
    profileBio,
    profilePopupBio,
    profilePopup
} from './variables'
import { closePopup } from './modal';
const editProfileSubmitter = (e) => {
    e.preventDefault();
    profileName.textContent = profilePopupName.value;
    profileBio.textContent = profilePopupBio.value;
    closePopup(profilePopup);
}
export {
    editProfileSubmitter,

}