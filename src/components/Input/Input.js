import classNames from 'classnames/bind';
import styles from './Input.scss';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Input({ placeholder, className }) {
    return <input className={cx('inputinfo')} placeholder={placeholder}></input>;
}

export default Input;
