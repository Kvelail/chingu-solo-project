const Card = ({ item }) => {
    return (
        <div className="app__card">
            <div className="app__left">
                <img
                    src={
                        item.volumeInfo.imageLinks
                            ? item.volumeInfo.imageLinks.thumbnail
                            : 'img/no-img.jpg'
                    }
                    alt="book cover"
                    className="app__img"
                />
            </div>
            <div className="app__right">
                <h2 className="app__title">
                    {item.volumeInfo.title
                        ? item.volumeInfo.title
                        : 'No Title'}
                </h2>
                <p className="app__author">
                    By:{' '}
                    {item.volumeInfo.authors &&
                        item.volumeInfo.authors.map((item) => (
                            <span className="app__span" key={item}>
                                {item}
                            </span>
                        ))}
                </p>
                <p className="app__publisher">
                    Published By:{' '}
                    <span className="app__span">
                        {item.volumeInfo.publisher
                            ? item.volumeInfo.publisher
                            : 'No Publisher'}
                    </span>
                </p>
                {item.volumeInfo.infoLink && (
                    <a
                        href={item.volumeInfo.infoLink}
                        className="app__btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        details
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
