"use strict";

////////////////////////////////////////////////
//Jquery library

ScrollReveal().reveal(".fadein2", {
  delay: 100,
  duration: 3500,
  origin: "bottom",
  distance: "100px",
  opacity: 0,
});

///////////////////////////////////////////////
//Javascript
//Spinner
//@@@loadingの2秒後にloadedをaddする
// window.onload = function () {
//   const spinner = document.getElementById("loading");
//   setTimeout(function () {
//     spinner.classList.add("loaded");
//   }, 2000);
// };

//Scroll to each sections from navigation
document.querySelectorAll(".navLinks").forEach(function (el) {
  el.addEventListener("click", function (e) {
    //prevent scroll
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//Scroll to about Section from read more button
document.querySelectorAll(".readMoreDetails").forEach(function (el) {
  el.addEventListener("click", function (e) {
    //prevent scroll
    e.preventDefault();
    const id2 = e.target.getAttribute("href");
    document.querySelector(id2).scrollIntoView({ behavior: "smooth" });
  });
});

//modal open
// const modalContainer = document.querySelector(".modalContainer");
// const modalContents1 = document.querySelector(".modalContent-1");
// const modalContents2 = document.querySelector(".modalContent-2");
// const modalContents3 = document.querySelector(".modalContent-3");
// const modalContents4 = document.querySelector(".modalContent-4");

// const btnsOpenModal1 = document.querySelector(".showModal-1");
// const btnsOpenModal2 = document.querySelector(".showModal-2");
// const btnCloseModal1 = document.querySelector(".closeModal-1");
// const btnCloseModal2 = document.querySelector(".closeModal-2");

// const openModal1 = function () {
//   modalContainer.classList.remove("hidden");
//   modalContents1.classList.remove("hidden");
// };

// const openModal2 = function () {
//   modalContainer.classList.remove("hidden");
//   modalContents2.classList.remove("hidden");
// };

// const closeModal1 = function () {
//   modalContainer.classList.add("hidden");
//   modalContents1.classList.add("hidden");
// };

// const closeModal2 = function () {
//   modalContainer.classList.add("hidden");
//   modalContents2.classList.add("hidden");
// };

// btnsOpenModal1.addEventListener("click", openModal1);
// btnsOpenModal2.addEventListener("click", openModal2);

// btnCloseModal1.addEventListener("click", closeModal1);
// btnCloseModal2.addEventListener("click", closeModal2);

const seeTheWebsite1 = document.querySelector(".seeTheWebsite1");
seeTheWebsite1.addEventListener("click", () => {
  window.open("https://weather-app-react-redux.vercel.app/");
});

const seeTheWebsite2 = document.querySelector(".seeTheWebsite2");
seeTheWebsite2.addEventListener("click", () => {
  window.open("https://pokedex-eqksvrcmv-yumi0127.vercel.app/");
});

const seeTheWebsite3 = document.querySelector(".seeTheWebsite3");
seeTheWebsite3.addEventListener("click", () => {
  window.open("https://task-management-phi.vercel.app/");
});
