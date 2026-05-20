import React from 'react'
import JokesCards from './JokesCards.jsx'

const JokesList = ({ jokes }) => {
  return (
    <div>
      {jokes.map((joke)=>(
        <JokesCards key={joke.id} joke={joke}/>
      ))}
    </div>
  )
}

export default JokesList
