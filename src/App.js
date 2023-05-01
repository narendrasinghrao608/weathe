import './App.js';
import Home from './componets/Home.js';
import Navbar from './componets/Navbar.js';
import Allstate from './contextapi/allstate.js';

function App() {
  return (
    <Allstate>
      <Navbar/>
      <Home/>
    </Allstate>
  );
}

export default App;
