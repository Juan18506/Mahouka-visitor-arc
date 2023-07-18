addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal')
  const iframe = document.getElementById('modal__iframe')

  document.getElementById('img-center').addEventListener('animationend', () => {
    modal.style.display = 'block'
  })
  
  document.getElementById('video').addEventListener('click', () => {
    modal.style.display = 'block'
  })

  document.getElementById('close_btn').addEventListener('click', () => {
    modal.style.display = 'none'
    iframe.src = iframe.src
  })

  modal.addEventListener('click', () => {
    modal.style.display = 'none'
    iframe.src = iframe.src
  })
})