import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const NavBar = () => {
    const [fixed, setFixed] = useState(false);
    const [navHeigth, setNavHeigth] = useState(0);

    useEffect(() => {
        setNavHeigth(document.getElementById("navbar").offsetHeight);

        const navBarScrollHandler = (e) => {
            var scrollTop =
                window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if (scrollTop > navHeigth * 1.5) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        }

        document.addEventListener("scroll", navBarScrollHandler);

        return () => {
            document.removeEventListener("scroll", navBarScrollHandler);
        }
    }, [fixed, navHeigth]);

    return (
        <>
            <nav id="navbar" className={"navbar navbar-expand-lg navbar-dark bg-primary " + (fixed ? "fixed-top p-2" : "")}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="./assets/images/bizwirer_white.png" width="100" alt="Bizwirer Logo" loading="lazy" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">
                                    Ultimas Notícias
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {fixed && <div style={{ height: navHeigth * 2 + "px" }}></div>}
        </>
    );
};

export default NavBar;
