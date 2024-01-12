import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ setParams }) => {
    const [searchQuery, setSearchQuery] = useState('');

    console.log(searchQuery);

    const handleSumbit = evt => {
        evt.prevenrDefault();
        setParams(searchQuery);
       
    }

    const handleChange = evt => {
        console.log(evt.target.value);
        setSearchQuery(evt.target.value)
    }

    return ( 
        <form onSubmit={handleSumbit} >
            <input
                type='text'
                value={searchQuery}
                placeholder="Enter movie to search"
                onChange={handleChange} />
            <button type='submit'>Search</button>
        </form>
    )
};

SearchForm.propTypes = {
	setParams: PropTypes.func.isRequired,
}

export default SearchForm;