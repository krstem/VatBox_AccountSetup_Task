import React, { useState }from 'react';
import {tableData} from './TableData';
import Icon from '../Icon';


const SearchComponent = (props) => {
    const [groupList, setGroupList] = useState(tableData);
    let [filteredGroupNameOrId, setfilteredGroupNameOrId] = useState([]);
    let currentGroups = [];

    const handleChange = (e, name) => {
        const filter = e.target.value.toLowerCase();
        let lowercase;
        e.preventDefault();
        if (e.target.value !== '') {
            currentGroups = groupList;
            filteredGroupNameOrId = currentGroups.filter(item => {
                if (name === 'erp') {
                    lowercase = item.erp.toLowerCase();
                    console.log("ERP", lowercase)
                } else if(name === 'legalName') {
                    lowercase = item.legalName.toLowerCase();
                    console.log('LEGAL NAME', lowercase)
                } else {
                    lowercase = item.country.toLowerCase();
                    console.log("country", lowercase)
                } 
                    

                return lowercase.includes(filter);
            });
        } else {
            filteredGroupNameOrId = groupList;
        }

        setfilteredGroupNameOrId([...filteredGroupNameOrId]);

    };
    console.log("NEWlIST", filteredGroupNameOrId)
    return (
        <div className="search-wrapper">
            <div>
                <div className="input-label">{props.title}</div>
                {/* <span className="input-icon-erp"><Icon icon='search_icon.svg' /></span> */}
                <input id={props.name}
                    type='search'
                    placeholder="All"
                    className="inputStyle"
                    onChange={(e) => handleChange(e, props.name)}>
                </input>
            </div>
        </div>  

    );
}

export default SearchComponent;