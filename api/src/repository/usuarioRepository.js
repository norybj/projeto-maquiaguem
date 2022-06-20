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

export async function alterarUsuario(usuario, id){

    const comando = 
        `UPDATE tb_usuario 
            SET ds_email      = ?, 
                ds_senha      = ?, 
                nm_usuario    = ?, 
                dt_nascimento = ?
            WHERE id_usuario  = ?;`;

    const [linhas] = await con.query(comando, [usuario.email, usuario.senha, usuario.nome, usuario.nascimento, id]);
    return linhas.affectedRows;

}

export async function filtrarUsuarioPorId(id){

    const comando = `SELECT * FROM tb_usuario WHERE id_usuario = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta[0];

}

export async function filtrarUsuarioPorEmail(email){

    const comando = `SELECT * FROM tb_usuario WHERE ds_email = ?`;
    const [resposta] = await con.query(comando, [email]);
    return resposta[0];

}
