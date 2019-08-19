import React, { Component } from 'react';

import Account from './Account';
import LeadersContacts from './LeadersContacts';

const CLASS_NAMES = {
    ACCOUNT_SETUP: 'account-setup',
    LEADERS_AND_CONTACTS: 'leaders-and-contacts'
}

class AccountSetup extends Component {

    render() {
        return (
            <div className={CLASS_NAMES.ACCOUNT_SETUP}>
                <Account />
                <div className={CLASS_NAMES.LEADERS_AND_CONTACTS}>
                    <LeadersContacts title={'Leaders'} />
                    <LeadersContacts title={'VATBox Contacts'}
                        name={'Yuval Armoni'}
                        phoneNumber={'+46 591 409173'}
                        email={'yuval.armoni@amco.com'}
                        actionName={'Add Contact'} />
                </div>
            </div>
        );
    }
}

export default AccountSetup;