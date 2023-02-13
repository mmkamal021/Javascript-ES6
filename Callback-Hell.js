// Javascript Nuggets - Callback Hell

// after 1s first red
// after 3s second blue
// after 2s third green

const first = document.querySelector('first')
const second = document.querySelector('second')
const third = document.querySelector('third')

const btn = document.querySelector('.btn')
/*
btn.addEventListener('click', () => {
  setTimeout(() => {
    first.getElementsByClassName.color = 'red'
  }, 1000)

  setTimeout(() => {
    first.getElementsByClassName.color = 'blue'
  }, 3000)

  setTimeout(() => {
    first.getElementsByClassName.color = 'green'
  }, 2000)
})
*/
btn.addEventListener('click', () => {
  setTimeout(() => {
    first.getElementsByClassName.color = 'red'
    setTimeout(() => {
      first.getElementsByClassName.color = 'blue'
      setTimeout(() => {
        first.getElementsByClassName.color = 'green'
      }, 2000)
    }, 3000)
  }, 5000)
})
