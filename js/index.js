addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal')
  const iframe = modal.querySelector('.modal__iframe')

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

  modal.addEventListener('click', () => {
    modal.style.display = 'none'
    iframe.src = iframe.src
  })
})