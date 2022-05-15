import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);

    const [appointments, setAppointments] = useState([]);
    useEffect( () =>{
      if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data => setAppointments(data))
      }

    },[user])
    return (
        <div>
            <h2>My Appoinment:{appointments.length} </h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Dtae</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((appointment, index)=><tr>
                <th>{index +1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.tritment}</td>
              </tr>)
        }
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;