import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Infos = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCards cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCards>
            <InfoCards cardTitle="Our Location" bgClass="bg-accent" img={marker}></InfoCards>
            <InfoCards cardTitle="Contract Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCards>
        </div>
    );
};

export default Infos;