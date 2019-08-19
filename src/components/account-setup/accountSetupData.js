import React, { Component } from 'react';
import cx from 'classnames';

import Icon from '../Icon';

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

class AccountSetupData extends Component {
    render() {
        const { name, phoneNumber, email } = this.props;
        return (
            <div className={CLASS_NAMES.LEADERS}>
                <div className={CLASS_NAMES.LEGEND}>
                    {name}
                    <div className={CLASS_NAMES.ACTION_ICONS}>
                        <div className={CLASS_NAMES.EDIT}>
                            <Icon icon='edit.svg' />
                        </div>
                        <div className={CLASS_NAMES.DELETE}>
                            <Icon icon='delete.svg' />
                        </div>
                    </div>
                </div>
                <p className={CLASS_NAMES.DATA}>{phoneNumber}</p>
                <p className={cx(CLASS_NAMES.DATA, CLASS_NAMES.LEADERS_EMAIL)}>{email}</p>
            </div>
        );
    }
}

export default AccountSetupData;