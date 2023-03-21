import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const Form = () => {
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
    
  <div>
    <form>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Date mobile"
          inputFormat="YYYY-MM-DD"
          // eslint-disable-next-line no-undef
          value={ParseDate(now)}
          // eslint-disable-next-line no-unused-vars
          onChange={(val) => {}}
          fullWidth
        />
      </LocalizationProvider>

{vehicles.map((veh) => (
                    <select className="vehicleSelect">
                        {veh.name}
                    </select>
                ))}
    </form>
  </div>
);
}
export default Form;
