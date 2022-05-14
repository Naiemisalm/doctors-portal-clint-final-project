import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({ tritment, date ,setTritment}) => {
    const [user, loading, error] = useAuthState(auth);

    const { name, _id,  slots } = tritment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // const name = event.target.name.value

        console.log( _id, name,slot)
        setTritment(null);
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