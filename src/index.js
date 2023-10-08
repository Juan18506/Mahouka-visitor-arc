"use strict";

const handleNav = ({ target }) => {
  if (!target.classList.contains("header__a")) return;

  const headerAnchors = document.querySelectorAll(".header__a");
  headerAnchors.forEach((anchor) => {
    anchor.classList.remove("header__a--active");
  });

  target.classList.add("header__a--active");
};

const handleButtons = () => {
  const headerNav = document.querySelector(".header__nav");
  headerNav.classList.toggle("header__nav--inactive");

  const btns = [...headerNav.previousElementSibling.children];
  btns.forEach((btn) => {
    btn.classList.toggle("buttons__btn--inactive");
  });
};

const handleIframe = ({ target }) => {
  const modal = document.querySelector(".modal");
  const iframe = modal.firstElementChild;

  if (!modal.classList.contains("modal--inactive")) iframe.src = iframe.src;
  modal.classList.toggle("modal--inactive");

  target.removeEventListener("animationend", handleIframe);
};

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const [headerButtons, headerNav] = header.children;
  const centeredImg = document.querySelector(".hero__img--center");
  const modalChangingElements = [
    document.querySelector(".streaming__border"),
    document.querySelector(".modal__btn"),
  ];

  headerNav.addEventListener("click", handleNav);
  headerButtons.addEventListener("click", handleButtons);
  centeredImg.addEventListener("animationend", handleIframe);
  modalChangingElements.forEach((el) => {
    el.addEventListener("click", handleIframe);
  });
});
