import React, { useState } from 'react'
import './mealscard.css'

const Mealscard = ({meal}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="meal-card">
        <div className="meal-header">
            <h2 className="meal-title">{meal.strMeal}</h2>
            <span className="meal-category">{meal.strCategory}</span>
        </div>
        
        <div className="meal-content">
            <p className={`meal-instructions ${showMore ? 'expanded' : 'collapsed'}`}>
                {meal.strInstructions}
            </p>
        </div>

        <button 
            className="see-more-btn"
            onClick={() => setShowMore(!showMore)}
        >
            {showMore ? 'See Less' : 'See More'}
        </button>
    </div>
  )
}

export default Mealscard
