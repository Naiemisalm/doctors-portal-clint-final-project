import React from 'react';
import doctors from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
        
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctors} alt='' />
            </div>
            <div className='flex-1 px-5'>
                <h2 className='text-l text-primary text-bold'>Appointment</h2>
                <h3 className='text-4xl text-white py-5'>Make an appointment Today</h3>
                <p className='text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button> Get Started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;