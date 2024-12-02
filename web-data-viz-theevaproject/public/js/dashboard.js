function ir_quizz(){

    window.location.href='interativo.html'
    
    }
    
    function ir_home() {
    
      sessionStorage.clear();
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
    
    var myChart;
    var myChart2;

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
    

      const ctx = document.getElementById("myCanvas").getContext("2d");
      if (myChart) myChart.destroy();
      myChart = new Chart(ctx, config);
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

    function obterDadosGraficoPizza() {
      fetch(`/quizz/personalidadegrafico`, { cache: "no-store" })
        .then((response) => {
          if (response.ok) {
            response.json().then((resposta) => {
              console.log(`Dados recebidos para o gráfico de pizza: ${JSON.stringify(resposta)}`);
              plotarGraficoPizza(resposta);
            });
          } else {
            console.error("Nenhum dado encontrado ou erro na API");
          }
        })
        .catch((error) => {
          console.error(`Erro na obtenção dos dados p/ gráfico de pizza: ${error.message}`);
        });
    }
    
    function plotarGraficoPizza(resposta) {
      console.log("Iniciando plotagem do gráfico de pizza...");
    
      const labels = resposta.map((item) => item.personagem); // Labels dos personagens
      const dataValues = resposta.map((item) => item.quantidade); // Valores das quantidades
    
      const dados = {
        labels: labels,
        datasets: [
          {
            label: "Distribuição de Personalidades",
            data: dataValues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
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
        type: "pie", // Tipo de gráfico: Pizza
        data: dados,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Distribuição de Personalidades",
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
    
      const ctx = document.getElementById("myCanvasPizza").getContext("2d");
      if (myChart2) myChart2.destroy();
      myChart2 = new Chart(ctx, config);
    }    

    function atualizarGraficoPersonagens() {
      fetch(`/quizz/personalidadegrafico`, { cache: "no-store" })
        .then((resposta) => {
          if (resposta.ok) {
            resposta.json().then((respostaJSON) => {
              myChart2.data.labels = respostaJSON.map((item) => item.personagem);
              myChart2.data.datasets[0].data = respostaJSON.map((item) => item.quantidade);
              myChart2.update();
            });
          } else {
            console.error("Nenhum dado encontrado ou erro na API");
          }
        })
        .catch((error) => {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
    }

    function atualizarKPIs() {
      var idUsuario = sessionStorage.ID_USUARIO;
      fetch(`/quizz/kpis${idUsuario}`, { cache: 'no-store' })
          .then(response => {
              if (response.ok) {
                  response.json().then(kpis => {
                      document.getElementById("ultimoTeste").innerText = kpis.ultimoTeste;
                      document.getElementById("mediaAcertos").innerText = Number(kpis.mediaAcertos).toFixed(2);
                      document.getElementById("mediaUsuario").innerText = Number(kpis.mediaUsuario).toFixed(2);
                      document.getElementById("personagemMaisVotado").innerText = kpis.personagemMaisVotado;
                      document.getElementById("personagemVotado").innerText = kpis.personagemVotado;
                  });
              } else {
                  console.error("Erro ao buscar KPIs");
              }
          })
          .catch(error => {
              console.error("Erro na requisição de KPIs: ", error.message);
          });
  }
  
    
    obterDadosGrafico();
    obterDadosGraficoPizza();
    atualizarKPIs()