import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md">
                        <img className="mb-2" src="./assets/images/bizwirer.png" alt="" height="35" />
                        <small className="d-block mt-4 mb-3 text-muted">© 2019-2020</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Conteúdo</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <Link className="text-muted" to="/news">
                                    Notícias
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted" to="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Sobre</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <Link className="text-muted" to="/about">
                                    Sobre Nos
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted" to="/privacy">
                                    Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link className="text-muted" to="/terms">
                                    Termos de Serviço
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
