import React, { Component } from 'react';
import Icon from './Icon';

const CLASS_NAMES = {
    HEADER_CONTAINER: 'header-container',
    HEADER_CONTENT: 'header-content',
    USERNAME_ICON: 'username-icon'
}

class Header extends Component {

    render() {
        return (
            <div className={CLASS_NAMES.HEADER_CONTAINER}>
                <div className={CLASS_NAMES.HEADER_CONTENT}>
                    <div>
                        <span className={CLASS_NAMES.USERNAME_ICON}>
                            <Icon icon='user.svg' />
                        </span> UserName </div>
                    <div>Manager Icon</div>
                    <div>Company Name</div>
                </div>
            </div>
        );
    }
}

export default Header;