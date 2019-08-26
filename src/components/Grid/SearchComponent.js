import React, { useState }from 'react';
import {tableData} from './TableData';


const CLASS_NAMES = {
    SEARCH_MAIN_CONTAINER: 'search-main-container'
}

const SearchComponent = (props) => {

const [groupList, setGroupList] = useState(tableData);
const [filteredGroupNameOrId, setfilteredGroupNameOrId] = useState([]);

    const handleChange = (e) => {
        let currentGroups = [];
        e.preventDefault();
        console.log("value", e.target.value)
        // let filteredGroups = [];

        if (e.target.value !== '') {
            currentGroups = groupList;
            filteredGroupNameOrId = currentGroups.filter(name => {
                const lowercase = name.toLowerCase();
                const filter = e.target.value.toLowerCase();

                return lowercase.includes(filter);
            });
        } else {
            filteredGroupNameOrId = this.StaticRange.groupList;
        }

        setfilteredGroupNameOrId([...filteredGroupNameOrId]);

        // this.setState ({
        //     filteredGroupNameOrId: filteredGroups;
        // })
    };
    return (
       <div>
           <input id='erp'
                  type='text'
                  placeholder="All"
                  onChange={(e) => handleChange(e)}></input>
       </div>
    );
}

export default SearchComponent;