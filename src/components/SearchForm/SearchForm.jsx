import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ setParams }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSumbit = evt => {
        evt.prevenrDefault();
        setParams(searchQuery);
    }

    const handleChange = evt => {
        setSearchQuery(evt.target.value.trim().toLowerCase())
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