import Button from '~/components/Button';
import Formbox from '~/components/Formbox';
import Input from '~/components/Input';
import Footer from '~/layouts/components/Footer';
import Mask from '~/layouts/Mask';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    const [signup, setSignup] = useState(false);
    const handleSignup = () => {
        setSignup(true);
    };
    const Submit = () => {
        setSignup(false);
    };
    const handleSignin = () => {};
    const listinput = signup ? (
        <>
            <Input placeholder="Name" />
            <Input placeholder="Field" />
            <Input placeholder="Address" />
            <Input placeholder="GPS (Lat)" />
            <Input placeholder="GPS (Long)" />
            <Input placeholder="State" />
        </>
    ) : (
        <>
            <Input placeholder="Account" />
            <Input placeholder="Password" />
        </>
    );

    const listbutton = signup ? (
        <Button primary onClick={Submit}>
            OK
        </Button>
    ) : (
        <>
            <Link to="/">
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
