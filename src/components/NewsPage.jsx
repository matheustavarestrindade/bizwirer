import React from "react";
import NewsArea from "./sub/NewsArea";
import LoadingIcon from "./sub/LoadingIcon";
import SEO from "./seo/SEO";
import { useState, useEffect } from "react";

const NewsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [source, setSource] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        let currentPageNumber = currentPage;
        window.addEventListener("scroll", ScrollListener, true);

        function ScrollListener() {
            const newsAreaHeigth = document.getElementById("news-area").clientHeight - window.innerHeight;
            var scrollTop =
                window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (scrollTop > newsAreaHeigth) {
                if (!isLoading) {
                    setCurrentPage(currentPageNumber++);
                }
            }
        }

        return () => {
            window.removeEventListener("scroll", ScrollListener, true);
        };
    }, [isLoading]);

    return (
        <React.Fragment>
            <SEO
                type="WebPage"
                content={{
                    name: "Ultimas Notícias",
                    description: "Confira as ultimas notícias dos maiores nomes na reportagem brasileira!",
                    publisher: {
                        "@type": "ProfilePage",
                        name: "BizWirer",
                    },
                }}
            />
            <button
                className="btn btn-success shadow border"
                style={{ borderRadius: "999px", padding: "0.8rem", position: "fixed", zIndex: 10, bottom: "15px", right: "15px" }}
                onClick={() => {
                    setCurrentPage(0);
                }}
            >
                <svg
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-clockwise"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
            </button>

            <div className="container mt-4" id="news-area">
                <div className="nav-scroller px-5 mb-4">
                    <nav className="nav d-flex justify-content-between">
                        <button
                            className="p-2 btn-primary text-white btn"
                            onClick={() => {
                                setSource("");
                                setCurrentPage(0);
                            }}
                        >
                            Todas
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("ADVFN");
                                setCurrentPage(0);
                            }}
                        >
                            ADVFN
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("Band Economia");
                                setCurrentPage(0);
                            }}
                        >
                            Band
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("BBC");
                                setCurrentPage(0);
                            }}
                        >
                            BBC
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("Bloomberg Economia");
                                setCurrentPage(0);
                            }}
                        >
                            Bloomberg
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("CNN Business");
                                setCurrentPage(0);
                            }}
                        >
                            CNN Business
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("Globo Economia");
                                setCurrentPage(0);
                            }}
                        >
                            G1
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("Info Money");
                                setCurrentPage(0);
                            }}
                        >
                            InfoMoney
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("Money Times");
                                setCurrentPage(0);
                            }}
                        >
                            Money Times
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("Suno Research");
                                setCurrentPage(0);
                            }}
                        >
                            Suno Search
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("UOL Economia");
                                setCurrentPage(0);
                            }}
                        >
                            UOL
                        </button>
                        <button
                            className="p-2 text-muted btn-secondary btn"
                            onClick={() => {
                                setSource("Veja");
                                setCurrentPage(0);
                            }}
                        >
                            Veja
                        </button>
                    </nav>
                </div>
                <div className="card p-5 mb-4 rounded">
                    <div className="col-md-12 px-0">
                        <h2 className="display-5 font-italic text-dark">Ultimas Notícias</h2>
                        <p className="lead mt-3 mb-0 text-muted">
                            Acompanhe com facilidade todas as notícias do brasil e do mundo, liberadas pelos maiores nomes no assunto!
                        </p>
                    </div>
                </div>
                <NewsArea setLoading={setIsLoading} page={currentPage} source={source} />
            </div>
            {isLoading && <LoadingIcon />}
        </React.Fragment>
    );
};

export default NewsPage;
