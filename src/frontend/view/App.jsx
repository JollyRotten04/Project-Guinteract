import { useState } from 'react'
import './App.css'
import InitialRegistrationPage from './components/InitialRegistrationPage'

function App() {
  const [help, setHelp] = useState("");
  
  return (
    <div className="App">
      {/* ENTRY POINT */}
      <InitialRegistrationPage></InitialRegistrationPage>
    </div>
  )
}

export default App
