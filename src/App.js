/* eslint-disable */
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Reservations from './components/pages/Reservations';
import Form from './components/pages/Form';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Splash from './components/auth/Splash'
import Nav from './components/left/Nav';
import Vehicles from './components/pages/Vehicles';
import AddVehicle from './components/pages/AddVehicle';
import  VehicleDetails  from './components/pages/VehicleDetails';

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

            <Route path={"/form"} element={currentUser ? <Form /> : <Navigate to="/" />} />

            <Route index element={currentUser ? <Vehicles /> : <Splash />} />
            <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
            <Route path="/addVehicle" element={currentUser ? <AddVehicle /> : <Navigate to="/" /> } />
            <Route path="/details/:id" element={<VehicleDetails /> } />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;
