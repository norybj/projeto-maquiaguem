import Header from '../../components/header';
import Footer from '../../components/footer';

import './index.scss';

export default function Index(){
    return (
        <div className="page">
            <Header/>
            <main>
                <div className="banner">
                    <img src="/images/banner.png" alt="Imagem Banner principal"></img>
                </div>
                <div className="faixa primeira-faixa">
                    <div>
                        <img src="/images/img-1.png" alt="Imagem de exemplo 1"></img>
                    </div>
                    <div className="box container-1">
                        <p>agende sua maquiagem</p>
                    </div>
                </div>
                <div className="faixa segunda-faixa">
                    <div className="box container-2">
                        <p>Para todos os tipos de pele </p>
                    </div>
                    <div>
                        <img src="/images/img-2.png" alt="Imagem de exemplo 2"></img>
                    </div>
                </div>
                <div className="faixa terceira-faixa">
                    <div>
                        <img src="/images/img-3.png" alt="Imagem de exemplo 3"></img>
                    </div>
                    <div className="box container-3">
                        <p>Para todas as mulheres</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}