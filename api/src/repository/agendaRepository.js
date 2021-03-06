import { con } from './connection.js';

export async function criarAgenda(agenda){

    const comando = 
        `INSERT INTO tb_agenda (id_usuario, id_maquiagem, dt_agendamento, hr_agendamento)
              VALUES (?, ?, ?, ?)`;

    const [resposta] = await con.query(comando, [agenda.usuario, agenda.maquiagem, agenda.data, agenda.hora]);
    agenda.id = resposta.insertId;

    return agenda;
}

export async function listarAgenda(){

    const comando = 
        `SELECT a.id_agenda    	 id,
                a.id_usuario     usuario_id,
                a.id_maquiagem   maquiagem_id,
                u.nm_usuario   	 nome,
                u.dt_nascimento  data_nascimento,
                u.ds_email		 email,
                u.ds_senha       senha,
                m.nm_maquiagem 	 maquiagem,
                m.vl_maquiagem	 valor,
                a.dt_agendamento data,
                a.hr_agendamento hora
                 
        FROM tb_agenda a
        JOIN tb_usuario u
        ON u.id_usuario = a.id_usuario
            
        JOIN tb_maquiagem m
        ON m.id_maquiagem = a.id_maquiagem;`;

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function filtrarPorId(id){

    const comando = 
        `SELECT a.id_agenda    	 id,
                a.id_usuario     usuario_id,
                a.id_maquiagem   maquiagem_id,
                u.nm_usuario   	 nome,
                u.dt_nascimento  data_nascimento,
                u.ds_email		 email,
                u.ds_senha       senha,
                m.nm_maquiagem 	 maquiagem,
                m.vl_maquiagem	 valor,
                a.dt_agendamento data,
                a.hr_agendamento hora
                 
        FROM tb_agenda a
        JOIN tb_usuario u
        ON u.id_usuario = a.id_usuario
            
        JOIN tb_maquiagem m
        ON m.id_maquiagem = a.id_maquiagem
        
        WHERE id_agenda = ?;`;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}

export async function deletarAgenda(id){

    const comando = `DELETE FROM tb_agenda WHERE id_agenda = ?`;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;

}

export async function alterarAgenda(id, agenda){

    const comando = 
        `UPDATE tb_agenda
            SET id_usuario     = ?,
                id_maquiagem   = ?,
                dt_agendamento = ?,
                hr_agendamento = ?
          WHERE id_agenda      = ?`;

    const [resposta] = await con.query(comando, [agenda.usuario, agenda.maquiagem, agenda.data, agenda.hora, id]);
    return resposta.affectedRows;

}