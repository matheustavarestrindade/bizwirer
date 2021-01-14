import NewsArea from "./sub/NewsArea";
import SEO from './seo/SEO';

import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="container mt-4">
            <SEO type="WebPage" content={{
                "name": "Inicio",
                "description": "Bem Vindo ao BizWirer! Aqui você encontra as melhores informações para um melhor investimento",
                "publisher": {
                    "@type": "ProfilePage",
                    "name": "BizWirer"
                }
            }} />
            <div className="row bg-light p-4 mb-5">
                <div className="col text-center mt-4">
                    <h1 className="h3">Todas as notícias em um único lugar</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-sm">
                        <img src="./assets/images/newspapper.svg" alt="NewsPapper man" className="w-100" />
                        <SEO type="ImageObject" content={{
                            "author": "unDraw.co",
                            "contentUrl": "./assets/images/newspapper.svg",
                            "description": "Newspaper image of landing page",
                            "name": "Newspaper man"
                        }} />
                    </div>
                    <div className="col-md">
                        <h5 className="h5">Acompanhe todas as notícias em um único lugar!</h5>
                        <p>Acompanhe todas as notícias de uma forma nunca vista antes!</p>
                        <p>Com o Bizwirer você pode esquecer a troca constante entre páginas atras das ultimas notícias!</p>
                        <Link className="btn-dark btn float-right mt-5" to="/news" >Ver últimas Notícias</Link>
                    </div>
                </div>
            </div>
            <div className="col-12 mb-3">
                <h3 className="h3 text-center">Ultimas Notícias</h3>
            </div>
            <NewsArea type="latest" splitQuantity={3} />
            <div className="row featurette my-5">
                <div className="col-md-7">
                    <h3 className="featurette-heading">Invista melhor com mais informação.</h3>
                    <h4>
                        <span className="text-muted">Você vai ficar impressionado!</span>
                    </h4>
                    <p className="lead mt-3">Com o BizWirer você consegue sair na frente de todos, tendo as ultimas notícias do mercado a um click de você!</p>
                </div>
                <div className="col-md-5">
                    <img
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500"
                        height="500"
                        src="./assets/images/feed.svg"
                        preserveAspectRatio="xMidYMid slice"
                        alt="feed woman display"
                        focusable="false"
                        aria-label="Placeholder: 500x500"
                    />
                    <SEO type="ImageObject" content={{
                        "author": "unDraw.co",
                        "contentUrl": "./assets/images/feed.svg",
                        "description": "Application feed image image of landing page",
                        "name": "feed woman display"
                    }} />
                </div>
            </div>
            <div className="col-12 mb-3">
                <h3 className="h3 text-center">Mais Visualizadas</h3>
            </div>
            <NewsArea type="views" splitQuantity={3} />
        </div>
    );
};

export default MainPage;
