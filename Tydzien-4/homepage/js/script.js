console.log("Witaj Neo w Matriksie !");
const btnFont = document.querySelector(".js-btnFont");
const btnBackground = document.querySelector(".js-btnBackground");
const btnPhoto = document.querySelector(".js-btnRemovePhoto");
const photo = document.querySelector(".introduction__photo");
const container = document.querySelector(".js-container");
const body = document.querySelector(".js-body");

const changeColorFont = () => {
  container.classList.toggle("colorFont");
};
const changeBackground = () => {
  body.classList.toggle("body--whiteBackground");
  container.classList.toggle("container--blackFont");
};

const addPhoto = () => {
  if (photo.style.display === "none") {
    photo.style.display = "block";
    btnPhoto.innerHTML = "Ukryj logo";
  } else {
    photo.style.display = "none";
    btnPhoto.innerHTML = "Pokaż logo";
  }
};
btnFont.addEventListener("click", changeColorFont);
btnBackground.addEventListener("click", changeBackground);
btnPhoto.addEventListener("click", addPhoto);
