'use client'

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function DateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg w-full max-w-xl mx-auto p-10">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                    />
                </LocalizationProvider>
        </div>
    );
}