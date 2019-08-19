import React, { Component } from 'react';
import Icon from '../Icon';
import AccountSetupData from './accountSetupData';

import cx from 'classnames';

const CLASS_NAMES = {
    ACCOUNT_CARD_WRAPPER: 'account-card-wrapper',
    LEADERS_CARD_TITLE: 'leaders-card-title',
    LEADERS: 'leaders',
    ADD_CONTACT: 'add-contact',
    ADD_CONTACT_WRAPPER: 'add-contact-wrapper'
}

const leaders = [
    {
        name: 'Ines Milanova',
        phoneNumber: '123456678',
        email: 'ines@milanova.com'
    },
    {
        name: 'Milanova',
        phoneNumber: '123435436',
        email: 'asdf@asdf.com'
    }
];

class LeadersContacts extends Component {

    render() {
        const { title } = this.props;
        return (
            <div className={CLASS_NAMES.ACCOUNT_CARD_WRAPPER}>
                <h4 className={CLASS_NAMES.LEADERS_CARD_TITLE}>{title}</h4>
                {
                    leaders.map((leader, index) => {
                        return <AccountSetupData
                            key={index}
                            name={leader.name}
                            phoneNumber={leader.phone}
                            email={leader.email} />
                    })
                }

                <div className={cx(CLASS_NAMES.LEADERS, CLASS_NAMES.ADD_CONTACT_WRAPPER)}>
                    <div className={CLASS_NAMES.ADD_CONTACT}>
                        <Icon icon='plus.svg' />
                    </div>
                    Add Leader
                </div>
            </div>
        );
    }
}

export default LeadersContacts;