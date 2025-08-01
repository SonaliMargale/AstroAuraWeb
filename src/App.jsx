
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import LandingPage from './Pages/LandingPage'

function App() {


  return (
        
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>

      

     
    
  )
}

export default App
