import React, { useContext } from 'react';
import LeadersContext from '../services/leadersContext';

const CLASS_NAMES = {
    BACKDROP_MODAL: 'backdrop-modal',
    MODAL_CONTAINER: 'modal-container',
    MODAL_FOOTER: 'modal-footer',
    ACTIONS: 'actions'
}

const Modal = (props) => {

    const { dispatch } = useContext(LeadersContext);

    let editedLeader = props.leader;

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

                {/* Name */}
                <label htmlFor='name'>Leader Name</label>
                <input id='name'
                    type='text'
                    defaultValue={editedLeader.name}
                    onChange={(e) => handleChange(e, props.leader)}></input>

                {/* Phone number */}
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input id='phoneNumber'
                    type='text'
                    defaultValue={editedLeader.phoneNumber}
                    onChange={(e) => handleChange(e, props.leader)}></input>

                {/* Email */}
                <label htmlFor='email'>Email</label>
                <input id='email'
                    type='text'
                    defaultValue={editedLeader.email}
                    onChange={(e) => handleChange(e, props.leader)}></input>

                <div className={CLASS_NAMES.MODAL_FOOTER}>
                    <button className={CLASS_NAMES.ACTIONS}
                        onClick={handleSave}>Save</button>
                    <button className={CLASS_NAMES.ACTIONS} onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;