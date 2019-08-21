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
                <LeadersContacts title={'Leaders'} />
            </div>
        </div>
    );
}

export default AccountSetup;