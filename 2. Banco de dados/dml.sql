USE maquiagemDB;

-- usuario adm 
INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
	VALUES ('admin', 'admin@admin.com.br', '1234');

-- cadastrar nova maquiagem 
INSERT INTO tb_maquiagem (nm_maquiagem , vl_preco )
	VALUES ('casamento' , 30);

-- cadastrar agenda 
INSERT INTO tb_agenda (id_usuario, id_maquiagem, dt_agendamento, hr_agendamento)
	VALUES(1, 1, '2022-08-11', '13:30'); 
 
-- consultar tabelas 
SELECT * FROM tb_agenda;
SELECT * FROM tb_usuario;
SELECT * FROM tb_maquiagem;