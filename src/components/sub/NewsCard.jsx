import { useState } from "react";
import SEO from "../seo/SEO";

const NewsCard = ({ content, date, link, source, views, image_url }) => {
    const [cardStyle, setCardStyle] = useState(cardCustomStyle);
    const time = `Há ${getTime(new Date(date))}`;
    const isNew = isNewsNew(new Date(date));

    return (
        <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className={isNew ? "border-success rounded card h-100" : "border-secondary rounded card h-100"}
            style={cardStyle}
            onMouseEnter={() => {
                setCardStyle(cardCustomStyleHover);
            }}
            onMouseLeave={() => {
                setCardStyle(cardCustomStyle);
            }}
        >
            {isNew && (
                <span style={{ position: "absolute", top: "-4%", left: "-4%" }} className="badge p-1 badge-success rounded">
                    Nova
                </span>
            )}
            <div className="card-header text-center">
                <img src={`./assets/images/${getLogoName(source)}`} alt={`Logo ${source}`} style={cardImageStyle} />
                <SEO
                    type="ImageObject"
                    content={{
                        author: source,
                        contentUrl: `./assets/images/${getLogoName(source)}`,
                        description: `Logo ${source}`,
                        name: `Logo ${source}`,
                    }}
                />
                <span>{source}</span>
            </div>
            <div className={"card-body " + (isNew ? "text-success font-weight-bold" : "text-secondary")}>
                <p className="card-text">{content}</p>
                <small>
                    <span>{time}</span>| {views} Visualizações
                </small>
            </div>

            <SEO
                type="NewsArticle"
                content={{
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": "https://example.com/my-news-article",
                    },
                    headline: content,
                    datePublished: date,
                    dateModified: date,
                    author: {
                        "@type": "Person",
                        name: source,
                    },
                    image: [image_url && image_url !== "null" ? image_url : `https://bizwirer.com/assets/images/${getLogoName(source)}`],
                    publisher: {
                        "@type": "Organization",
                        name: source,
                        logo: {
                            "@type": "ImageObject",
                            url: `./assets/images/${getLogoName(source)}`,
                        },
                    },
                }}
            />
        </a>
    );
};

const cardCustomStyle = {
    maxWidth: "18rem",
    transition: "0.3s",
    textDecoration: "none",
    margin: "auto",
};

const cardCustomStyleHover = {
    maxWidth: "18rem",
    textDecoration: "none",
    transition: "0.3s",
    transform: "scale(1.05)",
    cursor: "pointer",
    margin: "auto",
};

const cardImageStyle = {
    maxHeight: "1rem",
    marginRight: "1rem",
    alignSelf: "center",
};

function getLogoName(key) {
    if (key === "Info Money") {
        return "infomoney.png";
    } else if (key === "UOL Economia") {
        return "uol.png";
    } else if (key === "Globo Economia") {
        return "g1.png";
    } else if (key === "Suno Research") {
        return "suno.png";
    } else if (key === "Band Economia") {
        return "band.png";
    } else if (key === "BBC") {
        return "bbc.png";
    } else if (key === "Veja") {
        return "veja.png";
    } else if (key === "Bloomberg Economia") {
        return "bloomberg.png";
    } else if (key === "Money Times") {
        return "moneytimes.png";
    } else if (key === "CNN Business") {
        return "cnn.png";
    }
}

function isNewsNew(date) {
    if (!date) {
        return;
    }
    var endDate = new Date();
    var seconds = Number((endDate.getTime() - date.getTime()) / 1000);
    var minutes = Math.floor(seconds / 60);
    if (minutes < 15) {
        return true;
    }
    return false;
}

function getTime(date) {
    if (!date) {
        return;
    }
    var endDate = new Date();
    var seconds = Number((endDate.getTime() - date.getTime()) / 1000);
    if (seconds < 0) {
        seconds = 1;
    }
    if (seconds < 60) {
        return Math.floor(seconds) + (seconds > 1 ? " Segundos" : " Segundo");
    }
    var minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return minutes + (minutes > 1 ? " Minutos" : " Minuto");
    }
    var hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return hours + (hours > 1 ? " Horas" : " Hora");
    }
    var dias = Math.floor(hours / 24);
    return dias + (dias > 1 ? " Dias" : " Dia");
}

export default NewsCard;
