import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ setParams }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // console.log(searchQuery);

    const handleSumbit = evt => {
        evt.preventDefault();
        setParams(searchQuery);
       
    }

    const handleChange = evt => {
        // console.log(evt.target.value);
        setSearchQuery(evt.target.value)
    }

    return ( 
        <form className={ css.searchForm} onSubmit={handleSumbit} >
            <input
                className={css.searchInput}
                type='text'
                value={searchQuery}
                placeholder="Enter movie to search"
                onChange={handleChange} />
            <button className={ css.searchBtn}type='submit'>Search</button>
        </form>
    )
};

SearchForm.propTypes = {
	setParams: PropTypes.func.isRequired,
}

export default SearchForm;