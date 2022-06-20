import { Link } from 'react-router-dom';
import './index.scss';

export default function Index(){
    return (
        <header className="comp-header">
            <div className="header-image">
                <img src='/images/logo.png' alt='Logo da empresa'></img>
            </div>
            <div className="header-button">
                <button><Link to='/login'>Login</Link></button>
                <button><Link to='/usuario/cadastrar'>Cadastrar Usuário</Link></button>
            </div>
        </header>
    );
}