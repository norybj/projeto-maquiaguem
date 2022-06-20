
import storage from 'local-storage';
import { login } from '../../api/UsuarioApi';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './index.scss'

export default function Index() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (storage('usuario-logado'))
            navigate('/agenda/consultar');
    }, []);

    async function entrarClick() {
        try {

            const r = await login(email, senha);
            storage('usuario-logado', r);

            setTimeout(() => {
                navigate('/agenda/consultar');
            }, 3000);

        } catch (err) {
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    return (
        <main className="page page-login">
            <section className="box-login">
                <div className="image-login">
                </div>

                <div className="form-login">
                    <div className="page-title">
                        <h1 className="text-justify font-weight-bold titulo">Entrar</h1>
                        <div className="linha"></div>
                    </div>

                    <form id="form-auth-login" className="form-group">
                        <div className="form-group">
                            <label className="page-text">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="inputEmail" 
                                placeholder="Digite um endereço de e-mail... " 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="inputPassword" 
                                placeholder="Digite uma senha segura... " 
                                value={senha} 
                                onChange={e => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="login-create-user">
                            <label className="page-text personal-label"><Link to="/usuario/cadastrar">Ainda não tem uma conta ?</Link></label>
                        </div>
                    </form>

                    <div className="page-title login-footer">
                        <div className="linha"></div>
                        <button onClick={entrarClick} type="submit" className="btn btn-login"> Login </button>
                    </div>
                </div>
            </section>
        </main>
    );
}