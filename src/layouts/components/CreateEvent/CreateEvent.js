import { useEffect, useState, useRef } from 'react';
import Button from '~/components/Button';
import Mask from '~/layouts/Mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './CreateEvent.scss';
import Formbox from '~/components/Formbox';
import Input from '~/components/Input';

const cx = classNames.bind(styles);

function CreateEvent() {
    const [showMask, setShowMask] = useState(false);

    const handleCreate = () => {
        setShowMask(true);
        //console.log(showMask);
    };
    const handleSubmit = () => {
        setShowMask(false);
    };
    const handleClose = () => {
        setShowMask(false);
    };
    const [formData, setFormData] = useState([]);
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
    const listinput = (
        <>
            <Input error={errors[0]} isRequired value={formData[0]} onChange={(e) => handleChange(e, 0)} label="Name" />
            <Input
                error={errors[1]}
                isRequired
                value={formData[1]}
                onChange={(e) => handleChange(e, 1)}
                type="file"
                className={cx('choose-file')}
                label="Choose file"
            />
            <Input
                error={errors[2]}
                isRequired
                value={formData[2]}
                onChange={(e) => handleChange(e, 2)}
                label="Number Vouchers"
            />
            <Input
                error={errors[3]}
                isRequired
                value={formData[3]}
                onChange={(e) => handleChange(e, 3)}
                type="date"
                label="Start"
            />
            <Input
                error={errors[4]}
                isRequired
                value={formData[4]}
                onChange={(e) => handleChange(e, 4)}
                type="date"
                label="End"
            />
        </>
    );

    const listbutton = (
        <>
            <Button primary onClick={handleSubmit}>
                Create
            </Button>
            <Button primary onClick={handleClose}>
                Close
            </Button>
        </>
    );

    return (
        <>
            {showMask && (
                <Mask>
                    <Formbox label="Create Event" inputs={listinput} buttons={listbutton}></Formbox>
                </Mask>
            )}

            <Button lefticon={<FontAwesomeIcon icon={faPlus} />} onClick={handleCreate} className={cx('Upload-btn')}>
                Create Event
            </Button>
        </>
    );
}

export default CreateEvent;
