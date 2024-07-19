<<<<<<< HEAD
import calculate from "./calculate.js"

const input = document.querySelector("#input")

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
  }

export function handClearButton() {
    input.value = ""
    input.focus()
  }

export function handleTyping(ev) {
    ev.preventDefault()
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] //teclas permitidas
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
      calculate()
    }
=======
import calculate from "./calculate.js"

const input = document.querySelector("#input")

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
  }

export function handClearButton() {
    input.value = ""
    input.focus()
  }

export function handleTyping(ev) {
    ev.preventDefault()
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] //teclas permitidas
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
      calculate()
    }
>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
  }