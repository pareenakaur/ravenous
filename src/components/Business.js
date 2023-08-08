import React from 'react';
import './Business.css';

function Business(props){
    return (
        <div className='restaurant-container'>
            <div className='restaurant-details'>
                <div className='image-container'>
                    <img src={props.business.imageSrc} alt='no display'/>
                </div>
                <h1 className='biz-name'>{props.business.name}</h1>
                <div className='col'>
                    <div className='left-col'>
                        <p>{props.business.address}</p>
                        <p>{props.business.city}</p>
                            <p>{props.business.state} {props.business.zipcode}</p>
                    </div>
                    <div className='right-col'>
                        <div className='gold-bold'>
                            <h1>{props.business.category.toUpperCase()}</h1>
                            <p>{props.business.rating} stars</p>
                        </div>
                        <p>{props.business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;