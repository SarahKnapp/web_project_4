let profileDescription = document.querySelector(".profile__description");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let popupState = document.querySelector(".popup");
let popupName = document.querySelector(".popup__text_type_name");
let popupJob = document.querySelector(".popup__text_type_job");
let profileEdit = document.querySelector(".profile__edit");
let popupButton = document.querySelector(".popup__button");
let closeButton = document.querySelector(".popup__close-icon");
let form = document.querySelector(".popup__info");

/*Declare your functions, you'll need three of them: to open the popup
 (it should also fill the form fields with the data from profile),
 to close the popup, and the last one to handle the submit action:
 modify the profile fields. */

 /*#1  open the popup
 (it should also fill the form fields with the data from profile),  */

function openPopup() {
  popupState.classList.add("popup_opened");
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
};

function closePopup() {
  popupState.classList.remove("popup_opened");
};

function savePopup() {
profileName.textContent = popupName.value;
profileJob.textContent = popupJob.value;
popupState.classList.remove("popup_opened");
};


profileEdit.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
popupButton.addEventListener("submit", savePopup);
