CREATE DATABASE EvaProject;

USE EvaProject;

CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45),
    email VARCHAR(45),
    telefone CHAR(11),
    senha VARCHAR(45) 
);

CREATE TABLE quizzConhecimento (
    idQuizz INT AUTO_INCREMENT PRIMARY KEY,
    qtdAcertos INT,
    qtdErros INT,
    qtdQuestoes INT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
        
        
);

CREATE TABLE quizzPersonalidade (
    idQuizzPerso INT AUTO_INCREMENT PRIMARY KEY,
    qtdAcertos INT,
    qtdErros INT,
    qtdQuestoes VARCHAR(45),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE votacao (
    idVotacao INT AUTO_INCREMENT PRIMARY KEY,
    persoVotado INT,
    votacaoCol VARCHAR(45),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

