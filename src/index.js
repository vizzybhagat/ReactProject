import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyCQLJuwqLdP3fkIy1NDpZ8_uvNBEtgY8_4';

const App = () => {
  return (
    <div>
      <SearchBar />
  </div>
);
}

ReactDOM.render(<App />, document.querySelector('.container'));
