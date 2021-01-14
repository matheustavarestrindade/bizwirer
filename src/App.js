import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routes from './components/Routes';
import { BrowserRouter } from "react-router-dom";
import JsonLD from './components/seo/SEO'

function App() {
    return (
        <BrowserRouter>
            <JsonLD
                type="WebSite"
                content={{
                    "name": "BizWirer",
                    "url": "https://bizwirer.com",
                }}
                openGraph={{
                    title: "BizWirer",
                    type: "website",
                    url: "https://bizwirer.com/",
                    image: "https://bizwirer.com/assets/images/bizwirer.png",
                    description: "Acompanhe as notícias de todos os maiores nomes do jornalismo em um so local!"
                }}
                twitterOpenGraph={{
                    card: "summary",
                    title: "BizWirer",
                    description: "Acompanhe as notícias de todos os maiores nomes do jornalismo em um so local!",
                    image: "https://bizwirer.com/assets/images/bizwirer.png"
                }}
            />
            <div className="App">
                <NavBar />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
