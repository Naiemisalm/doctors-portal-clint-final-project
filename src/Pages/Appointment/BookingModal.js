import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ tritment, date ,setTritment}) => {

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
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for :{name}!</h3>

                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" disabled value={format(date, 'pp')} class="input input-bordered input-accent w-full max-w-xs" />

                            <select name='slot' class="select select-bordered w-full max-w-xs">

                                {
                                    slots.map(slot => <option value={slot}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' placeholder="Your Name" class="input input-bordered input-accent w-full max-w-xs" />
                            <input type="text" name='email' placeholder="Your Email" class="input input-bordered input-accent w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-xs" />
                            <input type="submit" placeholder="Submit" class="btn btn-secondary input-accent w-full max-w-xs" />
                        </form>

                    <div class="modal-action">
                        <label for="booking-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;