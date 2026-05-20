import React from 'react'

const Catcard = ({ cat }) => {
  return (
    <article className="cat-card">
      <div className="cat-card-image">
        <img src={cat.image} alt={cat.name} />
      </div>
      <div className="cat-card-content">
        <h2>{cat.name}</h2>
        <span className="cat-origin">{cat.origin}</span>
        <p>{cat.description}</p>
      </div>
    </article>
  )
}

export default Catcard
