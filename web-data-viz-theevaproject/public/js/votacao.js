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

var votos = [0, 0, 0, 0, 0, 0, 0];

function votar(persoIndex) {
    // myChart.data.datasets[0].data[gameIndex] += 1; // nesse exemplo, não utilizaria o vetor 'votos', atualizando diretamente o índice do dado do gráfico

    votos[persoIndex] += 1; // incrementa os votos do vetor de votos, de acordo com o índice do jogo recebido como parâmetro
    
  }