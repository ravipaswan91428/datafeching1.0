import { useEffect, useState } from 'react'
import QuotesList from './conponents/QuotesList'
import './App.css'

function App() {

  const [quotes, setQuotes] = useState([])

  useEffect(()=>{
    fetch('https://api.freeapi.app/api/v1/public/quotes')
    .then((res)=> res.json())
    .then((data)=>{
      setQuotes(data.data.data)
      console.log(data.data.data)
    })
  },[])
  

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Quotes of the Day</h1>
        <p className="app-subtitle">Inspiring words for tech enthusiasts</p>
      </header>
      <main className="app-main">
        <QuotesList quotes={quotes}/>
      </main>
    </div>
  )
}

export default App
