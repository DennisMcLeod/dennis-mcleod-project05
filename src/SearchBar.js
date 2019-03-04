import React from 'react'

const SearchBar = props => {
    return(
        <div className="search-container">
            <input type="text" name="search" placeholder='Search' onChange={() => { props.handleChange() }}/>
        
        </div>
    )
}

export default SearchBar