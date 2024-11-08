const creationsData = [
  {
    img: "image-deep-earth.jpg",
    text: "Deep Earth",
  },
  {
    img: "image-night-arcade.jpg",
    text: "Night Arcade",
  },
  {
    img: "image-soccer-team.jpg",
    text: "Soccer Team VR",
  },
  {
    img: "image-grid.jpg",
    text: "The Grid",
  },
  {
    img: "image-from-above.jpg",
    text: "From up above VR",
  },
  {
    img: "image-pocket-borealis.jpg",
    text: "Pocket Borealis",
  },
  {
    img: "image-curiosity.jpg",
    text: "The Curiosity",
  },
  {
    img: "image-fisheye.jpg",
    text: "Make it fisheye",
  },
];

let menuOpen = false;
const creationsSection = document.querySelector(".creations");
const seeAllButton = document.querySelector(".creations > button");
const menuList = document.querySelectorAll(".menuList");
const menuBtn = document.querySelector(".menuBtn");
const heroSection = document.querySelector(".hero");
const heroText = document.querySelector(".hero-text");
const interactiveVR = document.querySelector(".interactiveVR");
const creations = document.querySelector(".creations");
const footer = document.querySelector(".footer");
const creationsFragment = document.createDocumentFragment();
const isDesktop = window.matchMedia("(min-width: 895px)").matches;

const createCreationCard = (data) => {
  const creationImgContainer = document.createElement("div");
  creationImgContainer.classList.add("creationImg");

  // Set background image based on screen size
  if (isDesktop) {
    creationImgContainer.style.backgroundImage = `url('./images/desktop/${data.img}')`;
  } else {
    creationImgContainer.style.backgroundImage = `url('./images/mobile/${data.img}')`;
  }

  // Create paragraph and split text after the first word
  const p = document.createElement("p");
  const words = data.text.split(" "); // Split text by spaces
  if (words.length > 1) {
    p.innerHTML = `${words[0]}<br>${words.slice(1).join(" ")}`; // Add <br> after first word
  } else {
    p.textContent = data.text; // If there’s only one word, use original text
  }

  creationImgContainer.appendChild(p);
  return creationImgContainer;
};

creationsData.forEach((data) => creationsFragment.appendChild(createCreationCard(data)));
creationsSection.insertBefore(creationsFragment, seeAllButton);

if (isDesktop) {
  heroSection.style.backgroundImage = "url(./images/desktop/image-hero.jpg)";
} else {
  heroSection.style.backgroundImage = "url(./images/mobile/image-hero.jpg)";
}

menuBtn.addEventListener("click", () => {
  const menuImg = menuBtn.querySelector("img");
  if (!menuOpen) {
    menuImg.src = "./images/icon-close.svg";
    heroSection.style.backgroundImage = "";
    heroSection.style.backgroundColor = "black";
    heroSection.style.height = "100vh";
    heroText.classList.add("invisible");
    interactiveVR.classList.add("invisible");
    creations.classList.add("invisible");
    footer.classList.add("invisible");
    menuList[1].classList.remove("invisible");
  } else {
    menuImg.src = "./images/icon-hamburger.svg";
    heroSection.style.backgroundImage = "url(./images/mobile/image-hero.jpg)";
    heroSection.style.backgroundColor = "";
    heroSection.style.height = "92%";
    heroText.classList.remove("invisible");
    interactiveVR.classList.remove("invisible");
    creations.classList.remove("invisible");
    footer.classList.remove("invisible");
    menuList[1].classList.add("invisible");
  }
  menuOpen = !menuOpen;
});
