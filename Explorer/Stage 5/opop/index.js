import { Timer } from './timer.js'

import resetButtons from './option.js'

//DOM

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonMute = document.querySelector('.mute')
const buttonUnmute = document.querySelector('.unmute')
const buttonStop = document.querySelector('.stop')
const buttonSets = document.querySelector('.sets')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let minutes = Number(displayMinutes.textContent)
let timerTimeOut

const conftimer = {
  displayMinutes,
  displaySeconds,
  resetButtons,
  timerTimeOut
}
const timer = Timer(conftimer)

// Event-driven (direcionada a eventos)
// programação imperativa
// callback

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSets.classList.add('hide')
  buttonStop.classList.remove('hide')

  timer.countDown()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetButtons()
  timer.resetTimer(minutes, 0)
})

buttonUnmute.addEventListener('click', function () {
  buttonMute.classList.remove('hide')
  buttonUnmute.classList.add('hide')
})

buttonMute.addEventListener('click', function () {
  buttonMute.classList.add('hide')
  buttonUnmute.classList.remove('hide')
})

buttonSets.addEventListener('click', function () {
  let newMinutes = prompt('Quantos minutos?')

  if (!newMinutes) {
    timer.resetTimer()
    return
  }

  minutes = newMinutes
  displayTimerUpdate(minutes, 0)
})
