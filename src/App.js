/* eslint-disable */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Reservations from './components/pages/Reservations';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Splash from './components/auth/Splash'
import Nav from './components/left/Nav';

function App() {
  const currentUser = false;
  return (
    <div className="AppDiv">
      {currentUser
        ?
        (
          <div className="App">
            <div className="navApp">
              <Nav />
            </div>
            <div className="navRoute">
              <Routes>
                <Route path="/reservations" element={<Reservations />} />
              </Routes>
            </div>
          </div>
        )
        :
        (
          <Routes>
            <Route index element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}

    </div>

  );
}

export default App;
