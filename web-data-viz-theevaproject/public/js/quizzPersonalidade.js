function voltar_quizzC() {

    window.location.href='interativo.html'
    
    }

    function ir_home() {

        window.location.href='index.html'
        
        } 
        
        function ir_chart() {
        
        window.location.href='dashboard.html'
        
        }

var listaQuestoes = [

    {
        pergunta: "Qual o ano de lançamento de Neon Genesis Evangelion?", 
        alternativas: [
    { descricao: "Roxo", personagem: 'Shinji Ikari'},
    {descricao: "Azul", personagem: 'Rei Ayanami'},
    {descricao: "Vermelho", personagem: 'Asuka Langley'},
    {descricao: "Cinza", personagem: 'Kaworu Nagisa'} ]

 },

//     {
//         pergunta: "Além de Shinji Ikari, quem foi o primeiro personagem a aparecer?",
//     },

//     {
//         pergunta: "No final do mangá, a Terra é...",
//     } ,

//     {
//         pergunta: "Qual o nome do primeiro anjo a atacar Neo-Tokyo 3?",
//     } ,

//     {
//         pergunta: "O criador de Evangelion, Hideaki Anno, antes de se tornar um grande diretor, <br> foi um aprendiz de qual outro grande diretor?",
//     } ,

//     {
//         pergunta: "Durante os acontecimentos de Evangelion 2.2, o personagem Kaworu aparece <br> repentinamente no ato final, qual unidade EVA ele pilotava?",
        
//     } ,

//     {
//         pergunta: "Ao decorrer do episódio 8 de Neon Genesis Evangelion, conhecemos o personagem Ryoji Kaji <br> que transportava consigo uma espécie de embrião, qual o nome daquele ser?",

//     } ,

//     {
//         pergunta: "No filme de 1997, The End of Evangelion, <br> a fusão de dois seres ocasionou o Terceiro Impacto, quem são eles?",

//     } ,

//     {
//         pergunta: "No episódio 8 de Neon Genesis Evangelion somos apresentados a uma garota peculiar, <br> Asuka Langley Soryu, qual a unidade que ela pilota?",

//     },
//     {
//         pergunta: "Ao fim de Neon Genesis Evangelion, Shinji diz uma frase bastante inspiradora <br> para todos os jovens que estavam lhe assistindo e vendo sua superação, qual é essa frase??",

//     }

]

var indicePergunta = 0;
var pontoPersonalidade = {
Shinji: 0,
Asuka: 0,
Kaworu: 0,
Rei: 0
}

var resposta1 = document.getElementById('resposta1')
var resposta2 = document.getElementById('resposta2')
var resposta3 = document.getElementById('resposta3')
var resposta4 = document.getElementById('resposta4')

    function exibirResultado() {



    }

    function exibirPerguntas() {

   if (indicePergunta < listaQuestoes.length) {

    var pergunta = listaQuestoes[indicePergunta];

   }

    }