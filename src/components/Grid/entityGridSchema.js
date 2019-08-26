import FocalPointsFormatter from './FocalPointsFormatter';
import HierarchyFormatter from './HierarchyFormatter';
import PaymentSetupFormatter from './PaymentSetupFormatter';
import ActivationDataFormatter from './ActivationDataFormatter';
import ReclaimDataFormatter from './ReclaimDataFormatter';

const CLASS_NAMES = {
    FOCAL_POINTS: 'focal-points-cell',
    ACTIVATION_DATA: 'activation-data-cell',
    PAYMENT_SETUP: 'payment-setup-cell',
    RECLAIM_DATA: 'reclaim-data-cell',
    ERP_CELL: 'erp-cell',
    HIERARCHY_CELL: 'hierarchy-cell',
    LEGAL_NAME_CELL: 'legal-name-cell',
    COUNTRY_CELL: 'country-cell'

}

export default [
    {
        name: 'ERP',
        key: "erp",
        width: 170,
        cellClass: CLASS_NAMES.ERP_CELL,
    },
    {
        name: 'Hierarchy',
        key: "hierarchy",
        formatter: HierarchyFormatter,
        cellClass: CLASS_NAMES.HIERARCHY_CELL,
        width: 150,
    },
    {
        name: 'Legal Name' ,
        key: "legalName",
        cellClass: CLASS_NAMES.LEGAL_NAME_CELL,
        width: 230,
    },
    {
        name: 'Country',
        key: "country",
        width: 160,
        cellClass: CLASS_NAMES.COUNTRY_CELL,
    },
    {
        name: 'Focal Points',
        key: "focalPoints",
        cellClass: CLASS_NAMES.FOCAL_POINTS,
        width: 160,
        formatter: FocalPointsFormatter,
    },
    {
        name: 'Activation Data',
        key: "activationData",
        cellClass: CLASS_NAMES.ACTIVATION_DATA,
        width: 160,
        formatter: ActivationDataFormatter
    },
    {
        name: 'Payment Setup',
        key: "paymentSetup",
        cellClass: CLASS_NAMES.PAYMENT_SETUP,
        width: 160,
        formatter: PaymentSetupFormatter
    },
    {
        name: 'Reclaim Data',
        key: "reclaimData",
        cellClass: CLASS_NAMES.RECLAIM_DATA,
        width: 160,
        formatter: ReclaimDataFormatter
    }
];