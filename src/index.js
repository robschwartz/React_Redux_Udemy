import React from 'react';
import ReactDOM from'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBvXzwO8iREYY1aKEYkAFTBfebUB-vYdJQ';

// Create new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
