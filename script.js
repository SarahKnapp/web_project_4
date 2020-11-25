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

function openPopup() {
  popupState.classList.add("popup_opened");
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
};

function closePopup() {
  popupState.classList.remove("popup_opened");
};

function savePopup(event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup();
};


profileEdit.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
form.addEventListener("submit", savePopup);
