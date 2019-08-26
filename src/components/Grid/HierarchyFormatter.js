import React from 'react';
import PropTypes from 'prop-types';


const HierarchyFormatter = ({row}) => {

    var output = [];

    let i;
    for (i = 0; i < row.hierarchy; i++) {
        output.push(<div className="hierarchy-cell"></div>);
    } 
        
    return (
        <div>
            {output}
        </div>
    );
};

HierarchyFormatter.propTypes = {
    row: PropTypes.object,
};

export default HierarchyFormatter;