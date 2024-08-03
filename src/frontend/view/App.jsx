import './App.css'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">  {/*This is the entry point of the nested routes */}
      <Outlet/>
    </div>
  )
}

export default App
