import React from 'react';

const Service = ({ service, setTritment }) => {
    const {name, slots} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span> {slots[0]}</span>
                        :
                        <span className='text-red-500'>try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'speces' : 'space'} avalable </p>
                <div class="card-actions justify-center">
                
                     <label
                      for="booking-modal"
                      disabled={slots.length === 0}
                      onClick={()=>{setTritment(service)}}
                     class="btn btn-secondary text-white uppercase ">Book Appointment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;