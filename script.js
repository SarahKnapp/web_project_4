let popupState = document.querySelector(".popup");
let popupButton = document.querySelector(".popup__button");
let popupButtonPlace = document.querySelector(".popup_button_type_edit-place");
let form = document.querySelector(".popup__info");
let popupTitle = document.querySelector(".popup__title");
let popupPlace = document.querySelector(".popup_type_edit-place");
const cardSection = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card-template").content;

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {

    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


// Add Cards

function addCard(value) {
  value.forEach( item => {
    const newCard = cardTemplate.cloneNode(true);
    // declare DOM element variables
    const card = newCard.querySelector(".card");
    const cardImage = newCard.querySelector(".card__image");
    const cardTitle = newCard.querySelector(".card__title");
    const deleteButton = newCard.querySelector(".card__delete-button");
    const likeButton = newCard.querySelector(".card__icon");

    // Fill card values
    cardTitle.textContent = item.name;
    cardImage.src = item.link;

    // Like Button

    likeButton.addEventListener("click", function () {
      likeButton.classList.toggle("card__icon_opaque");
      likeButton.classList.toggle("card__icon_transparent");
      })
// delete button
    deleteButton.addEventListener("click", function () {
      card.remove();
      })
// open image
    cardImage.addEventListener("click", function () {
      popupImage.classList.toggle("popup_opened");
      const popupSrc = popupImage.querySelector(".popup__image");
      const popupCaption = document.querySelector(".popup__image_caption");
      const popupAlt = document.query
      popupSrc.src = item.link;
      popupCaption.textContent = item.name;
      popupSrc.alt = item.name;
      })


    cardSection.prepend(newCard);
  })


}

window.addEventListener("load", addCard(initialCards));


// Image popup
const popupImage = document.querySelector(".popup_type_image");
let closeButtonImage = document.querySelector(".popup__close-icon_type_image");
console.log(closeButtonImage);

function closePopupImage() {
  popupImage.classList.remove("popup_opened");
}



// New Place Popup

let popupPrimary = document.querySelector(".popup__text_type_primary");
let popupSecondary = document.querySelector(".popup__text_type_secondary");
let closeButtonPlace = document.querySelector(".popup__close-icon_type_edit-place");



function openPopupPlace() {
  popupPlace.classList.add("popup_opened");
};


function savePopup(event) {
  event.preventDefault();
  const newPlace = [{name: popupPrimary.value, link: popupSecondary.value}];
  addCard (newPlace);
  closePopupPlace();

};


function closePopupPlace() {
  popupPlace.classList.remove("popup_opened");
};


// Edit Profile Popup
let profileDescription = document.querySelector(".profile__description");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let profileEdit = document.querySelector(".profile__edit");
let profileButton = document.querySelector(".profile__button");
let popupProfile = document.querySelector(".popup_type_edit-profile");
let popupButtonProfile = document.querySelector(".popup__button_type_edit-profile");
let popupName = document.querySelector(".popup__text_type_name");
let popupJob = document.querySelector(".popup__text_type_job");
let closeButton = document.querySelector(".popup__close-icon");


function editProfile() {
  popupProfile.classList.add("popup_opened");
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
}

function closePopup() {
  popupState.classList.remove("popup_opened");
};


function saveProfile(event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup();
};

profileEdit.addEventListener("click", editProfile);
profileButton.addEventListener("click", openPopupPlace);
closeButton.addEventListener("click", closePopup);
closeButtonPlace.addEventListener("click", closePopupPlace);

form.addEventListener("submit", saveProfile);
popupButtonPlace.addEventListener("click", savePopup);
closeButtonImage.addEventListener("click", closePopupImage);
