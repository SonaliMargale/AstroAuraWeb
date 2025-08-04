
import { Route,Routes } from 'react-router-dom'
import './App.css'
// import Chatbot from './Pages/Chatbot'

import Dashboard from './Pages/Dashboard'
import LandingPage from './Pages/LandingPage'
import BirthLocationPage from './Pages/BirthLocationPage'
import LoadingPage from './Pages/LoadingPage'
import Chatbot from './Pages/Chatbot'

function App() {


  return (
        
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='birth-location' element={<BirthLocationPage/>} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>

      // <Chatbot />
     
     

     
    
  )
}

export default App
