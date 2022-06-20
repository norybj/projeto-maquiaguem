import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home                 from './pages/home';
import Login                from './pages/login';
import CadastrarAgenda      from './pages/cadastrar/agenda';
import CadastrarUsuario     from './pages/cadastrar/usuario';
import CadastrarMaquiagem   from './pages/cadastrar/maquiagem';
import ConsultarAgenda      from './pages/consultar';
import AlterarAgenda        from './pages/alterar';

export default function Index(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"                     element={<Home/>}/>
                <Route path="/login"                element={<Login/>}/>
                <Route path="/usuario/cadastrar"    element={<CadastrarUsuario/>}/>
                <Route path="/maquiagem/cadastrar"  element={<CadastrarMaquiagem/>}/>
                <Route path="/agenda/consultar"     element={<ConsultarAgenda/>}/>
                <Route path="/agenda/alterar/:id"   element={<AlterarAgenda/>}/>
                <Route path="/agenda/cadastrar"     element={<CadastrarAgenda/>}/>
                
            </Routes>
        </BrowserRouter>
    );
} 