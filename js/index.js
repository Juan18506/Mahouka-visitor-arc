addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal')
  const iframe = modal.querySelector('.modal__iframe')
  const header = document.querySelector('.header')
  const openBtn = header.querySelector('.header__open')
  const closeBtn = header.querySelector('.header__close')
  const nav = header.querySelector('.header__nav')

  document.querySelector('.ppal__img--center').addEventListener('animationend', () => {
    modal.style.display = 'block'
  })
  
  document.querySelector('.streaming__border').addEventListener('click', () => {
    modal.style.display = 'block'
  })

  document.querySelector('.modal__close').addEventListener('click', () => {
    modal.style.display = 'none'
    iframe.src = iframe.src
  })

  openBtn.addEventListener('click', () => {
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    nav.style.display = 'block'
  })

  closeBtn.addEventListener('click', () => {
    nav.style.display = 'none'
    closeBtn.style.display = 'none'
    openBtn.style.display = 'flex'
  })

  modal.addEventListener('click', () => {
    modal.style.display = 'none'
    iframe.src = iframe.src
  })
})