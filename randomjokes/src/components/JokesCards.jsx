import React from 'react'

const JokeCard = ({ joke }) => {
  return (
    <article className="joke-card">
      <div className="joke-card-content">
        <p className="joke-text">{joke.content}</p>
      </div>
      {joke.type && (
        <div className="joke-type">{joke.type}</div>
      )}
    </article>
  )
}

export default JokeCard
