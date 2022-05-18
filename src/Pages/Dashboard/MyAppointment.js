import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { Link } from "react-router-dom"
 
const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://quiet-stream-55669.herokuapp.com/booking?patient=${user.email}`, {
          method: 'GET',
          headers:{
              'authorization': `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      //================================================
        .then((res) => {
            if(res.status === 401 || res.status === 403){
                signOut(auth)
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            else{
                return res.json()
            }
           
        })
        .then((data) => setAppointments(data));
        //==============================================
    }
  }, [user]);
  return (
    <div>
      <h2>This is my appointment {appointments.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a,index) => (
              <tr>
                  <th>{index+1}</th>
                <th>{a.patientName}</th>
                <th>{a.patient_email}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {(a.price && !a.paid ) && <Link to={`/dashboard/payment/${a._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                  {(a.price && a.paid ) && <span className="text-success">Paid</span>}
                  
                  </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
