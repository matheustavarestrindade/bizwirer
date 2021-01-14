import SEO from './seo/SEO';

const BlogPage = () => {

    return (

        <div className="container mt-4">
            <SEO type="WebPage" content={{
                "name": "Blog",
                "description": "Acompanhe postagens de como se tornar um melhor investidor!",
                "publisher": {
                    "@type": "ProfilePage",
                    "name": "BizWirer"
                }
            }} />
            <div className="card p-5 mb-4 rounded">
                <div className="col-md-12 px-0">
                    <h2 className="display-5 font-italic text-dark">Blog</h2>
                    <p className="lead mt-3 mb-0 text-muted">Conheça um pouco mais sobre investimentos com nossas postagens!</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 blog-main">
                    <div className="blog-post">
                        <h2 className="blog-post-title">Em Breve</h2>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default BlogPage;