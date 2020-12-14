// DOM Declare
const popupState = document.querySelector(".popup");
const popupButton = document.querySelector(".popup__button");
const profileInput = document.querySelector(".popup__info_type_profile");
const placeInput = document.querySelector(".popup__info_type_place");
const cardSection = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card-template").content;


// Edit Profile Popup
const popupProfile = document.querySelector(".popup_type_edit-profile");
const profileEdit = document.querySelector(".profile__edit");
const profileDescription = document.querySelector(".profile__description");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupButtonProfile = document.querySelector(".popup__button_type_edit-profile");
const popupName = document.querySelector(".popup__text_type_name");
const popupJob = document.querySelector(".popup__text_type_job");
const closeButtonProfile = popupProfile.querySelector(".popup__close-icon");


// Image Popup
const popupImage = document.querySelector(".popup_type_image");
const closeButtonImage = popupImage.querySelector(".popup__close-icon");
const popupSrc = popupImage.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__image_caption");


// New Place Popup
const popupPlace = document.querySelector(".popup_type_edit-place");
const popupButtonPlace = document.querySelector(".popup_button_type_edit-place");
const profileButton = document.querySelector(".profile__button");
const popupTitle = document.querySelector(".popup__title");

const popupPrimary = document.querySelector(".popup__text_type_primary");
const popupSecondary = document.querySelector(".popup__text_type_secondary");
const closeButtonPlace = popupPlace.querySelector(".popup__close-icon");



// Arrays & Functions

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


function savePopup(event) {
  event.preventDefault();
  const newPlace = [{ name: popupPrimary.value, link: popupSecondary.value }];
  newPlace.forEach(item => {
    addCard(item);
    newCard = addCard(item);
    cardSection.prepend(newCard);
  });
  closePopup(popupPlace);

};

// Add Cards

function addCard(item) {
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
    //likeButton.classList.toggle("card__icon_transparent");
  });





  // delete button
  function removeCard() {
    card.remove();
  };
  deleteButton.addEventListener("click", function () {
    removeCard();
  })
  // open image
  cardImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupSrc.src = item.link;
    popupCaption.textContent = item.name;
    popupSrc.alt = item.name;
  })

  return newCard;

}


// Open / Close / Save Popups
function closePopup(popup) {
  popup.classList.remove("popup_opened");
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
};

function editProfile() {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
};

function saveProfile(event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup(popupProfile);
};




// Event Handlers

profileButton.addEventListener("click", function () {
  openPopup(popupPlace);
});
profileEdit.addEventListener("click", editProfile);
profileInput.addEventListener("submit", saveProfile);
placeInput.addEventListener("submit", savePopup);
closeButtonProfile.addEventListener("click", function () {
  closePopup(popupProfile);
});
closeButtonPlace.addEventListener("click", function () {
  closePopup(popupPlace);
});
closeButtonImage.addEventListener("click", function () {
  closePopup(popupImage);
});

window.addEventListener("load", function () {
  initialCards.forEach(item => {
    addCard(item);
    newCard = addCard(item);
    cardSection.prepend(newCard);
  })
});

