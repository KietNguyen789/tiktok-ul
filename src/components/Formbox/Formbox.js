import classNames from 'classnames/bind';
import styles from './Formbox.scss';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Formbox({ label, inputs, buttons }) {
    return (
        <div className={cx('wrapper')}>
            <p className="label">{label}</p>
            <div className={cx('inputs')}>{inputs}</div>
            <div className={cx('buttons')}>{buttons}</div>
        </div>
    );
}

export default Formbox;
