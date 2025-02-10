import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Investment from './components/Investment';
import Invest from './components/Invest';
import About from './components/About';







function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Invest/>
      <About/>
    </div>
    
  )
}

export default App;
