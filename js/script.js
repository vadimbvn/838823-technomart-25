var contactLink = document.querySelector(".button-contacts");
var contactPopup = document.querySelector(".modal-write");
var contactClose = contactPopup.querySelector(".modal-close");
var form = contactPopup.querySelector(".write-form");
var login = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var buyLink = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".modal-cart");
var buyClose = buyPopup.querySelector(".modal-close");
var buyContinue = buyPopup.querySelector(".modal-continue");

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
  login.focus();
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-write-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-write-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-write-error");
    console.log("Введите свои данные");
}   else {
    contactPopup.classList.remove("modal-show");
    console.log("Отравляем данные");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactPopup.classList.contains("modal-show")) {
    contactPopup.classList.remove("modal-show");
    contactPopup.classList.remove("modal-write-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

for (var i = 0; i < buyLink.length; i++) {
    buyLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  }
)};

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

buyContinue.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-show")) {
      buyPopup.classList.remove("modal-show");
    }
  }
});
