import Button from '~/components/Button';
import Formbox from '~/components/Formbox';
import Input from '~/components/Input';
import Footer from '~/layouts/components/Footer';
import Mask from '~/layouts/Mask';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
/*<div className={cx('input-box')}>
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
            </div> */
function Signin() {
    const [signup, setSignup] = useState(false);
    const handleSignup = () => {
        setSignup(true);
    };
    const Submit = () => {
        setSignup(false);
    };
    const handleSignin = () => {};

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
    const validateField = (name, value) => {
        if (value.trim() === '') {
            return true;
        }
        return false;
    };
    const handleBlur = (e, index) => {
        const { name, value } = e.target;

        // Kiểm tra lỗi khi người dùng rời khỏi trường
        setErrors((prevErrors) => {
            const newErrors = [...prevErrors];
            newErrors[index] = validateField(name, value);
            return newErrors;
        });
    };
    const listinput = signup ? (
        <>
            <Input
                label="Name"
                isRequired
                error={errors[0]}
                value={formData[0]}
                onChange={(e) => handleChange(e, 0)}
                placeholder="Name"
            />
            <Input
                label="Field"
                isRequired
                error={errors[1]}
                value={formData[1]}
                onChange={(e) => handleChange(e, 1)}
                placeholder="Field"
            />
            <Input
                label="Address"
                isRequired
                error={errors[2]}
                value={formData[2]}
                onChange={(e) => handleChange(e, 2)}
                placeholder="Address"
            />
            <Input
                label="GPS (Lat)"
                isRequired
                error={errors[3]}
                value={formData[3]}
                onChange={(e) => handleChange(e, 3)}
                placeholder="GPS (Lat)"
            />
            <Input
                label="GPS (Long)"
                isRequired
                error={errors[4]}
                value={formData[4]}
                onChange={(e) => handleChange(e, 4)}
                placeholder="GPS (Long)"
            />
            <Input
                label="State"
                isRequired
                error={errors[5]}
                value={formData[5]}
                onChange={(e) => handleChange(e, 5)}
                placeholder="State"
            />
        </>
    ) : (
        <>
            <Input
                label="Account"
                isRequired
                error={errors[0]}
                value={formData[0]}
                onChange={(e) => handleChange(e, 0)}
                //  onBlur={(e) => handleBlur(e, 0)}
                placeholder="Account"
            />
            <Input
                label="Password"
                isRequired
                error={errors[1]}
                value={formData[1]}
                onChange={(e) => handleChange(e, 1)}
                //  onBlur={(e) => handleBlur(e, 1)}
                placeholder="Password"
            />
        </>
    );

    const listbutton = signup ? (
        <Button primary onClick={Submit}>
            OK
        </Button>
    ) : (
        <>
            <Link to="/home">
                <Button primary onClick={handleSignin}>
                    Sign in
                </Button>
            </Link>{' '}
            <Button primary onClick={handleSignup}>
                Sign up
            </Button>
        </>
    );

    return (
        <Mask>
            <Formbox label="Sign in" inputs={listinput} buttons={listbutton} />
        </Mask>
    );
}

export default Signin;
