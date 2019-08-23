import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';
import Icon from '../Icon';
import entityGridSchema from './entityGridSchema'
import {rowGetter, tableData} from './TableData';
import {AutoSizer} from 'react-virtualized';

const CLASS_NAMES = {
    REACT_GRID_CHECKBOX_CONTAINER: 'react-grid-checkbox-container',
    REACT_GRID_CHECKBOX_CONTAINER_VISIBLE: 'react-grid-checkbox-container-visible',
};
function EntityGrid() {

    const [selectedGroupIds, setSelectedGroupIds] = useState([]);

    const onRowsSelected = rows => {
        let rowIds = rows.map(r => r.row.id);
        setSelectedGroupIds([...selectedGroupIds, ...rowIds]);
      };
    
    const onRowsDeselected = rows => {
        let rowIds = rows.map(r => r.row.id);
        let selected = selectedGroupIds.filter(i => rowIds.indexOf(i) === -1)

        setSelectedGroupIds(selected);
      };

      console.log("Selected Group", selectedGroupIds)
    
    return (<ReactDataGrid columns={entityGridSchema}
                            rowGetter={rowGetter}
                            rowsCount={tableData.length}
                            rowHeight={40}
                            headerRowHeight={41}
                            minHeight={500} 
                            rowSelection={{
                                showCheckbox: true,
                                onRowsSelected: onRowsSelected,
                                onRowsDeselected: onRowsDeselected,
                                selectBy: {
                                    keys: {rowKey: 'id', values: selectedGroupIds}
                                }
                            }}
            />);
}

export default EntityGrid;