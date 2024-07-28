import { useState } from 'react'
import './App.css'
import InitialRegistrationPage from './components/InitialRegistrationPage';

function App() {
  const [help, setHelp] = useState("");
  
  return (
    <div className="App">
      <InitialRegistrationPage></InitialRegistrationPage>
      {/* <h1>Hello World!</h1> */}
    </div>
  )
}

export default App
