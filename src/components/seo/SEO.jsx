import { useEffect } from 'react';
const SEO = ({ type, content, openGraph, twitterOpenGraph }) => {

    content["@context"] = "https://schema.org";
    content["@type"] = `${type}`;

    useEffect(() => {
        const elements = [];



        if (openGraph) {
            Object.keys(openGraph).forEach(key => {
                const value = openGraph[key];
                const htmlElement = document.createElement('meta');
                htmlElement.setAttribute("property", `og:${key}`);
                htmlElement.setAttribute("content", value);
                elements.push(htmlElement);
                document.head.appendChild(htmlElement);
            });
        }

        if (twitterOpenGraph) {
            Object.keys(twitterOpenGraph).forEach(key => {
                const value = openGraph[key];
                const htmlElement = document.createElement('meta');
                htmlElement.setAttribute("name", `twitter:${key}`);
                htmlElement.setAttribute("content", value);
                elements.push(htmlElement);
                document.head.appendChild(htmlElement);
            });
        }


        return () => {
            elements.forEach(element => {
                document.head.removeChild(element);
            });
        }
    })

    return (
        <script type="application/ld+json" >
            {JSON.stringify(content)}
        </script>
    )

}

export default SEO;