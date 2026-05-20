import { useEffect, useState } from 'react'
import Cards from './components/cards'
import './App.css'

function App() {
  
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  

  return (
    <div className="app-container">
      <h1>User Directory</h1>
      <div className="user-grid">
        {user.map((users) => (
          <Cards
            key={users.id}
            name={users.name}
            email={users.email}
            phone={users.phone}
            city={users.address?.city}
            company={users.company?.name}
          />
        ))}
      </div>
    </div>
  )
}

export default App
