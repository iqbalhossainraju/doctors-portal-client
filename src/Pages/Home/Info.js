import React from 'react';
import Clock from '../../assets/icons/clock.svg';
import Location from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const CardTitle = {},
        clock = 'Opening Hours',
        loaction = 'Contact us now',
        phone = 'Visit our location'

    const cardDescription = new Object();
    cardDescription.clockDescription = 'Lorem Ipsum is simply dummy text of the pri';
    cardDescription.locationDescription = 'Brooklyn, NY 10036, United States';
    cardDescription.phoneDescription = "+000 123 456789";


    let object = new Object();
    object["name"] = "Petya";
    object["age"] = 15;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
            <InfoCard description={cardDescription.clockDescription} cardTitle={clock} img={Clock} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard description={cardDescription.locationDescription} cardTitle={loaction} img={Phone} bgClass="bg-accent"></InfoCard>
            <InfoCard description={cardDescription.phoneDescription} cardTitle={phone} img={Location} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;