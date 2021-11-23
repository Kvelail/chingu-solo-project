import './App.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const App = () => {
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
        </div>
    );
};

export default App;
