import { useEffect, useState } from "react"
import MealsList from "./components/mealsList"
import './App.css'

function App() {
  
  const [meals, setMeals] = useState([])

  useEffect(()=>{
    fetch('https://api.freeapi.app/api/v1/public/meals')
    .then((res)=>res.json())
    .then((data)=>{
      setMeals(data.data.data)
      console.log(data.data.data)
    })
  },[])

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🍽️ Meal Discovery</h1>
        <p className="app-subtitle">Explore delicious recipes and cooking instructions</p>
      </header>
      <main className="app-main">
        <MealsList meals={meals}/>
      </main>
    </div>
  )
}

export default App
