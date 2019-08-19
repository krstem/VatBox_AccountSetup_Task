import React, { Component } from 'react';
import Icon from '../Icon';
import cx from 'classnames';

const CLASS_NAMES = {
    ACCOUNT_CARD_WRAPPER: 'account-card-wrapper',
    LEADERS_CARD_TITLE: 'leaders-card-title',
    LEADERS: 'leaders',
    LEGEND: 'legend',
    DATA: 'data',
    LEADERS_EMAIL: 'leaders-email',
    ACTION_ICONS: 'action-icons',
    EDIT: 'edit',
    DELETE: 'delete',
    ADD_CONTACT: 'add-contact',
    ADD_CONTACT_WRAPPER: 'add-contact-wrapper'
}

class Leader extends Component {

    render() {
        const { title, name, phoneNumber, email, actionName } = this.props;
        return (
            <div className={CLASS_NAMES.ACCOUNT_CARD_WRAPPER}>
                <h4 className={CLASS_NAMES.LEADERS_CARD_TITLE}>{title}</h4>

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

                <div className={CLASS_NAMES.LEADERS}>
                    <div className={CLASS_NAMES.LEGEND}>
                        {title}
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

                <div className={cx(CLASS_NAMES.LEADERS, CLASS_NAMES.ADD_CONTACT_WRAPPER)}>
                    <div className={CLASS_NAMES.ADD_CONTACT}>
                        <Icon icon='plus.svg' />
                    </div>
                    {actionName}
                </div>
            </div>
        );
    }
}

export default Leader;