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

  const handleHeaderAnchor = (anchor) => {
    headerAnchors.forEach((a) => {
      a.classList.remove('header__a--active')
    })

    anchor.classList.add('header__a--active')
  }
  const handleHeaderButtons = () => {  
    headerNav.classList.toggle('header__nav--inactive')
    btnOpen.classList.toggle('buttons__btn--inactive')
    btnClose.classList.toggle('buttons__btn--inactive')
  }
  const handleIframe = () => {
    if (modal.classList.contains('modal--inactive')) {
      modal.classList.remove('modal--inactive')
    } else {
      modal.classList.add('modal--inactive')
      iframe.src = iframe.src
    }

    centeredImg.removeEventListener('animationend', handleIframe)
  }

  centeredImg.addEventListener('animationend', handleIframe)

  headerNav.addEventListener('click', (event) => {
    const { target } = event

    if (!target.classList.contains('header__a')) {
      return
    }

    handleHeaderAnchor(target)
  })

  headerButtons.addEventListener('click', handleHeaderButtons)

  const modalChangingElements = [streamingIframe, modalBtn]
  modalChangingElements.forEach((e) =>
    e.addEventListener('click', handleIframe)
  )
})
