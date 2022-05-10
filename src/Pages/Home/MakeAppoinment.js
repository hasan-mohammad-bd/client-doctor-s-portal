import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim illum quaerat porro! Molestias, odit? Eveniet labore deserunt cumque assumenda explicabo optio sed quos. Et temporibus doloribus explicabo rerum excepturi.</p>
                <PrimaryButton>Get Starts</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppoinment;