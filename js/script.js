var button = document.querySelector(".button-search");
var popup = document.querySelector(".booking-form");

var checkInDate = popup.querySelector("[name=check-in-date]");
var checkOutDate = popup.querySelector("[name=check-out-date]");
var adultsAmount = popup.querySelector("[name=adults-amount]");
var childrenAmount = popup.querySelector("[name=children-amount]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adultsAmount");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
  popup.classList.remove("modal-error");
});



popup.addEventListener("submit", function(evt) {
  if (!checkInDate.value || !checkOutDate.value || !adultsAmount.value || !childrenAmount.value) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsAmount", adultsAmount.value);
    }
  }
});
