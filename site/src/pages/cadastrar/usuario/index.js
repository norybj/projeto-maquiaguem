import './index.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../../api/UsuarioApi';

export default function Index(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');

    const navigate = useNavigate();

    async function criarUsuario(){
        await createUser(email, senha, nome, nascimento);
        setInterval(() => navigate('/login'), 2000);
    }

    return (
        <main className="page page-cadastrar-usuario">
            <section className="box-login">
                <div className="image-login">
                </div>

                <div className="form-login">
                    <div className="page-title">
                        <h1 className="text-justify font-weight-bold titulo">Cadastre-se</h1>
                        <div className="linha"></div>
                    </div>
                    
                    <form id="form-auth-login" className="form-group">
                        <div className="form-group">
                            <label className="page-text primeiroElemento">Nome</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite o seu nome... "
                                value={nome} 
                                onChange={e => setNome(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Data de Nascimento</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                placeholder="Digite sua data de nascimento... "
                                value={nascimento} 
                                onChange={e => setNascimento(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite um endereço de e-mail... "
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Senha</label>
                            <input type="password" 
                                   className="form-control" 
                                   placeholder="Digite um senha segura... "
                                   value={senha} 
                                   onChange={e => setSenha(e.target.value)} 
                                   
                            />
                        </div>

                        <div className="btn-cadastrar">
                            <button type="submit" className="btn btn-login" onClick={criarUsuario}>CADASTRAR</button>
                            <Link to='/login'>VOLTAR</Link>
                            <button type="submit" className="btn btn-login"><Link to='/login'>VOLTAR</Link></button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}