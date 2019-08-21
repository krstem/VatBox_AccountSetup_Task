import React from 'react';
import Icon from './Icon';

const CLASS_NAMES = {
    HEADER_CONTAINER: 'header-container',
    HEADER_CONTENT: 'header-content',
    USERNAME_ICON: 'username-icon',
    HEADER_ITEM_CONTAINER: 'header-item-container',
    COMPANY_NAME: 'company_name'
}

const Header = () => {

    return (
        <div className={CLASS_NAMES.HEADER_CONTAINER}>
            <div className={CLASS_NAMES.HEADER_CONTENT}>
                <div className={CLASS_NAMES.HEADER_ITEM_CONTAINER}>
                    <span className={CLASS_NAMES.USERNAME_ICON}>
                        <Icon icon='user.svg' />
                    </span> UserName
                    </div>
                <div className={CLASS_NAMES.HEADER_ITEM_CONTAINER}>Manager
                        <Icon icon='arrow-down.svg' />
                </div>
                <div className={CLASS_NAMES.COMPANY_NAME}>Company Name</div>
            </div>
        </div>
    );
}

export default Header;