import React from 'react'
import Mealscard from './mealscard'

const MealsList = ({meals}) => {
  return (
    <div className="meals-container">
      {meals.map((meal)=>(
        <Mealscard key={meal.idMeal} meal={meal}/>
      ))}
    </div>
  )
}

export default MealsList
