function entrar() {

    var email = input_email.value
    var senha = input_senha.value
    

    if (email == "" || senha == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "Preencha todos os campos.";

        setTimeout(sumirMensagem, 3000);
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    fetch("usuarios/autenticar", {
        method: 'POST',  
        body: JSON.stringify({
            email, senha
        }),  headers: { "Content-type": "application/json"}
    }).then((resposta)=>{
        if(resposta.ok){
            resposta.json().then((dados)=>{
                sessionStorage.ID_USUARIO=dados[0].idUsuario
                sessionStorage.NOME=dados[0].nome
                sessionStorage.EMAIL=dados[0].email
                location.replace('/interativo.html')
            })
        } else {
        texto.innerHTML= 'Email ou senha inválidos.'
        }
    }).catch((erro)=>{
        console.log(erro)
    })
    }