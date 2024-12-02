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

function votar(nomePerso) {
  var idUsuario = sessionStorage.ID_USUARIO;

  fetch(`/quizz/votar/${nomePerso}`, {
      method: "POST", body: JSON.stringify({idUsuario: idUsuario}),
      headers: { "Content-type": "application/json"}
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Voto contabilizado`);
        } else {
          console.error("Erro na votação ou personagem não encontrado");
        }
      })
      .catch(function (error) {
        console.error(`Erro ao realizar o voto: ${error.message}`);
      });
  }