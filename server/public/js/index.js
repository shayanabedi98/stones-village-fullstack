const banner = document.querySelector(".banner1");
const bannerImg = [
  "/resources/bg11.jpg",
  "/resources/bg10.jpg",
  "/resources/bg9.jpg",
  "/resources/bg8.jpg",
];
let bannerImgIndex = 0;
const logoName = document.querySelector("#logo-name");
const logoCube = document.querySelector("#logo-cube");
const navbar = document.querySelector(".navbar");
const instagram = document.querySelector("#example-instagram");
const instagramBanner = document.querySelector(".banner-overlay button");
const mobileMenuBtn = document.querySelector(".phone-menu-button img");
const mobileMenuBtnDiv = document.querySelector(".phone-menu-button");
const mobileMenu = document.querySelector(".navbar-menu-mobile");
const closeMobileMenuBtn = document.querySelector(
  ".close-navbar-menu-mobile img"
);
const closeMobileMenu = document.querySelector(".close-navbar-menu-mobile");
const header1 = document.querySelector(".banner-overlay h1");
const header2 = document.querySelector(".banner-overlay p");
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));

function adjustMenuDisplay() {
  if (window.innerWidth >= 901) {
    mobileMenuBtnDiv.style.display = "none";
    mobileMenu.style.display = "none";
    closeMobileMenu.style.display = "none";
  } else if (closeMobileMenu.style.display === "grid") {
    mobileMenuBtnDiv.style.display = "none";
  } else if (closeMobileMenu.style.display === "none") {
    mobileMenuBtnDiv.style.display = "grid";
  }
}

adjustMenuDisplay();

window.addEventListener("resize", adjustMenuDisplay);

mobileMenuBtn.addEventListener("click", () => {
  //hamburger
  mobileMenu.style.display = "flex"; //navbar-menu-mobile
  mobileMenuBtnDiv.style.display = "none"; //hamburger div
  closeMobileMenu.style.display = "grid"; //close div
});

closeMobileMenuBtn.addEventListener("click", () => {
  //close
  mobileMenu.style.display = "none";
  mobileMenuBtnDiv.style.display = "grid";
  closeMobileMenu.style.display = "none";
});

if (instagramBanner) {
  instagramBanner.addEventListener("click", () => {
    window.location = "/inventory";
  });
}

logoCube.addEventListener("click", () => {
  window.location = "/";
});

logoName.addEventListener("click", () => {
  window.location = "/";
});

const bannerImgChanger = () => {
  banner.style.opacity = "0";
  bannerImgIndex = (bannerImgIndex + 1) % bannerImg.length;
  banner.style.background = `url(${bannerImg[bannerImgIndex]})`;

  if (bannerImgIndex === 0) {
    banner.classList.remove("banner2", "banner3", "banner4");
    banner.classList.add("banner1");
    banner.style.opacity = "1";

    setTimeout(() => {
      banner.style.opacity = "0";
    }, 7000);
  } else if (bannerImgIndex === 1) {
    banner.classList.remove("banner1", "banner3", "banner4");
    banner.classList.add("banner2");
    banner.style.opacity = "1";

    setTimeout(() => {
      banner.style.opacity = "0";
    }, 7000);
  } else if (bannerImgIndex === 2) {
    banner.classList.remove("banner1", "banner2", "banner4");
    banner.classList.add("banner3");
    banner.style.opacity = "1";

    setTimeout(() => {
      banner.style.opacity = "0";
    }, 7000);
  } else if (bannerImgIndex === 3) {
    banner.classList.remove("banner1", "banner2", "banner3");
    banner.classList.add("banner4");
    banner.style.opacity = "1";

    setTimeout(() => {
      banner.style.opacity = "0";
    }, 7000);
  }
};

bannerImgChanger();

setInterval(bannerImgChanger, 8000);

instagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/stonesvillage/", "_blank");
});

const carousel = document.querySelector(".carousel");
let isDragging = false;
let startPos = 0;
let currentScrollLeft = 0;

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPos = e.pageX - carousel.offsetLeft;
  currentScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = x - startPos;
  carousel.scrollLeft = currentScrollLeft - walk;
});