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
          { pageNumbers.map( page => (
            <li key={page} className='page-item'>
              <a onClick={() => { paginate(page) }} className='page-link'>
                { page }
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
