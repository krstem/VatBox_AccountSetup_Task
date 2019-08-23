

const tableData = [
  { id: 1, erp: '1234c5' , hierarchy: 1, legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: 1, activationData: 100, paymentSetup: 50, reclaimData: 100},
  { id: 2, erp: '12345' , hierarchy: 2, legalName: 'AMCO Industrial Park CH', country: 'France', focalPoints: 0, activationData: 80, paymentSetup: 10, reclaimData: 100},
  { id: 3, erp: '5676a87' , hierarchy:0, legalName: 'AMCO Industrial Park UK', country: 'United Kingdom', focalPoints: 0, activationData: 100, paymentSetup: 10, reclaimData: 100},
  { id: 4, erp: '12345' , hierarchy: 1, legalName: 'AMCO Distribution AG', country: 'Spain', focalPoints: 1, activationData: 100, paymentSetup: 10, reclaimData: 100},
  { id: 5, erp: '1b2345' , hierarchy:1, legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: 0, activationData: 80, paymentSetup: 10, reclaimData: 100},
  { id: 6, erp: '567687' , hierarchy:2, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 1, activationData: 100, paymentSetup: 40, reclaimData: 100},
  { id: 7, erp: '12345' , hierarchy:0, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 1, activationData: 100, paymentSetup: 40, reclaimData: 100},
  { id: 8, erp: '12dd345' , hierarchy:1, legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: 1, activationData: '', paymentSetup: 40, reclaimData: 100},
  { id: 9, erp: '12345' , hierarchy:0, legalName: 'AMCO Industrial Park UK', country: 'France', focalPoints: 0, activationData: 100, paymentSetup: 40, reclaimData: 100},
  { id: 10, erp: '1234w5' , hierarchy:1, legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: 1, activationData: 100, paymentSetup: 80, reclaimData: 50},
  { id: 11, erp: '1234c5' , hierarchy:0, legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: 0, activationData: 50, paymentSetup: 80, reclaimData: 100},
  { id: 12, erp: '12345' , hierarchy:2, legalName: 'AMCO Industrial Park CH', country: 'France', focalPoints: 1, activationData: 100, paymentSetup: 80, reclaimData: 100},
  { id: 13, erp: '5676a87' , hierarchy:1, legalName: 'AMCO Industrial Park UK', country: 'United Kingdom', focalPoints: 1, activationData: 50, paymentSetup: 100, reclaimData: 100},
  { id: 14, erp: '12345' , hierarchy:2, legalName: 'AMCO Distribution AG', country: 'Spain', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 15, erp: '1b2345' , hierarchy:0, legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: 0, activationData: 100, paymentSetup: 100, reclaimData: 80},
  { id: 16, erp: '567687' , hierarchy:0, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 0, activationData: 100, paymentSetup: 100, reclaimData: 80},
  { id: 17, erp: '12345' , hierarchy:1, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 1, activationData: 50, paymentSetup: 100, reclaimData: 70},
  { id: 18, erp: '12dd345' , hierarchy:2, legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: 0, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 19, erp: '12345' , hierarchy:1, legalName: 'AMCO Industrial Park UK', country: 'France', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 30},
  { id: 20, erp: '1234w5' , hierarchy:0, legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 21, erp: '567687' , hierarchy:1, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 0, activationData: 30, paymentSetup: 100, reclaimData: 100},
  { id: 22, erp: '12345' , hierarchy:0, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 0, activationData: 30, paymentSetup: 100, reclaimData: 100},
  { id: 23, erp: '12dd345' , hierarchy:1, legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 24, erp: '12345' , hierarchy:1, legalName: 'AMCO Industrial Park UK', country: 'France', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 25, erp: '1234w5' , hierarchy:2, legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 26, erp: '1234c5' , hierarchy:0, legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: 0, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 27, erp: '12345' , hierarchy:1, legalName: 'AMCO Industrial Park CH', country: 'France', focalPoints: 0, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 28, erp: '5676a87' , hierarchy:2, legalName: 'AMCO Industrial Park UK', country: 'United Kingdom', focalPoints: 1, activationData: 30, paymentSetup: 100, reclaimData: 100},
  { id: 29, erp: '12345' , hierarchy:0, legalName: 'AMCO Distribution AG', country: 'Spain', focalPoints: 1, activationData: 30, paymentSetup: 100, reclaimData: 100},
  { id: 30, erp: '1b2345' , hierarchy:1, legalName: 'AMCO Industrial Park UK', country: 'Austria', focalPoints: 1, activationData: 30, paymentSetup: 100, reclaimData: 100},
  { id: 31, erp: '567687' , hierarchy:1, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 32, erp: '12345' , hierarchy:2, legalName: 'AMCO Distribution AG', country: 'Germany', focalPoints: 1, activationData: 100, paymentSetup: 100, reclaimData: 100},
  { id: 33, erp: '12dd345' , hierarchy:0, legalName: 'AMCO Distribution AG', country: 'United Kingdom', focalPoints: 0, activationData: 100, paymentSetup: 100, reclaimData: 100},
            
];

const rowGetter = rowNumber => tableData[rowNumber];

module.exports = {
    tableData,
    rowGetter
  };