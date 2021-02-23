import NewsCard from "./NewsCard";
import AdCard from "./AdCard";
import { useState, useEffect } from "react";

const NewsArea = ({ type = "latest", splitQuantity, setLoading, page = 0, source }) => {
    const [display, setDisplay] = useState(splitQuantity ? [[]] : []);

    useEffect(() => {
        let loadedDisplay = [];

        if (page && page > 0) {
            loadedDisplay = [...display];
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setDisplay(splitQuantity ? [[]] : []);
        }

        if (setLoading) setLoading(true);

        async function fetchData() {
            const query =
                `type=${encodeURIComponent(type)}&page=${encodeURIComponent(page)}` + (source ? `&from=${encodeURIComponent(source.toLocaleLowerCase())}` : "");
            const url = "https://bizwirer.com/api.php?" + query;
            console.log(url);
            const result = await fetch(url);
            const json = await result.json();
            console.log(json);
            let splitedDisplay = [];
            json.forEach((item, index) => {
                if (index > splitQuantity * 3) {
                    return;
                }
                if (splitQuantity && splitQuantity > 0) {
                    splitedDisplay.push(
                        <div className="col-md-4 mb-3" key={item.id}>
                            <NewsCard
                                content={item.text}
                                date={item.date}
                                link={item.link}
                                source={item.source}
                                views={item.views}
                                image_url={item.image_link ? item.image_link : ""}
                            />
                        </div>
                    );
                    if (splitedDisplay.length === splitQuantity) {
                        loadedDisplay.push(splitedDisplay);
                        splitedDisplay = [];
                    }
                } else {
                    loadedDisplay.push(
                        <NewsCard
                            content={item.text}
                            date={item.date}
                            link={item.link}
                            source={item.source}
                            views={item.views}
                            image_url={item.image_link ? item.image_link : ""}
                        />
                    );

                    if (index % 10 === 0) {
                        loadedDisplay.push(<AdCard />);
                    }
                }
            });
            setDisplay(loadedDisplay);
            if (setLoading) setLoading(false);
        }
        fetchData();
    }, [type, splitQuantity, page, setLoading, source]);

    return (
        <x>
            {display && display.length > 0 && (
                <div className="row">
                    {splitQuantity && (
                        <div className="col-12">
                            <div id={type} className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    {display.map((__, i) => {
                                        return (
                                            <li
                                                data-target={`#${type}`}
                                                data-slide-to={i}
                                                style={{
                                                    backgroundColor: "#202020",
                                                }}
                                                key={i}
                                                className={i === 0 ? "active" : ""}
                                            ></li>
                                        );
                                    })}
                                </ol>
                                <div className="carousel-inner">
                                    {display.map((itemList, i) => {
                                        return (
                                            <div className={i === 0 ? "carousel-item py-4 px-2 active" : "carousel-item py-4 px-2"} key={i}>
                                                <div className="row">{itemList.map((item) => item)}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {!splitQuantity &&
                        display.map((item, index) => {
                            return (
                                <div className="col-md-4 mb-3" key={index}>
                                    {item}
                                </div>
                            );
                        })}
                </div>
            )}
        </x>
    );
};

export default NewsArea;
