import './App.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import Card from '../Card';

const App = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="app">
            <h1 className="app__heading">book finder</h1>
            <form className="app__form">
                <input
                    type="text"
                    className="app__input"
                    placeholder="Enter book name..."
                    autoFocus
                />
                <button className="app__submit">
                    <span className="app__submit-span">
                        <BsFillArrowRightCircleFill />
                    </span>
                </button>
            </form>
            <div className="app__output">
                {results.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default App;
