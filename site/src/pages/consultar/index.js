import Table from 'react-bootstrap/Table';
import Menu from '../../components/menu';
import {deletar, listar} from '../../api/AgendaApi';

import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './index.scss';

export default function Index(){

    const navigate = useNavigate();
    const [agendas, setAgendas] = useState([]);

    function editarAgendas(id){
        navigate(`/agenda/alterar/${id}`);
    }

    async function deletarAgendas(id){

        await deletar(id);
        carregarAgendas();

    }

    async function carregarAgendas() {
        const resp = await listar();
        setAgendas(resp);
    }

    useEffect(() => {
        carregarAgendas();
    }, [])

    return (
        <main className="page page-container">
            <Menu/>
            <div className="container consult-table">
                <div className="consultarAgenda">
                    <h1 className="page-title">Consultar Agendas</h1>
                    <Table className="table" responsive="sm">
                        <thead className="thead">
                            <tr>
                                <th className="page-title" scope="col">Nome</th>
                                <th className="page-title" scope="col">Data</th>
                                <th className="page-title" scope="col">Horário</th>
                                <th className="page-title" scope="col">Tipo Maquiagem</th>
                                <th className="page-title" scope="col"></th>
                                <th className="page-title" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody id="tbody" className="tbody">
                            {agendas.map(item =>
                                <tr key={item.id}>
                                    <td className="table-data">{item.nome}</td>
                                    <td className="table-data">{item.data.substr(0, 10)}</td>
                                    <td className="table-data">{item.hora}</td>
                                    <td className="table-data">{item.maquiagem}</td>
                                    <td>
                                        <img
                                            className="grid-image"
                                            src="/images/atualizar.png"
                                            alt="Atualizar registro"
                                            onClick={e => {
                                                e.stopPropagation();
                                                editarAgendas(item.id)}
                                            }>
                                        </img>
                                    </td>
                                    <td>
                                        <img
                                            className="grid-image"
                                            src="/images/deletar.png"
                                            alt="Deletar registro"
                                            onClick={e => {
                                                e.stopPropagation();
                                                deletarAgendas(item.id);
                                            }}
                                        >
                                        </img>
                                    </td>
                                </tr>
                            )};
                        </tbody>
                    </Table>
                </div>
                <div className="button-consult">
                    <button><Link to="/agenda/cadastrar">+ Agendamento</Link></button>
                </div>
            </div>
        </main>
    );
}