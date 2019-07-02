var buyLink = document.querySelectorAll(".buy");
var buyPopup = document.querySelector(".modal-cart");
var buyClose = buyPopup.querySelector(".modal-close");
var buyContinue = buyPopup.querySelector(".modal-continue");

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
