import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div class="hero min-h-screen" style={{ background: `url(${chair})`, backgroundSize: 'cover' }}>

            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />

                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;