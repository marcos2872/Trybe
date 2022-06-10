// SELETORES
function aHref() {
  const HREF_LINK = document.querySelector("#href");
  HREF_LINK.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
aHref();

function checkbox() {
  const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
  INPUT_CHECKBOX.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
checkbox();

function KeyP() {
  const INPUT_TEXT = document.querySelector("#input-text");
  INPUT_TEXT.addEventListener("keypress", (event) => {
    if (event.key == "a") {
      event.key = "a";
    } else {
      event.preventDefault();
    }
  });
}
KeyP();
