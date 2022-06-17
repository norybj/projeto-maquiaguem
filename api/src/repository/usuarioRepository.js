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

export async function cadastrarUsuario(usuario){

    const comando = 
        `INSERT INTO tb_usuario (ds_email, ds_senha, nm_usuario, dt_nascimento)
        VALUES (?, ?, ?, ?);`;

    const [linhas] = await con.query(comando, [usuario.email, usuario.senha, usuario.nome, usuario.nascimento]);
    usuario.id = linhas.insertId;

    return usuario;

}

export async function filtrarUsuario(id){

    const comando = 
        `SELECT * FROM tb_usuario WHERE id_usuario = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta[0];

}
