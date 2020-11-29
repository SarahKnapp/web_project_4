let profileDescription = document.querySelector(".profile__description");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let profileEdit = document.querySelector(".profile__edit");
let profileButton = document.querySelector(".profile__button");


let popupState = document.querySelector(".popup");
let popupPrimary = document.querySelector(".popup__text_type_primary");
let popupSecondary = document.querySelector(".popup__text_type_secondary");
let popupButton = document.querySelector(".popup__button");
let closeButton = document.querySelector(".popup__close-icon");
let form = document.querySelector(".popup__info");
let popupTitle =  document.querySelector(".popup__title");


function openPopup() {
  popupState.classList.add("popup_opened");
};

function editProfile(){
  openPopup();
  popupPrimary.value = profileName.textContent;
  popupSecondary.value = profileJob.textContent;
  popupTitle.textContent = "Edit Profile";
  popupButton.textContent = "Save";
}

function editPlace() {
  openPopup();
  popupTitle.textContent = "New Place";
  popupButton.textContent = "Create";
  popupButton.setAttribute("aria-label", "create");
  popupPrimary.setAttribute("placeholder","Title");
  popupPrimary.setAttribute("name","title");
  popupSecondary.setAttribute("placeholder","Image link");
  popupSecondary.setAttribute("name","image_link");
}

function closePopup() {
  popupState.classList.remove("popup_opened");
};

function savePopup(event) {
  event.preventDefault();
  profileName.textContent = popupPrimary.value;
  profileJob.textContent = popupSecondary.value;
  closePopup();
};

profileButton.addEventListener("click", editPlace);
profileEdit.addEventListener("click", editProfile);
closeButton.addEventListener("click", closePopup);
form.addEventListener("submit", savePopup);

const cardSection = document.querySelector(".elements");

function addCard (){
const cardTemplate = document.querySelector("#card-template").content;
const yosemiteCard = cardTemplate.cloneNode(true);
yosemiteCard.querySelector(".card__image").src="./images/yosemite.png";
yosemiteCard.querySelector(".card__title").textContent="Yosemite Valley";
cardSection.append(yosemiteCard);
}
window.addEventListener("load", addCard);

