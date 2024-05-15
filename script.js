const BntLink = document.getElementById('bntLink');
const BntSend = document.getElementById('bntSend');
const link = document.getElementById("link");
const mensagem = document.getElementById("mensagem");
const numero = document.getElementById("numero")

BntLink.addEventListener("click", handleBtnLink)
BntSend.addEventListener("click", handleBtnSend)
link.addEventListener("click", handleLink)

function handleBtnLink(){
    var TelLink = 'https://wa.me/55'+numero.value
    link.innerText = TelLink
    link.style.border = "1px solid black"
    link.style.borderRadius = "5px"
    mensagem.textContent = "Clique no link para copiar"
}

function handleBtnSend(){
    var TelLink = 'https://wa.me/55'+numero.value
    var janela = window.open(TelLink, '_blank');
    janela.focus();
  }

function handleLink(){
    navigator.clipboard.writeText(link.textContent)
    .then(() => mensagem.textContent = "Texto copiado com sucesso!")
    .catch(err => console.error("Falha ao copiar o texto:", err));
}
