import React from 'react';

import Account from './Account';
import LeadersContacts from './LeadersContacts';

const CLASS_NAMES = {
    ACCOUNT_SETUP: 'account-setup',
    LEADERS_AND_CONTACTS: 'leaders-and-contacts'
}

function AccountSetup() {

    return (
        <div className={CLASS_NAMES.ACCOUNT_SETUP}>
            <Account />
            <div className={CLASS_NAMES.LEADERS_AND_CONTACTS}>
                <LeadersContacts title={'Leaders'} type={'leaders'} actionTitle={'Add Leader'} />
                <LeadersContacts title={'VATBox Contacts'} type={'contacts'} actionTitle={'Add Contact'} />
            </div>
        </div>
    );
}

export default AccountSetup;