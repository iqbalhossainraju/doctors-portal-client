import React from 'react';
import background from '../../assets/images/bg.png';
import Chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const banner = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${background})`, backgroundSize: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="sm:max-w-sm rounded-lg shadow-2xl" />
                <div className="mr-10">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default banner;