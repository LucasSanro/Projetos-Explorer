export function Timer({
  displayMinutes,
  displaySeconds,
  resetButtons,
  timerTimeOut
}) {
  function resetTimer() {
    clearTimeout(timerTimeOut)
    displayTimerUpdate(minutes, 0)
  }
  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)

      displaySeconds.textContent = '00'

      if (minutes <= 0) {
        resetButtons()

        return
      }

      if (seconds <= 0) {
        seconds = 2

        --minutes
      }

      displayTimerUpdate(minutes, seconds - 1)

      countDown()
    }, 1000)
  }

  function displayTimerUpdate(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }
  return {
    countDown,
    resetTimer,
    resetButtons
  }
}
