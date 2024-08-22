import styles from './Mask.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Mask({ children }) {
    return <div className={cx('mask')}>{children}</div>;
}

export default Mask;
