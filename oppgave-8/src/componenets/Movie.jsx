import React from 'react'

function Movie({title, actor}) {
  return (
    <div>
        <h2>Tittel : {title}</h2>
        <p>Skuespiller : {actor}</p>
    </div>
  )
}

export default Movie