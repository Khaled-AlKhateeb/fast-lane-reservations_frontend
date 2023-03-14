import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Splash from './components/pages/Splash';
import Register from './components/pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>

  );
}

export default App;
