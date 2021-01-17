import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import Members from "./components/Members/Members"

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <div className="Content">
        <Header/> 
        <Members/> 
      </div>
    </div>
  );
}

export default App;
