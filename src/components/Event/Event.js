import styles from './Event.module.scss';
import classNames from 'classnames/bind';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Event({ id, data }) {
    const navigate = useNavigate();
    navigate(`/@${id}`, { state: { id: id, ...data } });
    // const newdata = { id, ...data };
    const newdata = { id: id, ...data };
    return (
        <Link to={`/@${id}`} state={newdata} className={cx('wrapper')}>
            <img className={cx('image')} src={data.image} alt={data.title}></img>
            <div className={cx('info')}>
                <h4 className={cx('title')}>
                    <span>{data.title}</span>
                    {/* {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />} */}
                </h4>
                <span className={cx('vouchers')}>
                    <strong>Number Voucher</strong>
                    <p>{data.numvoucher}</p>
                </span>
                <span className={cx('start')}>
                    {' '}
                    <strong>Start</strong>
                    <p>{data.start}</p>
                </span>
                <span className={cx('end')}>
                    {' '}
                    <strong>End</strong>
                    <p>{data.end}</p>
                </span>
            </div>
        </Link>
    );
}
// .node: bat cu kieu gi ma render duoc
// kieu khong render duowc co the la func
// dung cho class children
Event.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Event;
