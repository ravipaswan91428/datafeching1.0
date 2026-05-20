import { useEffect, useState } from 'react'
import JokeCard from './components/JokesCards.jsx'

function App() {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchJoke = () => {
    setLoading(true)
    fetch('https://api.freeapi.app/api/v1/public/randomjokes')
      .then((res) => res.json())
      .then((data) => {
        if (data.data.data && data.data.data.length > 0) {
          setJoke(data.data.data[0])
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching joke:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Laugh Out Loud</h1>
        <p>Get a fresh dose of humor every refresh</p>
      </header>
      <section className="joke-section">
        {loading ? (
          <div className="loading">Loading a funny joke...</div>
        ) : joke ? (
          <JokeCard joke={joke} />
        ) : (
          <div className="error">No joke available</div>
        )}
      </section>
      <button className="refresh-btn" onClick={fetchJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Get Another Joke'}
      </button>
    </main>
  )
}

export default App
