'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const headerAnchors = document.querySelectorAll('.header__a')

  const handleHeaderAnchors = event => {
    const { target } = event

    headerAnchors.forEach(anchor => {
      anchor.classList.remove('header__a--active')
    })

    target.classList.add('header__a--active')
  }

  headerAnchors.forEach(anchor => {
    anchor.addEventListener('pointerdown', handleHeaderAnchors)
  })
})
