import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Characters from './components/Characters';

const apiUrl = 'https://rickandmortyapi.com/api'

const App = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [charactersPerPage, setCharactersPerPage] = useState(20)
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      axios.get(apiUrl+`/character/?page=${currentPage}`).then(
        response => {
          setCharacters(response.data.results)
          setNext(response.data.info.next)
          setPrev(response.data.info.prev)
        }
      )
      setLoading(false)
    }

    fetchCharacters()
  }, [])

  const indexOfLastPost = currentPage * charactersPerPage
  const indexOfFirstPost = indexOfLastPost - charactersPerPage
  const currentCharacter = characters.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className=''>
      <section className='container'>
        <Characters characters={currentCharacter} loading={loading} />

        <div className='row justify-content-md-center'>
          <nav aria-label='Page navigation example'>
            <ul className='pagination justify-content-center'>
              <li className={'page-item ' + (prev ? '' : 'disabled')}>
                <button className='page-link' onClick={()=>(1)}>Anterior</button>
              </li>
              <li className='page-item'><a className='page-link'>{ currentPage - 1 }</a></li>
              <li className='page-item'><a className='page-link'>{ currentPage }</a></li>
              <li className='page-item'><a className='page-link'>{ currentPage + 1 }</a></li>
              <li className={'page-item' + (next ? '' : 'disabled')}>
                <button className='page-link' onClick={()=>(1)}>Siguiente</button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default App;
