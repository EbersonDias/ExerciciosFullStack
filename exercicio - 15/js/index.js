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
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)