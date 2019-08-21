import React from 'react';
import ReactDataGrid from 'react-data-grid';
import Icon from '../Icon';

const focalPoints = {
    enableIcon: <span className="icon-size"><Icon icon='users.svg' /></span>,
    disabledIcon: <span className="icon-size"><Icon icon='disabled-users.svg' /></span>
}

const columns = [
    { key: 'erp', name: 'ERP #' }, 
    { key: 'hierarchy', name: 'Hierarchy'},
    { key: 'legalName', name: 'Legal Name'},
    { key: 'country', name: 'Country'},
    { key: 'focalPoints', name: 'Focal Points'},
    { key: 'activationData', name: 'Activation Data'},
    { key: 'paymentSetup', name: 'Payment Setup'},
    { key: 'Reclaim Data', name: 'Reclaim Data'}
];
const rows = [
    { id: 1, erp: '1234c5' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 2, erp: '12345' , hierarchy:' ', legalName: 'AMCO Industrial Park CH', country: 'France', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 3, erp: '5676a87' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'United Kingdom', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 4, erp: '12345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Spain', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 5, erp: '1b2345' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 6, erp: '567687' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 7, erp: '12345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 8, erp: '12dd345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 9, erp: '12345' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'France', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 10, erp: '1234w5' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 11, erp: '1234c5' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 12, erp: '12345' , hierarchy:' ', legalName: 'AMCO Industrial Park CH', country: 'France', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 13, erp: '5676a87' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'United Kingdom', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 14, erp: '12345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Spain', focalPoints:focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 15, erp: '1b2345' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 16, erp: '567687' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 17, erp: '12345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 18, erp: '12dd345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 19, erp: '12345' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'France', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 20, erp: '1234w5' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 21, erp: '567687' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 22, erp: '12345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 23, erp: '12dd345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 24, erp: '12345' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'France', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 25, erp: '1234w5' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 26, erp: '1234c5' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 27, erp: '12345' , hierarchy:' ', legalName: 'AMCO Industrial Park CH', country: 'France', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 28, erp: '5676a87' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'United Kingdom', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 29, erp: '12345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Spain', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 30, erp: '1b2345' , hierarchy:' ', legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 31, erp: '567687' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 32, erp: '12345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: focalPoints.enableIcon, activationData: '', paymentSetup: '', reclaimData:''},
    { id: 33, erp: '12dd345' , hierarchy:' ', legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: focalPoints.disabledIcon, activationData: '', paymentSetup: '', reclaimData:''},
              
];
const rowGetter = rowNumber => rows[rowNumber];

function EntityGrid() {
    return (
        <ReactDataGrid columns={columns}
                       rowGetter={rowGetter}
                       rowsCount={rows.length}
                       rowHeight={40}
                       headerRowHeight={41}
                       minHeight={500} />
    );
}

export default EntityGrid;