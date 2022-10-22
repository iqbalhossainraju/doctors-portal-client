import React from 'react';
import Clock from '../../assets/icons/clock.svg';
import Location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const cardDescription = new Object();
    cardDescription.clockDescription = 'Lorem Ipsum is simply dummy text of the pri';
    cardDescription.locationDescription = 'Brooklyn, NY 10036, United States';
    cardDescription.phoneDescription = "+000 123 456789";
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard description={cardDescription.clockDescription} cardTitle='Opening Hours' img={Clock} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard description={cardDescription.locationDescription} cardTitle='Contact us now' img={Location} bgClass="bg-[#3A4256]"></InfoCard>
            <InfoCard description={cardDescription.phoneDescription} cardTitle='Visit our location' img={phone} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;