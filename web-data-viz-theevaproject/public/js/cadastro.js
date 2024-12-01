function cadastrar() {

var nome = input_nome.value
var email = input_email.value
var senha = input_senha.value
var confirmacaosenha = confirmacao_senha_input.value
var telefone = input_telefone.value
var naoMinusculo = senha == senha.toLowerCase(); 
      var naoMaiusculo = senha == senha.toUpperCase();
      var naoEspecial = !senha.includes('@') && !senha.includes('!') && 
                      !senha.includes('?') && !senha.includes('#') && 
                      !senha.includes('$') && !senha.includes('%') && 
                      !senha.includes('&') && !senha.includes('*') && 
                      !senha.includes('.');
      var naoNumero = !senha.includes('1') && !senha.includes('2') && 
                      !senha.includes('2') && !senha.includes('3') && 
                      !senha.includes('4') && !senha.includes('5') &&
                      !senha.includes('6') && !senha.includes('7') &&
                      !senha.includes('8') && !senha.includes('9')
                      !senha.includes('0');

                      if (
                        nome== "" ||
                        telefone == "" || 
                        email == "" ||
                        senha == "" ||
                        confirmacaosenha == ""
                      ) {
                        cardErro.style.display = "block";
                        texto.innerHTML =
                          "Preencha todos os campos.";
                        
                        setTimeout(sumirMensagem, 3000);
                        finalizarAguardar();
                        return false;

                      } else if (nome.length < 3) {
                        cardErro.style.display = "block";
                        texto.innerHTML =
                          "Insira um nome válido.";
                          setTimeout(sumirMensagem, 3000);
                          finalizarAguardar();
                          return false;

                        } else if (telefone.length < 10) {
                          cardErro.style.display = "block";
                          texto.innerHTML =
                            "Insira um telefone válido.";
                          setTimeout(sumirMensagem, 3000);
                          finalizarAguardar();
                          return false;

                        } else if (email.includes('@') == false) {
                          cardErro.style.display = "block";
                          texto.innerHTML =
                            "Insira um email válido.";
                          setTimeout(sumirMensagem, 3000);
                          finalizarAguardar();
                          return false;

                        } else if (senha.length <= 8 || naoMaiusculo || naoMinusculo || naoEspecial || naoNumero) {
                          cardErro.style.display = "block";
                          texto.innerHTML =
                            "A senha deve conter ao menos 8 caracteres, 1 número e 1 caractere especial, 1 letra maiúscula e 1 minúscula.";
                          setTimeout(sumirMensagem, 3000);
                          finalizarAguardar();
                          return false;

                        } else if (!email.includes('@') || !email.includes('.')) {
                          cardErro.style.display = "block";
                          texto.innerHTML =
                            "Sua email deve conter arroba e ponto final.";
                          setTimeout(sumirMensagem, 3000);
                          finalizarAguardar();
                          return false;

                        } else if (confirmacaosenha != senha) {
                          cardErro.style.display = "block";
                          texto.innerHTML =
                            "As senhas não coincidem.";
                    
                          setTimeout(sumirMensagem, 3000);
                          finalizarAguardar();
                          return false;
                        } else {
                          setInterval(sumirMensagem, 3000);
                        }                  


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