import React, { useContext, useState } from 'react';
import Icon from '../Icon';
import AccountSetupData from './AccountSetupData';
import Modal from '../Modal';
import { generatedId } from '../../services/utils';

import cx from 'classnames';
import ContactsContext from '../../services/contactsContext';

const CLASS_NAMES = {
    ACCOUNT_CARD_WRAPPER: 'account-card-wrapper',
    LEADERS_CARD_TITLE: 'leaders-card-title',
    LEADERS: 'leaders',
    ADD_CONTACT: 'add-contact',
    ADD_CONTACT_WRAPPER: 'add-contact-wrapper'
}

const AccountContacts = props => {
    const [modal, toggleModal] = useState(false);
    const { data } = useContext(ContactsContext);

    const { title } = props;

    const contactsObj = {
        id: generatedId(),
        name: '',
        phoneNumber: '',
        email: ''
    }
    return (
        <div className={CLASS_NAMES.ACCOUNT_CARD_WRAPPER}>
            <h4 className={CLASS_NAMES.LEADERS_CARD_TITLE}>{title}</h4>
            {
                data.map((contact, index) => {
                    return <AccountSetupData
                        key={index}
                        contact={contact}
                    />
                })
            }

            <div
                onClick={() => toggleModal(!modal)}
                className={cx(CLASS_NAMES.LEADERS, CLASS_NAMES.ADD_CONTACT_WRAPPER)}>
                <div className={CLASS_NAMES.ADD_CONTACT}>
                    <Icon icon='plus.svg' />
                </div>
                Add Contact
            </div>
            {modal && <Modal show={modal}
                onClose={() => toggleModal(!modal)}
                contact={contactsObj}
                actionType='ADD_CONTACTS'
            />}
        </div>
    );
}

export default AccountContacts;