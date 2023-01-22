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

function validar() {
  if (document.getElementById("name").value === "") {
    alert("Por favor, preencha seu nome!")
  }
  //Verificar email
  if (document.getElementById("email").value === "") {
    alert("Por favor, preencha o seu email!")
  }
  //Verifica telefone
  if (document.getElementById("telefone").value === "") {
    alert("Por favor, preencha o seu telefone!")
  }
  //Verifica mensagem
  if (document.getElementById("mensagem").value === "") {
    alert("Por favor, digite a mensagem!")
  }
}
  



