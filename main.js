// Button Variables
const homeButton = document.querySelector('#btn-home')
const bookButton = document.querySelector('#btn-bookmark')
const createButton = document.querySelector('#btn-create')

// Page Variables
const indexPage = document.querySelector('#questions')
const bookmarkPage = document.querySelector('#bookmarks')
const createPage = document.querySelector('#create')

// Functions

homeButton.addEventListener('click', () => {
  indexPage.classList.remove('main--hidden')
  bookmarkPage.classList.add('main--hidden')
  createPage.classList.add('main--hidden')
})

bookButton.addEventListener('click', () => {
  indexPage.classList.add('main--hidden')
  bookmarkPage.classList.remove('main--hidden')
  createPage.classList.add('main--hidden')
})

createButton.addEventListener('click', () => {
  indexPage.classList.add('main--hidden')
  bookmarkPage.classList.add('main--hidden')
  createPage.classList.remove('main--hidden')
})
