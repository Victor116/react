import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const apiUrl = 'https://rickandmortyapi.com/api/'

class App extends Component {

  state = {
    data: [],
    page: 1,
    next: '',
    prev: ''
  }

  GetCharacters = () => {
    axios.get(apiUrl+`/character/?page=${this.state.page}`).then(
      response => {
        this.setState({ data: response.data.results })
        this.setState({ next: response.data.info.next })
        this.setState({ prev: response.data.info.prev })
      }
    )
  }

  GetPage = (number) => {
    this.setState({ page: this.state.page + number })
    this.GetCharacters()
    window.scrollTo(0, 0)
  }

  componentDidMount () {
    this.GetCharacters()
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className=''>
        <section className='container'>
          <div className='row justify-content-md-center'>
            { this.state.data.map( character => {
              return (
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'>
                  <div className='card'>
                    <img src={`${character.image}`} className='card-img-top' alt='...' />
                    <div className='card-body'>
                      <h5 className='card-title'>{ character.name }</h5>
                      <p className='card-text'>Origen: { character.origin.name }</p>
                      <p className='card-text'>Genero: { character.gender }</p>
                      <a href={`/persoanjes/${character.id}`} className='btn btn-primary'>Mas información</a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='row justify-content-md-center'>
            <p className='card-text'>Genero: { this.state.prev }</p>
            <p className='card-text'>Genero: { this.state.next }</p>
            <p className='card-text'>Pagina: { this.state.page }</p>
            <nav aria-label='Page navigation example'>
              <ul className='pagination justify-content-center'>
                <li className={'page-item ' + (this.state.prev ? '' : 'disabled')}>
                  <button className='page-link' onClick={()=> this.GetPage(-1)}>Anterior</button>
                </li>
                <li className='page-item'><a className='page-link'>{ this.state.page - 1 }</a></li>
                <li className='page-item'><a className='page-link'>{ this.state.page }</a></li>
                <li className='page-item'><a className='page-link'>{ this.state.page + 1 }</a></li>
                <li className={'page-item' + (this.state.next ? '' : 'disabled')}>
                  <button className='page-link' onClick={()=> this.GetPage(1)}>Siguiente</button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
