import React from 'react'
import CatCard from './catCard'

const CatList = ({ cats }) => {
  return (
    <section className="cat-list">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </section>
  )
}

export default CatList
