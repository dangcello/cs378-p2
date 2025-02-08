import React from 'react';

const Logo = ({ title, subtitle, imageName }) => {
    return (
        <div className="logo-container text-center">
            <img 
                src={require(`/public/images/${imageName}`)} 
                alt="Logo" 
                className="logo-img"
            />
            <h2 className="logo-text">{title}</h2>
            <h3 className="logo-text1">{subtitle}</h3>
        </div>
    );
};

export default Logo;
