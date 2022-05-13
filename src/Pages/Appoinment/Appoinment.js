import React, { useState } from 'react';
import App from '../../App';
import AppoinmentBanner from './AppoinmentBanner';
import AvaliableAppoinment from './AvaliableAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvaliableAppoinment date={date}></AvaliableAppoinment>
        </div>
    );
};

export default Appoinment;