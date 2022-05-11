import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvalableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [tritment, setTritment] = useState(null)
    useEffect( () =>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
           <h3 className='text-center text-xl text-secondary'> Available Appointments on  {format(date,'pp')}</h3>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   services.map(service=> <Service
                   key={service._id}
                   service={service}
                   setTritment ={setTritment}
                   ></Service>)
               }
           </div>
           {tritment && <BookingModal tritment={tritment}></BookingModal>}
        </div>
    );
};

export default AvalableAppointment;