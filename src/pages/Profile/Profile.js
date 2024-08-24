import Button from '~/components/Button';
import Formbox from '~/components/Formbox';
import Input from '~/components/Input';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Profile.scss';
import SubHeader from './SubHeader';

const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();
    const data = location.state;
    const reflist = useRef([]);
    const [formData, setFormData] = useState([data.title, data.file, data.numvoucher, data.start, data.end]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e, index) => {
        const value = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [index]: value,
        }));

        if (value.trim() === '') {
            setErrors((prevErrors) => {
                const newErrors = [...prevErrors];
                newErrors[index] = true;
                return newErrors;
            });
        } else {
            setErrors((prevErrors) => {
                const newErrors = [...prevErrors];
                newErrors[index] = false;
                return newErrors;
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    console.log(formData);

    const listinput = (
        <>
            <div className={cx('input-box')}>
                <Input
                    label="Name"
                    isRequired
                    ref={(ref) => (reflist.current[0] = ref)}
                    onChange={(e) => handleChange(e, 0)}
                    placeholder={'Name'}
                    error={errors[0]}
                    value={formData[0]}
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Image"
                    isRequired
                    ref={(ref) => (reflist.current[1] = ref)}
                    onChange={(e) => handleChange(e, 1)}
                    type="file"
                    className={cx('choose-file')}
                    name="Chose file"
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Number Vouchers"
                    isRequired
                    ref={(ref) => (reflist.current[2] = ref)}
                    onChange={(e) => handleChange(e, 2)}
                    placeholder={'Number Vouchers'}
                    error={errors[2]}
                    value={formData[2]}
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Time Start Time Start"
                    isRequired
                    error={errors[3]}
                    ref={(ref) => (reflist.current[3] = ref)}
                    onChange={(e) => handleChange(e, 3)}
                    type="date"
                    name="start"
                    value={formData[3]}
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Time End"
                    isRequired
                    error={errors[4]}
                    ref={(ref) => (reflist.current[4] = ref)}
                    onChange={(e) => handleChange(e, 4)}
                    type="date"
                    name="end"
                    value={formData[4]}
                />
            </div>
        </>
    );

    const listbutton = (
        <Button primary onClick={handleSubmit}>
            OK
        </Button>
    );
    console.log(data.id);
    return (
        <div className={cx('profile-content')}>
            <Formbox label="Modify Info Event" inputs={listinput} buttons={listbutton} />
            <SubHeader id={data.id} />
        </div>
    );
}

export default Profile;
