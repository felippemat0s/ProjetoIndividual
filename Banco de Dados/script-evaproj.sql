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
