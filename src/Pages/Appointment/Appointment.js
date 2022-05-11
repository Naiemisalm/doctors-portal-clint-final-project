import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvalableAppointment from './AvalableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvalableAppointment date={date}></AvalableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;