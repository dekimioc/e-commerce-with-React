import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/sign-up/SignUp.component';

import "./SignInAndSignOut.scss";

const SignInAndSignOut = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignOut;