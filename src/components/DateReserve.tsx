'use client';

import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function DateReserve() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(dayjs());
  const [lastname, setLastname] = useState('');
  const [contact, setContact] = useState('');

  return (
    <div className='bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center'>

  
      <TextField
        label="Name-Lastname"
        name="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        fullWidth
        margin="normal"
        variant="standard" 
      />

   
      <TextField
        label="Contact-Number"
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        fullWidth
        margin="normal"
        variant="standard" 
      />

      <FormControl variant="standard" className='h-[2em] w-[200px]'>
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          name="location"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          inputProps={{ 'aria-label': 'Location' }}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                    />
                </LocalizationProvider>
      </LocalizationProvider>

    
     

    </div>
  );
}
