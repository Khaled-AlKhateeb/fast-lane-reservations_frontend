/* eslint-disable */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Splash from './components/pages/Splash';
import Register from './components/pages/Register';
import Nav from './components/left/Nav';
import Reservations from './components/reservation/Reservations';

function App() {
  const currentUser = true;
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
                <Route path="/register" element={<Register />} />
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
