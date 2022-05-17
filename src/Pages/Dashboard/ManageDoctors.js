import React from 'react';
import { useQuery} from 'react-query';
import Loading from '../../Pages/Shared/Loading';
import DoctorRows from './DoctorRows';

const ManageDoctors = () => {
    const {data: doctors, isLoading, refetch} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(doctors);

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'> Manage Doctors {doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            doctors?.map((doctor, index) => <DoctorRows doctor={doctor} refetch={refetch} index={index} key={doctor._id}></DoctorRows>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctors;