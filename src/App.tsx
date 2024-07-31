import React, { useState } from 'react';
import Header from './components/Header';
import axios from 'axios';
import './styles/global.css';
import './App.css';
import SearchBar from './components/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css';

const handleSearch = async (userName: string) => {
 // fetch the repositories of the user
};

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch}/>
      <Header/>
    </div>
  );
}

export default App;
