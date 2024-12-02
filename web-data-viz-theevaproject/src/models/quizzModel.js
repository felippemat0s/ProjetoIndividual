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

function atualizarVoto(nomePerso, idUsuario) {
    var instrucaoSql = `
INSERT INTO votacao (persoVotado, quantidadeVotos, fkUsuario) VALUES
 ('${nomePerso}', 1, ${idUsuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarVotos() {
    var instrucaoSql = `SELECT 
    persoVotado AS personagem, 
    COUNT(quantidadeVotos) AS votos 
FROM 
    votacao 
GROUP BY 
    persoVotado;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPersonagens() {
    var instrucaoSql = `SELECT persoFav as personagem, COUNT(*) AS quantidade
FROM quizzPersonalidade
GROUP BY persoFav;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimoTeste(idUsuario) {
    var instrucaoSql = `SELECT * 
        FROM quizzPersonalidade 
        WHERE fkUsuario = ${idUsuario} 
        ORDER BY idQuizzPerso DESC 
        LIMIT 1;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function calcularMediaAcertos() {
    var instrucaoSql = `SELECT AVG(qtdAcertos) AS mediaAcertos 
        FROM quizzConhecimento;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function calcularMediaAcertosUsuario(idUsuario) {
    var instrucaoSql = `SELECT AVG(qtdAcertos) AS mediaAcertos 
        FROM quizzConhecimento 
        WHERE fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPersonagemMaisVotado() {
    var instrucaoSql = `SELECT persoVotado AS personagem, COUNT(*) AS votos 
        FROM votacao 
        GROUP BY persoVotado 
        ORDER BY votos DESC 
        LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPersonagemVotado(idUsuario) {

    var instrucaoSql = `SELECT persoVotado
FROM votacao
WHERE fkUsuario = ${idUsuario};`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);

}

module.exports = {
    finalizarConhecimento,
    finalizarPersonalidade,
    atualizarVoto,
    buscarVotos,
    buscarPersonagens,
    buscarUltimoTeste,
    calcularMediaAcertos,
    calcularMediaAcertosUsuario,
    buscarPersonagemMaisVotado,
    buscarPersonagemVotado,
};

