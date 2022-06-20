import './index.scss';
import Menu from '../../components/menu';

import { updateUser } from '../../api/UsuarioApi';
import { updateMakeUp } from '../../api/MaquiagemApi';
import { getById, udpateSchedule } from '../../api/AgendaApi';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Index() {
    
    const { id } = useParams();

    const [agendaId, setAgendaId] = useState(0);
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    const [usuarioId, setUsuarioId] = useState(0);
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [maquiagemId, setMaquiagemId] = useState(0);
    const [maquiagem, setMaquiagem] = useState('');
    const [valor, setValor] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        loadInputs();
    }, []);

    async function loadInputs(){

        const resposta = await getById(id);

        setAgendaId(resposta.id);
        setData(resposta.data);
        setHora(resposta.hora);

        setUsuarioId(resposta.usuario_id);
        setNome(resposta.nome);
        setNascimento(resposta.data_nascimento);
        setEmail(resposta.email);
        setSenha(resposta.senha);

        setMaquiagemId(resposta.maquiagem_id);
        setMaquiagem(resposta.maquiagem);
        setValor(resposta.valor);
        

    }

    async function editarTabelas(){

        await udpateSchedule(agendaId, usuarioId, maquiagemId, data, hora);
        await updateUser(usuarioId, email, senha, nome, nascimento);
        await updateMakeUp(maquiagemId, maquiagem, valor);
        
        setTimeout(() => navigate('/agenda/consultar'), 2000);

    }

    return (
        <div className="page container">
            <Menu />
            <div className="container-agenda">
                <div className="agenda">
                    <div className="agenda-header titulo">Edite  seus agendamentos aqui</div>
                    <div className="conteudo">
                        <div className="dados">
                            <h1 className="page-text">Dados do Cliente</h1>
                            <div className="form-group">
                                <label className="page-text">Nome</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Digite o nome do cliente... "
                                    value={nome} 
                                    onChange={e => setNome(e.target.value)}
                                />
                            </div>
                            <div className="form-group double-field">
                                <div>
                                    <label className="page-text">Date de Nascimento</label>
                                    <input 
                                        type="date" 
                                        className="form-control"
                                        data-date=""
                                        data-date-format="yyyy-MM-dd"
                                        value={nascimento.substring(0, 10)} 
                                        onChange={e => setNascimento(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="page-text">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control styled"
                                        placeholder="Digite o email... "
                                        value={email} 
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="dados">
                            <h1 className="page-text">Dados do Agendamento</h1>
                            <div className="form-group double-field">
                                <div>
                                    <label className="page-text">Data</label>
                                    <input 
                                        type="date" 
                                        className="form-control"
                                        data-date=""
                                        data-date-format="yyyy-MM-dd"
                                        value={data.substring(0, 10)}
                                        onChange={e => setData(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="page-text">Horario</label>
                                    <input 
                                        type="email" 
                                        className="form-control styled"
                                        placeholder="Digite o horario de agendamento... "
                                        value={hora} 
                                        onChange={e => setHora(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="dados">
                        <h1 className="page-text">Dados da maquiagem</h1>
                            <div className="form-group double-field">
                                <div>
                                    <label className="page-text">Modelo da maquiagem</label>
                                    <input 
                                        type="text" 
                                        className="form-control styled"
                                        placeholder="Digite o modelo da maquiagem... "
                                        value={maquiagem} 
                                        onChange={e => setMaquiagem(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="page-text">Valor</label>
                                    <input 
                                        type="number" 
                                        className="form-control"  
                                        placeholder="Digite o valor... "
                                        value={valor} 
                                        onChange={e => setValor(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bt-alterar">
                        <button onClick={editarTabelas}>
                            Salvar alteração
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}