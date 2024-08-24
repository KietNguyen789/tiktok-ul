import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import Input from '../Input';
import styles from './Record.module.scss';
import classNames from 'classnames/bind';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Record({ id, data, type }) {
    const images = (type) => {
        return (
            <>
                {type === 'game' ? (
                    <strong className={cx('image-item')}>{data.name}</strong>
                ) : (
                    <img className={cx('image-item')} src={data.QRcode} alt="No QR"></img>
                )}
                <img className={cx('image-item')} src={data.image} alt="no img"></img>
            </>
        );
    };
    const info = (type) => {
        return (
            <>
                {type === 'game' ? (
                    <>
                        <p className={cx('info-item')}>Type - {data.type}</p>
                        <p className={cx('info-item')}>Allow Exchange - {data.CanExchange}</p>
                    </>
                ) : (
                    <>
                        <p className={cx('info-item')}>Code: - {data.Code}</p>
                        <p className={cx('info-item')}>Value: - {data.value}</p>
                        <p className={cx('info-item')}>EndDate: - {data.Enddate}</p>
                        <p className={cx('info-item')}>State - {data.state}</p>
                    </>
                )}
            </>
        );
    };

    const description = <p>Mo ta - {data.description}</p>;
    return (
        <div className={cx('wrapper-record')}>
            <div className={cx('record-image')}>{images(type)}</div>
            <div className={cx('record-info')}>{info(type)}</div>
            <div className={cx('record-description')}>{description}</div>
        </div>
    );
}
// .node: bat cu kieu gi ma render duoc
// kieu khong render duowc co the la func
// dung cho class children

export default Record;
