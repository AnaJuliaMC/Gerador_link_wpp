const BntLink = document.getElementById('bntLink');
const BntSend = document.getElementById('bntSend');
const link = document.getElementById("link");
const mensagem = document.getElementById("mensagem");
const numero = document.getElementById("numero")

BntLink.addEventListener("click", handleBtnLink)
BntSend.addEventListener("click", handleBtnSend)
link.addEventListener("click", handleLink)
numero.addEventListener("click", handleInput)
numero.addEventListener('input', ()=> {
    numero.value = mascara(numero.value);
    validacao()

})


function handleBtnLink(){
    let numeroTel = numero.value.replace(/\D/g, '')
    var TelLink = 'https://wa.me/55'+numeroTel
    link.innerText = TelLink
    link.style.border = "1px solid black"
    link.style.borderRadius = "5px"
    mensagem.textContent = "Clique no link para copiar"
}

function handleBtnSend(){
    let numeroTel = numero.value.replace(/\D/g, '')
    var TelLink = 'https://wa.me/55'+numeroTel
    var janela = window.open(TelLink, '_blank');
    janela.focus();
  }

function handleLink(){
    navigator.clipboard.writeText(link.textContent)
    .then(() => mensagem.textContent = "Texto copiado com sucesso!")
    .catch(err => console.error("Falha ao copiar o texto:", err));
}

function validacao(){
    const numValido = numero.value.length === 15
    if (numValido){
        BntLink.disabled = false
        BntSend.disabled = false
        numero.style.color = "green"
    }else{
        BntLink.disabled = true
        BntSend.disabled = true
        numero.style.color = "black"
    }
}

function mascara(){
    let numeroTel = numero.value.replace(/\D/g, '')
    numeroTel = numeroTel.replace(/\D/g, '');
    numeroTel = numeroTel.slice(0,11);
    numeroTel = numeroTel.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')
    return numeroTel;

}

function handleInput(){
    mensagem.textContent = ""
    link.style.border = "0"
    link.innerText = ""

}

BntLink.disabled = true
BntSend.disabled = true