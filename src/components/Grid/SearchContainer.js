import React from 'react';
import SearchComponent from './SearchComponent';


const CLASS_NAMES = {
    SEARCH_MAIN_CONTAINER: 'search-main-container'
}

const SearchContainer = (props) => {

    return (
        <div className={CLASS_NAMES.SEARCH_MAIN_CONTAINER}>
            {/* <span>Entity</span> */}
            {/* <SearchComponent title={'ERP #'} name={'erp'}/>
            <SearchComponent title={'Entity Name'} name={'legalName'}/>
            <SearchComponent title={'Country'} name={'country'}/> */}
        </div>
    );
}

export default SearchContainer;