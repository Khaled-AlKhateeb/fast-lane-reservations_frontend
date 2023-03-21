import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

const Form = () => {
  const [value, setValue] = useState(dayjs());
  return (
    <div>
      <form>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="Date mobile"
            inputFormat="YYYY-MM-DD"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            /* eslint-disable react/jsx-props-no-spreading */
            renderInput={(params) => <TextField {...params} />}
            fullWidth
          />
        </LocalizationProvider>
      </form>
    </div>
  );
};
export default Form;
