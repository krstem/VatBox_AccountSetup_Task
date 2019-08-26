import React, { useState, useContext } from 'react';
import cx from 'classnames';

import LeadersContext from '../../services/leadersContext'
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
    const { dispatch } = useContext(LeadersContext);
    const { name, phoneNumber, email } = props.leader;

    const handleDeleteClick = () => {
        const dispatchObj = {
            type: 'DELETE',
            payload: props.leader
        }

        if (props.type === 'leaders') {
            dispatchObj.payload['type'] = 'leaders';
        } else {
            dispatchObj.payload['type'] = 'contacts';
        }
        dispatch(dispatchObj);
    }
    return (
        <div className={CLASS_NAMES.LEADERS}>
            <div className={CLASS_NAMES.LEGEND}>
                {name}
                <div className={CLASS_NAMES.ACTION_ICONS}>
                    <div className={CLASS_NAMES.EDIT} onClick={() => toggleModal(!modal)}>
                        <Icon icon='edit.svg' />
                    </div>
                    <div className={CLASS_NAMES.DELETE}
                        onClick={handleDeleteClick}
                    >
                        <Icon icon='delete.svg' />
                    </div>
                </div>
                {modal && <Modal show={modal}
                    onClose={() => toggleModal(!modal)}
                    leader={props.leader}
                    type={props.type}
                    actionType='EDIT'
                    title={`Edit ${props.type}`}
                />}
            </div>
            <p className={CLASS_NAMES.DATA}>{phoneNumber}</p>
            <p className={cx(CLASS_NAMES.DATA, CLASS_NAMES.LEADERS_EMAIL)}>{email}</p>
        </div>
    );
}

export default AccountSetupData;