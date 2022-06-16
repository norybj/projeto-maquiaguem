import { con } from './connection.js';

export async function criarmaquiagem(maquiagem){

    const comando = 
        `INSERT INTO tb_agenda (vl_maquiagem, id_maquiagem, nm_maquiagem)
              VALUES (?, ?, ?, ?)`;

    const [resposta] = await con.query(comando, [maquiagem.valor, maquiagem.maquiagem]);
    maquiagem.id = resposta.insertId;

    return maquiagem;
}
