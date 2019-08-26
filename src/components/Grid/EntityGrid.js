import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';
import entityGridSchema from './entityGridSchema'
import { rowGetter, tableData } from './TableData';

const CLASS_NAMES = {
    TABLE: 'table',
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

    return (<div className={CLASS_NAMES.TABLE}>
        <ReactDataGrid columns={entityGridSchema}
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
                    keys: { rowKey: 'id', values: selectedGroupIds }
                }
            }}
        />
    </div>);
}

export default EntityGrid;