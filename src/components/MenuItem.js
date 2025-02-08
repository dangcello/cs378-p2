import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className="d-flex align-items-center border p-3 rounded shadow-sm bg-black">
            <img 
                src={require(`/public/images/${imageName}`)} 
                alt={title} 
                className="img-fluid rounded me-3" 
                style={{ width: '20vh', height: '20vh', objectFit: 'cover' }}
            />
            <div className="flex-grow-1" style={{ marginLeft: '50px' }}>
            <h4 className="mb-1">{title}</h4>
            <p className="mb-1">{description}</p>
            <h5 className="mb-1">${price.toFixed(2)}</h5>
            </div>
            <button className="add-button btn btn-primary">Add</button>
        </div>
    );
};

export default MenuItem;

