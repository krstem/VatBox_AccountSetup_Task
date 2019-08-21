import React, { Component } from 'react';

export default class Icon extends Component {
    getImagePath = icon => {
        try {
            const path = require(`../assets/images/${icon}`);
            return path;
        } catch (err) {
            return null;
        }
    };
    render() {
        const { icon, classNames } = this.props;

        const isImageType = (/\.(svg|jpg|png)$/i).test(icon);
        return (isImageType &&
            <img className={classNames} src={this.getImagePath(icon)} alt={'icon'}></img>
        )
    };
}