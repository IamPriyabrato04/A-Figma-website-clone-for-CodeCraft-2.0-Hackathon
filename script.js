let nav = document.querySelector(".options");
let joinNow = document.querySelector(".join-now");

let highlight = document.querySelectorAll(".highlight");

let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

let white = document.querySelectorAll(".white");
let search = document.querySelector("#search");

let space = document.querySelector(".space");

document.getElementById("white_bg").addEventListener("click", function () {
  document.body.style.backgroundColor = "#ffffff";

  nav.style.backgroundColor = "#1C1C1C";
  joinNow.style.backgroundColor = "#F4876B";

  about.style.backgroundColor = "#F4876B";

  contact.style.background = "#F4876B";

  search.style.backgroundColor = "#1C1C1C";
  space.style.borderColor = "#1C1C1C";

  white.forEach(function (element) {
    element.style.color = "#1C1C1C";
  });

  joinNow.style.color = "#fff";
});

document.getElementById("purple_bg").addEventListener("click", function () {
  document.body.style.backgroundColor = "#7049C3";

  nav.style.backgroundColor = "#8D6FCE";
  joinNow.style.backgroundColor = "#8D6FCE";

  about.style.backgroundColor = "#7049C3";

  contact.style.background = "transparent";

  changingWhiteColour();
});
document.getElementById("blue_bg").addEventListener("click", function () {
  document.body.style.backgroundColor = "#0A2B9F";

  changingWhiteColour();

  highlight.forEach(function (element) {
    element.style.color = "#F1BF5A";
  });

  nav.style.backgroundColor = "#5177FD";
  joinNow.style.backgroundColor = "#5177FD";
  about.style.backgroundColor = "#5177FD";

  contact.style.background = "transparent";
});

document.getElementById("red_bg").addEventListener("click", function () {
  document.body.style.backgroundColor = "#B54242";
  changingWhiteColour();

  nav.style.backgroundColor = "#DE7171";
  joinNow.style.backgroundColor = "#DE7171";
  about.style.backgroundColor = "#DE7171";

  contact.style.background = "transparent";
});

const changingWhiteColour = () => {
  search.style.backgroundColor = "#fff";
  space.style.borderColor = "#fff";
  white.forEach(function (element) {
    element.style.color = "#fff";
  });
};
