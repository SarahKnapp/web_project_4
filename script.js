let profileDescription = document.querySelector(".profile__description");
let profileName = document.querySelector(".profile__name");
let popupName = document.querySelector(".popup__text_type_name");
let profileJob = document.querySelector(".profile__job");
let popupState = document.querySelector(".popup");

document.querySelector(".profile__edit").addEventListener("click", function () {
  popupState.classList.add("popup_opened");
  let currentProfileName = document.querySelector(".profile__name").textContent;
  document.querySelector(".popup__text_type_name").value = currentProfileName;
  let z = document.querySelector(".profile__job").textContent;
  document.querySelector(".popup__text_type_job").value = z;
});

document.querySelector(".popup__button").addEventListener("click", function () {
  let x = document.querySelector(".popup__text_type_name").value;
  let y = document.querySelector(".popup__text_type_job").value;
  profileName.innerHTML = x;
  profileJob.innerHTML = y;
  popupState.classList.remove("popup_opened");
});

document.querySelector(".popup__close-icon").addEventListener("click", function () {
  popupState.classList.remove("popup_opened");
});
