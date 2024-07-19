<<<<<<< HEAD
import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handClearButton, handleButtonPress, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

// funcionalidade dos botões
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handClearButton)
 //controle de teclas precionadas
 document.getElementById("input").addEventListener("keydown",handleTyping)
// mensagem de erro
document.getElementById("equal").addEventListener("click", calculate)
// botao de copy
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard )
//darkmode - lightmode 
=======
import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handClearButton, handleButtonPress, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

// funcionalidade dos botões
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handClearButton)
 //controle de teclas precionadas
 document.getElementById("input").addEventListener("keydown",handleTyping)
// mensagem de erro
document.getElementById("equal").addEventListener("click", calculate)
// botao de copy
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard )
//darkmode - lightmode 
>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)