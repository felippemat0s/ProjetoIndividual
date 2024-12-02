function voltar_quizzC() {

    window.location.href='interativo.html'
    
    }

    function ir_home() {

        window.location.href='index.html'
        sessionStorage.clear();
        } 
        
        function ir_chart() {
        
        window.location.href='dashboard.html'
        
        }
        function ir_quizz() {
            window.location.href='interativo.html';
        }

const listaDeQuestoes = [

    {
        pergunta: "Qual o ano de lançamento de Neon Genesis Evangelion?",
        alternativaA: "1997",
        alternativaB: "1995",
        alternativaC: "1999",   
        alternativaD: "1990",
        alternativaCorreta: "alternativaB"
    },

    {
        pergunta: "Além de Shinji Ikari, quem foi o primeiro personagem a aparecer?",
        alternativaA: "Gendo Ikari",
        alternativaB: "Asuka Langley",
        alternativaC: "Rei Ayanami",
        alternativaD: "Misato Katsuragi",
        alternativaCorreta: "alternativaD"
    },

    {
        pergunta: "No final do mangá, a Terra é...",
        alternativaA: "...dissolvida em LCL.",
        alternativaB: "...refeita pelo Shinji.",
        alternativaC: "...destruida.",
        alternativaD: "...infestada por anjos.",
        alternativaCorreta: "alternativaB"
    } ,

    {
        pergunta: "Qual o nome do primeiro anjo a atacar Neo-Tokyo 3?",
        alternativaA: "Sachiel",
        alternativaB: "Ramiel",
        alternativaC: "Adão",
        alternativaD: "Israfel",
        alternativaCorreta: "alternativaA"
    } ,

    {
        pergunta: "O criador de Evangelion, Hideaki Anno, antes de se tornar um grande diretor, foi um aprendiz de qual outro grande diretor?",
        alternativaA: "Teruki Mikami",
        alternativaB: "Hideo Kojima",
        alternativaC: "Hideo Miyazaki",
        alternativaD: "Naoki Urasawa",
        alternativaCorreta: "alternativaC"
    } ,

    {
        pergunta: "Durante os acontecimentos de Evangelion 2.2, o personagem Kaworu aparece repentinamente no ato final, qual unidade EVA ele pilotava?",
        alternativaA: "Unidade 01",
        alternativaB: "Unidade 06",
        alternativaC: "Unidade 05",
        alternativaD: "Unidade 07",
        alternativaCorreta: "alternativaB"
    } ,

    {
        pergunta: "Ao decorrer do episódio 8 de Neon Genesis Evangelion, conhecemos o personagem Ryoji Kaji que transportava consigo uma espécie de embrião, qual o nome daquele ser?",
        alternativaA: "Shinji Ikari",
        alternativaB: "Sachiel",
        alternativaC: "Lilith",
        alternativaD: "Adão",
        alternativaCorreta: "alternativaD"
    } ,

    {
        pergunta: "No filme de 1997, The End of Evangelion, a fusão de dois seres ocasionou o Terceiro Impacto, quem são eles?",
        alternativaA: "Adão e Lilith",
        alternativaB: "Shinji e Rei",
        alternativaC: "Shinji e Kaworu",
        alternativaD: "Kaworu e Rei",
        alternativaCorreta: "alternativaA"
    } ,

    {
        pergunta: "No episódio 8 de Neon Genesis Evangelion somos apresentados a uma garota peculiar, Asuka Langley Soryu, qual a unidade que ela pilota?",
        alternativaA: "Unidade 03",
        alternativaB: "Unidade 02",
        alternativaC: "Unidade 01",
        alternativaD: "Unidade 00",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "Ao fim de Neon Genesis Evangelion, Shinji diz uma frase bastante inspiradora para todos os jovens que estavam lhe assistindo e vendo sua superação, qual é essa frase?",
        alternativaA: "Ao meu pai, obrigado. À minha mãe, adeus. E a todas as crianças... parabéns!",
        alternativaB: "Ao meu amigo, obrigado. À minha solidão, adeus. E a todos que entenderam o silêncio... parabéns!",
        alternativaC: "Ao meu futuro, obrigado. À minha perda, adeus. E a todos que se encontraram... parabéns!",
        alternativaD: "Ao meu amor, obrigado. À minha dor, adeus. E a todos que compreenderam o caminho... parabéns!",
        alternativaCorreta: "alternativaA"
    }

]

// variáveis globais    
let numeroDaQuestaoAtual = 0
let pontuacaoFinal = 0
let tentativaIncorreta = 0
let certas = 0
let erradas = 0
let quantidadeDeQuestoes = listaDeQuestoes.length
// let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

