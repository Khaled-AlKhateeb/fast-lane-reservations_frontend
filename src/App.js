import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Splash from './components/pages/Splash';
import Register from './components/pages/Register';
import Nav from './components/left/Nav';

function App() {
  return (
    <div className="App">
      <div className="navApp">
        <Nav />
      </div>
      <div className="navRoute">
        <Routes>
          <Route index element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
