import React from 'react';

const InfoCard = ({ img, cardTitle, description, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className="pl-5">
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title uppercase">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;