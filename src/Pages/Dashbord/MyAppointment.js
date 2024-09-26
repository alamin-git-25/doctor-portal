import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init.js/Firebase.init';
import { useNavigate } from 'react-router-dom';



const MyAppointment = () => {
    const [booking , setBooking] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [signOut] = useSignOut(auth);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?paititan=${user?.email}`,{
              method:'GET',
              headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res =>{
          if(res.status === 401 || res.status === 403){
            signOut();
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return  res.json()
        })
        .then(data => setBooking(data))
        }
    },[user])
    return (
        <div>
            <h2>My Appointment : {booking.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        booking.map((a, index)=> <tr>
        <th>{index + 1}</th>
        <td>{a.paititanName}</td>
        <td>{a.date}</td>
        <td>{a.slot}</td>
        <td>{a.treatment}</td>
      </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;