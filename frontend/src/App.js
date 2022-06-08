import './App.css'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Heating from './pages/Heating';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      {/* <Heating /> */}
    </div>
  );
}

export default App;