function onloadEsconder() {
    document.getElementById('pontuacao').style.display = "none"
    document.getElementById('jogo').style.display = "none"
    
}

function iniciarQuiz() {
    document.getElementById('botaoQuizz').style.display = "none"
   document.getElementById('jogo').style.display = "flex"
    document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

    preencherHTMLcomQuestaoAtual(0)

    btnSubmeter.disabled = false
    btnProx.disabled = true
    // btnConcluir.disabled = true
    btnTentarNovamente.disabled = true
}

function preencherHTMLcomQuestaoAtual(index) {
    habilitarAlternativas(true)
    const questaoAtual = listaDeQuestoes[index]
    numeroDaQuestaoAtual = index
    console.log("questaoAtual")
    console.log(questaoAtual)
    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function submeter() {
    const options = document.getElementsByName("option"); // recupera alternativas no html
    var confirmar = document.getElementById('btnSubmeter')

    let hasChecked = false
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true
            break
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.")
    } else {
        btnSubmeter.disabled = true
        btnProx.disabled = false
        confirmar.classList.add('btnSubmeter')

        habilitarAlternativas(false)

        checarResposta()
    }
}

function habilitarAlternativas(trueOrFalse) {
    let opcaoEscolhida = trueOrFalse ? false : true

    primeiraOpcao.disabled = opcaoEscolhida
    segundaOpcao.disabled = opcaoEscolhida
    terceiraOpcao.disabled = opcaoEscolhida
    quartaOpcao.disabled = opcaoEscolhida

}

function avancar() {
    btnProx.disabled = true
    btnSubmeter.disabled = false
    var confirmar = document.getElementById('btnSubmeter')

    desmarcarRadioButtons()

    if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        confirmar.classList.remove('btnSubmeter')
    } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
        alert("Cuidado! Essa é a última questão.")
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        confirmar.classList.remove('btnSubmeter')
    } else {
        finalizarJogo()
    }
    limparCoresBackgroundOpcoes()
}

function tentarNovamente() {
    // atualiza a página
    window.location.reload()
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
    const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

    const options = document.getElementsByName("option"); // recupera alternativas no html

    let alternativaCorreta = null // variável para armazenar a alternativa correta

    options.forEach((option) => {
        if (option.value === respostaQuestaoAtual) {
            console.log("alternativaCorreta está no componente: " + alternativaCorreta)
            alternativaCorreta = option.labels[0].id
        }
    })

    // verifica se resposta assinalada é correta
    options.forEach((option) => {
        if (option.checked === true && option.value === respostaQuestaoAtual) {
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            pontuacaoFinal++
            certas++
            document.getElementById("spanCertas").innerHTML = certas
            numeroDaQuestaoAtual++
        } else if (option.checked && option.value !== respostaQuestaoAtual) {
            const wrongLabelId = option.labels[0].id

            document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            tentativaIncorreta++
            erradas++
            document.getElementById("spanErradas").innerHTML = erradas
            numeroDaQuestaoAtual++
        }
    })
}

function limparCoresBackgroundOpcoes() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
        document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
    })
}

function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function finalizarJogo() {
    let textoParaMensagemFinal = null
    let classComCoresParaMensagemFinal = null
    const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes
    if (porcentagemFinalDeAcertos <= 0.3) {
        textoParaMensagemFinal = "Você trabalha para a SEELE?"
        classComCoresParaMensagemFinal = "text-danger-with-bg"
        
    }
    else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
        textoParaMensagemFinal = "Quase um piloto!"
        classComCoresParaMensagemFinal = "text-warning-with-bg"
    }
    else if (porcentagemFinalDeAcertos >= 0.9) {
        textoParaMensagemFinal = "Uau, você com certeza entendeu o final de Evangelion!"
        classComCoresParaMensagemFinal = "text-success-with-bg"
    }
    document.getElementById('pontuacao').style.display = "flex"
    document.getElementById('jogo').style.display = "none"
    textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos)*100) + "% das questões."
    console.log(pontuacaoFinal)


    document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
    document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal) 
    document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal 

    btnProx.disabled = true
    btnSubmeter.disabled = true
    // btnConcluir.disabled = true
    btnTentarNovamente.disabled = false

    fetch("quizz/conhecimento", {
        method: 'POST',  
        body: JSON.stringify({
            qtdAcertos: pontuacaoFinal, qtdErros: 10-pontuacaoFinal, idUsuario: sessionStorage.ID_USUARIO
        }),  headers: { "Content-type": "application/json"}
    }).then((resposta)=>{
        if(resposta.ok){
           console.log('Deu certo')
        } else {
        texto.innerHTML= 'Houve um erro.'
        }
    }).catch((erro)=>{
        console.log(erro)
    })

}

