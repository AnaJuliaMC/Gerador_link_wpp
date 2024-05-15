const BntLink = document.getElementById('bntLink');
const BntSend = document.getElementById('bntSend');
let link = document.getElementById("link");
const mensagem = document.querySelector("mensagem");
const numero = document.getElementById("numero")

BntLink.addEventListener("click", handleBtnLink)
BntSend.addEventListener("click", handleBtnSend)

function handleBtnLink(){
    var TelLink = 'https://wa.me/55'+numero.value
    link.innerText = TelLink
    console.log()

   

}

function handleBtnSend(){
    var TelLink = 'https://wa.me/55'+numero.value
    var janela = window.open(TelLink, '_blank');
    janela.focus();
  }


