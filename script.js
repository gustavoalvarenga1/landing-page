let contador = 1
document.getElementById("radio1").checked = true

setInterval(function () {
  proximaImagem()
}, 3500)

function proximaImagem() {
  contador++
  if (contador > 4) {
    contador = 1
  }

  document.getElementById("radio" + contador).checked = true
}
