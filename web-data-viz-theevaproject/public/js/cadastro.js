function cadastrar() {

var nome = input_nome.value
var email = input_email.value
var senha = input_senha.value
var telefone = input_telefone.value

fetch("usuarios/cadastrar", {
    method: 'POST',  
    body: JSON.stringify({
        nome, email, senha, telefone
    }),  headers: { "Content-type": "application/json"}
}).then((resposta)=>{
    if(resposta.ok){
        location.replace('/login.html')
    } else {
    texto.innerHTML= 'Houve um erro ao realizar o cadastro.'
    }
}).catch((erro)=>{
    console.log(erro)
})
}