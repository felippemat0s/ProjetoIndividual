function voltar_quizzC() {
    window.location.href='interativo.html';
}

function ir_home() {
    window.location.href='index.html';
} 

function ir_chart() {
    window.location.href='dashboard.html';
}
function ir_quizz() {
    window.location.href='interativo.html';
}

const perguntas = [
    {
        titulo: "Qual é o seu passatempo favorito?",
        alternativas: [
            { descricao: "Ler e estudar", personagem: "Rei", ponto: 1 },
            { descricao: "Praticar esportes", personagem: "Asuka", ponto: 1 },
            { descricao: "Ouvir música", personagem: "Shinji", ponto: 1 },
            { descricao: "Passear e explorar novos lugares", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Qual é sua principal qualidade?",
        alternativas: [
            { descricao: "Empatia", personagem: "Shinji", ponto: 1 },
            { descricao: "Confiança", personagem: "Asuka", ponto: 1 },
            { descricao: "Sabedoria", personagem: "Rei", ponto: 1 },
            { descricao: "Gentileza", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Qual cenário você prefere?",
        alternativas: [
            { descricao: "Um jardim tranquilo", personagem: "Rei", ponto: 1 },
            { descricao: "Uma montanha desafiadora", personagem: "Asuka", ponto: 1 },
            { descricao: "Um quarto aconchegante", personagem: "Shinji", ponto: 1 },
            { descricao: "Uma praia deserta", personagem: "Kaworu", ponto: 1 }
        ]
    },
];

let indiceQuestaoAtual = 0; 
let pontos = {
    Shinji: 0,
    Rei: 0,
    Asuka: 0,
    Kaworu: 0
};

const botaoQuizzPerso = document.getElementById("botaoQuizzPerso");
const quizzTodo = document.getElementById("quizzTodo");
const pergunta = document.getElementById("pergunta");
const resposta1 = document.getElementById("resposta1");
const resposta2 = document.getElementById("resposta2");
const resposta3 = document.getElementById("resposta3");
const resposta4 = document.getElementById("resposta4");
const resultado = document.getElementById("resultado");

function exibirPerguntas() {
    botaoQuizzPerso.style.display = "none"; 
    quizzTodo.style.display = "block"; 

    mostrarPergunta();
}

function mostrarPergunta() {
    if (indiceQuestaoAtual < perguntas.length) { 
        const perguntaAtual = perguntas[indiceQuestaoAtual];
        pergunta.innerText = perguntaAtual.titulo; 

        resposta1.innerText = perguntaAtual.alternativas[0].descricao;
        resposta2.innerText = perguntaAtual.alternativas[1].descricao;
        resposta3.innerText = perguntaAtual.alternativas[2].descricao;
        resposta4.innerText = perguntaAtual.alternativas[3].descricao;

        resposta1.onclick = function() {
            processarResposta(perguntaAtual.alternativas[0]);
        };
        resposta2.onclick = function() {
            processarResposta(perguntaAtual.alternativas[1]);
        };
        resposta3.onclick = function() {
            processarResposta(perguntaAtual.alternativas[2]);
        };
        resposta4.onclick = function() {
            processarResposta(perguntaAtual.alternativas[3]);
        };
    }
}

function processarResposta(opcaoSelecionada) {
    pontos[opcaoSelecionada.personagem]++; 

    if (indiceQuestaoAtual === perguntas.length - 1) {
        exibirResultado(); 
    } else {
        indiceQuestaoAtual++; 
        mostrarPergunta(); 
    }
}

function exibirResultado() {
    var personagemMaisVotado = '';
    var maxPontos = 0;
    var resultado1 = document.getElementById("resultado1");
    var resultado2 = document.getElementById("resultado2");
    var resultado3 = document.getElementById("resultado3");
    var resultado4 = document.getElementById("resultado4");

    document.getElementById('quizzTodo').style.display = "none"

    for (var personagem in pontos) {
        if (pontos[personagem] > maxPontos) {
            maxPontos = pontos[personagem];
            personagemMaisVotado = personagem;
        }
    }

    if (personagemMaisVotado == 'Shinji') {

        resultado1.innerHTML = `            
        <h1>Você se identifica mais com: Shinji Ikari</h1>
        <div class="imagem1"></div>`;
        document.getElementById('resultado1').style.display = "block"

    } else if (personagemMaisVotado == 'Rei') {

        resultado2.innerHTML = `
        <h1>Você se identifica mais com: Rei Ayanami</h1>
        <div class="imagem2"></div>
        <div class="texto2">Rei é estranha.</div>`;
        document.getElementById('resultado2').style.display = "block"

    } else if (personagemMaisVotado == 'Kaworu') {

        resultado3.innerHTML = `
        <h1>Você se identifica mais com: Kaworu Nagisa</h1>
        <div class="imagem3"></div>`;
        document.getElementById('resultado3').style.display = "block"

    } else {
        resultado4.innerHTML = `
        <h1>Você se identifica mais com: Asuka Langley</h1>
        <div class="imagem4"></div>
        <div class="texto2">Asuka é doida.</div>`;
        document.getElementById('resultado4').style.display = "block"

    }
}