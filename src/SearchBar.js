import React from 'react'

const SearchBar = props => {
    return(
        <input type="text" name="search" placeholder='Search' onChange={() => { props.handleChange() }}/>
    )
}

export default SearchBar