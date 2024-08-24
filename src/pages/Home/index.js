import Event from '~/components/Event';
import classNames from 'classnames/bind';
import styles from './Home.scss';
const cx = classNames.bind(styles);

function Home() {
    const formatDate = (date) => date.toISOString().split('T')[0];
    const data = [
        {
            title: 'Flash sale',
            image: 'https://img.freepik.com/free-psd/3d-sales-discount-price-tag-composition-90-percent_314999-2112.jpg?size=626&ext=jpg&ga=GA1.1.2133305260.1724309690&semt=ais_hybrid',
            numvoucher: 3,
            start: formatDate(new Date(2024, 7, 21, 15, 30, 0)),
            end: formatDate(new Date(2024, 8, 21, 15, 30, 0)),
        },
        {
            title: 'Medium sale',
            image: 'https://img.freepik.com/free-psd/3d-sales-discount-price-tag-composition-70-percent_314999-2118.jpg?size=626&ext=jpg',
            numvoucher: 2,
            start: formatDate(new Date(2024, 7, 21, 15, 30, 0)),
            end: formatDate(new Date(2024, 8, 21, 15, 30, 0)),
        },
        {
            title: 'Low sale',
            image: 'https://img.freepik.com/free-vector/sale-up-50-off-vector_53876-57827.jpg?size=626&ext=jpg',
            numvoucher: 1,
            start: formatDate(new Date(2024, 7, 21, 15, 30, 0)),
            end: formatDate(new Date(2024, 8, 21, 15, 30, 0)),
        },
    ];

    return (
        <div className={cx('content')}>
            {
                // co the dung Memo cho comp nay chi thay doi khi searchResult thay doi
                data.map((event, index) => (
                    <Event id={index} data={event}></Event>
                ))
            }
        </div>
    );
}

export default Home;
