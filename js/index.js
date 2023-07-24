'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const headerAnchors = document.querySelectorAll('.header__a')
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelector('.modal__btn')
  const iframe = modal.querySelector('.modal__iframe')
  const streamingIframe = document.querySelector('.streaming__border')

  const handleHeader = (event) => {
    const { target } = event

    headerAnchors.forEach((anchor) => {
      anchor.classList.remove('header__a--active')
    })

    target.classList.add('header__a--active')
  }
  const handleIframes = () => {
    if (modal.classList.contains('modal--inactive')) {
      modal.classList.remove('modal--inactive')
    } else {
      modal.classList.add('modal--inactive')
      iframe.src = iframe.src
    }
  }

  headerAnchors.forEach((anchor) => {
    anchor.addEventListener('click', handleHeader)
  })

  const modalChangingElements = [streamingIframe, modalBtn]
  modalChangingElements.forEach((e) =>
    e.addEventListener('click', handleIframes)
  )
})
