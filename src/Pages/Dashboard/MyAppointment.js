import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const uri = (`http://localhost:5000/booking?patient=${user.email}`)
    console.log(uri)
    if (user) {
      fetch(uri, {
        method: 'GET',
        headers: {
          'authoraization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
        .then(data => {

          setAppointments(data);
        });
    }
  }, [user])
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
              appointments.map((appointment, index) => <tr>
                <th>{index + 1}</th>
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