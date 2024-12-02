function ir_quizz(){

    window.location.href='interativo.html'
    
    }
    
    function ir_home() {
    
    window.location.href='index.html'
    
    } 
    
    function ir_chart() {
    
    window.location.href='dashboard.html'
    
    }
    
    function ir_quizzConhecimento() {
    
        window.location.href='quizzConhecimento.html'
        
        }
    
    function ir_quizzPersonalidade() {
    
        window.location.href='quizzPersonalidade.html'
    
    }
    
    function ir_votacao() {
    
        window.location.href='votacao.html'
    
    }
    
    function carregarInterativo() {
    
        b_usuario.innerHTML = sessionStorage.NOME
    }
    
    let myChart;

    function obterDadosGrafico() {
      fetch(`/quizz/ultimos`, { cache: "no-store" })
        .then((response) => {
          if (response.ok) {
            response.json().then((resposta) => {
              console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
              plotarGrafico(resposta);
            });
          } else {
            console.error("Nenhum dado encontrado ou erro na API");
          }
        })
        .catch((error) => {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
    }
    
    function plotarGrafico(resposta) {
      console.log("iniciando plotagem do gráfico...");
    
      const labels = resposta.map((item) => item.personagem); // Labels dos personagens
      const dataValues = resposta.map((item) => item.votos); // Valores dos votos
    
      const dados = {
        labels: labels,
        datasets: [
          {
            label: "Votos",
            data: dataValues,
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const config = {
        type: "bar",
        data: dados,
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true },
          },
          plugins: {
            title: {
              display: true,
              text: "VOTAÇÃO",
              color: "#FFFFFF",
              font: { size: 20 },
            },
            legend: {
              display: true,
              labels: { color: "white" },
            },
          },
        },
      };
    
      // Verifica se um gráfico já existe e o destrói antes de criar um novo
      const ctx = document.getElementById("myCanvas").getContext("2d");
      if (myChart) myChart.destroy();
      myChart = new Chart(ctx, config);
    }
    
    
    function atualizarVoto(nomePerso, idUsuario) {
      fetch(`/quizz/votar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nomePerso, idUsuario }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Voto registrado com sucesso!");
            atualizarGrafico();
          } else {
            console.error("Erro ao registrar o voto.");
          }
        })
        .catch((error) => {
          console.error(`Erro ao registrar o voto: ${error.message}`);
        });
    }
    
    function atualizarGrafico() {
      fetch(`/quizz/ultimos`, { cache: "no-store" })
        .then((resposta) => {
          if (resposta.ok) {
            resposta.json().then((respostaJSON) => {
              myChart.data.labels = respostaJSON.map((item) => item.personagem);
              myChart.data.datasets[0].data = respostaJSON.map((item) => item.votos);
              myChart.update();
            });
          } else {
            console.error("Nenhum dado encontrado ou erro na API");
          }
        })
        .catch((error) => {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
    }
    
    obterDadosGrafico();
    