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
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const messageTextarea = document.querySelector("#message");

form.addEventListener("#submit", (event) =>{
  event.preventDefault()

  //Verifica se o nome está vazio
  if(nameInput.value === ""){
    alert("Por favor, preencha seu nome!")
    return
  }
  //Verificar email
  if(emailInput.value === ""){
    alert("Por favor, preencha o seu email!")
    return
  }
  //Verifica telefone
  if (telefoneInput.value === "") {
  alert("Por favor, preencha o seu telefone!")
  return
  }
  //Verifica mensagem
  if (messageTextarea.value === "") {
  alert("Por favor, digite a mensagem!")
  return  
  } 
  //Envia todos os campos
  form.submit()

});




