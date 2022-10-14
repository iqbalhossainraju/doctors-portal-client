import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary font-blod">{children}</button>
        </div>
    );
};

export default PrimaryButton;