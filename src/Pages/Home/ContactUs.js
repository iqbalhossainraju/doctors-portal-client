import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section className="my-36" style={{ background: `url(${appointment})` }}>
            <div className="p-5">
                <div className="text-center">
                    <h4 className="text-xl font-bold text-primary">Contact Us</h4>
                    <h2 className="text-3xl text-white">Stay connected with us</h2>
                </div>

                <div className="text-center mt-5">
                    <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="Subject" className="input w-full max-w-xs my-5" />
                    <br />
                    <textarea className="textarea w-full max-w-xs py-8 mb-5" placeholder="Your Message"></textarea>
                    <br />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;