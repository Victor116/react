import React from 'react'

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage ); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='row justify-content-md-center'>
      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-center'>
          {/* <li className={'page-item ' + (prev ? '' : 'disabled')}>
            <button className='page-link' onClick={()=>(1)}>Anterior</button>
          </li> */}
          { pageNumbers.map( page => (
            <li key={page} className='page-item'>
              <a onClick={() => { paginate(page) }} className='page-link' href="!#">
                { page }
              </a>
            </li>
          ))}
          {/* <li className={'page-item' + (next ? '' : 'disabled')}>
            <button className='page-link' onClick={()=>(1)}>Siguiente</button>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
