import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Investment from './components/Investment';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Investment/>
    </div>
    
  )
}

export default App;
