import React from 'react';

const Logo = ({ title, imageName }) => {
    return (
        <div className="logo-container text-center">
            <img 
                src={require(`/public/images/${imageName}`)} 
                alt="Logo" 
                className="logo-img"
            />
            <h2 className="logo-text">{title}</h2>
        </div>
    );
};

export default Logo;
