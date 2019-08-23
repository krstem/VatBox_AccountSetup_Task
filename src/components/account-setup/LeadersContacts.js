import React, { useContext, useState } from 'react';
import Icon from '../Icon';
import AccountSetupData from './AccountSetupData';
import Modal from '../Modal';
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

    const { title, actionTitle } = props;

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

                data[props.type].map((leader, index) => {
                    return <AccountSetupData
                        key={index}
                        leader={leader}
                        type={props.type}
                    />
                })
            }

            <div
                onClick={() => toggleModal(!modal)}
                className={cx(CLASS_NAMES.LEADERS, CLASS_NAMES.ADD_CONTACT_WRAPPER)}>
                <div className={CLASS_NAMES.ADD_CONTACT}>
                    <Icon icon='plus.svg' />
                </div>
                {actionTitle}
            </div>
            {modal && <Modal show={modal}
                type={props.type}
                onClose={() => toggleModal(!modal)}
                leader={obj}
                actionType='ADD'
            />}
        </div>
    );
}

export default LeadersContacts;