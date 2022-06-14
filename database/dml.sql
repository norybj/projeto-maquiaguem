use maquiagemDB;

-- usuario adm 
INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
	VALUES ('admin', 'admin@admin.com.br', '1234');

-- cadastrar nova maquiagem 
insert into tb_maquiagem (nm_maquiagem , vl_preco )
	values ('casamento' , 30);

-- cadastrar agenda 
insert into tb_agenda (id_usuario, id_maquiagem, dt_agendamento, hr_agendamento)
	values(1, 1, '2022-08-11', '13:30'); 
 
-- consultar tabelas 
select * from tb_agenda;
select * from tb_usuario;
select * from tb_maquiagem;