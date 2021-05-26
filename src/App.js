import React, { useState, useEffect } from 'react';
// import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

const apiUrl = 'https://rickandmortyapi.com/api'

const App = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [charactersPerPage] = useState(20)
  const [totalCharacters, setTotalCharacters] = useState()

  useEffect(() => {
    fetchCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const fetchCharacters = async () => {
    setLoading(true)
    const response = await axios.get(apiUrl+`/character/?page=${currentPage}`)
    setCharacters(response.data.results)
    setTotalCharacters(response.data.info.count)
    setLoading(false)
  }

  const getPaginate = pageNumber => {
    setCurrentPage( pageNumber )
  }

  return (
    <div className=''>
      <section className='container'>
        <Characters characters={characters} loading={loading} />
        { currentPage }

        <Pagination charactersPerPage={charactersPerPage} totalCharacters={totalCharacters} paginate={getPaginate} />
      </section>
    </div>
  );
}

export default App;
