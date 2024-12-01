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

module.exports = {
    finalizarConhecimento,
    finalizarPersonalidade

}