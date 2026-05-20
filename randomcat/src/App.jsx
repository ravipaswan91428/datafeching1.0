import { useEffect, useState } from 'react'
import CatCard from './components/catCard.jsx'

function App() {
  const [cats, setCats] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.freeapi.app/api/v1/public/cats')
      .then((res) => res.json())
      .then((data) => {
        setCats(data.data.data)
        setCurrentIndex(0)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching cats:', error)
        setLoading(false)
      })
  }, [])

  const handleRefresh = () => {
    if (cats.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cats.length)
    }
  }

  const currentCat = cats.length > 0 ? cats[currentIndex] : null

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>🐱 Discover Cats</h1>
        <p>Explore amazing cat breeds from around the world</p>
      </header>
      <section className="cat-display-section">
        {loading ? (
          <div className="loading">Loading a purrfect cat...</div>
        ) : currentCat ? (
          <>
            <CatCard cat={currentCat} />
            <button className="refresh-btn" onClick={handleRefresh}>
              ✨ Next Cat
            </button>
          </>
        ) : (
          <div className="error">No cats available</div>
        )}
      </section>
    </main>
  )
}

export default App
