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

var perguntas = [
    {
        titulo: "Qual é o seu maior medo?",
        alternativas: [
            { descricao: "Ficar sozinho", personagem: "Shinji", ponto: 1 },
            { descricao: "Falhar em algo importante", personagem: "Asuka", ponto: 1 },
            { descricao: "Não ser compreendido", personagem: "Rei", ponto: 1 },
            { descricao: "Perder alguém que amo", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Qual é o seu maior desejo?",
        alternativas: [
            { descricao: "Ser aceito por quem sou", personagem: "Shinji", ponto: 1 },
            { descricao: "Sempre me superar", personagem: "Asuka", ponto: 1 },
            { descricao: "Encontrar meu propósito", personagem: "Rei", ponto: 1 },
            { descricao: "Ajudar os outros a serem felizes", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Como você lida com conflitos?",
        alternativas: [
            { descricao: "Tento evitar", personagem: "Shinji", ponto: 1 },
            { descricao: "Enfrento e acabo com ele", personagem: "Asuka", ponto: 1 },
            { descricao: "Analiso tudo antes de agir", personagem: "Rei", ponto: 1 },
            { descricao: "Procuro acalmar as pessoas envolvidas", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Qual é o seu gênero de filme favorito?",
        alternativas: [
            { descricao: "Drama", personagem: "Shinji", ponto: 1 },
            { descricao: "Ação", personagem: "Asuka", ponto: 1 },
            { descricao: "Ficção científica", personagem: "Rei", ponto: 1 },
            { descricao: "Romance", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Como você prefere passar um fim de semana?",
        alternativas: [
            { descricao: "Refletindo e descansando", personagem: "Rei", ponto: 1 },
            { descricao: "Praticando algo novo", personagem: "Asuka", ponto: 1 },
            { descricao: "Relaxando em casa", personagem: "Shinji", ponto: 1 },
            { descricao: "Encontrando amigos", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Como você se descreveria em uma palavra?",
        alternativas: [
            { descricao: "Sensível", personagem: "Shinji", ponto: 1 },
            { descricao: "Determinado", personagem: "Asuka", ponto: 1 },
            { descricao: "Misterioso", personagem: "Rei", ponto: 1 },
            { descricao: "Gentil", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Se você pudesse ter um talento, qual seria?",
        alternativas: [
            { descricao: "Ser um grande líder", personagem: "Asuka", ponto: 1 },
            { descricao: "Compreender os sentimentos dos outros", personagem: "Shinji", ponto: 1 },
            { descricao: "Ter conhecimento ilimitado", personagem: "Rei", ponto: 1 },
            { descricao: "Inspirar as pessoas ao meu redor", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "O que mais te motiva?",
        alternativas: [
            { descricao: "Superar desafios", personagem: "Asuka", ponto: 1 },
            { descricao: "Encontrar paz interior", personagem: "Rei", ponto: 1 },
            { descricao: "Ser aceito pelas pessoas", personagem: "Shinji", ponto: 1 },
            { descricao: "Criar conexões profundas", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "Se você fosse um EVA, qual seria seu estilo de luta?",
        alternativas: [
            { descricao: "Defensivo e estratégico", personagem: "Rei", ponto: 1 },
            { descricao: "Agressivo e direto", personagem: "Asuka", ponto: 1 },
            { descricao: "Adaptável, dependendo da situação", personagem: "Shinji", ponto: 1 },
            { descricao: "Protegendo meus aliados", personagem: "Kaworu", ponto: 1 }
        ]
    },
    {
        titulo: "O que você mais valoriza em um amigo?",
        alternativas: [
            { descricao: "Empatia e compreensão", personagem: "Shinji", ponto: 1 },
            { descricao: "Coragem e determinação", personagem: "Asuka", ponto: 1 },
            { descricao: "Confiança e lealdade", personagem: "Rei", ponto: 1 },
            { descricao: "Bondade e apoio", personagem: "Kaworu", ponto: 1 }
        ]
    }
];


var indiceQuestaoAtual = 0; 
var pontos = {
    Shinji: 0,
    Rei: 0,
    Asuka: 0,
    Kaworu: 0
};

var botaoQuizzPerso = document.getElementById("botaoQuizzPerso");
var quizzTodo = document.getElementById("quizzTodo");
var pergunta = document.getElementById("pergunta");
var resposta1 = document.getElementById("resposta1");
var resposta2 = document.getElementById("resposta2");
var resposta3 = document.getElementById("resposta3");
var resposta4 = document.getElementById("resposta4");
var resultado = document.getElementById("resultado");

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
        <h1>Você se identifica mais com: Shinji</h1>
        <div class="imagem1"></div>
        <div class="texto2">Por você ter uma personalidade parecida com a do Shinji, 
        é provável que você passe muito tempo pensando sobre seu lugar no mundo. Você sente as coisas de forma bem intensa e, às vezes, fica difícil mostrar o que está dentro de você. 
        Assim como ele, você busca conexão, mas às vezes acaba se afastando com medo de se machucar.</div>`;
        document.getElementById('resultado1').style.display = "block"

    } else if (personagemMaisVotado == 'Rei') {

        resultado2.innerHTML = `
        <h1>Você se identifica mais com: Rei</h1>
        <div class="imagem2"></div>
        <div class="texto2">Por você ter uma personalidade parecida com a da Rei, é provável que você seja mais fechado e reservado. Você pode sentir que vive seguindo algo maior, mesmo sem entender muito bem o que é. 
        No fundo, você quer ser entendido, mas raramente se abre o suficiente pra deixar isso claro.</div>`;
        document.getElementById('resultado2').style.display = "block"

    } else if (personagemMaisVotado == 'Kaworu') {

        resultado3.innerHTML = `
        <h1>Você se identifica mais com: Kaworu</h1>
        <div class="imagem3"></div>
        <div class="texto2">Por você ter uma personalidade parecida com a do Kaworu, é provável que você seja calmo e empático. Você tem um jeito especial de enxergar beleza nas coisas e de entender as pessoas ao seu redor. 
        Sua aceitação das coisas como elas são te dá uma vibe tranquila, que inspira e conforta quem está perto de você.</div`;
        document.getElementById('resultado3').style.display = "block"

    } else {
        resultado4.innerHTML = `
        <h1>Você se identifica mais com: Asuka</h1>
        <div class="imagem4"></div>
        <div class="texto2">Por você ter uma personalidade parecida com a da Asuka, 
        é provável que você queira ser notado e reconhecido por tudo o que faz. Você parece super confiante, mas no fundo esconde inseguranças que nem sempre deixa os outros verem. 
        Mesmo assim, sua coragem e vontade de vencer falam mais alto.</div>`;
        document.getElementById('resultado4').style.display = "block"

    }
}