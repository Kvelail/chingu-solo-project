import './App.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import Card from '../Card';
import axios from 'axios';
import Spinner from '../Spinner';

const App = () => {
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getResults = async () => {
        const key = 'AIzaSyBckMQCTLmYOP-M2DecRj13OGe9SBfWlSc';

        setLoading(true);

        try {
            const base =
                'https://www.googleapis.com/books/v1/volumes?';
            const query = `q=${searchTerm}&key=${key}&maxResults=40`;

            const response = await axios.get(base + query);
            const data = response.data.items;

            if (data) {
                setError(false);
                setLoading(false);
                setResults(data);
            } else {
                setError(true);
                setLoading(false);
                setResults(null);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        e.target.elements.book.value = '';

        getResults();
    };

    const handleChange = (e) => {
        const searchTerm = e.target.value.split(' ').join('');

        setSearchTerm(searchTerm);
    };

    return (
        <div className="app">
            <h1 className="app__heading">book finder</h1>
            <form className="app__form" onSubmit={handleSubmit}>
                <input
                    name="book"
                    type="text"
                    className="app__input"
                    placeholder="Enter book name..."
                    autoFocus
                    onChange={handleChange}
                />
                <button className="app__submit">
                    <span className="app__submit-span">
                        <BsFillArrowRightCircleFill />
                    </span>
                </button>
            </form>
            <div className="app__output">
                {error && (
                    <div className="app__error-box">
                        <p className="app__error">
                            Wrong input, please try again.
                        </p>
                    </div>
                )}
                {loading ? (
                    <div className="app__loading">
                        <Spinner />
                    </div>
                ) : (
                    results &&
                    results.map((item) => (
                        <Card key={item.id} item={item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default App;
