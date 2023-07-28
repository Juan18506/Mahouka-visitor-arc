'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')
  const headerNav = header.querySelector('.header__nav')
  const headerAnchors = headerNav.querySelectorAll('.header__a')
  const headerButtons = header.querySelector('.header__buttons')
  const btnClose = headerButtons.querySelector('.buttons__btn--close')
  const btnOpen = headerButtons.querySelector('.buttons__btn--open')
  const centeredImg = document.querySelector('.hero__img--center')
  const modal = document.querySelector('.modal')
  const modalBtn = modal.querySelector('.modal__btn')
  const iframe = modal.querySelector('.modal__iframe')
  const streamingIframe = document.querySelector('.streaming__border')

  const handleHeaderAnchors = (event) => {
    const { target: anchor } = event

    headerAnchors.forEach((anchor) => {
      anchor.classList.remove('header__a--active')
    })

    anchor.classList.add('header__a--active')
  }
  const handleHeaderButtons = (event) => {
    const { target: btn } = event
  
    if (btn.classList.contains('buttons__btn--open')) {
      headerNav.classList.remove('header__nav--inactive')
      btnOpen.classList.add('buttons__btn--inactive')
      btnClose.classList.remove('buttons__btn--inactive')
    } else {
      headerNav.classList.add('header__nav--inactive')
      btnOpen.classList.remove('buttons__btn--inactive')
      btnClose.classList.add('buttons__btn--inactive')
    }
  }
  const handleIframe = () => {
    if (modal.classList.contains('modal--inactive')) {
      modal.classList.remove('modal--inactive')
    } else {
      modal.classList.add('modal--inactive')
      iframe.src = iframe.src
    }
  }

  centeredImg.addEventListener('animationend', handleIframe)

  headerAnchors.forEach((anchor) => {
    anchor.addEventListener('click', handleHeaderAnchors)
  })

  const headerButtonsArray = [btnOpen, btnClose]
  headerButtonsArray.forEach(btn => btn.addEventListener('click', handleHeaderButtons))

  const modalChangingElements = [streamingIframe, modalBtn]
  modalChangingElements.forEach((e) =>
    e.addEventListener('click', handleIframe)
  )
})
