import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='ma4 search'>
            <input
            className='bw2 pa3 ba' 
            type='search' 
            placeholder='Search Network' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;