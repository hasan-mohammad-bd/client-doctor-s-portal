import { format } from 'date-fns';
import React from 'react';

const AvaliableAppoinment = ({date}) => {
    return (
        <div>
                    <p className='text-blue-400 text-center'>You have selected: {format(date, 'PP')}</p>
        </div>
    );
};

export default AvaliableAppoinment;