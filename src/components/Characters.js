import React from 'react'

const Characters = ({ characters, loading }) => {
  if (loading) {
    return <h2>Loagind... </h2>
  }

  return (
    <div className='row justify-content-md-center'>
      { characters.map( character => (
        <div key={character.id} className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mb-3'>
          <div className='card'>
            {/* <img src={`${character.image}`} className='card-img-top' alt='...' /> */}
            <div className='card-body'>
              <h5 className='card-title'>{ character.name }</h5>
              <p className='card-text'>Origen: { character.origin.name }</p>
              <p className='card-text'>Genero: { character.gender }</p>
              <a href={`/persoanjes/${character.id}`} className='btn btn-primary'>Mas información</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters