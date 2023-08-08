import React from 'react';
import Business from './Business';
import './BusinessList.css';

function BusinessList(props) {
    const businesslist = props.businesses.map(business => <Business business={business} key={business.name}/>)

    return (
        <div className='cards'>
            {businesslist}
        </div>
    );
}

export default BusinessList;