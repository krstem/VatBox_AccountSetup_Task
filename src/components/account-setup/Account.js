import React, { Component } from 'react';

const CLASS_NAMES = {
    ACCOUNT_CONTAINER: 'account-container',
    ACCOUNT_CONTAINER_TITLE: 'account-container-title',
    ACCOUNT_CARD_WRAPPER: 'account-card-wrapper',
    ACCOUNT_CARD_TITLE: 'account-card-title',
    HEADQUARTERS: 'headquarters',
    LEGEND: 'legend',
    DATA: 'data'
}

class Account extends Component {

    render() {
        const accountSetupTitle = 'Account Setup';
        return (
            <div className={CLASS_NAMES.ACCOUNT_CONTAINER}>
                <p className={CLASS_NAMES.ACCOUNT_CONTAINER_TITLE}>{accountSetupTitle}</p>
                <h1 className={CLASS_NAMES.ACCOUNT_CONTAINER_TITLE}>{accountSetupTitle}</h1>

                <div className={CLASS_NAMES.ACCOUNT_CARD_WRAPPER}>
                    <h4 className={CLASS_NAMES.ACCOUNT_CARD_TITLE}>Account</h4>

                    {/* HQ Name */}
                    <div className={CLASS_NAMES.HEADQUARTERS}>
                        <p className={CLASS_NAMES.LEGEND}>Headquarters Name</p>
                        <p className={CLASS_NAMES.DATA}>Amco</p>
                    </div>

                    {/* HQ Country */}
                    <div className={CLASS_NAMES.HEADQUARTERS}>
                        <p className={CLASS_NAMES.LEGEND}>Headquarters Country</p>
                        <p className={CLASS_NAMES.DATA}>Sweden</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Account;