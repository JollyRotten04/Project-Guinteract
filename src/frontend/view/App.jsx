import { useState } from 'react'
import './App.css'
import DeleteLater from './components/DeleteLater'

function App() {
  const [help, setHelp] = useState("");
  
  return (
    <div className="App">
      <DeleteLater></DeleteLater>
      {/* <h1>Hello World!</h1> */}
    </div>
  )
}

export default App
