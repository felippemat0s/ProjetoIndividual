var quizzModel = require("../models/quizzModel");

function finalizarConhecimento(req, res) {

    var qtdAcertos = req.body.qtdAcertos
    var qtdErros = req.body.qtdErros
    var idUsuario = req.body.idUsuario

    quizzModel.finalizarConhecimento(qtdAcertos, qtdErros, idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(401).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao ver seu resultado.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function finalizarPersonalidade(req, res) {

    var idUsuario = req.body.idUsuario
    var persoFav = req.body.persoFav

    quizzModel.finalizarPersonalidade(idUsuario, persoFav).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(401).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar seu personagem favorito.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function votarPorNome(req, res) {
  var nomePerso = req.params.nomePerso;
  var idUsuario = req.body.idUsuario;
  
  console.log("Personagem recebido:", nomePerso);

  quizzModel.atualizarVoto(nomePerso, idUsuario)                            
    .then(function (resultado) {                                
      res.status(200).send("Voto contabilizado com sucesso!");
    })
    .catch(function (erro) {                                                
      console.log(erro);                                                   
      console.log("Houve um erro ao atualizar os votos.", erro.sqlMessage); 
      res.status(500).json(erro.sqlMessage);                                
    });              
}

function obterVotosAtualizados(req, res) {
  console.log(`Buscando os votos...`);

  quizzModel.buscarVotos()                                    
    .then(function (resultado) {                             
      if (resultado.length > 0) {                             
        console.log(resultado);                               
        res.status(200).json(resultado);                      
      } else {                                                
        res.status(204).send("Nenhum resultado encontrado!"); 
      }
    })
    .catch(function (erro) {                                            
      console.log(erro);                                                 
      console.log("Houve um erro ao buscar os votos.", erro.sqlMessage); 
      res.status(500).json(erro.sqlMessage);
    });
}

function obterPersonagensAtualizados(req, res) {
  console.log(`Buscando os personagens...`);

  quizzModel.buscarPersonagens()                                    
    .then(function (resultado) {                             
      if (resultado.length > 0) {                             
        console.log(resultado);                               
        res.status(200).json(resultado);                      
      } else {                                                
        res.status(204).send("Nenhum resultado encontrado!"); 
      }
    })
    .catch(function (erro) {                                            
      console.log(erro);                                                 
      console.log("Houve um erro ao buscar os votos.", erro.sqlMessage); 
      res.status(500).json(erro.sqlMessage);
    });
}

function obterKPIs(req, res) {
  console.log(`Buscando os KPIs...`);

  const idUsuario = req.params.idUsuario; // ID do usuário para KPIs específicos, se necessário.

  Promise.all([
      quizzModel.buscarUltimoTeste(idUsuario),
      quizzModel.calcularMediaAcertos(),
      quizzModel.calcularMediaAcertosUsuario(idUsuario),
      quizzModel.buscarPersonagemMaisVotado(),
      quizzModel.buscarPersonagemVotado(idUsuario),
      quizzModel.buscartotalVotos()
  ])
  .then(function ([ultimoTeste, mediaAcertos, mediaUsuario, personagemMaisVotado, personagemVotado, totalVotos]) {
      if (
          !ultimoTeste.length &&
          !mediaAcertos.length &&
          !mediaUsuario.length &&
          !personagemMaisVotado.length &&
          !personagemVotado.length &&
          !totalVotos.length
      ) {
          res.status(204).send("Nenhum dado encontrado!");
      } else {
          const kpis = {
              ultimoTeste: ultimoTeste[0]?.persoFav || "Nenhum teste realizado",
              mediaAcertos: mediaAcertos[0]?.mediaAcertos || 0,
              mediaUsuario: mediaUsuario[0]?.mediaAcertos || 0,
              personagemMaisVotado: personagemMaisVotado[0]?.personagem || "Nenhum voto registrado",
              personagemVotado: personagemVotado[0]?.persoVotado || 'Não votou em ninguém',
              totalVotos: totalVotos[0]?.totalVotos || 'Não há votos',
          };

          console.log("KPIs obtidos:", kpis);
          res.status(200).json(kpis);
      }
  })
  .catch(function (erro) {
      console.log(erro);
      console.error("Houve um erro ao buscar os KPIs:", erro.sqlMessage);
      res.status(500).json({ mensagem: "Erro ao buscar os KPIs", erro: erro.sqlMessage });
  });
}


module.exports = {
    finalizarConhecimento,
    finalizarPersonalidade,
    votarPorNome,
    obterVotosAtualizados,
    obterPersonagensAtualizados,
    obterKPIs,

}