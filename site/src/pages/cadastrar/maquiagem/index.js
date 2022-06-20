import './index.scss';
import { createMakeUp } from '../../../api/MaquiagemApi';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Index(){

    const [maquiagem, setMaquiagem] = useState('');
    const [valor, setValor] = useState(0);

    const navigate = useNavigate();

    async function criarMaquiagem(){
        await createMakeUp(maquiagem, valor);
        setTimeout(() => navigate('/agenda/consultar'), 2000);
    }

    return (
        <main className="page page-cadastrar-maquiagem">
            <section className="box-login">
                <div className="page-title special-title">
                    <h1 className="text-justify font-weight-bold titulo">Cadastrar Maquiagens</h1>
                    <div className="linha"></div>
                </div>
                <div className="form-login">
                    <form id="form-auth-login" className="form-element">
                        <div className="form-group">
                            <label className="page-text">Maquiagem</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Digite o nome da maquiagem... "
                                value={maquiagem} 
                                onChange={e => setMaquiagem(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="page-text">Preço</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Digite o preço da maquiagem... "
                                value={valor} 
                                onChange={e => setValor(e.target.value)} 
 
                            />
                        </div>
                    </form>
                </div>                    
                <div className="linha linha-especial"></div>
                    <div className="btn-cadastrar">
                        <button type="submit" className="btn btn-login" onClick={criarMaquiagem}>CADASTRAR</button>
                        <button type="submit" className="btn btn-login"><Link to="/agenda/consultar">VOLTAR</Link></button>
                </div>
            </section>
        </main>
    );
}