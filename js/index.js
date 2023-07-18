addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal')

  document.getElementById('img-center').addEventListener('animationend', () => {
    modal.style.display = 'block'
  })
  
  document.getElementById('video').addEventListener('click', () => {
    modal.style.display = 'block'
  })

  document.getElementById('close_btn').addEventListener('click', () => {
    modal.style.display = 'none'

    const iframe = document.getElementById('modal__iframe')
    iframe.src = iframe.src
  })
})