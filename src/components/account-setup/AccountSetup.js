import React, { Component } from 'react';
import Account from './Account';
import Leaders from './Leaders';

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
                    <Leaders title={'Leaders'}
                        name={'Julia Libder'}
                        phoneNumber={'+46 591 409173'}
                        email={'julia.libder@amco.com'}
                        actionName={'Add Leader'} />
                    <Leaders title={'VATBox Contacts'}
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