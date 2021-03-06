import React from 'react';
import { useState} from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({date, setDate}) => {

    return (
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='max-w-md' src={chair} />
    <div>
    <DayPicker
    mode='single'
    className='mr-16'
    selected={date}
    onSelect={setDate}
    />

    </div>

  </div>

</div>
    );
};

export default AppoinmentBanner;