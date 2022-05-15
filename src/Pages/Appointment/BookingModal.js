import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ tritment, date, setTritment }) => {
    const [user, loading, error] = useAuthState(auth);

    const formatDate = format(date, 'pp')

    const { name, _id, slots } = tritment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)

        const booking = {
            tritmentId: _id,
            tritment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                // close to madal
                console.log(data)
                if(data.success) {
                    toast(`Appoinment is set ${formatDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appoinment on  ${data.booking?.data} at ${data.booking?.slot}`)
                }
                setTritment(null);
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for :{name}!</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'pp')} className="input input-bordered input-accent w-full max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ""} className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email || ""} className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="btn btn-secondary input-accent w-full max-w-xs" />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;