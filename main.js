const homeButton = getEl('#btn-home')
const bookButton = getEl('#btn-bookmark')
const createButton = getEl('#btn-create')

const indexPage = getEl('#questions')
const bookmarkPage = getEl('#bookmarks')
const createPage = getEl('#create')

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

function hideAll() {
  const mainElArray = document.querySelectorAll('.main')
  mainElArray.forEach(mainEl => {
    mainEl.classList.add('main--hidden')
  })
}

homeButton.addEventListener('click', () => {
  hideAll()
  indexPage.classList.remove('main--hidden')
})

bookButton.addEventListener('click', () => {
  hideAll()
  bookmarkPage.classList.remove('main--hidden')
})

createButton.addEventListener('click', () => {
  hideAll()
  createPage.classList.remove('main--hidden')
})

// show and hide answer

const cardButton = document.querySelectorAll('.card__button')
cardButton.forEach(function (show) {
  show.addEventListener('click', () => {
    show.nextElementSibling.classList.toggle('card__answer--hidden')
  })
})

// sign bookmark

const allbookElements = document.querySelectorAll('.card__bookmark')

allbookElements.forEach(function (si) {
  si.addEventListener('click', () => {
    si.classList.toggle('card__bookmark--unchecked')
  })
})

// store bookmarks only

// clear all input-Elements in a Form

const buttonClear = document.querySelector('.btn__submit')

buttonClear.addEventListener('click', () => {
  document.querySelector('.form').reset()
})

// Darkmode functions //

function addDarkModeMain() {
  const mainSite = document.querySelectorAll('.main')
  mainSite.forEach(function (maind) {
    maind.classList.toggle('darkmodemain')
  })
}

function addDarkModeCard() {
  const cardSite = document.querySelectorAll('.card')
  cardSite.forEach(function (maind) {
    maind.classList.toggle('card__darkmode')
  })
}

function addDarkModeBookmark() {
  const BookmarkSign = document.querySelectorAll('.card__bookmark')
  BookmarkSign.forEach(function (maind) {
    maind.classList.toggle('bookmark__darkmode')
  })
}

function addDarkModeShowAnswer() {
  const ShowAnswerbtn = document.querySelectorAll('.card__button')
  ShowAnswerbtn.forEach(function (maind) {
    maind.classList.toggle('card__button--dark')
  })
}

function addDarkModeHeader() {
  const headerDark = document.querySelectorAll('.header__container')
  headerDark.forEach(function (maind) {
    maind.classList.toggle('header__dark')
  })
}

function addDarkModeFooter() {
  const footerDark = document.querySelectorAll('.footer')
  footerDark.forEach(function (maind) {
    maind.classList.toggle('footer__darkmode')
  })
}

function addDarkModeNavFooter() {
  const footerNavDark = document.querySelectorAll('.nav__buttons')
  footerNavDark.forEach(function (maind) {
    maind.classList.toggle('nav__darkmode')
  })
}

function addDarkModeTags() {
  const tagsDark = document.querySelectorAll('.tags__item')
  tagsDark.forEach(function (maind) {
    maind.classList.toggle('tags__item--dark')
  })
}

function addDarkModeForm() {
  const formDark = document.querySelectorAll('.form')
  formDark.forEach(function (maind) {
    maind.classList.toggle('form__dark')
  })
}

function darkFunctionBundle() {
  addDarkModeMain()
  addDarkModeCard()
  addDarkModeBookmark()
  addDarkModeShowAnswer()
  addDarkModeHeader()
  addDarkModeFooter()
  addDarkModeNavFooter()
  addDarkModeTags()
  addDarkModeForm()
}
