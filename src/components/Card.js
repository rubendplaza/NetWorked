import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, email, phone, company } = props;
    return (
        <div className='tc dib pa3 ma3 grow shadow-2 card ba bw2'>
            <img alt='Profile Pic' src={`https://avatars.dicebear.com/api/avataaars/${email}.svg?w=250&h=200`}/>
            <div>
                <h2>{name}</h2>
                <p>{company}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;