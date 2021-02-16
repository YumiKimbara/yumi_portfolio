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
window.onload = function () {
  const spinner = document.getElementById("loading");
  setTimeout(function () {
    spinner.classList.add("loaded");
  }, 2000);
};

//Scroll to each sections from navigation
document.querySelectorAll(".nav-links").forEach(function (el) {
  el.addEventListener("click", function (e) {
    //prevent scroll
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//Scroll to about Section from read more button
document.querySelectorAll(".read-more-details").forEach(function (el) {
  el.addEventListener("click", function (e) {
    //prevent scroll
    e.preventDefault();
    const id2 = e.target.getAttribute("href");
    document.querySelector(id2).scrollIntoView({ behavior: "smooth" });
  });
});

//modal open
const modalContainer = document.querySelector(".modal-container");
const modalContents1 = document.querySelector(".modal-content-1");
const modalContents2 = document.querySelector(".modal-content-2");
const modalContents3 = document.querySelector(".modal-content-3");
const modalContents4 = document.querySelector(".modal-content-4");

const btnsOpenModal1 = document.querySelector(".show-modal-1");
const btnsOpenModal2 = document.querySelector(".show-modal-2");
const btnsOpenModal3 = document.querySelector(".show-modal-3");
const btnsOpenModal4 = document.querySelector(".show-modal-4");
const btnCloseModal1 = document.querySelector(".close-modal-1");
const btnCloseModal2 = document.querySelector(".close-modal-2");
const btnCloseModal3 = document.querySelector(".close-modal-3");
const btnCloseModal4 = document.querySelector(".close-modal-4");

const openModal1 = function () {
  modalContainer.classList.remove("hidden");
  modalContents1.classList.remove("hidden");
};

const openModal2 = function () {
  modalContainer.classList.remove("hidden");
  modalContents2.classList.remove("hidden");
};

const openModal3 = function () {
  modalContainer.classList.remove("hidden");
  modalContents3.classList.remove("hidden");
};

const openModal4 = function () {
  modalContainer.classList.remove("hidden");
  modalContents4.classList.remove("hidden");
};

const closeModal1 = function () {
  modalContainer.classList.add("hidden");
  modalContents1.classList.add("hidden");
};

const closeModal2 = function () {
  modalContainer.classList.add("hidden");
  modalContents2.classList.add("hidden");
};

const closeModal3 = function () {
  modalContainer.classList.add("hidden");
  modalContents3.classList.add("hidden");
};

const closeModal4 = function () {
  modalContainer.classList.add("hidden");
  modalContents4.classList.add("hidden");
};

btnsOpenModal1.addEventListener("click", openModal1);
btnsOpenModal2.addEventListener("click", openModal2);
btnsOpenModal3.addEventListener("click", openModal3);
btnsOpenModal4.addEventListener("click", openModal4);

btnCloseModal1.addEventListener("click", closeModal1);
btnCloseModal2.addEventListener("click", closeModal2);
btnCloseModal3.addEventListener("click", closeModal3);
btnCloseModal4.addEventListener("click", closeModal4);
