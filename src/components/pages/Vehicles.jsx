/* eslint-disable */
import React from 'react'
import './styles/vehicle.css'
import img from '../../assets/bike.jpg'

const Vehicles = () => {
    const vehicles = [
        {
            image: img,
            name: 'Toyota',
            desc: 'Just a random vehicle with nice specs'
        },
        {
            image: img,
            name: 'Toyota',
            desc: 'Just a random vehicle with nice specs'
        },
        {
            image: img,
            name: 'Toyota',
            desc: 'Just a random vehicle with nice specs'
        }
    ]
    return (
        <div className="vehiclesDiv">
            <h2>All Vehicles</h2>
            <div className="vehicles">
                {vehicles.map((veh) => (
                    <div className="vehicleDiv">
                        <img src={veh.image} className="vehicleImg" alt="" />
                        <h3>{veh.name}</h3>
                        <p>{veh.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehicles