import React, { useState } from 'react';
import cx from 'classnames';

import Icon from '../Icon';
import Modal from '../Modal';

const CLASS_NAMES = {
    LEADERS: 'leaders',
    LEGEND: 'legend',
    DATA: 'data',
    LEADERS_EMAIL: 'leaders-email',
    ACTION_ICONS: 'action-icons',
    EDIT: 'edit',
    DELETE: 'delete',
    ADD_CONTACT: 'add-contact',
}

const AccountSetupData = (props) => {
    const [modal, toggleModal] = useState(false);
    const { name, phoneNumber, email } = props.leader;
    return (
        <div className={CLASS_NAMES.LEADERS}>
            <div className={CLASS_NAMES.LEGEND}>
                {name}
                <div className={CLASS_NAMES.ACTION_ICONS}>
                    <div className={CLASS_NAMES.EDIT} onClick={() => toggleModal(!modal)}>
                        <Icon icon='edit.svg' />
                    </div>
                    <div className={CLASS_NAMES.DELETE}>
                        <Icon icon='delete.svg' />
                    </div>
                </div>
                {modal && <Modal show={modal}
                    onClose={() => toggleModal(!modal)}
                    leader={props.leader}
                    type={props.type}
                    actionType='EDIT'
                />}
            </div>
            <p className={CLASS_NAMES.DATA}>{phoneNumber}</p>
            <p className={cx(CLASS_NAMES.DATA, CLASS_NAMES.LEADERS_EMAIL)}>{email}</p>
        </div>
    );
}

export default AccountSetupData;