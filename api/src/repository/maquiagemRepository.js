import { con } from './connection.js';

export async function criarMaquiagem(maquiagem){

    const comando = 
        `INSERT INTO tb_maquiagem (nm_maquiagem, vl_maquiagem)
              VALUES (?,?)`;

    const [resposta] = await con.query(comando, [maquiagem.maquiagem, maquiagem.valor]);
    maquiagem.id = resposta.insertId;

    return maquiagem;
}

export async function filtrarMaquiagem(id){

    const comando = 
        `SELECT * FROM tb_maquiagem 
          WHERE id_maquiagem = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta[0];
}

export async function alterarMaquiagem(id, maquiagem){

    const comando = 
        `UPDATE tb_maquiagem
            SET nm_maquiagem = ?,
                vl_maquiagem = ?
          WHERE id_maquiagem = ?`;

    const [resposta] = await con.query(comando, [maquiagem.nome, maquiagem.valor, id]);
    return resposta.affectedRows;

}
