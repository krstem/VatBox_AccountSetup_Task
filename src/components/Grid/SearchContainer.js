import React from 'react';
import SearchComponent from './SearchComponent';


const CLASS_NAMES = {
    SEARCH_MAIN_CONTAINER: 'search-main-container'
}

const SearchContainer = (props) => {

    return (
        <div className={CLASS_NAMES.SEARCH_MAIN_CONTAINER}>
            {/* <div>Entity</div> */}
            {/* <SearchComponent /> */}
        </div>
    );
}

export default SearchContainer;