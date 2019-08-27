import React, { useState, useEffect } from 'react';
import ReactDataGrid from 'react-data-grid';
import entityGridSchema from './entityGridSchema';
// import SearchComponent from './SearchComponent';
import { tableData } from './TableData';


const CLASS_NAMES = {
    TABLE: 'table',
    SEARCH_MAIN_CONTAINER: 'search-main-container'
};
function EntityGrid() {

    const [selectedGroupIds, setSelectedGroupIds] = useState([]);
    let [filteredEntity, setfilteredEntity] = useState(tableData);
    let currentGroups = [];
    let lowercase;

    useEffect(() => {
        setfilteredEntity([...filteredEntity]);
    });
    

    const handleChange = (e, name) => {
        const filter = e.target.value.toLowerCase();
        e.preventDefault();
        if (e.target.value !== '') {
            currentGroups = tableData;
            filteredEntity = currentGroups.filter(item => {
                if (name === 'erp') {
                    lowercase = item.erp.toLowerCase();
                } else if(name === 'legalName') {
                    lowercase = item.legalName.toLowerCase();
                } else {
                    lowercase = item.country.toLowerCase();
                } 
                    

                return lowercase.includes(filter);
            });
        } else {
            filteredEntity = tableData;
        }

        setfilteredEntity([...filteredEntity]);

    };

    const onRowsSelected = rows => {
        let rowIds = rows.map(r => r.row.id);
        setSelectedGroupIds([...selectedGroupIds, ...rowIds]);
    };

    const onRowsDeselected = rows => {
        let rowIds = rows.map(r => r.row.id);
        let selected = selectedGroupIds.filter(i => rowIds.indexOf(i) === -1)

        setSelectedGroupIds(selected);
    };


    return (
        <div>
            <div className={CLASS_NAMES.SEARCH_MAIN_CONTAINER}>
            <div className="search-wrapper">
            <div>
                <div className="input-label">ERP #</div>
                {/* <span className="input-icon-erp"><Icon icon='search_icon.svg' /></span> */}
                <input id='erp'
                    type='search'
                    placeholder="All"
                    className="inputStyle"
                    onChange={(e) => handleChange(e, 'erp')}>
                </input>
            </div>
            <div>
                <div className="input-label">Entity Name</div>
                {/* <span className="input-icon-erp"><Icon icon='search_icon.svg' /></span> */}
                <input id='legalName'
                    type='search'
                    placeholder="All"
                    className="inputStyle"
                    onChange={(e) => handleChange(e, 'legalName')}>
                </input>
            </div>
            <div>
                <div className="input-label">Country</div>
                {/* <span className="input-icon-erp"><Icon icon='search_icon.svg' /></span> */}
                <input id='country'
                    type='search'
                    placeholder="All"
                    className="inputStyle"
                    onChange={(e) => handleChange(e, 'country')}>
                </input>
            </div>
        </div>  
            </div>
            <div className={CLASS_NAMES.TABLE}>
                <ReactDataGrid columns={entityGridSchema}
                    rowGetter={i => filteredEntity[i]}
                    rowsCount={filteredEntity.length}
                    rowHeight={40}
                    headerRowHeight={41}
                    minHeight={500}
                    rowSelection={{
                        showCheckbox: true,
                        onRowsSelected: onRowsSelected,
                        onRowsDeselected: onRowsDeselected,
                        selectBy: {
                            keys: { rowKey: 'id', values: selectedGroupIds }
                        }
                    }}
                />
            </div>
    </div>);
}

export default EntityGrid;