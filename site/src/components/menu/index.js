import storage from 'local-storage';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

export default function Index(){

    const navigate = useNavigate();

    function logout(){
        storage.remove('usuario-logado');
        navigate('/login');
    }

    return (
        <div className="comp-menu">
            <div>
                <img src='/images/logo.png' alt='Logo da empresa'></img>
            </div>
            <div className="menu-button">
                <Link to='/'>Início</Link>
                <Link to='/agenda/cadastrar'>Agendamento</Link>
                <Link to='/maquiagem/cadastrar'>Cadastrar Maquiagem</Link>
                <Link to='/usuario/cadastrar'>Cadastrar Usuário</Link>
                <a onClick={logout}>Logout</a>
                
            </div>
        </div>
    );
}   