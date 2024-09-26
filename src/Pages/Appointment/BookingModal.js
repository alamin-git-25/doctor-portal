import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init.js/Firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ Treatment, date, setTritment }) => {
    const [user] = useAuthState(auth);
    const {_id, name, slot } = Treatment;
    const formattedDate = format(date ,'PP')
    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.sloot.value;
        
        const booking = {
            treatmentId:_id,
            treatment:name,
            date:formattedDate,
            slot,
            paititan:user.email,
            paititanName:user?.displayName,
            phone:e.target.phone.value
        }
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success===true){
                toast.success(`Appointment is set,${formattedDate} at ${slot} `,{
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                });
            }
            else{
                toast.error(`Alredy Have on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            setTritment(null);
        })
       
        ;
    }

    return (
        <div>
            <input type="checkbox" id="bookin_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <label htmlFor="bookin_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input
                            type="text"
                            value={format(date, 'PP')}
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <select name='sloot' className="select select-primary w-full max-w-xs">
                            {
                                slot.map((slots, index) => <option value={slots} key={index}>{slots}</option>)
                            }
                        </select>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            name='name'
                            className="input input-bordered w-full max-w-xs" />
                        <input
                            type="email"
                            name='email'
                            value={user?.email}
                            readOnly
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name='phone'
                            className="input input-bordered input-primary w-full max-w-xs" />
                        <input
                            type="submit"
                            value='CONFIRM'
                            placeholder="Type here"
                            className="btn btn-primary input-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;