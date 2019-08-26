import React, { useContext } from 'react';
import LeadersContext from '../services/leadersContext';
import cx from 'classnames';

const CLASS_NAMES = {
    BACKDROP_MODAL: 'backdrop-modal',
    MODAL_CONTAINER: 'modal-container',
    MODAL_FOOTER: 'modal-footer',
    ACTIONS: 'actions',
    NAME_PHONE_NUMBER_CONTAINER: 'name-phone-number-container',
    INPUT_NAME: 'input-name',
    INPUT_PHONE: 'input-phone',
    SAVE_ACTION: 'save-action',
    MODAL_TITLE: 'modal-title'
}

const Modal = (props) => {

    const { dispatch } = useContext(LeadersContext);

    let editedLeader = { ...props.leader };

    const handleChange = (e, leader) => {
        e.preventDefault();
        const value = e.target.value;
        const id = e.target.id;
        editedLeader[id] = value;
    }

    const handleSave = () => {
        const dispatchObj = {
            type: props.actionType,
            payload: editedLeader
        }
        if (props.type === 'leaders') {
            dispatchObj.payload['type'] = 'leaders';
        } else {
            dispatchObj.payload['type'] = 'contacts';
        }
        dispatch(dispatchObj);
        props.onClose();
    }

    return (
        <div className={CLASS_NAMES.BACKDROP_MODAL}>
            <div className={CLASS_NAMES.MODAL_CONTAINER}>
                <div className={CLASS_NAMES.MODAL_TITLE}>{props.title}
                    <span onClick={props.onClose}>X</span>
                </div>
                <div className={CLASS_NAMES.NAME_PHONE_NUMBER_CONTAINER}>
                    <div className={CLASS_NAMES.INPUT_NAME}>
                        {/* Name */}
                        <label htmlFor='name'>Leader Name</label>
                        <input id='name'
                            type='text'
                            defaultValue={editedLeader.name}
                            onChange={(e) => handleChange(e, props.leader)}></input>
                    </div>

                    <div className={CLASS_NAMES.INPUT_PHONE}>
                        {/* Phone number */}
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input id='phoneNumber'
                            type='text'
                            defaultValue={editedLeader.phoneNumber}
                            onChange={(e) => handleChange(e, props.leader)}></input>
                    </div>
                </div>

                {/* Email */}
                <label htmlFor='email'>Email</label>
                <input id='email'
                    type='email'
                    defaultValue={editedLeader.email}
                    onChange={(e) => handleChange(e, props.leader)}></input>

                <div className={CLASS_NAMES.MODAL_FOOTER}>
                    <button className={CLASS_NAMES.ACTIONS} onClick={props.onClose}>Close</button>
                    <button className={cx(CLASS_NAMES.ACTIONS, CLASS_NAMES.SAVE_ACTION)}
                        onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;