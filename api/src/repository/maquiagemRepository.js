import { con } from './connection.js';

export async function criarMaquiagem(maquiagem){

    const comando = 
        `INSERT INTO tb_maquiagem (nm_maquiagem, vl_maquiagem)
              VALUES (?,?)`;

    const [resposta] = await con.query(comando, [maquiagem.maquiagem, maquiagem.valor]);
    maquiagem.id = resposta.insertId;

    return maquiagem;
}
