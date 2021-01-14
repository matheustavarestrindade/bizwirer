import SEO from './seo/SEO';

const About = () => {
    return (
        <div className="container mt-4">
            <SEO
                type="WebPage"
                content={{
                    "name": "Sobre",
                    "description": "Conheça um pouco mais sobre nos e de como funcionamos",
                    "publisher": {
                        "@type": "ProfilePage",
                        "name": "BizWirer"
                    }
                }} />
            <div className="card p-5 mb-4 rounded">
                <div className="col-md-12 px-0">
                    <h2 className="display-5 font-italic text-dark">Sobre</h2>
                    <p className="lead mt-3 mb-0 text-muted">Conheça um pouco mais de como funcionamos e operamos para trazer uma melhor esperiência para você!</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 blog-main">
                    <div className="blog-post">
                        <h2 className="blog-post-title">Quem Somos</h2>
                        <p>
                            Somos uma equipe de investidores que se juntaram para melhor distribuir a informação disponível de maneira fácil e personalizada, onde podemos ler rapidamente oque acontece no mercado!
                        </p>
                        <h2 className="blog-post-title">Objetivo</h2>
                        <p>
                            A BizWirer foi criada com o Objetivo principal de ajudar investidores a acompanhar a grande quantidade de informação disponível na
                            internet divulgada pelos grandes sites de notícias em um único local
                        </p>
                        <p>
                            Com isso em mente, tivemos a brilhante ideia de juntar todos os maiores sites de notícias em um so local, ajudando você investidor a
                            melhor se informar sobre as suas decisões com as notícias disponíveis em tempo real.
                        </p>
                        <h2 className="blog-post-title">Como Funcionamos</h2>
                        <p>
                            Com um sistema automatizado a BizWirer extrai as headlines de todos os maiores sites de notícias, disponibilizando as mesmas
                            diretamente para você em uma so página com um facíl acesso.
                        </p>
                        <p>Com essa informação e possivél uma tomada de decisão mais rápida e a frente de outros investidores!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
