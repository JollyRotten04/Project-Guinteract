import './App.css'
import InitialRegistrationPage from './src/Initial_Registration_Page/InitialRegistrationPage';
import LoadingScreen from './components/Loading_Screen/LoadingScreen';

function App() {
  return (
    <div className="App">
      {/* ENTRY POINT */}
      <InitialRegistrationPage></InitialRegistrationPage>
      {/* <LoadingScreen></LoadingScreen> */}
    </div>
  )
}

export default App
