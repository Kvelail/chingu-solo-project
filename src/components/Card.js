const Card = ({ item }) => {
    return (
        <div className="app__card">
            <div className="app__left">
                <img
                    src={item.img}
                    alt="book cover"
                    className="app__img"
                />
            </div>
            <div className="app__right">
                <h2 className="app__title">{item.title}</h2>
                <p className="app__author">By: {item.author}</p>
                <p className="app__publisher">
                    Published By: {item.publisher}
                </p>
                <a href={item.link} className="app__btn">
                    details
                </a>
            </div>
        </div>
    );
};

export default Card;
