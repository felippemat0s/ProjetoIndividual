var database = require("../database/config");

function finalizarConhecimento(qtdAcertos, qtdErros, idUsuario) {

    var instrucaoSql = `INSERT INTO quizzConhecimento
    (
        fkUsuario, 
        qtdAcertos,
        qtdErros) VALUES(${idUsuario}, ${qtdAcertos}, ${qtdErros});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function finalizarPersonalidade(idUsuario, persoFav) {

    var instrucaoSql = `INSERT INTO quizzPersonalidade
        (fkUsuario, persoFav) VALUES(${idUsuario}, '${persoFav}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    finalizarConhecimento,
    finalizarPersonalidade
}
