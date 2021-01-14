import { useState } from 'react';

const AdCard = () => {
    const [cardStyle, setCardStyle] = useState(cardCustomStyle);

    return (
        <a
            href=""
            rel="noreferrer"
            target="_blank"
            className="border-primary rounded card h-100"
            style={cardStyle}
            onMouseEnter={() => {
                setCardStyle(cardCustomStyleHover);
            }}
            onMouseLeave={() => {
                setCardStyle(cardCustomStyle);
            }}>

            <span style={{ position: "absolute", top: "-4%", left: "-4%" }} className="badge p-1 badge-primary rounded">
                Patrocinado
            </span>
            <div className="card-body text-primary font-weight-bold">

            </div>
        </a>
    );

}



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

export default AdCard;