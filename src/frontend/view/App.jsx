import './App.css'
// import { Outlet } from "react-router-dom";
// import InitialRegistrationPage from './src/Initial_Registration_Page/InitialRegistrationPage';
import LoadingScreen from './src/Loading_Screen/LoadingScreen'

function App() {
  return (
    <div className="App">
      {/* ENTRY POINT */}
      {/* <InitialRegistrationPage></InitialRegistrationPage> */}
      <LoadingScreen></LoadingScreen>
    </div>
  )
}
	

export default App
