import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeApointment = () => {
    return (
        <section className="flex justify-center items-center" style={{ background: `url(${appointment})` }}>
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-150px]" src={doctor} alt="doctor" />
            </div>
            <div className="flex-1 text-white p-8">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl">Make an appointment Today</h2>
                <p className="py-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeApointment;