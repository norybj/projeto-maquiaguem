CREATE DATABASE maquiagemDB;
USE maquiagemDB;

CREATE TABLE tb_usuario(
	id_usuario 		INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ds_email 		VARCHAR(60),
    ds_senha 		VARCHAR(20),
    nm_usuario 		VARCHAR(100),
    dt_nascimento 	DATE
);

CREATE TABLE tb_maquiagem(
	id_maquiagem 	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nm_maquiagem 	VARCHAR(100),
    vl_preco 		FLOAT
);

CREATE TABLE tb_agenda(
	id_agenda 		    INT NOT NULL PRIMARY KEY auto_increment,
    id_usuario 		    INT NOT NULL,
    id_maquiagem 		INT NOT NULL,
    dt_agendamento 	    DATE,
    hr_agendamento 	    TIME,
    
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario),
    FOREIGN KEY (id_maquiagem) REFERENCES tb_maquiagem (id_maquiagem)
);