import './index.scss';
import { createSchedule } from '../../../api/AgendaApi';
import { getUserByEmail } from '../../../api/UsuarioApi';
import { getMakeUpByName } from '../../../api/MaquiagemApi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Index(){

    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');

    const [nome, setNome] = useState('');
    const [maquiagem, setMaquiagem] = useState('');

    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    const navigate = useNavigate();

    async function filtrarUsuarioPorEmail(email){
        const resposta = await getUserByEmail(email);
        setUsuario(resposta.id_usuario);
    }

    async function filtrarMaquiagemPorNome(nome){
        const resposta = await getMakeUpByName(nome);
        setMaquiagem(resposta.id_maquiagem);
    }

    async function criarAgenda(){

        await filtrarUsuarioPorEmail(email);
        await filtrarMaquiagemPorNome(nome);

        await createSchedule(usuario, maquiagem, data, hora);
        setTimeout(() => navigate('/agenda/consultar'), 2000);

    }

return (
    <main className="page page-cadastrar-maquiagem">
        <section className="box-login">
            <div className="page-title special-title">
                <h1 className="text-justify font-weight-bold titulo">Cadastrar Agenda</h1>
                <div className="linha"></div>
            </div>
            <div className="form-login">
                <form id="form-auth-login" className="form-element">
                        <div className="form-group">
                            <label className="page-text">Email do usuario</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite o nome da maquiagem... "
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Nome da maquiagem</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite o nome da maquiagem... "
                                value={nome} 
                                onChange={e => setNome(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Data do agendamento</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                placeholder="Digite o nome da maquiagem... "
                                value={data} 
                                onChange={e => setData(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Hora do agendamento</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite o nome da maquiagem... "
                                value={hora} 
                                onChange={e => setHora(e.target.value)} 
                            />
                        </div>
                </form>
            </div>                    
            <div className="linha linha-especial"></div>
                <div className="btn-cadastrar">
                    <button onClick={criarAgenda} type="submit" className="btn btn-login" >CADASTRAR</button>
                    <button type="submit" className="btn btn-login"><Link to="/agenda/consultar">VOLTAR</Link></button>
            </div>
        </section>
    </main>
);}