var button = document.querySelector(".button-search");
var popup = document.querySelector(".booking-form");

var checkInDate = popup.querySelector("[name=check-in-date]");
var checkOutDate = popup.querySelector("[name=check-out-date]");
var adultsAmount = popup.querySelector("[name=adults-amount]");
var childrenAmount = popup.querySelector("[name=children-amount]");

var isStorageSupport = true;
var storage = "";

document.addEventListener("DOMContentLoaded", function(evt) {
  popup.classList.add("modal-close");
});

try {
  storage = localStorage.getItem("adultsAmount");
  storage = localStorage.getItem("childrenAmount");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("show");
  popup.classList.toggle("modal-close");
  if (popup.classList.contains('modal-close')) {
    popup.classList.remove("modal-error");
    popup.classList.remove("show");
  }
});

popup.addEventListener("submit", function(evt) {
  if (!checkInDate.value || !checkOutDate.value || !adultsAmount.value || !childrenAmount.value) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    evt.preventDefault();
    popup.classList.remove("show");
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsAmount", adultsAmount.value);
      localStorage.setItem("childrenAmount", childrenAmount.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("modal-close");
    popup.classList.remove("modal-error");
    popup.classList.remove("show");
  }
});
