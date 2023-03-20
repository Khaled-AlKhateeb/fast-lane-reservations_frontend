import React, { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import { useParams } from "react-router-dom";

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicleDetails, setVehicleDetails] = useState([]);
  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await publicRequest.get(`/vehicles/${id}`);
        setVehicleDetails(response.data);
        return response;
      } catch (error) {
        return error;
      }
    };
    fetchVehicleDetails();
  }, [id]);

  return (
    <section>
      {vehicleDetails.map((vehicle) => (
        <>
          <div className="vehicle-name">
            <h3>{vehicle.name}</h3>
            <span className="text">
              <i>
                $-
                {vehicle.price} upon reservations!
              </i>
            </span>
          </div>
          <div className="vehicle-model">
            <span className="text">
              Genre:
              {vehicle.model}
            </span>
          </div>
          <div className="product-date">
            <span className="text">
              Language:
              {vehicle.year}
            </span>
          </div>
          <div className="horse-power">
            <span className="text">
              Price:
              {vehicle.horse_power}
            </span>
          </div>

        </>
      ))}
        <div className='action'>
            <a href=''>Reserve</a>
        </div>
    </section>
  );
};

export { VehicleDetails };
