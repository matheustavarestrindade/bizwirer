import SEO from './seo/SEO';

const Privacy = () => {
    return (

        <div className="container mt-4">
            <SEO type="WebPage" content={{
                "name": "Política de Privacidade",
                "description": "Confira as políticas de privacidade de nossa comunidade",
                "publisher": {
                    "@type": "ProfilePage",
                    "name": "BizWirer"
                }
            }} />
            <div className="card p-5 mb-4 rounded">
                <div className="col-md-12 px-0">
                    <h2 className="display-5 font-italic text-dark">Privacidade</h2>
                    <p className="lead mt-3 mb-0 text-muted">Conheça um pouco mais de como funciona nossa política de privacidade para sua segurança!</p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 blog-main">
                    <div className="blog-post">
                        <h2 className="blog-post-title">Política Privacidade</h2>
                        <p>A sua privacidade é importante para nós. É política do bizwirer respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://bizwirer.com/">bizwirer </a>, e  outros sites que possuímos e operamos.</p> <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado. </p>
                        <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                        <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
                        <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <strong>políticas de privacidade</strong>.</p>
                        <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
                        <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>
                        <h3>Mais informações</h3>
                        <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
                        <p>Esta política é efetiva a partir de <strong>August</strong>/<strong>2020</strong>. </p>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Privacy;