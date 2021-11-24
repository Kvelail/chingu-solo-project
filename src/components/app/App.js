import './App.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import Card from '../Card';
import axios from 'axios';

const App = () => {
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async () => {
        const key = 'AIzaSyBckMQCTLmYOP-M2DecRj13OGe9SBfWlSc';

        const base = 'https://www.googleapis.com/books/v1/volumes?';
        const query = `q=${searchTerm}&key=${key}&maxResults=40`;

        const data = await (await axios.get(base + query)).data.items;

        setResults(data);
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
                {results &&
                    results.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default App;
