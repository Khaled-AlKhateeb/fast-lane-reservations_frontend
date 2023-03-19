/* eslint-disable */
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Reservations from './components/pages/Reservations';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Splash from './components/auth/Splash'
import Nav from './components/left/Nav';
import Vehicles from './components/pages/Vehicles';

function App() {
  const { currentUser } = useSelector((state) => state.user)
  console.log(currentUser)
  return (
    <div className="AppDiv">
      <div className="App">
        {currentUser && <div className="navApp">
          <Nav />
        </div>}
        <div className="navRoute">
          <Routes>
            <Route path={"/reservations"} element={currentUser ? <Reservations /> : <Navigate to="/" />} />
            <Route index element={currentUser ? <Vehicles /> : <Splash />} />
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;
