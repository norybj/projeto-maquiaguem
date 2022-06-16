import { con } from './connection.js';

export async function login(email, senha){

    const comando = 
        `SELECT id_usuario      id,
                nm_usuario      nome,
                ds_email        email
         FROM   tb_usuario      
         WHERE  ds_email      = ?
           AND  ds_senha      = ?`;

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];

}