import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './SubHeader.scss';
import { useReducer, useState, useEffect, useRef } from 'react';
import { faGamepad, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Record from '~/components/Record';
import Input from '~/components/Input';
// import { type } from '@testing-library/user-event/dist/type';
// import reducer, { initState } from './Todo/reducer';
// import { setJob, addJob, deleteJob } from './Todo/actions';
// import logger from './Todo/logger';
const cx = classNames.bind(styles);
function SubHeader({ id }) {
    //id, images, info, description
    const [activeIndex, setActiveIndex] = useState(null);
    const [clickIndex, setClickIndex] = useState(null);
    const menuItemsRef = useRef([]);
    const bottomLineRef = useRef(null);
    const [counts, setCounts] = useState({});
    //const [count, setCount] = useState(0);
    useEffect(() => {
        if (activeIndex !== null && menuItemsRef.current[activeIndex]) {
            const { offsetLeft, offsetWidth } = menuItemsRef.current[activeIndex];
            bottomLineRef.current.style.transform = `translateX(${offsetLeft}px)`;
            bottomLineRef.current.style.width = `${offsetWidth}px`;
        }
    }, [activeIndex]);
    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };
    const handleClick = (index) => {
        setClickIndex(index);
    };
    const formatDate = (date) => date.toISOString().split('T')[0];

    const listGame = [
        {
            name: 'Lac xi ngau',
            image: 'https://7aothuat.com/wp-content/uploads/2019/12/hu-lac-xi-ngau-da-1.jpg',
            type: 'random',
            CanExchange: 1,
            description: 'Ban co the lac dien thoai...',
        },
        {
            name: 'Quiz',
            image: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=826',
            type: 'Knowledge',
            CanExchange: 0,
            description: 'Ban can tra loi dung de nhan thuong...',
        },
    ];
    const listvoucher = [
        {
            Code: '123',
            QRcode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png',
            image: 'https://img.freepik.com/free-psd/3d-sales-discount-price-tag-composition-90-percent_314999-2112.jpg?size=626&ext=jpg&ga=GA1.1.2133305260.1724309690&semt=ais_hybrid',
            value: 0.5,
            Enddate: formatDate(new Date(2024, 7, 21, 15, 30, 0)),
            state: 1,
            description: 'Description of Voucher',
        },
        {
            Code: '456',
            QRcode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png',
            image: 'https://img.freepik.com/free-psd/3d-sales-discount-price-tag-composition-70-percent_314999-2118.jpg?size=626&ext=jpg',
            value: 0.3,
            Enddate: formatDate(new Date(2024, 8, 21, 15, 30, 0)),
            state: 1,
            description: 'Description of Voucher',
        },
        {
            Code: '789',
            QRcode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png',
            image: 'https://img.freepik.com/free-vector/sale-up-50-off-vector_53876-57827.jpg?size=626&ext=jpg',
            value: 0.2,
            Enddate: formatDate(new Date(2024, 7, 21, 20, 30, 0)),
            state: 1,
            description: 'Description of Voucher',
        },
    ];
    // const [state, dispatch] = useReducer(logger(reducer), initState);
    // const { job, jobs } = state;

    // const handleSubmit = () => {
    //     dispatch(addJob(job));
    //     dispatch(setJob(''));

    // };
    const updateCount = (itemId, delta) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [itemId]: Math.max((prevCounts[itemId] || 0) + delta, 0),
        }));
    };
    const updateInputCount = (itemId, value) => {
        const numberValue = parseInt(value, 10);
        setCounts((prevCounts) => ({
            ...prevCounts,
            [itemId]: isNaN(numberValue) ? 0 : numberValue,
        }));
    };
    const handlePlus = (itemId) => {
        updateCount(itemId, 1);
    };

    const handleMinus = (itemId) => {
        updateCount(itemId, -1);
    };
    const handleChangeInputRecord = (itemId, value) => {
        updateInputCount(itemId, value);
    };
    return (
        <div className="wrapper-sub-header">
            <div className="sub-menu">
                {['Game For', 'Voucher For'].map((title, index) => (
                    <div
                        key={index}
                        ref={(el) => (menuItemsRef.current[index] = el)}
                        className="menu-item"
                        onMouseOver={() => handleMouseOver(index)}
                        onClick={() => handleClick(index)}
                    >
                        {title}
                    </div>
                ))}
                <div className={cx('bottom-line')} ref={bottomLineRef}></div>
            </div>

            <div className={cx('sub-menu-content')}>
                {clickIndex === 0 || clickIndex === null ? (
                    <div className={cx('game')}>
                        {listGame.map((game, index) => (
                            <div className={cx('sub-menu-item')}>
                                <Record key={index} id={id} data={game} type={'game'} />
                                <input type="checkbox" className={cx('game-item-input')} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={cx('voucher')}>
                        {listvoucher.map((voucher, index) => (
                            <div className={cx('sub-menu-item')}>
                                <Record key={index} id={id} data={voucher} type={'voucher'} />
                                <button onClick={() => handlePlus(voucher.Code)} primary className={cx('item-btn')}>
                                    +
                                </button>
                                <input
                                    onChange={(e) => handleChangeInputRecord(voucher.Code, e.target.value)}
                                    className={cx('item-input')}
                                    value={counts[voucher.Code] || 0}
                                />
                                <button onClick={() => handleMinus(voucher.Code)} primary className={cx('item-btn')}>
                                    -
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SubHeader;
