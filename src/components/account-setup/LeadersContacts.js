import React, { useContext, useState } from 'react';
import Icon from '../Icon';
import AccountSetupData from './accountSetupData';
import Modal from '../Modal';
import { initialState } from '../../services/constants';
import { generatedId } from '../../services/utils';

import cx from 'classnames';
import LeadersContext from '../../services/leadersContext';

const CLASS_NAMES = {
    ACCOUNT_CARD_WRAPPER: 'account-card-wrapper',
    LEADERS_CARD_TITLE: 'leaders-card-title',
    LEADERS: 'leaders',
    ADD_CONTACT: 'add-contact',
    ADD_CONTACT_WRAPPER: 'add-contact-wrapper'
}

const LeadersContacts = props => {
    const [modal, toggleModal] = useState(false);
    const { data } = useContext(LeadersContext);

    const { title } = props;

    const obj = {
        id: generatedId(),
        name: '',
        phoneNumber: '',
        email: ''
    }
    return (
        <div className={CLASS_NAMES.ACCOUNT_CARD_WRAPPER}>
            <h4 className={CLASS_NAMES.LEADERS_CARD_TITLE}>{title}</h4>
            {
                data.map((leader, index) => {
                    return <AccountSetupData
                        key={index}
                        leader={leader}
                    />
                })
            }

            <div
                onClick={() => toggleModal(!modal)}
                className={cx(CLASS_NAMES.LEADERS, CLASS_NAMES.ADD_CONTACT_WRAPPER)}>
                <div className={CLASS_NAMES.ADD_CONTACT}>
                    <Icon icon='plus.svg' />
                </div>
                Add Leader
            </div>
            {modal && <Modal show={modal}
                onClose={() => toggleModal(!modal)}
                leader={obj}
                actionType='ADD'
            />}
        </div>
    );
}

export default LeadersContacts;